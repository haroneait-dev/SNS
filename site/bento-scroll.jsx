// Bento grid scroll animation — adapté à window.Motion
// ContainerScroll  : sticky scroll container, expose scrollYProgress via Context
// BentoGrid        : layout grid (3 variantes)
// BentoCell        : cell qui translate + scale en fonction du scroll
// ContainerScale   : titre/CTA centré qui rétrécit & disparaît au scroll

const BentoScrollContext = React.createContext(null);

function useBentoScroll() {
  const ctx = React.useContext(BentoScrollContext);
  if (!ctx) throw new Error('Bento components must be inside <ContainerScroll>');
  return ctx;
}

function ContainerScroll({ children, className, style, ...rest }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const scrollRef = React.useRef(null);

  const useScroll = Motion.useScroll;
  const scrollHook = useScroll
    ? useScroll({ target: scrollRef })
    : { scrollYProgress: { get: () => 0 } };

  return (
    <BentoScrollContext.Provider value={{ scrollYProgress: scrollHook.scrollYProgress }}>
      <div
        ref={scrollRef}
        className={className}
        style={{ position: 'relative', minHeight: '100vh', width: '100%', ...style }}
        {...rest}
      >
        {children}
      </div>
    </BentoScrollContext.Provider>
  );
}

// Grid layouts: a list of inline-style overrides per child index
const BENTO_LAYOUTS = {
  default: {
    base: {
      display: 'grid', gap: 16,
      gridTemplateColumns: 'repeat(8, 1fr)',
      gridTemplateRows: '1fr 0.5fr 0.5fr 1fr',
    },
    cells: [
      // cell 1: big top-left, spans 6 cols x 3 rows on desktop
      { gridColumn: 'span 8', gridRow: 'span 3', transformOrigin: 'top right' },
      // cell 2: top-right top, hidden on mobile
      { gridColumn: 'span 2', gridRow: 'span 2', display: 'none' },
      // cell 3: top-right bottom, hidden on mobile, origin bottom-right
      { gridColumn: 'span 2', gridRow: 'span 2', display: 'none', transformOrigin: 'bottom right' },
      // cell 4: bottom-left, origin top-right
      { gridColumn: 'span 4', transformOrigin: 'top right' },
      // cell 5: bottom-right
      { gridColumn: 'span 4' },
    ],
    desktop: {
      base: {
        gridTemplateColumns: 'repeat(8, 1fr)',
      },
      cells: [
        { gridColumn: 'span 6' },
        { gridColumn: 'span 2', display: 'block' },
        { gridColumn: 'span 2', display: 'block' },
        { gridColumn: 'span 3' },
        { gridColumn: 'span 3' },
      ],
    },
  },
  threeCells: {
    base: {
      display: 'grid', gap: 16,
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
    },
    cells: [
      { gridColumn: 'span 2', transformOrigin: 'top right' },
      { transformOrigin: 'bottom right' },
      { transformOrigin: 'top right' },
    ],
  },
  fourCells: {
    base: {
      display: 'grid', gap: 16,
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
    },
    cells: [
      { gridColumn: 'span 1', transformOrigin: 'top right' },
      { gridColumn: 'span 2' },
      { gridColumn: 'span 2', transformOrigin: 'bottom right' },
      { transformOrigin: 'top right' },
    ],
  },
};

function BentoGrid({ variant = 'default', className, style, children, ...rest }) {
  const layout = BENTO_LAYOUTS[variant] || BENTO_LAYOUTS.default;
  const childArray = React.Children.toArray(children);
  const [isDesktop, setIsDesktop] = React.useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);

  React.useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Apply per-cell layout
  const cells = childArray.map((child, i) => {
    const cellStyle = layout.cells[i] || {};
    const desktopStyle = (variant === 'default' && isDesktop && layout.desktop?.cells[i]) || {};
    const merged = { ...cellStyle, ...desktopStyle };
    if (!isDesktop && cellStyle.display === 'none') merged.display = 'none';
    if (isDesktop && cellStyle.display === 'none' && desktopStyle.display === 'block') merged.display = 'block';
    return React.cloneElement(child, { ...child.props, style: { ...merged, ...child.props.style } });
  });

  return (
    <div
      className={className}
      style={{ ...layout.base, ...style }}
      {...rest}
    >
      {cells}
    </div>
  );
}

function BentoCell({ className, style, children, ...rest }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const useTransform = Motion.useTransform;
  const { scrollYProgress } = useBentoScroll();

  const Div = motion ? motion.div : 'div';

  // Cards slide up from -35% and scale from 0.5 → 1 as the user scrolls through the section
  const translate = (motion && useTransform)
    ? useTransform(scrollYProgress, [0.1, 0.9], ['-35%', '0%'])
    : '0%';
  const scale = (motion && useTransform)
    ? useTransform(scrollYProgress, [0, 0.9], [0.5, 1])
    : 1;

  return (
    <Div
      className={className}
      style={{
        translate,
        scale,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Div>
  );
}

function ContainerScale({ className, style, children, ...rest }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const useTransform = Motion.useTransform;
  const { scrollYProgress } = useBentoScroll();

  const Div = motion ? motion.div : 'div';

  // Title shrinks + fades out as user scrolls; switches from fixed → absolute past 60%
  const opacity = (motion && useTransform)
    ? useTransform(scrollYProgress, [0, 0.5], [1, 0])
    : 1;
  const scale = (motion && useTransform)
    ? useTransform(scrollYProgress, [0, 0.5], [1, 0])
    : 1;
  const position = (motion && useTransform)
    ? useTransform(scrollYProgress, (p) => (p >= 0.6 ? 'absolute' : 'fixed'))
    : 'fixed';

  return (
    <Div
      className={className}
      style={{
        position,
        left: '50%', top: '50%',
        translate: '-50% -50%',
        width: 'fit-content', maxWidth: '90vw',
        scale, opacity,
        zIndex: 30,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Div>
  );
}

Object.assign(window, { ContainerScroll, BentoGrid, BentoCell, ContainerScale });

const { useEffect, useState, useRef } = window.React;
const { motion, animate, useMotionValue } = window.Motion || window.FramerMotion || {};

// Minimal useMeasure hook
function useMeasure() {
  const ref = useRef(null);
  const [bounds, setBounds] = useState({ left: 0, top: 0, width: 0, height: 0 });
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => setBounds(entry.contentRect));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [ref, bounds];
}


// InfiniteSlider Component
function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [key, translation, currentDuration, width, height, gap, isTransitioning, direction, reverse]);

  const hoverProps = durationOnHover ? {
    onHoverStart: () => {
      setIsTransitioning(true);
      setCurrentDuration(durationOnHover);
    },
    onHoverEnd: () => {
      setIsTransitioning(true);
      setCurrentDuration(duration);
    },
  } : {};

  function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className='flex w-max'
        style={{
          ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}


// Partner logos served locally from input/partners/. Clearbit fallback if a file fails.
const partners = [
  { name: "Cisco",              local: "input/partners/cisco.svg",     domain: "cisco.com" },
  { name: "Cisco Meraki",       local: "input/partners/meraki.svg",    domain: "meraki.com" },
  { name: "D-Link",             local: "input/partners/dlink.svg",     domain: "dlink.com" },
  { name: "Microsoft",          local: "input/partners/microsoft.svg", domain: "microsoft.com" },
  { name: "TP-Link",            local: "input/partners/tplink.png",    domain: "tp-link.com" },
  { name: "Bouygues Telecom",   local: "input/partners/bouygues.svg",  domain: "bouyguestelecom.fr" },
  { name: "Elecom",             local: "input/partners/elecom.svg",    domain: "elecom.co.jp" },
  { name: "Yealink",            local: "input/partners/yealink.png",   domain: "yealink.com" },
  { name: "Dahua Technology",   local: "input/partners/dahua.svg",     domain: "dahuasecurity.com" },
  { name: "Norton",             local: "input/partners/norton.svg",    domain: "norton.com" },
  { name: "3CX",                local: "input/partners/tcx.svg",       domain: "3cx.com" },
  { name: "Verkada",            local: "input/partners/verkada.png",   domain: "verkada.com" },
  { name: "Canon",              local: "input/partners/canon.svg",     domain: "canon.fr" },
  { name: "Dell Technologies",  local: "input/partners/dell.svg",      domain: "dell.com" },
  { name: "Ubiquiti UniFi",     local: "input/partners/ubiquiti.svg",  domain: "ui.com" },
  { name: "Fortinet",           local: "input/partners/fortinet.svg",  domain: "fortinet.com" },
  { name: "Hikvision",          local: "input/partners/hikvision.svg", domain: "hikvision.com" },
];

function PartnerCard({ name, local, domain }) {
  // Try local first, then Clearbit, then text fallback
  const [stage, setStage] = useState(local ? 'local' : 'remote');
  const src = stage === 'local' ? local
            : stage === 'remote' ? `https://logo.clearbit.com/${domain}?size=200`
            : null;
  const handleError = () => {
    if (stage === 'local') setStage('remote');
    else if (stage === 'remote') setStage('text');
  };
  return (
    <div
      className="partner-card"
      style={{
        flex: '0 0 auto',
        width: 180,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: 14,
        padding: '18px 24px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
        transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(52, 119, 143, 0.12)';
        e.currentTarget.style.borderColor = 'rgba(52, 119, 143, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.03)';
        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
      }}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={handleError}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            // Yealink logo is white, so we invert/brightness-down to make it visible on white cards
            filter: name === 'Yealink' ? 'brightness(0)' : 'none'
          }}
        />
      ) : (
        <span style={{ color: '#34778f', fontWeight: 600, fontSize: 14, letterSpacing: 0.3 }}>{name}</span>
      )}
    </div>
  );
}

function PartnersSection() {
  // Split into two rows for a richer scrolling band
  const half = Math.ceil(partners.length / 2);
  const rowA = partners.slice(0, half);
  const rowB = partners.slice(half);

  return (
    <section
      id="partenaires"
      style={{
        background: '#ffffff',
        padding: '100px 0 120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="w-full flex flex-col items-center">
        <div className="mx-auto w-full max-w-5xl px-8 text-center">
          <div
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: 999,
              background: 'rgba(255, 97, 24, 0.08)',
              color: 'var(--accent)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              marginBottom: 18,
            }}
          >
            Nos partenaires
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#0f1a2b',
              margin: 0,
            }}
          >
            La confiance des <span style={{ color: 'var(--accent)' }}>plus grandes marques</span>.
          </h2>
          <p
            style={{
              marginTop: 16,
              color: '#5b6678',
              fontSize: 16,
              maxWidth: 620,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
            }}
          >
            Nous travaillons avec les leaders mondiaux du réseau, de la sécurité et de la téléphonie pour vous offrir des équipements à la pointe.
          </p>
        </div>

        {/* Row A — left to right */}
        <div className="relative mt-14 w-full" style={{ height: 100 }}>
          <InfiniteSlider className="flex h-full w-full items-center" duration={45} gap={24}>
            {rowA.map((p) => (
              <PartnerCard key={p.name} name={p.name} local={p.local} domain={p.domain} />
            ))}
          </InfiniteSlider>

          <div
            className="pointer-events-none absolute top-0 left-0 h-full"
            style={{ width: 180, background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)' }}
          />
          <div
            className="pointer-events-none absolute top-0 right-0 h-full"
            style={{ width: 180, background: 'linear-gradient(to left, #ffffff 0%, transparent 100%)' }}
          />
        </div>

        {/* Row B — right to left */}
        <div className="relative mt-6 w-full" style={{ height: 100 }}>
          <InfiniteSlider className="flex h-full w-full items-center" duration={50} gap={24} reverse>
            {rowB.map((p) => (
              <PartnerCard key={p.name} name={p.name} local={p.local} domain={p.domain} />
            ))}
          </InfiniteSlider>

          <div
            className="pointer-events-none absolute top-0 left-0 h-full"
            style={{ width: 180, background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)' }}
          />
          <div
            className="pointer-events-none absolute top-0 right-0 h-full"
            style={{ width: 180, background: 'linear-gradient(to left, #ffffff 0%, transparent 100%)' }}
          />
        </div>
      </div>
    </section>
  );
}

window.PartnersSection = PartnersSection;

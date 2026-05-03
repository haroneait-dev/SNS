// ScrollExpandMedia — adapté à la stack vanilla CDN React + window.Motion
// Image/vidéo qui s'agrandit progressivement quand on scrolle ; une fois
// pleinement étendue, la page se débloque et révèle les enfants en dessous.

function ScrollExpandMedia({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend = false,
  children,
  accent,
}) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;

  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showContent, setShowContent] = React.useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const touchStartYRef = React.useRef(0);
  const sectionRef = React.useRef(null);

  // Reset on media change
  React.useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
    window.scrollTo(0, 0);
  }, [mediaType, mediaSrc]);

  // Listen for explicit reset events (when navigating between routes)
  React.useEffect(() => {
    const reset = () => {
      setScrollProgress(0);
      setShowContent(false);
      setMediaFullyExpanded(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener('resetSection', reset);
    return () => window.removeEventListener('resetSection', reset);
  }, []);

  React.useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const delta = e.deltaY * 0.0011;
        const next = Math.min(Math.max(scrollProgress + delta, 0), 1);
        setScrollProgress(next);
        if (next >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const startY = touchStartYRef.current;
      if (!startY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = startY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.009 : 0.006;
        const next = Math.min(Math.max(scrollProgress + deltaY * factor, 0), 1);
        setScrollProgress(next);
        if (next >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
        touchStartYRef.current = touchY;
      }
    };

    const handleTouchEnd = () => { touchStartYRef.current = 0; };

    const handleScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded]);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Geometry
  const mediaWidth = 320 + scrollProgress * (isMobile ? 600 : 1180);
  const mediaHeight = 420 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 38 : 22); // % of vw

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  const Div = motion ? motion.div : 'div';
  const H2 = motion ? motion.h2 : 'h2';
  const Section = motion ? motion.section : 'section';
  const accentColor = accent || '#ff6118';

  return (
    <div
      ref={sectionRef}
      style={{
        overflowX: 'hidden',
        transition: 'background 700ms ease',
        background: 'var(--bg)',
      }}
    >
      <section style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'flex-start',
        minHeight: '100dvh',
      }}>
        <div style={{
          position: 'relative', width: '100%',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          minHeight: '100dvh',
        }}>
          {/* Background image — fades out as user expands media */}
          <Div
            style={{
              position: 'absolute', inset: 0, zIndex: 0, height: '100%',
              opacity: 1 - scrollProgress * 0.85,
              transition: 'opacity 0.1s linear',
            }}
          >
            <img
              src={bgImageSrc}
              alt=""
              style={{
                width: '100vw', height: '100vh',
                objectFit: 'cover', objectPosition: 'center',
              }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(10,10,11,0.18) 0%, rgba(10,10,11,0.55) 100%)',
            }} />
          </Div>

          <div style={{
            position: 'relative', zIndex: 10, width: '100%',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}>
            <div style={{
              width: '100%', height: '100dvh',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              {/* Expanding media frame */}
              <div
                style={{
                  position: 'absolute', zIndex: 0,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw', maxHeight: '85vh',
                  borderRadius: 16,
                  boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
                  overflow: 'hidden',
                }}
              >
                {mediaType === 'video' ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay muted loop playsInline preload="auto"
                      controls={false} disablePictureInPicture disableRemotePlayback
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
                    />
                    <Div
                      style={{
                        position: 'absolute', inset: 0, borderRadius: 16,
                        background: 'rgba(0,0,0,0.35)',
                        opacity: 0.55 - scrollProgress * 0.4,
                      }}
                    />
                  </div>
                ) : (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img
                      src={mediaSrc}
                      alt={title || ''}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
                    />
                    <Div
                      style={{
                        position: 'absolute', inset: 0, borderRadius: 16,
                        background: 'rgba(0,0,0,0.5)',
                        opacity: 0.65 - scrollProgress * 0.45,
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Title (split into two halves that move outward as you scroll) */}
              <div style={{
                width: '100%', position: 'relative', zIndex: 10,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                gap: 8, padding: '0 16px',
                mixBlendMode: textBlend ? 'difference' : 'normal',
              }}>
                <H2
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 'clamp(36px, 7vw, 84px)',
                    lineHeight: 1,
                    letterSpacing: '-0.035em',
                    color: '#fff',
                    transform: `translateX(-${textTranslateX}vw)`,
                    textShadow: '0 4px 30px rgba(0,0,0,0.4)',
                  }}
                >
                  {firstWord}
                </H2>
                <H2
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 'clamp(36px, 7vw, 84px)',
                    lineHeight: 1,
                    letterSpacing: '-0.035em',
                    fontStyle: 'italic',
                    color: accentColor,
                    transform: `translateX(${textTranslateX}vw)`,
                    textShadow: '0 4px 30px rgba(0,0,0,0.4)',
                  }}
                >
                  {restOfTitle}
                </H2>
              </div>

              {/* Date + scroll hint */}
              <div style={{
                position: 'absolute',
                bottom: 'calc(50% - 280px)',
                left: 0, right: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                zIndex: 10, pointerEvents: 'none',
                opacity: 1 - scrollProgress * 1.5,
              }}>
                {date && (
                  <p style={{
                    margin: 0, fontSize: 14,
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(255,255,255,0.85)',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    transform: `translateX(-${textTranslateX * 0.4}vw)`,
                  }}>
                    {date}
                  </p>
                )}
              </div>

              {scrollToExpand && (
                <div style={{
                  position: 'absolute',
                  bottom: 32, left: 0, right: 0,
                  display: 'flex', justifyContent: 'center',
                  zIndex: 10, pointerEvents: 'none',
                  opacity: Math.max(0, 1 - scrollProgress * 2.5),
                }}>
                  <div style={{
                    display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                    padding: '10px 18px',
                    fontSize: 12,
                    fontFamily: 'var(--font-mono)',
                    color: '#fff',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 999,
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}>
                    <span>{scrollToExpand}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'scroll-bounce 1.6s ease-in-out infinite' }}>
                      <path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>
                    </svg>
                  </div>
                  <style>{`
                    @keyframes scroll-bounce {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(6px); }
                    }
                  `}</style>
                </div>
              )}
            </div>

            {/* Content revealed after expansion */}
            <Section
              style={{
                display: 'flex', flexDirection: 'column',
                width: '100%', padding: '60px 24px 80px',
                opacity: showContent ? 1 : 0,
                transform: `translateY(${showContent ? 0 : 30}px)`,
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                pointerEvents: showContent ? 'auto' : 'none',
              }}
            >
              {children}
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
}

window.ScrollExpandMedia = ScrollExpandMedia;

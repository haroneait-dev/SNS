function SolutionRow({ svc, index, t }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const isReversed = index % 2 === 1;

  const Container = motion ? motion.div : 'div';
  const containerProps = motion ? {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-120px' },
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
    },
  } : {};

  const Item = motion ? motion.div : 'div';
  const itemFromLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };
  const itemFromRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <Container
      id={svc.id}
      {...containerProps}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
        padding: '80px 0',
      }}
      className="solution-row"
    >
      {/* Image */}
      <Item
        variants={isReversed ? itemFromRight : itemFromLeft}
        style={{ order: isReversed ? 2 : 1, position: 'relative' }}
      >
        <div style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          aspectRatio: '4 / 3',
          boxShadow: '0 30px 80px -20px rgba(14,31,61,0.25)',
        }}>
          <img src={svc.image} alt={svc.title} loading="lazy" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          }} />
          {/* Floating index badge */}
          <div style={{
            position: 'absolute', top: 20, left: 20,
            padding: '6px 12px', borderRadius: 999,
            background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)',
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.12em', color: 'var(--accent)',
          }}>
            // {String(index + 1).padStart(2, '0')}
          </div>
        </div>
        {/* Decorative accent block behind image */}
        <div style={{
          position: 'absolute',
          [isReversed ? 'left' : 'right']: -24,
          bottom: -24,
          width: 120, height: 120, borderRadius: 20,
          background: `linear-gradient(135deg, ${t.accent}, ${t.navy})`,
          opacity: 0.12,
          zIndex: -1,
        }} />
      </Item>

      {/* Text */}
      <Item
        variants={isReversed ? itemFromLeft : itemFromRight}
        style={{ order: isReversed ? 1 : 2 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 44, height: 44, borderRadius: 12,
            background: 'var(--accent-soft)', color: 'var(--accent)',
            fontSize: 22, fontWeight: 700,
          }}>{svc.icon}</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.14em', color: 'var(--accent)', textTransform: 'uppercase',
          }}>Service {String(index + 1).padStart(2, '0')}</span>
        </div>

        <Item variants={fadeUp}>
          <h2 style={{
            margin: 0, fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: 700,
            lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)',
          }}>
            {svc.title}
          </h2>
        </Item>

        <Item variants={fadeUp}>
          <p style={{
            margin: '20px 0 0', fontSize: 16, lineHeight: 1.7,
            color: 'var(--ink-soft)',
          }}>
            {svc.longDesc || svc.desc}
          </p>
        </Item>

        <Item variants={fadeUp}>
          <ul style={{
            listStyle: 'none', padding: 0, margin: '28px 0 0',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 18px',
          }}>
            {svc.features.map((f, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 10,
                fontSize: 14, fontWeight: 500, color: 'var(--ink)',
              }}>
                <span style={{
                  flex: '0 0 auto', marginTop: 7,
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--accent)',
                }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Item>

        <Item variants={fadeUp}>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginTop: 32, padding: '12px 20px',
            background: 'var(--ink)', color: '#fff',
            borderRadius: 'var(--radius)', fontSize: 14, fontWeight: 600,
            transition: 'transform .2s ease, background .2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; }}
          >
            Demander un devis
            <span>→</span>
          </a>
        </Item>
      </Item>
    </Container>
  );
}

function SolutionsPage({ t }) {
  const { services } = window.SAM_DATA;
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const Header = motion ? motion.div : 'div';
  const headerProps = motion ? {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  } : {};

  return (
    <div style={{ background: 'var(--bg)', minHeight: '80vh' }}>
      <style>{`
        @media (max-width: 880px) {
          .solution-row { grid-template-columns: 1fr !important; gap: 40px !important; padding: 50px 0 !important; }
          .solution-row > *:first-child { order: 1 !important; }
          .solution-row > *:last-child { order: 2 !important; }
        }
      `}</style>

      {/* Hero header */}
      <section style={{
        padding: '140px 24px 80px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
          width: 700, height: 700, borderRadius: '50%',
          background: `radial-gradient(circle, ${t.accent}18 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <Header {...headerProps} style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 700 }}>
            // CATALOGUE COMPLET
          </div>
          <h1 style={{
            margin: '14px 0 0', fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: t.headingWeight,
            letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--ink)',
          }}>
            Toutes nos <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>solutions</em>.
          </h1>
          <p style={{
            margin: '24px auto 0', fontSize: 19, color: 'var(--ink-mute)',
            lineHeight: 1.55, maxWidth: 600,
          }}>
            Six expertises pour répondre à tous vos besoins IT — de l'infrastructure à la cybersécurité, du dépannage à la vidéosurveillance.
          </p>
        </Header>
      </section>

      {/* Alternating rows */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 56px 80px' }}>
        {services.map((svc, i) => (
          <SolutionRow key={svc.id} svc={svc} index={i} t={t} />
        ))}
      </div>
    </div>
  );
}

window.SolutionsPage = SolutionsPage;

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

// Hero background for the index — a wide IT operations / Paris office vibe
const SOLUTIONS_HERO_BG = 'input/sns/solutions-hero.jpg';
const SOLUTIONS_HERO_MEDIA = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80&auto=format&fit=crop';

function SolutionPickerCard({ svc, t, index }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const Card = motion ? motion.a : 'a';

  const motionProps = motion ? {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 },
    whileHover: { y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  } : {};

  return (
    <Card
      href={`#solution/${svc.id}`}
      {...motionProps}
      className="solution-picker-card"
      style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column',
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        textDecoration: 'none', color: 'inherit',
        boxShadow: '0 12px 32px rgba(14,31,61,0.08), 0 0 0 1px rgba(14,31,61,0.05)',
        transition: 'box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%', aspectRatio: '16 / 10',
        overflow: 'hidden',
        background: 'var(--bg-warm)',
      }}>
        <img
          src={svc.image}
          alt={svc.title}
          className="solution-picker-img"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)',
        }} />
        <div style={{
          position: 'absolute', top: 14, left: 14,
          fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
          color: '#fff', letterSpacing: '0.18em',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          padding: '5px 10px', borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.25)',
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div style={{ padding: '24px 26px 28px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <h3 style={{
          margin: 0,
          fontFamily: 'var(--font-heading)',
          fontWeight: t.headingWeight,
          fontSize: 22,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          lineHeight: 1.15,
        }}>
          {svc.title}
        </h3>
        <p style={{
          margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)',
          flex: 1,
        }}>
          {svc.desc}
        </p>
        <div className="solution-picker-cta" style={{
          marginTop: 8,
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
          color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase',
          transition: 'gap 0.25s ease',
        }}>
          Découvrir <span className="solution-picker-arrow" style={{ transition: 'transform 0.25s ease', display: 'inline-block' }}>→</span>
        </div>
      </div>
    </Card>
  );
}

function SolutionsPage({ t }) {
  const { services } = window.SAM_DATA;

  // The expanded-content body (revealed once the hero finishes its scroll-expand)
  const body = (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
      <style>{`
        .solution-picker-card:hover { box-shadow: 0 24px 60px rgba(14,31,61,0.14), 0 0 0 1px rgba(14,31,61,0.08) !important; }
        .solution-picker-card:hover .solution-picker-img { transform: scale(1.06); }
        .solution-picker-card:hover .solution-picker-cta { gap: 14px !important; }
        .solution-picker-card:hover .solution-picker-arrow { transform: translateX(4px); }
        .solutions-grid { display: grid; gap: 28px; grid-template-columns: 1fr; }
        @media (min-width: 720px) { .solutions-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1080px) { .solutions-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
        <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase' }}>
          // 6 expertises · 1 interlocuteur
        </div>
        <h2 style={{
          margin: '14px 0 0',
          fontFamily: 'var(--font-heading)',
          fontWeight: t.headingWeight,
          fontSize: 'clamp(32px, 4.5vw, 56px)',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: 'var(--ink)',
        }}>
          Choisissez votre <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>terrain de jeu</em>.
        </h2>
        <p style={{
          margin: '20px auto 0', fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)',
          maxWidth: 580,
        }}>
          Cliquez sur une solution pour explorer son périmètre, nos partenaires techniques et nos délais d'intervention.
        </p>
      </div>

      <div className="solutions-grid">
        {services.map((svc, i) => (
          <SolutionPickerCard key={svc.id} svc={svc} t={t} index={i} />
        ))}
      </div>

      {/* Secondary CTA */}
      <div style={{
        marginTop: 80, padding: '48px 40px',
        background: 'var(--bg-warm)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 32, flexWrap: 'wrap',
      }}>
        <div style={{ maxWidth: 540 }}>
          <h3 style={{
            margin: 0, fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight,
            fontSize: 26, letterSpacing: '-0.02em', color: 'var(--ink)',
          }}>
            Pas sûr de votre besoin ?
          </h3>
          <p style={{ margin: '8px 0 0', fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
            On vient sur site, on regarde, on vous propose. Audit gratuit en moins de 24h.
          </p>
        </div>
        <a href="#contact" style={{
          background: 'var(--accent)', color: '#fff',
          padding: '14px 26px', borderRadius: 'var(--radius)',
          fontWeight: 700, fontSize: 15, letterSpacing: '0.02em',
          boxShadow: 'var(--shadow-cta)', textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}>
          Demander un audit gratuit →
        </a>
      </div>
    </div>
  );

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={SOLUTIONS_HERO_MEDIA}
      bgImageSrc={SOLUTIONS_HERO_BG}
      title="Nos solutions"
      date="6 expertises · Paris & Île-de-France"
      scrollToExpand="Scrollez pour découvrir"
      textBlend={false}
      accent={t.accent}
    >
      {body}
    </ScrollExpandMedia>
  );
}

window.SolutionsPage = SolutionsPage;

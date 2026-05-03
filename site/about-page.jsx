// About page — "Qui sommes-nous" route: #qui-sommes-nous
// Hero design adapté du composant fourni (split layout + clip-path reveal),
// puis sections complémentaires : histoire, valeurs, équipe.

function AboutHero({ t }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const { brand } = window.SAM_DATA;

  const Section = motion ? motion.section : 'section';
  const Div = motion ? motion.div : 'div';
  const H1 = motion ? motion.h1 : 'h1';
  const P = motion ? motion.p : 'p';
  const A = motion ? motion.a : 'a';
  const Header = motion ? motion.header : 'header';
  const Footer = motion ? motion.footer : 'footer';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { y: 22, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const motionProps = motion
    ? { initial: 'hidden', animate: 'visible', variants: containerVariants }
    : {};

  const InfoIcon = ({ type }) => {
    const common = {
      width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none',
      stroke: 'var(--accent)', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
      style: { flexShrink: 0 },
    };
    if (type === 'website') return (
      <svg {...common}><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    );
    if (type === 'phone') return (
      <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    );
    return (
      <svg {...common}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    );
  };

  const imageProps = motion
    ? {
        initial: { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
        animate: { clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' },
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
      }
    : {};

  return (
    <Section
      {...motionProps}
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        background: 'var(--bg)',
        color: 'var(--ink)',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 70px)',
      }}
      className="about-hero"
    >
      <style>{`
        .about-hero { flex-direction: column; }
        .about-hero .about-hero__content { width: 100%; padding: 48px 32px; display: flex; flex-direction: column; justify-content: space-between; }
        .about-hero .about-hero__image { width: 100%; min-height: 320px; background-size: cover; background-position: center; }
        @media (min-width: 900px) {
          .about-hero { flex-direction: row; }
          .about-hero .about-hero__content { width: 60%; padding: 72px 80px; }
          .about-hero .about-hero__image { width: 40%; min-height: 100%; }
        }
        @media (min-width: 1280px) {
          .about-hero .about-hero__content { padding: 96px 112px; }
        }
        .about-hero__cta:hover { color: var(--accent-deep) !important; transform: translateX(4px); }
        .about-hero__cta { transition: transform 0.3s ease, color 0.2s ease; display: inline-flex; align-items: center; gap: 10px; }
      `}</style>

      <div className="about-hero__content">
        <div>
          <Header variants={itemVariants} style={{ marginBottom: 56 }}>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
              <img src="input/logo.png" alt={brand.name} style={{ height: 44, width: 'auto', mixBlendMode: 'multiply' }} />
              <span style={{ display: 'inline-block', width: 1, height: 28, background: `${t.ink}25` }} />
              <p style={{ margin: 0, fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--ink-mute)' }}>
                Paris · Île-de-France · 7j/7
              </p>
            </a>
          </Header>

          <Div variants={containerVariants}>
            <P
              variants={itemVariants}
              style={{
                margin: 0, fontSize: 13, fontFamily: 'var(--font-mono)',
                color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase',
              }}
            >
              // Qui sommes-nous
            </P>

            <H1
              variants={itemVariants}
              style={{
                margin: '18px 0 0',
                fontFamily: 'var(--font-heading)',
                fontWeight: t.headingWeight,
                fontSize: 'clamp(40px, 5.5vw, 72px)',
                lineHeight: 1.02,
                letterSpacing: '-0.035em',
                color: 'var(--ink)',
              }}
            >
              Une équipe IT qui parle votre langue —{' '}
              <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>
                pas le jargon.
              </em>
            </H1>

            <Div variants={itemVariants} style={{ margin: '28px 0', height: 4, width: 72, background: 'var(--accent)', borderRadius: 2 }} />

            <P
              variants={itemVariants}
              style={{
                margin: 0, maxWidth: 540,
                fontSize: 18, lineHeight: 1.65, color: 'var(--ink-soft)',
              }}
            >
              Depuis plus de 10 ans, Sam Network Solutions installe, sécurise et dépanne l'infrastructure IT
              des TPE et PME parisiennes. Réseau, téléphonie, vidéosurveillance, cybersécurité — un seul
              interlocuteur, des techniciens certifiés, et des interventions sous 4h, 7 jours sur 7.
            </P>

            <Div variants={itemVariants} style={{ marginTop: 36, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                className="about-hero__cta"
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  padding: '15px 26px',
                  borderRadius: 'var(--radius)',
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: '0.02em',
                  boxShadow: 'var(--shadow-cta)',
                  textDecoration: 'none',
                }}
              >
                Demander un devis gratuit →
              </a>
              <a
                href="#about-story"
                style={{
                  color: 'var(--ink)',
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: 'none',
                  borderBottom: `2px solid ${t.ink}25`,
                  paddingBottom: 4,
                  letterSpacing: '0.02em',
                }}
              >
                Découvrir notre histoire ↓
              </a>
            </Div>
          </Div>
        </div>

        <Footer variants={itemVariants} style={{ marginTop: 64 }}>
          <div style={{
            display: 'grid',
            gap: 18,
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            paddingTop: 28,
            borderTop: `1px solid ${t.ink}18`,
            fontSize: 13,
            color: 'var(--ink-soft)',
            fontFamily: 'var(--font-mono)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <InfoIcon type="website" /><span>samnetworksolutions.fr</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <InfoIcon type="phone" /><span>{brand.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <InfoIcon type="address" /><span>{brand.address}</span>
            </div>
          </div>
        </Footer>
      </div>

      <Div
        className="about-hero__image"
        {...imageProps}
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(52,119,143,0.08) 0%, rgba(52,119,143,0.18) 100%), url(https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1400&q=85&auto=format&fit=crop)',
        }}
      />
    </Section>
  );
}

function AboutStory({ t }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const Container = motion ? motion.div : 'div';
  const Item = motion ? motion.div : 'div';

  const containerProps = motion
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-100px' },
        variants: { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } },
      }
    : {};
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const milestones = [
    { year: '2014', title: 'Les débuts', desc: "Samuel lance Sam Network Solutions à Paris 14e — un atelier, une camionnette, et l'envie de faire propre." },
    { year: '2018', title: '500 clients accompagnés', desc: "Le bouche-à-oreille fonctionne : commerces, cabinets médicaux, restaurants, agences. Le réseau s'étend à toute l'Île-de-France." },
    { year: '2021', title: 'Sécurité & vidéosurveillance', desc: "Ajout des pôles cybersécurité et vidéosurveillance IP. On devient l'interlocuteur unique des PME pour leur IT." },
    { year: '2024', title: '89+ avis · ★ 4,9/5', desc: "Une équipe de techniciens certifiés, une astreinte 7j/7, et des interventions sous 4h sur Paris intra-muros." },
  ];

  return (
    <section id="about-story" style={{ padding: '120px 56px', background: 'var(--bg-warm)', borderTop: `1px solid ${t.ink}10` }}>
      <Container {...containerProps} style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Item variants={fadeUp} style={{ maxWidth: 720 }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase' }}>
            // Notre histoire
          </div>
          <h2 style={{
            margin: '14px 0 0',
            fontFamily: 'var(--font-heading)',
            fontWeight: t.headingWeight,
            fontSize: 'clamp(36px, 4vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}>
            Dix ans à dépanner, installer,{' '}
            <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>écouter</em>.
          </h2>
          <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 620 }}>
            Sam Network Solutions est née d'une conviction simple : une PME ne devrait pas avoir à choisir entre
            une grande SSII inaccessible et un freelance débordé. On fait les deux : la rigueur d'un intégrateur,
            la réactivité d'un voisin.
          </p>
        </Item>

        <style>{`
          @keyframes about-float-a {
            0%   { transform: translateY(0)    rotate(0deg); }
            50%  { transform: translateY(-14px) rotate(-0.4deg); }
            100% { transform: translateY(0)    rotate(0deg); }
          }
          @keyframes about-float-b {
            0%   { transform: translateY(-6px) rotate(0.3deg); }
            50%  { transform: translateY(8px)  rotate(-0.3deg); }
            100% { transform: translateY(-6px) rotate(0.3deg); }
          }
          .milestone-float {
            animation-name: about-float-a;
            animation-duration: 7s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            will-change: transform;
          }
          .milestone-float.alt {
            animation-name: about-float-b;
            animation-duration: 8.5s;
          }
          @media (prefers-reduced-motion: reduce) {
            .milestone-float { animation: none; }
          }
        `}</style>

        <Container
          {...containerProps}
          style={{
            marginTop: 56,
            display: 'grid',
            gap: 32,
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          }}
        >
          {milestones.map((m, i) => (
            <Item
              key={m.year}
              variants={fadeUp}
              style={{ position: 'relative' }}
            >
              {/* Wrapper interne avec animation CSS — ne se fait pas écraser par framer-motion */}
              <div
                className={`milestone-float ${i % 2 === 1 ? 'alt' : ''}`}
                style={{
                  position: 'relative',
                  padding: '28px 28px 30px',
                  background: '#fff',
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 14px 36px rgba(14,31,61,0.08), 0 0 0 1px rgba(14,31,61,0.05)',
                  animationDelay: `${i * 0.7}s`,
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  color: 'var(--accent)',
                  marginBottom: 14,
                }}>
                  {m.year}
                </div>
                <h3 style={{
                  margin: '0 0 10px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 22, fontWeight: t.headingWeight,
                  letterSpacing: '-0.015em',
                  color: 'var(--ink)',
                }}>
                  {m.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
                  {m.desc}
                </p>
              </div>
            </Item>
          ))}
        </Container>
      </Container>
    </section>
  );
}

function AboutValues({ t }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const Container = motion ? motion.div : 'div';
  const Item = motion ? motion.div : 'div';

  const containerProps = motion
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-80px' },
        variants: { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } },
      }
    : {};
  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const values = [
    {
      label: '01',
      title: 'Réactivité',
      desc: "Une demande à 9h, un technicien sur place avant midi. L'astreinte 7j/7, ce n'est pas un argument marketing — c'est une promesse qu'on tient.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
    },
    {
      label: '02',
      title: 'Transparence',
      desc: "Devis détaillés, pas de coûts cachés, pas de jargon. On vous explique ce qu'on fait, pourquoi, et combien ça coûte — avant de toucher quoi que ce soit.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
        </svg>
      ),
    },
    {
      label: '03',
      title: 'Proximité',
      desc: "Basés à Paris 14e, on connaît votre quartier, vos contraintes, votre fournisseur d'accès. Un seul interlocuteur du devis au SAV.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
  ];

  return (
    <section style={{ padding: '120px 56px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase' }}>
            // Nos valeurs
          </div>
          <h2 style={{
            margin: '14px 0 0',
            fontFamily: 'var(--font-heading)',
            fontWeight: t.headingWeight,
            fontSize: 'clamp(36px, 4vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}>
            Trois principes, <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>zéro compromis</em>.
          </h2>
        </div>

        <Container
          {...containerProps}
          style={{ display: 'grid', gap: 28, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {values.map((v) => {
            const hoverProps = motion ? {
              whileHover: {
                y: -10,
                scale: 1.015,
                boxShadow: `0 30px 60px rgba(14,31,61,0.14), 0 0 0 1px ${t.accent}30`,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              },
            } : {};

            return (
            <Item
              key={v.label}
              variants={fadeUp}
              {...hoverProps}
              className="value-card"
              style={{
                padding: 36,
                background: 'var(--bg-warm)',
                borderRadius: 'var(--radius-lg)',
                border: `1px solid ${t.ink}10`,
                cursor: 'default',
                willChange: 'transform',
              }}
            >
              <style>{`
                .value-card .value-icon { transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, background 0.3s ease; }
                .value-card:hover .value-icon { transform: scale(1.12) rotate(-6deg); background: var(--accent); color: #fff; box-shadow: 0 14px 32px ${t.accent}55; }
                .value-card .value-arrow { opacity: 0; transform: translateX(-8px); transition: opacity 0.3s ease, transform 0.3s ease; display: inline-block; }
                .value-card:hover .value-arrow { opacity: 1; transform: translateX(0); }
                .value-card .value-title { transition: color 0.3s ease; }
                .value-card:hover .value-title { color: var(--accent); }
              `}</style>
              <div className="value-icon" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 56, height: 56, borderRadius: '50%',
                background: '#fff', color: 'var(--accent)',
                boxShadow: `0 8px 22px ${t.accent}25`,
                marginBottom: 22,
              }}>
                {v.icon}
              </div>
              <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--ink-mute)', letterSpacing: '0.15em', marginBottom: 6 }}>
                {v.label}
              </div>
              <h3 className="value-title" style={{
                margin: '0 0 12px',
                fontFamily: 'var(--font-heading)',
                fontSize: 26, fontWeight: t.headingWeight,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
              }}>
                {v.title} <span className="value-arrow" style={{ color: 'var(--accent)', marginLeft: 4 }}>→</span>
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                {v.desc}
              </p>
            </Item>
            );
          })}
        </Container>
      </div>
    </section>
  );
}

function AboutTeam({ t }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const Container = motion ? motion.div : 'div';
  const Item = motion ? motion.div : 'div';

  const containerProps = motion
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-80px' },
        variants: { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } },
      }
    : {};
  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const founder = {
    name: 'Samuel Tesfahiwet',
    role: 'Fondateur & Dirigeant',
    bio: "Samuel a fondé Sam Network Solutions en 2014 à Paris 14e. Plus de 10 ans à câbler, sécuriser et dépanner l'IT des PME franciliennes — et toujours le même réflexe : décrocher le téléphone, comprendre, intervenir.",
    initials: 'ST',
    tags: ['Cisco', 'Fortinet', 'Ubiquiti', '3CX', 'Hikvision', 'Microsoft 365'],
    quote: "Notre métier, c'est de rendre l'IT invisible. Quand tout marche, on a fait notre travail.",
  };

  const hoverProps = motion ? {
    whileHover: {
      y: -10,
      boxShadow: '0 30px 60px rgba(14,31,61,0.16), 0 0 0 1px rgba(14,31,61,0.06)',
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  } : {};

  return (
    <section style={{ padding: '120px 56px', background: 'var(--bg-warm)', borderTop: `1px solid ${t.ink}10` }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase' }}>
            // L'équipe
          </div>
          <h2 style={{
            margin: '14px 0 0',
            fontFamily: 'var(--font-heading)',
            fontWeight: t.headingWeight,
            fontSize: 'clamp(36px, 4vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}>
            Un technicien, <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>pas un commercial</em>.
          </h2>
          <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
            Vous parlez directement au fondateur. Du premier devis à la maintenance, le même interlocuteur —
            celui qui pose les câbles et qui répond au téléphone.
          </p>
        </div>

        <Container
          {...containerProps}
          style={{ display: 'grid', gap: 32, gridTemplateColumns: 'minmax(0, 1fr)', maxWidth: 880, margin: '0 auto' }}
        >
          <Item
            variants={fadeUp}
            {...hoverProps}
            className="founder-card"
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'minmax(220px, 280px) 1fr',
              gap: 0,
              background: '#fff',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(14,31,61,0.07), 0 0 0 1px rgba(14,31,61,0.05)',
              willChange: 'transform',
            }}
          >
            <style>{`
              .founder-card .founder-avatar { transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1); }
              .founder-card:hover .founder-avatar { transform: scale(1.05); }
              .founder-card .founder-glow { opacity: 0; transition: opacity 0.4s ease; }
              .founder-card:hover .founder-glow { opacity: 1; }
              .founder-card .founder-tag { transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease; }
              .founder-card:hover .founder-tag { background: #fff; color: var(--navy-deep); }
              @media (max-width: 720px) {
                .founder-card { grid-template-columns: 1fr !important; }
                .founder-avatar-wrap { aspect-ratio: 16 / 10 !important; }
              }
            `}</style>

            {/* Avatar à initiales (pas de photo fabriquée) */}
            <div
              className="founder-avatar-wrap"
              style={{
                position: 'relative',
                aspectRatio: '4 / 5',
                background: `linear-gradient(135deg, var(--navy) 0%, var(--navy-deep) 100%)`,
                overflow: 'hidden',
              }}
            >
              <div
                className="founder-glow"
                style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 30% 20%, ${t.accent}40, transparent 60%)`,
                }}
              />
              <div
                className="founder-avatar"
                style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(80px, 14vw, 140px)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  color: '#fff',
                  textShadow: '0 4px 30px rgba(0,0,0,0.25)',
                }}
              >
                {founder.initials}
              </div>
              <div style={{
                position: 'absolute', bottom: 18, left: 20,
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase',
              }}>
                Depuis 2014
              </div>
            </div>

            {/* Infos */}
            <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20 }}>
              <div>
                <h3 style={{
                  margin: 0,
                  fontFamily: 'var(--font-heading)',
                  fontSize: 30, fontWeight: t.headingWeight,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                }}>
                  {founder.name}
                </h3>
                <p style={{ margin: '6px 0 18px', fontSize: 13, color: 'var(--accent)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', fontWeight: 600, textTransform: 'uppercase' }}>
                  {founder.role}
                </p>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                  {founder.bio}
                </p>

                <blockquote style={{
                  margin: '24px 0 0',
                  paddingLeft: 18,
                  borderLeft: `3px solid ${t.accent}`,
                  fontFamily: 'var(--font-heading)',
                  fontStyle: t.headingItalic ? 'italic' : 'normal',
                  fontSize: 16,
                  lineHeight: 1.5,
                  color: 'var(--ink)',
                }}>
                  «&nbsp;{founder.quote}&nbsp;»
                </blockquote>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {founder.tags.map((tag) => (
                  <span key={tag} className="founder-tag" style={{
                    fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: 'var(--navy)',
                    background: 'var(--navy-soft)',
                    padding: '5px 10px', borderRadius: 6,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Item>
        </Container>
      </div>
    </section>
  );
}

function AboutPage({ t }) {
  return (
    <>
      <AboutHero t={t} />
      <AboutStory t={t} />
      <AboutValues t={t} />
      <AboutTeam t={t} />
      <CTA t={t} />
    </>
  );
}

Object.assign(window, { AboutPage, AboutHero, AboutStory, AboutValues, AboutTeam });

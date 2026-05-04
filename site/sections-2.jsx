// Sections part 2: Stats, DarkSection, Process, Testimonials, Pricing, FAQ, CTA, Footer
function AboutUs({ t }) {
  const { stats, brand } = window.SAM_DATA;
  return (
    <section id="about" style={{ padding: '100px 56px', background: 'var(--bg-warm)', borderBottom: '1px solid var(--ink-faint)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', fontWeight: 600 }}>// QUI SOMMES-NOUS</div>
          <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em' }}>
            Partenaire de votre <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>croissance digitale</em>.
          </h2>
          <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
            Sam Network Solutions est une équipe de techniciens passionnés basés à Paris 14e. Depuis plus de 10 ans, nous accompagnons les TPE et PME dans leur transformation numérique avec réactivité et expertise.
          </p>
          <div style={{ marginTop: 32 }}>
            <a href="#qui-sommes-nous" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none', fontSize: 15, borderBottom: `2px solid ${t.accent}30` }}>
              Découvrir notre histoire et notre équipe →
            </a>
          </div>
        </div>
        <OrbitingSkills />
      </div>
    </section>
  );
}

// 6 chips orbiting around a central SAM brand mark.
// Inner orbit (orange/accent) = stats clés. Outer orbit (navy) = expertises.
const ORBIT_INNER = [
  { value: '89+', label: 'Avis Google', size: 78 },
  { value: '4,9★', label: 'Note moyenne', size: 84 },
  { value: '10+', label: 'Ans expérience', size: 78 },
];
const ORBIT_OUTER = [
  { value: '< 4h', label: 'Intervention', size: 86 },
  { value: '7j/7', label: 'Disponible', size: 80 },
  { value: '8', label: 'Expertises', size: 82 },
];

function OrbitingInfo({ t }) {
  return (
    <div style={{
      position: 'relative', width: '100%', maxWidth: 520, aspectRatio: '1 / 1',
      margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <style>{`
        @keyframes orbit-cw   { to { transform: rotate(360deg); } }
        @keyframes orbit-ccw  { to { transform: rotate(-360deg); } }
        @keyframes orbit-pulse { 0%,100% { opacity: 0.55; } 50% { opacity: 0.85; } }
        .orbit-ring {
          position: absolute; top: 50%; left: 50%; border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .orbit-track {
          position: absolute; top: 50%; left: 50%;
          width: 0; height: 0;
          will-change: transform;
        }
        .orbit-track.cw  { animation: orbit-cw  28s linear infinite; }
        .orbit-track.ccw { animation: orbit-ccw 36s linear infinite; }
        .orbit-item {
          position: absolute; top: 0; left: 0;
          transform-origin: 0 0;
          will-change: transform;
        }
        .orbit-chip {
          width: 100%; height: 100%; border-radius: 50%;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          background: #fff;
          box-shadow: 0 8px 24px rgba(14,31,61,0.12), 0 0 0 1px rgba(14,31,61,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
          user-select: none;
        }
        .orbit-chip:hover { transform: scale(1.1); }
        .orbit-chip.accent:hover { box-shadow: 0 12px 36px ${t.accent}40, 0 0 0 1px ${t.accent}40; }
        .orbit-chip.navy:hover { box-shadow: 0 12px 36px ${t.navy}50, 0 0 0 1px ${t.navy}50; }
        .orbit-chip-value {
          font-family: var(--font-heading); font-weight: 800;
          line-height: 1; letter-spacing: -0.02em;
        }
        .orbit-chip.accent .orbit-chip-value { color: ${t.accent}; }
        .orbit-chip.navy   .orbit-chip-value { color: ${t.navy}; }
        .orbit-chip-label {
          margin-top: 4px; font-size: 9px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--ink-mute);
          font-family: var(--font-mono);
        }
        @media (max-width: 768px) {
          .orbit-chip-label { display: none; }
        }
      `}</style>

      {/* Soft glow halos */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle at 30% 30%, ${t.accent}18, transparent 50%), radial-gradient(circle at 70% 70%, ${t.navy}1A, transparent 55%)`,
        pointerEvents: 'none',
      }} />

      {/* Orbit rings (decorative) */}
      <div className="orbit-ring" style={{
        width: '46%', height: '46%',
        border: `1px dashed ${t.accent}40`,
        animation: 'orbit-pulse 4s ease-in-out infinite',
      }} />
      <div className="orbit-ring" style={{
        width: '78%', height: '78%',
        border: `1px dashed ${t.navy}40`,
        animation: 'orbit-pulse 4s ease-in-out infinite 1.5s',
      }} />

      {/* Inner orbit — accent (clockwise) */}
      <div className="orbit-track cw">
        {ORBIT_INNER.map((item, i) => {
          const angle = (i * 360) / ORBIT_INNER.length;
          return (
            <div
              key={item.value}
              className="orbit-item"
              style={{
                transform: `rotate(${angle}deg) translateX(min(120px, 23vw))`,
                width: item.size, height: item.size, marginLeft: -item.size / 2, marginTop: -item.size / 2,
              }}
            >
              {/* Static counter-angle so the chip is upright at t=0 */}
              <div style={{ transform: `rotate(${-angle}deg)`, width: '100%', height: '100%' }}>
                {/* Dynamic counter-rotation cancels the parent track's spin */}
                <div className="orbit-chip accent" style={{ animation: 'orbit-ccw 28s linear infinite' }}>
                  <div className="orbit-chip-value" style={{ fontSize: item.size * 0.28 }}>{item.value}</div>
                  <div className="orbit-chip-label">{item.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Outer orbit — navy (counter-clockwise) */}
      <div className="orbit-track ccw">
        {ORBIT_OUTER.map((item, i) => {
          const angle = (i * 360) / ORBIT_OUTER.length + 60;
          return (
            <div
              key={item.value}
              className="orbit-item"
              style={{
                transform: `rotate(${angle}deg) translateX(min(210px, 40vw))`,
                width: item.size, height: item.size, marginLeft: -item.size / 2, marginTop: -item.size / 2,
              }}
            >
              <div style={{ transform: `rotate(${-angle}deg)`, width: '100%', height: '100%' }}>
                <div className="orbit-chip navy" style={{ animation: 'orbit-cw 36s linear infinite' }}>
                  <div className="orbit-chip-value" style={{ fontSize: item.size * 0.26 }}>{item.value}</div>
                  <div className="orbit-chip-label">{item.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Central brand mark */}
      <div style={{
        position: 'relative', zIndex: 5,
        width: 110, height: 110, borderRadius: '50%',
        background: `linear-gradient(135deg, ${t.accent} 0%, ${t.navy} 100%)`,
        boxShadow: `0 20px 60px -10px ${t.accent}60, 0 0 80px ${t.navy}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff',
      }}>
        <div style={{
          position: 'absolute', inset: -8, borderRadius: '50%',
          background: `radial-gradient(circle, ${t.accent}40, transparent 70%)`,
          filter: 'blur(12px)',
          animation: 'orbit-pulse 3s ease-in-out infinite',
          zIndex: -1,
        }} />
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em',
          textAlign: 'center', lineHeight: 0.95,
        }}>
          SAM<br/>
          <span style={{ fontSize: 10, fontWeight: 600, opacity: 0.85, letterSpacing: '0.1em' }}>NETWORK</span>
        </div>
      </div>
    </div>
  );
}

function Stats({ t }) {
  const { stats } = window.SAM_DATA;
  return (
    <section style={{ padding: '60px 56px', background: 'var(--bg-warm)', borderTop: '1px solid var(--ink-faint)', borderBottom: '1px solid var(--ink-faint)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ borderLeft: i > 0 ? '1px solid var(--ink-faint)' : 'none', paddingLeft: i > 0 ? 32 : 0 }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 64, lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--ink)' }}>{s.v}</div>
            <div style={{ marginTop: 10, fontSize: 14, fontWeight: 600 }}>{s.k}</div>
            <div style={{ fontSize: 12, color: 'var(--ink-mute)', marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DarkSection({ t }) {
  const { brand } = window.SAM_DATA;
  return (
    <section style={{ background: 'var(--navy)', color: '#fff', padding: '110px 56px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -150, right: -150, width: 500, height: 500, background: `radial-gradient(circle, ${t.accent}30, transparent 60%)`, pointerEvents: 'none' }}></div>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', fontWeight: 600 }}>// POURQUOI SAM NETWORK SOLUTIONS</div>
          <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em' }}>
            Un seul interlocuteur. <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>Aucun jargon.</em>
          </h2>
          <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.6, opacity: 0.85, maxWidth: 480 }}>
            Pas de hotline qui se renvoie la balle. Pas de devis interminables. Vous appelez, on intervient — souvent le jour même.
          </p>
          <div style={{ marginTop: 36, display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <a href={`tel:${brand.phoneRaw}`} style={{ background: 'var(--accent)', color: '#fff', padding: '14px 22px', borderRadius: 'var(--radius)', fontWeight: 600, fontSize: 15, display: 'inline-block' }}>Appeler maintenant</a>
            <a href="#" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '14px 22px', borderRadius: 'var(--radius)', fontWeight: 500, fontSize: 15, display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)' }}>Pourquoi nous choisir ? →</a>
          </div>
        </div>

        <WhyAccordion />
      </div>
    </section>
  );
}

const WHY_CARDS = [
  {
    title: 'Local',
    subtitle: 'Paris 14e',
    description: 'Basés à Paris 14e, ancrés en Île-de-France.',
    badge: '75014',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1000&q=85&auto=format&fit=crop',
  },
  {
    title: 'Réactif',
    subtitle: 'Sous 4h ouvrées',
    description: 'Intervention rapide en contrat de maintenance.',
    badge: '< 4h',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1000&q=85&auto=format&fit=crop',
  },
  {
    title: 'Multi-services',
    subtitle: '8 expertises',
    description: 'Un seul point de contact, toutes les compétences IT.',
    badge: '8 pôles',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=85&auto=format&fit=crop',
  },
  {
    title: 'Transparent',
    subtitle: 'Tarifs publiés',
    description: 'Devis détaillés, aucune surprise sur la facture.',
    badge: '0 surprise',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&q=85&auto=format&fit=crop',
  },
];

function WhyAccordion() {
  const [active, setActive] = React.useState(WHY_CARDS.length - 1);
  return (
    <div style={{ width: '100%' }}>
      <style>{`
        .why-acc { display: flex; gap: 12px; align-items: stretch; height: 460px; width: 100%; }
        .why-acc-item {
          position: relative; height: 100%; border-radius: 18px; overflow: hidden;
          cursor: pointer; flex: 0 0 auto;
          transition: width 0.7s cubic-bezier(0.4, 0.2, 0.2, 1), box-shadow 0.4s ease;
          box-shadow: 0 6px 24px rgba(0,0,0,0.25);
        }
        .why-acc-item.is-active { width: 360px; box-shadow: 0 18px 48px rgba(0,0,0,0.45); }
        .why-acc-item.is-collapsed { width: 64px; }
        .why-acc-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .why-acc-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(15,28,46,0.15) 0%, rgba(15,28,46,0.75) 100%);
          transition: opacity 0.4s ease;
        }
        .why-acc-item.is-active .why-acc-overlay {
          background: linear-gradient(180deg, rgba(15,28,46,0.05) 0%, rgba(15,28,46,0.85) 100%);
        }
        .why-acc-accent {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: var(--accent); opacity: 0;
          transition: opacity 0.4s ease;
        }
        .why-acc-item.is-active .why-acc-accent { opacity: 1; }
        .why-acc-collapsed-label {
          position: absolute; left: 50%; bottom: 24px;
          transform: translateX(-50%) rotate(-90deg); transform-origin: center;
          color: #fff; font-family: var(--font-heading); font-weight: 700;
          font-size: 18px; letter-spacing: -0.01em; white-space: nowrap;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
          transition: opacity 0.3s ease;
        }
        .why-acc-item.is-active .why-acc-collapsed-label { opacity: 0; pointer-events: none; }
        .why-acc-content {
          position: absolute; inset: 0; padding: 26px 28px;
          display: flex; flex-direction: column; justify-content: flex-end;
          color: #fff;
          opacity: 0; transition: opacity 0.4s ease 0.15s;
        }
        .why-acc-item.is-active .why-acc-content { opacity: 1; }
        .why-acc-badge {
          display: inline-block; align-self: flex-start;
          font-family: var(--font-mono); font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 5px 11px; border-radius: 999px;
          background: var(--accent); color: #fff;
          margin-bottom: 14px;
        }
        .why-acc-title {
          margin: 0; font-family: var(--font-heading);
          font-size: 30px; font-weight: 700; line-height: 1.05; letter-spacing: -0.02em;
        }
        .why-acc-subtitle {
          margin: 8px 0 0; font-size: 14px; font-weight: 600;
          color: rgba(255,255,255,0.85); letter-spacing: 0.02em;
        }
        .why-acc-desc {
          margin: 14px 0 0; font-size: 14px; line-height: 1.55;
          color: rgba(255,255,255,0.85);
          max-width: 290px;
        }
        @media (max-width: 1100px) {
          .why-acc { height: 380px; }
          .why-acc-item.is-active { width: 280px; }
          .why-acc-title { font-size: 24px; }
        }
      `}</style>
      <div className="why-acc">
        {WHY_CARDS.map((card, i) => {
          const isActive = i === active;
          return (
            <div
              key={card.title}
              className={`why-acc-item ${isActive ? 'is-active' : 'is-collapsed'}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              tabIndex={0}
              onFocus={() => setActive(i)}
              aria-expanded={isActive}
            >
              <img className="why-acc-img" src={card.image} alt="" loading="lazy" />
              <div className="why-acc-overlay" />
              <div className="why-acc-accent" />
              <span className="why-acc-collapsed-label">{card.title}</span>
              <div className="why-acc-content">
                <span className="why-acc-badge">{card.badge}</span>
                <h3 className="why-acc-title">{card.title}</h3>
                <div className="why-acc-subtitle">{card.subtitle}</div>
                <p className="why-acc-desc">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Process({ t }) {
  const { process } = window.SAM_DATA;
  return (
    <section id="process" style={{ padding: '100px 56px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', fontWeight: 600 }}>// MÉTHODE EN 4 ÉTAPES</div>
          <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em' }}>
            De l'audit à la <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>tranquillité</em>.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
          {process.map((p, i) => (
            <div key={p.n} style={{ position: 'relative' }}>
              {i < process.length - 1 && <div style={{ position: 'absolute', top: 24, left: '60%', right: '-40%', height: 1, borderTop: `1px dashed var(--accent)`, opacity: 0.5 }}></div>}
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, boxShadow: 'var(--shadow-cta)', position: 'relative', zIndex: 1 }}>{p.n}</div>
              <div style={{ marginTop: 18, fontSize: 19, fontWeight: 600, fontFamily: 'var(--font-heading)' }}>{p.title}</div>
              <div style={{ marginTop: 8, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function initialsAvatar(name, accent) {
  const parts = (name || '').trim().split(/\s+/);
  const initials = (parts[0]?.[0] || '') + (parts[1]?.[0] || '');
  return initials.toUpperCase() || '★';
}

function TestimonialCard({ tt, t }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      boxShadow: 'var(--shadow-card)',
      border: '1px solid var(--ink-faint)',
      width: '100%',
    }}>
      <div style={{ color: 'var(--accent)', fontSize: 14, marginBottom: 12, letterSpacing: '0.05em' }}>{'★'.repeat(tt.stars || 5)}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.55, color: 'var(--ink)' }}>{tt.quote}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 18 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: `linear-gradient(135deg, ${t.accent}, ${t.navy})`,
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 600, fontSize: 14, letterSpacing: '0.02em', flexShrink: 0,
        }}>{initialsAvatar(tt.author)}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2, color: 'var(--ink)' }}>{tt.author}</div>
          <div style={{ fontSize: 12, opacity: 0.6, lineHeight: 1.3, marginTop: 2 }}>{tt.role || ''}</div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsColumn({ items, duration = 18, hideBelow, t }) {
  const display = [...items, ...items];
  return (
    <div className={hideBelow ? `tcol-hide-${hideBelow}` : ''} style={{ width: 320, flexShrink: 0 }}>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 24,
        animation: `tcol-scroll ${duration}s linear infinite`,
        willChange: 'transform',
      }}>
        {display.map((tt, i) => (
          <TestimonialCard key={i} tt={tt} t={t} />
        ))}
      </div>
    </div>
  );
}

function GoogleG({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
      <path fill="#FBBC05" d="M11.69 28.18A13.96 13.96 0 0 1 10.96 24c0-1.45.25-2.86.69-4.18v-5.7H4.34A21.96 21.96 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
      <path fill="#EA4335" d="M24 9.75c3.23 0 6.13 1.11 8.42 3.29l6.31-6.31C34.91 3.18 29.93 1 24 1 15.4 1 7.96 5.93 4.34 14.12l7.35 5.7C13.42 14.62 18.27 9.75 24 9.75z"/>
    </svg>
  );
}

function GoogleReviewsBadge({ rating = 4.9, count = 89 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.25 && rating - full < 0.75;
  const link = 'https://www.google.com/search?q=Sam+Network+Solutions+Paris+avis';
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{
      display: 'inline-flex', alignItems: 'center', gap: 14,
      background: '#fff', border: '1px solid var(--ink-faint)',
      padding: '10px 18px', borderRadius: 999,
      boxShadow: '0 6px 18px rgba(14,31,61,0.06)',
      textDecoration: 'none', color: 'var(--ink)',
    }}>
      <GoogleG size={22} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--ink-mute)', textTransform: 'uppercase' }}>Avis Google</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
          <span style={{ fontWeight: 700, fontSize: 15 }}>{rating.toString().replace('.', ',')}</span>
          <span style={{ display: 'inline-flex', gap: 1, color: '#fbbc04', fontSize: 14, letterSpacing: '0.5px' }}>
            {[0,1,2,3,4].map(i => (
              <span key={i}>{i < full ? '★' : (i === full && half ? '⯨' : '☆')}</span>
            ))}
          </span>
          <span style={{ fontSize: 12, color: 'var(--ink-mute)' }}>· {count}+ avis</span>
        </div>
      </div>
      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)', borderLeft: '1px solid var(--ink-faint)', paddingLeft: 12, letterSpacing: '0.04em' }}>VOIR →</div>
    </a>
  );
}

function Testimonials({ t }) {
  const { testimonials } = window.SAM_DATA;
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);
  return (
    <section id="avis" style={{ padding: '100px 56px', background: 'var(--bg-warm)', position: 'relative' }}>
      <style>{`
        @keyframes tcol-scroll {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        .tcol-mask {
          -webkit-mask-image: linear-gradient(to bottom, transparent, #000 18%, #000 82%, transparent);
                  mask-image: linear-gradient(to bottom, transparent, #000 18%, #000 82%, transparent);
        }
        @media (max-width: 1024px) {
          .tcol-hide-lg { display: none !important; }
        }
        @media (max-width: 768px) {
          .tcol-hide-md { display: none !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40, maxWidth: 620, marginInline: 'auto' }}>
          <GoogleReviewsBadge rating={4.9} count={89} />

          <h2 style={{ margin: '18px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em' }}>
            Ce que disent nos <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>clients</em>.
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.55 }}>
            Avis publiés sur Google par nos clients ces derniers mois.
          </p>
        </div>

        <div className="tcol-mask" style={{
          display: 'flex', justifyContent: 'center', gap: 24,
          maxHeight: 640, overflow: 'hidden',
        }}>
          <TestimonialsColumn items={col1} duration={22} t={t} />
          <TestimonialsColumn items={col2} duration={28} hideBelow="md" t={t} />
          <TestimonialsColumn items={col3} duration={25} hideBelow="lg" t={t} />
        </div>
      </div>
    </section>
  );
}

function Pricing({ t }) {
  const tiers = [
    { name: 'Dépannage', price: '89', unit: '€HT/h', desc: 'Intervention ponctuelle, 7j/7', features: ['Diagnostic offert', 'Intervention sur site', 'Réparation ou remplacement', 'Garantie 30 jours'], featured: false, cta: 'Demander un devis' },
    { name: 'Maintenance Pro', price: '290', unit: '€HT/mois', desc: 'TPE jusqu\'à 10 postes', features: ['Helpdesk illimité', 'Supervision 24/7', 'Mises à jour automatiques', 'Sauvegardes externalisées', 'Intervention < 4h'], featured: true, cta: 'Choisir ce plan' },
    { name: 'Maintenance+', price: 'Sur devis', unit: '', desc: 'PME 10–100 postes', features: ['Tout Maintenance Pro', 'Ingénieur dédié', 'Astreinte 24/7', 'SLA renforcés', 'Audits semestriels'], featured: false, cta: 'Nous contacter' },
  ];
  return (
    <section id="tarifs" style={{ padding: '100px 56px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', fontWeight: 600 }}>// TARIFS TRANSPARENTS</div>
          <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em' }}>
            Une formule pour <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>chaque besoin</em>.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {tiers.map((tier, i) => (
            <div key={i} style={{
              background: tier.featured ? 'var(--navy)' : '#fff',
              color: tier.featured ? '#fff' : 'var(--ink)',
              borderRadius: 'var(--radius-lg)',
              padding: 32,
              boxShadow: tier.featured ? '0 30px 80px -20px rgba(14,31,61,0.5)' : 'var(--shadow-card)',
              position: 'relative',
              transform: tier.featured ? 'translateY(-12px)' : 'none',
            }}>
              {tier.featured && <div style={{ position: 'absolute', top: -12, left: 32, background: 'var(--accent)', color: '#fff', padding: '4px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.05em' }}>POPULAIRE</div>}
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 600 }}>{tier.name}</div>
              <div style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>{tier.desc}</div>
              <div style={{ marginTop: 22, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: t.headingWeight, lineHeight: 1, letterSpacing: '-0.03em' }}>{tier.price}</span>
                <span style={{ fontSize: 14, opacity: 0.7 }}>{tier.unit}</span>
              </div>
              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {tier.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                    <span style={{ opacity: 0.9 }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{
                marginTop: 28, width: '100%', padding: '14px',
                background: tier.featured ? 'var(--accent)' : 'var(--ink)',
                color: '#fff', border: 'none', borderRadius: 'var(--radius)',
                fontWeight: 600, fontSize: 14, cursor: 'pointer',
                fontFamily: 'inherit',
              }}>{tier.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ t }) {
  const { faqs } = window.SAM_DATA;
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ padding: '100px 56px', background: 'var(--bg-warm)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', fontWeight: 600 }}>// QUESTIONS FRÉQUENTES</div>
          <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 48, lineHeight: 1, letterSpacing: '-0.03em' }}>
            Tout ce qu'on nous <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>demande</em>.
          </h2>
        </div>
        <div style={{ background: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid var(--ink-faint)' : 'none' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', padding: '20px 26px', background: 'transparent', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
              }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)' }}>{f.q}</span>
                <span style={{ color: 'var(--accent)', fontSize: 20, fontWeight: 300, transition: 'transform 0.2s', transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
              </button>
              {open === i && <div style={{ padding: '0 26px 22px', fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ t }) {
  const { brand } = window.SAM_DATA;
  const [formData, setFormData] = React.useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = encodeURIComponent(`Demande de devis - ${formData.name}`);
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${brand.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" style={{ padding: '90px 56px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '72px 64px', position: 'relative', overflow: 'hidden', color: '#fff' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: `radial-gradient(circle, ${t.accent}40, transparent 60%)`, pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'start', gap: 60 }}>
          <div>
            <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 14 }}>// NOUS CONTACTER</div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Demandez votre <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>devis gratuit</em>.
            </h2>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, opacity: 0.85, maxWidth: 440 }}>
              Audit sur site, sans engagement, sans jargon. Vous repartez avec un état des lieux clair et nos préconisations chiffrées.
            </p>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15 }}>
                <span style={{ color: 'var(--accent)', fontSize: 20 }}>📞</span>
                <div>
                  <a href={`tel:${brand.phoneRaw}`} style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>{brand.phone}</a>
                  <span style={{ opacity: 0.6, marginLeft: 12 }}>Fixe</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15 }}>
                <span style={{ color: 'var(--accent)', fontSize: 20 }}>📱</span>
                <div>
                  <a href={`tel:${brand.phoneMobileRaw}`} style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>{brand.phoneMobile}</a>
                  <span style={{ opacity: 0.6, marginLeft: 12 }}>Portable</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15 }}>
                <span style={{ color: 'var(--accent)', fontSize: 20 }}>✉️</span>
                <a href={`mailto:${brand.email}`} style={{ color: '#fff', opacity: 0.9 }}>{brand.email}</a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <input
                required
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 'var(--radius-sm)', padding: '14px 18px', color: '#fff',
                  fontSize: 14, fontFamily: 'inherit', outline: 'none',
                }}
              />
              <input
                required
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 'var(--radius-sm)', padding: '14px 18px', color: '#fff',
                  fontSize: 14, fontFamily: 'inherit', outline: 'none',
                }}
              />
            </div>
            <input
              placeholder="Votre téléphone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 'var(--radius-sm)', padding: '14px 18px', color: '#fff',
                fontSize: 14, fontFamily: 'inherit', outline: 'none', width: '100%',
              }}
            />
            <textarea
              required
              rows={4}
              placeholder="Décrivez votre besoin..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 'var(--radius-sm)', padding: '14px 18px', color: '#fff',
                fontSize: 14, fontFamily: 'inherit', outline: 'none', resize: 'vertical',
                width: '100%',
              }}
            />
            <button type="submit" style={{
              background: submitted ? '#22c55e' : 'var(--accent)', color: '#fff',
              padding: '16px 24px', borderRadius: 'var(--radius)', fontWeight: 700,
              fontSize: 16, border: 'none', cursor: 'pointer', textAlign: 'center',
              boxShadow: 'var(--shadow-cta)', fontFamily: 'inherit',
              transition: 'background 0.3s ease',
            }}>
              {submitted ? '✓ Message envoyé !' : 'Envoyer ma demande →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  const { brand, services } = window.SAM_DATA;
  return (
    <footer style={{ background: 'var(--navy-deep)', color: 'rgba(255,255,255,0.85)', padding: '70px 56px 30px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 50, paddingBottom: 50, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <Logo accent={t.accent} accentDeep={t.accentDeep} />
              <div style={{ fontWeight: 600, fontSize: 17, color: '#fff' }}>{brand.short}<span style={{ color: 'var(--accent)' }}>.</span></div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.7, maxWidth: 320 }}>
              Solutions IT pour entreprises à Paris et Île-de-France. Réseau, sécurité, dépannage — un seul partenaire.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 14 }}>SERVICES</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
              {services.slice(0, 5).map(s => <a key={s.id} href={`#${s.id}`} style={{ opacity: 0.75 }}>{s.title}</a>)}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 14 }}>ENTREPRISE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, opacity: 0.75 }}>
              <a href="#process">Notre méthode</a>
              <a href="#avis">Avis clients</a>
              <a href="#tarifs">Tarifs</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 14 }}>CONTACT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, opacity: 0.85 }}>
              <a href={`tel:${brand.phoneRaw}`} style={{ fontWeight: 600, color: '#fff' }}>{brand.phone}</a>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
              <span>{brand.address}</span>
              <span style={{ color: 'var(--accent)' }}>{brand.hours}</span>
              <a href="https://github.com/haroneait-dev/SNS" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, color: '#fff', opacity: 0.9 }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
                Voir sur GitHub
              </a>
            </div>
          </div>
        </div>
        <div style={{ padding: '40px 0 20px', display: 'flex', justifyContent: 'center' }}>
          <LocationMap 
            location={brand.address}
            coordinates="48.8358° N, 2.3276° E"
          />
        </div>
        <div style={{ paddingTop: 60, paddingBottom: 24, display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          <LiquidButton href="https://www.linkedin.com/company/sam-network-solutions/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </LiquidButton>
          <LiquidButton href="https://www.instagram.com/samnetworksolutions/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            Instagram
          </LiquidButton>
          <LiquidButton href="https://www.facebook.com/samnetworksolutions/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </LiquidButton>
          <LiquidButton href="https://www.tiktok.com/@samnetworksolutions" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.23 8.23 0 0 0 4.83 1.56V6.93a4.84 4.84 0 0 1-1.07-.24z"/></svg>
            TikTok
          </LiquidButton>
        </div>
        <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 12, opacity: 0.55 }}>
          <span>© 2026 {brand.name} · SIRET XXX XXX XXX 00000</span>
          <span>Mentions légales · Politique de confidentialité · CGV</span>
        </div>
      </div>
    </footer>
  );
}


function ClientsSection({ t }) {
  const clientLogos = [
    { name: 'Monnot & Associés', domain: 'monnot-associes.com', logo: 'input/clients/monnot.png' },
    { name: '3N Formation', domain: '3nformation.fr' },
    { name: 'SF Partners', domain: 'sfpartners.fr' },
    { name: 'FEOC ARCSUD', domain: 'feocarcsud.fr', logo: 'input/clients/feocarcsud.png' },
    { name: 'Auto-École Gold Driving', domain: 'golddriving.fr', logo: 'input/clients/golddriving.png' },
    { name: 'Logiprox', domain: 'logiprox.fr', logo: 'input/clients/logiprox.png' },
  ];

  return (
    <section style={{ padding: '80px 56px', background: 'var(--bg)', borderTop: '1px solid var(--ink-faint)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48, maxWidth: 620, marginInline: 'auto' }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', fontWeight: 600 }}>// ILS NOUS FONT CONFIANCE</div>
          <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Nos <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>clients</em> entreprises.
          </h2>
          <p style={{ marginTop: 14, fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.55 }}>
            Ils nous font confiance pour gérer leur infrastructure IT au quotidien.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 900, margin: '0 auto' }}>
          {clientLogos.map((client, i) => (
            <ClientLogoCard key={i} name={client.name} domain={client.domain} logo={client.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientLogoCard({ name, domain, logo }) {
  // Priorité au logo local (fourni explicitement par l'utilisateur), sinon Clearbit,
  // sinon favicon Google, sinon fallback texte uniquement.
  const sources = [
    logo,
    `https://logo.clearbit.com/${domain}?size=256`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
  ].filter(Boolean);
  const [srcIndex, setSrcIndex] = React.useState(0);
  const [failed, setFailed] = React.useState(false);
  const currentSrc = sources[srcIndex];
  const isLocal = currentSrc && currentSrc.startsWith('input/');

  return (
    <div style={{
      background: '#fff',
      border: '1px solid var(--ink-faint)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 140,
      gap: 14,
      boxShadow: '0 2px 12px rgba(14,31,61,0.05)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(14,31,61,0.1)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(14,31,61,0.05)'; }}
    >
      {!failed && currentSrc ? (
        <div style={{
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
          <img
            src={currentSrc}
            alt={name}
            loading="lazy"
            onError={() => {
              if (srcIndex < sources.length - 1) setSrcIndex(srcIndex + 1);
              else setFailed(true);
            }}
            style={{
              maxWidth: '90%',
              maxHeight: isLocal ? 44 : 52,
              objectFit: 'contain',
              imageRendering: isLocal ? 'auto' : 'auto',
            }}
          />
        </div>
      ) : null}
      <span style={{
        fontFamily: 'var(--font-heading)',
        fontSize: failed ? 17 : 13,
        fontWeight: 600,
        color: failed ? 'var(--ink)' : 'var(--ink-soft)',
        letterSpacing: '-0.005em',
        textAlign: 'center',
        lineHeight: 1.3,
      }}>{name}</span>
    </div>
  );
}

Object.assign(window, { AboutUs, Stats, DarkSection, Process, Testimonials, Pricing, FAQ, CTA, Footer, ClientsSection });

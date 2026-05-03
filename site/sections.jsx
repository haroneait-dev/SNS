// Sections part 1: Header, Hero, ClientLogos, Services
function Header({ t }) {
  const { brand } = window.SAM_DATA;
  const headerRef = React.useRef(null);
  const [headerHeight, setHeaderHeight] = React.useState(68);

  React.useEffect(() => {
    if (!headerRef.current) return;
    const measure = () => setHeaderHeight(headerRef.current.offsetHeight);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <header ref={headerRef} style={{ position: 'sticky', top: 0, zIndex: 50, background: '#FBF9F4', borderBottom: `1px solid var(--ink-faint)` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '12px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="input/logo.png" alt={brand.name} style={{ height: 44, width: 'auto', display: 'block', mixBlendMode: 'multiply' }} />
        </a>
        <DropdownNav t={t} headerHeight={headerHeight} />
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexShrink: 0 }}>
          <a href={`tel:${brand.phoneRaw}`} style={{ fontSize: 14, fontFamily: 'var(--font-mono)', fontWeight: 500 }}>{brand.phone}</a>
          <CTAButton t={t} small>Devis gratuit →</CTAButton>
        </div>
      </div>
    </header>
  );
}

// --- icons used in the dropdown panels ---
const NavI = {
  home: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
  building: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>,
  users: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  star: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  euro: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.5 4.083A8 8 0 1 0 18.5 19.92"/><path d="M3 10h12"/><path d="M3 14h9"/></svg>,
  network: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/></svg>,
  phone: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  cam: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m13.873 3.49 7.299 4.214a1 1 0 0 1 .365 1.366l-2 3.464a1 1 0 0 1-1.366.366L11.001 8.5"/><path d="m18 12-2 3.464"/><path d="M2.5 13.5 4.5 10 12 14.33"/><circle cx="6" cy="18" r="3"/></svg>,
  shield: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>,
  wrench: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  cog: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.18l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/><circle cx="12" cy="12" r="3"/></svg>,
  monitor: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>,
  printer: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>,
  mail: (p={}) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  chevron: (p={}) => <svg viewBox="0 0 24 24" width={p.size||14} height={p.size||14} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="m6 9 6 6 6-6"/></svg>,
};

const NAV_ITEMS = [
  { id: 1, label: 'Accueil', link: '#' },
  {
    id: 2, label: "L'entreprise", link: '#qui-sommes-nous',
    subMenus: [
      {
        title: 'À propos',
        items: [
          { label: 'Notre histoire', description: '10 ans à Paris 14e — 2014 à aujourd\'hui.', icon: NavI.building, href: '#qui-sommes-nous/histoire' },
          { label: 'Nos valeurs', description: 'Réactivité, transparence, proximité.', icon: NavI.cog, href: '#qui-sommes-nous/valeurs' },
          { label: 'Notre équipe', description: 'Samuel Tesfahiwet, fondateur.', icon: NavI.users, href: '#qui-sommes-nous/equipe' },
        ],
      },
      {
        title: 'Confiance',
        items: [
          { label: 'Avis clients', description: '89+ avis Google · ★ 4,9/5', icon: NavI.star, href: '#avis' },
          { label: 'Tarifs', description: 'Forfaits transparents dès 89 €HT/h.', icon: NavI.euro, href: '#tarifs' },
          { label: 'FAQ', description: 'Réponses aux questions fréquentes.', icon: NavI.building, href: '#faq' },
        ],
      },
    ],
  },
  {
    id: 3, label: 'Nos solutions', link: '#solutions',
    subMenus: [
      {
        title: 'Infrastructure',
        items: [
          { label: 'Réseaux & Baie de Brassage', description: 'Câblage, switches, Wi-Fi pro multi-bornes.', icon: NavI.network, href: '#solution/reseaux' },
          { label: 'Infogérance Informatique', description: 'Supervision 24/7, helpdesk illimité.', icon: NavI.cog, href: '#solution/infogerance' },
        ],
      },
      {
        title: 'Sécurité',
        items: [
          { label: 'Cyber Sécurité', description: 'Pare-feu, EDR, audit, anti-phishing.', icon: NavI.shield, href: '#solution/cyber' },
          { label: 'Vidéosurveillance', description: 'Caméras IP 4K, NVR, conformité RGPD.', icon: NavI.cam, href: '#solution/video' },
          { label: "Contrôle d'accès & Alarme", description: 'Badges, biométrie, télésurveillance.', icon: NavI.building, href: '#solution/acces' },
        ],
      },
      {
        title: 'Services IT',
        items: [
          { label: 'Dépannage & Maintenance', description: 'Intervention < 4h, 7j/7.', icon: NavI.wrench, href: '#solution/depannage' },
          { label: 'Voir toutes les solutions', description: 'Index complet des 6 expertises.', icon: NavI.monitor, href: '#solutions' },
        ],
      },
    ],
  },
  { id: 4, label: 'Nous contacter', link: '#contact' },
];

function DropdownNav({ t, headerHeight = 68 }) {
  const [openMenu, setOpenMenu] = React.useState(null);
  const [hoverBg, setHoverBg] = React.useState(null);
  const itemRefs = React.useRef({});

  const updateBg = (id) => {
    const el = itemRefs.current[id];
    if (!el) return setHoverBg(null);
    setHoverBg({ left: el.offsetLeft, width: el.offsetWidth });
  };

  return (
    <nav
      style={{ position: 'relative', display: 'flex', justifyContent: 'center', flex: 1 }}
      onMouseLeave={() => { setOpenMenu(null); setHoverBg(null); }}
    >
      <ul style={{ position: 'relative', display: 'flex', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
        {hoverBg && (
          <span style={{
            position: 'absolute', top: 0, bottom: 0,
            left: hoverBg.left, width: hoverBg.width,
            background: 'var(--accent-soft)',
            borderRadius: 999,
            transition: 'left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)',
            pointerEvents: 'none',
          }} />
        )}
        {NAV_ITEMS.map((item) => {
          const isOpen = openMenu === item.label;
          return (
            <li
              key={item.id}
              ref={el => (itemRefs.current[item.id] = el)}
              style={{ position: 'relative' }}
              onMouseEnter={() => {
                updateBg(item.id);
                if (item.subMenus) setOpenMenu(item.label);
                else setOpenMenu(null);
              }}
            >
              <a
                href={item.link || '#'}
                onClick={(e) => { if (item.subMenus && !item.link) e.preventDefault(); }}
                style={{
                  position: 'relative', zIndex: 1,
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '10px 18px', fontSize: 16, fontWeight: 600,
                  color: isOpen ? 'var(--ink)' : 'var(--ink-soft)',
                  textDecoration: 'none', cursor: 'pointer',
                  letterSpacing: '-0.005em',
                  transition: 'color 0.2s',
                }}
              >
                {item.label}
                {item.subMenus && (
                  <span style={{ display: 'inline-flex', transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <NavI.chevron size={13} />
                  </span>
                )}
              </a>

              {item.subMenus && isOpen && (
                <DropdownPanel item={item} t={t} headerHeight={headerHeight} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function DropdownPanel({ item, t, headerHeight = 68 }) {
  // Mega-menu pleine largeur : ancré sous le header, fixed left:0 right:0
  return (
    <div style={{
      position: 'fixed',
      top: headerHeight,
      left: 0, right: 0,
      zIndex: 20,
      pointerEvents: 'none', // wrapper ne capte pas — seul le panel intérieur le fait
    }}>
      <style>{`
        @keyframes nav-mega-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Bandeau pleine largeur (fond + ombre s'étendent jusqu'aux bords) */}
      <div style={{
        background: '#fff',
        borderTop: '1px solid var(--ink-faint)',
        borderBottom: '1px solid var(--ink-faint)',
        boxShadow: '0 24px 60px -12px rgba(14,31,61,0.18), 0 4px 12px rgba(14,31,61,0.06)',
        animation: 'nav-mega-in 0.22s ease-out forwards',
        pointerEvents: 'auto',
      }}>
        {/* Contenu centré, contraint à la largeur du header */}
        <div style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '32px 40px 36px',
          display: 'grid',
          gridTemplateColumns: `minmax(220px, 280px) 1fr`,
          gap: 56,
          alignItems: 'start',
        }}>
          {/* Bloc gauche : titre du menu + lien direct */}
          <div>
            <div style={{
              fontSize: 11, fontFamily: 'var(--font-mono)',
              color: 'var(--accent)', letterSpacing: '0.18em',
              textTransform: 'uppercase', fontWeight: 700,
            }}>
              // {item.label}
            </div>
            <h3 style={{
              margin: '10px 0 12px',
              fontFamily: 'var(--font-heading)',
              fontSize: 26, fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              lineHeight: 1.1,
            }}>
              {item.label === "L'entreprise" ? "Qui sommes-nous." : item.label === "Nos solutions" ? "6 expertises, 1 interlocuteur." : item.label}
            </h3>
            <p style={{
              margin: 0, fontSize: 13, lineHeight: 1.55,
              color: 'var(--ink-soft)', maxWidth: 240,
            }}>
              {item.label === "L'entreprise"
                ? "Une équipe à Paris 14e, depuis 2014. Des techniciens, pas des commerciaux."
                : item.label === "Nos solutions"
                ? "Réseau, sécurité, vidéo, dépannage — toute votre infra IT par une seule équipe."
                : "Découvrez nos services."}
            </p>
            {item.link && (
              <a href={item.link} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginTop: 18,
                fontSize: 13, fontWeight: 700,
                color: 'var(--accent)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                fontFamily: 'var(--font-mono)',
              }}>
                Voir la page complète →
              </a>
            )}
          </div>

          {/* Bloc droit : colonnes du sous-menu réparties uniformément */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${item.subMenus.length}, 1fr)`,
            gap: 32,
            borderLeft: '1px solid var(--ink-faint)',
            paddingLeft: 56,
          }}>
            {item.subMenus.map((sub) => (
              <div key={sub.title}>
                <h4 style={{
                  margin: '0 0 18px', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--ink-mute)',
                  fontFamily: 'var(--font-mono)',
                }}>{sub.title}</h4>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {sub.items.map((it) => (
                    <li key={it.label}>
                      <a href={it.href || '#'} style={{
                        display: 'flex', alignItems: 'flex-start', gap: 12,
                        padding: '8px 10px', margin: '-8px -10px',
                        borderRadius: 10,
                        textDecoration: 'none', color: 'inherit',
                        transition: 'background 0.18s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--bg-warm)';
                        const icon = e.currentTarget.querySelector('[data-nav-icon]');
                        if (icon) { icon.style.background = 'var(--accent)'; icon.style.color = '#fff'; icon.style.borderColor = 'var(--accent)'; }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        const icon = e.currentTarget.querySelector('[data-nav-icon]');
                        if (icon) { icon.style.background = 'transparent'; icon.style.color = 'var(--ink)'; icon.style.borderColor = 'var(--ink-faint)'; }
                      }}>
                        <div data-nav-icon style={{
                          flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 36, height: 36, borderRadius: 8,
                          border: '1px solid var(--ink-faint)',
                          color: 'var(--ink)',
                          transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                        }}>
                          <it.icon size={18} />
                        </div>
                        <div style={{ lineHeight: 1.35, minWidth: 0 }}>
                          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{it.label}</div>
                          <div style={{ fontSize: 12, color: 'var(--ink-mute)', marginTop: 2 }}>{it.description}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo({ accent, accentDeep, size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <defs>
        <linearGradient id={`logoGrad-${accent.replace('#', '')}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={accentDeep} />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" fill={`url(#logoGrad-${accent.replace('#', '')})`} />
      <path d="M 9 12 L 16 18 L 23 12" stroke="#FBF9F4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 9 18 L 16 24 L 23 18" stroke="#FBF9F4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
    </svg>);

}

function CTAButton({ t, children, small, secondary, onClick }) {
  if (secondary) {
    return (
      <button onClick={onClick} style={{
        background: 'rgba(14,31,61,0.04)', color: 'var(--ink)',
        border: '1px solid var(--ink-faint)',
        padding: small ? '9px 16px' : '14px 22px',
        borderRadius: 'var(--radius)', fontWeight: 500,
        fontSize: small ? 13 : 15, cursor: 'pointer'
      }}>{children}</button>);

  }
  const filled = t.buttonStyle !== 'outline';
  return (
    <button onClick={onClick} style={{
      background: filled ? 'var(--accent)' : 'transparent',
      color: filled ? '#fff' : 'var(--accent)',
      border: filled ? 'none' : `1.5px solid var(--accent)`,
      padding: small ? '9px 16px' : '14px 24px',
      borderRadius: 'var(--radius)', fontWeight: 600,
      fontSize: small ? 13 : 15, cursor: 'pointer',
      boxShadow: filled && t.shadow !== 'none' ? 'var(--shadow-cta)' : 'none',
      transition: 'transform 0.15s, box-shadow 0.15s'
    }}>{children}</button>);

}

// --- Inline lucide-react icons (no build step, so we ship the SVGs directly) ---
const I = {
  arrow: (p = {}) => <svg viewBox="0 0 24 24" width={p.size || 16} height={p.size || 16} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  play: (p = {}) => <svg viewBox="0 0 24 24" width={p.size || 14} height={p.size || 14} fill="currentColor" style={p.style}><polygon points="6 4 20 12 6 20 6 4"/></svg>,
  star: (p = {}) => <svg viewBox="0 0 24 24" width={p.size || 14} height={p.size || 14} fill="#facc15" stroke="#facc15" strokeWidth="1.5" strokeLinejoin="round" style={p.style}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  target: (p = {}) => <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  crown: (p = {}) => <svg viewBox="0 0 24 24" width={p.size || 12} height={p.size || 12} fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>,
  cam: (p = {}) => <svg viewBox="0 0 24 24" width={p.size || 16} height={p.size || 16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="m13.873 3.49 7.299 4.214a1 1 0 0 1 .365 1.366l-2 3.464a1 1 0 0 1-1.366.366L11.001 8.5"/><path d="m18 12-2 3.464"/><path d="M2.5 13.5 4.5 10 12 14.33"/><circle cx="6" cy="18" r="3"/></svg>,
  network: (p = {}) => <svg viewBox="0 0 24 24" width={p.size || 16} height={p.size || 16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/></svg>,
  wrench: (p = {}) => <svg viewBox="0 0 24 24" width={p.size || 16} height={p.size || 16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
};

function Hero({ t }) {
  const { brand } = window.SAM_DATA;
  const heroParts = (() => {
    if (!t.italicAccent) return [t.heroTitle];
    const parts = t.heroTitle.split(/(\bse voit\b|\bsilencieuse\b|\binvisible\b|\bne la voit pas\b)/i);
    return parts;
  })();

  const [index, setIndex] = React.useState(0);
  const photos = [
    { url: 'input/hero-vid.png', label: 'Vidéosurveillance', icon: I.cam },
    { url: 'input/hero-net.png', label: 'Infrastructure réseau', icon: I.network },
    { url: 'input/hero-rep.png', label: 'Dépannage & SAV', icon: I.wrench },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#0a0a0b', color: '#fff', fontFamily: 'var(--font-body)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <style>{`
        @keyframes hero-fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes hero-ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .hero-fade-in { animation: hero-fade-in 0.8s ease-out forwards; opacity: 0; }
        .hero-d100 { animation-delay: 0.10s; }
        .hero-d200 { animation-delay: 0.20s; }
        .hero-d300 { animation-delay: 0.30s; }
        .hero-d400 { animation-delay: 0.40s; }
        .hero-d500 { animation-delay: 0.50s; }
        .hero-marquee { animation: hero-marquee 40s linear infinite; }
        .hero-ping { position: absolute; inset: 0; border-radius: 9999px; background: #4ade80; opacity: 0.75; animation: hero-ping 1.6s cubic-bezier(0,0,0.2,1) infinite; }
        @media (max-width: 1080px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .hero-stats-card { margin-top: 0 !important; max-width: 560px; }
        }
        @media (max-width: 720px) {
          .hero-photo-strip { grid-template-columns: 1fr !important; }
          .hero-photo-strip > div:not(:first-child) { display: none; }
        }
      `}</style>

      {/* --- Infinite Carousel Background (Monochrome Mode) --- */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: t.navy }}>
        {photos.map((p, i) => (
          <div key={i}
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${p.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === index ? 0.85 : 0,
              transition: 'opacity 1.5s ease-in-out',
              filter: 'grayscale(100%) contrast(1.1) brightness(1.2)',
              mixBlendMode: 'multiply',
            }} />
        ))}
      </div>
      
      {/* Dark gradient overlay to ensure text readability and fade into the next section */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: `radial-gradient(ellipse at 30% 20%, rgba(56, 189, 248, 0.15), transparent 50%), radial-gradient(ellipse at 80% 80%, ${t.navy}40, transparent 50%), linear-gradient(180deg, rgba(10,10,11,0.1) 0%, rgba(10,10,11,0.95) 100%)` }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1400, margin: '0 auto', padding: '90px 48px 80px', width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* --- LEFT --- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingTop: 12 }}>

            {/* Badge */}
            <div className="hero-fade-in hero-d100">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 999, border: '1px solid rgba(56, 189, 248, 0.3)', background: 'rgba(56, 189, 248, 0.1)', padding: '7px 14px', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  {t.badgeText || 'Disponible 7j/7 · 09 75 52 97 43'}
                  <I.star size={13} />
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="hero-fade-in hero-d200" style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontWeight: t.headingWeight,
              fontSize: 'clamp(48px, 6.5vw, 84px)',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: '#fff',
              padding: '0.12em 0.05em 0.18em 0',
              overflow: 'visible',
            }}>
              {heroParts.map((p, i) => {
                const isAccent = /^(se voit|silencieuse|invisible|ne la voit pas)$/i.test(p);
                if (isAccent) return (
                  <em key={i} style={{
                    fontStyle: t.headingItalic ? 'italic' : 'normal',
                    background: `linear-gradient(135deg, #7dd3fc 0%, #0284c7 100%)`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    display: 'inline-block',
                    paddingRight: '0.08em',
                    paddingBottom: '0.12em',
                    marginBottom: '-0.12em',
                    lineHeight: 1.12,
                  }}>{p}</em>
                );
                return <span key={i}>{p}</span>;
              })}
            </h1>

            {/* Description */}
            <p className="hero-fade-in hero-d300" style={{ margin: 0, maxWidth: 640, fontSize: 22, lineHeight: 1.55, color: '#a1a1aa' }}>
              {t.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="hero-fade-in hero-d400" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 8 }}>
              <a href={`tel:${brand.phoneRaw}`} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                borderRadius: 999, background: t.accent, color: '#fff',
                padding: '18px 32px', fontSize: 16, fontWeight: 700, letterSpacing: '0.01em',
                textDecoration: 'none', transition: 'transform 0.15s, background 0.15s',
              }} onMouseEnter={e => e.currentTarget.style.background = '#e05312'} onMouseLeave={e => e.currentTarget.style.background = t.accent}>
                {t.ctaCopy}
                <I.arrow size={18} />
              </a>
              <a href="#services" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                borderRadius: 999, border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.05)',
                color: '#fff', padding: '18px 32px', fontSize: 16, fontWeight: 600,
                textDecoration: 'none', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
              }}>
                <I.play size={13} />
                Voir nos services
              </a>
            </div>

            {/* Indicators removed */}
          </div>

          {/* --- RIGHT --- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, minWidth: 0 }} className="hero-stats-card">

            {/* Stats card */}
            <div className="hero-fade-in hero-d500" style={{
              position: 'relative', overflow: 'hidden',
              borderRadius: 24, border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.05)', padding: 26,
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 24px 60px -12px rgba(0,0,0,0.5)',
            }}>
              <div style={{ position: 'absolute', top: -64, right: -64, width: 256, height: 256, borderRadius: '50%', background: `${t.accent}1A`, filter: 'blur(60px)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
                  <div style={{ display: 'flex', height: 64, width: 64, alignItems: 'center', justifyContent: 'center', borderRadius: 20, background: 'rgba(255,255,255,0.1)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)', color: '#fff' }}>
                    <I.target size={28} />
                  </div>
                  <div>
                    <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.1 }}>89+</div>
                    <div style={{ fontSize: 15, color: '#a1a1aa', marginTop: 4 }}>Avis Google · ★ 4,9/5</div>
                  </div>
                </div>

                {/* Progress: satisfaction */}
                <div style={{ marginBottom: 32 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, marginBottom: 12 }}>
                    <span style={{ color: '#a1a1aa' }}>Satisfaction client</span>
                    <span style={{ color: '#fff', fontWeight: 600 }}>98%</span>
                  </div>
                  <div style={{ height: 8, width: '100%', borderRadius: 999, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '98%', borderRadius: 999, background: `linear-gradient(90deg, #fff, ${t.accent})` }} />
                  </div>
                </div>

                <div style={{ height: 1, width: '100%', background: 'rgba(255,255,255,0.08)', marginBottom: 22 }} />

                {/* Mini stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr 1px 1fr', gap: 12, alignItems: 'center', textAlign: 'center' }}>
                  <HeroStat value="< 4h" label="Intervention" />
                  <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.1)', margin: '0 auto' }} />
                  <HeroStat value="7j/7" label="Disponibilité" />
                  <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.1)', margin: '0 auto' }} />
                  <HeroStat value="10+" label="Ans d'expertise" />
                </div>

                {/* Pills */}
                <div style={{ marginTop: 36, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', color: '#d4d4d8' }}>
                    <span style={{ position: 'relative', width: 10, height: 10 }}>
                      <span className="hero-ping" />
                      <span style={{ position: 'relative', display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
                    </span>
                    EN LIGNE
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', color: '#d4d4d8' }}>
                    <I.crown size={13} />
                    PARIS · IDF
                  </span>
                </div>
              </div>
            </div>

            {/* Marquee card */}
            <div className="hero-fade-in hero-d500" style={{
              position: 'relative', overflow: 'hidden',
              borderRadius: 28, border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.05)', padding: '28px 0',
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            }}>
              <h3 style={{ margin: '0 0 18px', padding: '0 28px', fontSize: 13, fontWeight: 500, color: '#a1a1aa' }}>Ils nous font confiance</h3>
              <div style={{
                position: 'relative', display: 'flex', overflow: 'hidden',
                WebkitMaskImage: 'linear-gradient(to right, transparent, #000 20%, #000 80%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, #000 20%, #000 80%, transparent)',
              }}>
                <div className="hero-marquee" style={{ display: 'flex', gap: 44, whiteSpace: 'nowrap', padding: '0 16px' }}>
                  {[...HERO_CLIENTS, ...HERO_CLIENTS, ...HERO_CLIENTS].map((c, i) => (
                    <span key={i} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 600,
                      color: '#e4e4e7', letterSpacing: '-0.01em', opacity: 0.6,
                    }}>
                      <span style={{ color: t.accent }}>{c.glyph}</span>
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const HERO_CLIENTS = [
  { name: 'Cabinet Lefèvre', glyph: '◢' },
  { name: 'Helio Imm.', glyph: '●' },
  { name: 'Maison Borel', glyph: '◇' },
  { name: 'Lumen SAS', glyph: '◆' },
  { name: 'Veritex', glyph: '●' },
  { name: 'Atelier Nord', glyph: '▲' },
  { name: 'Quartz', glyph: '◢' },
];

function HeroStat({ value, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: 24, fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>{value}</span>
      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#71717a', marginTop: 6 }}>{label}</span>
    </div>
  );
}

function ClientLogos({ t }) {
  const { partners } = window.SAM_DATA;
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;

  const headerContainerProps = motion ? {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-80px' },
    variants: { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } },
  } : {};

  const kickerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  };
  const h2Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };
  const paraVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  };

  const rowsContainerProps = motion ? {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-60px' },
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
    },
  } : {};

  const rowVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.05 } },
  };

  const brandVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  };

  const HeaderContainer = motion ? motion.div : 'div';
  const MotionItem = motion ? motion.div : 'div';
  const MotionDivider = motion ? motion.div : 'div';

  return (
    <section id="partenaires" style={{ padding: '100px 0', background: 'var(--bg)', borderTop: '1px solid var(--ink-faint)', borderBottom: '1px solid var(--ink-faint)' }}>
      <style>{`
        .brand-name {
          color: var(--ink-soft);
          border-bottom: 1px solid transparent;
          cursor: default;
          transition: color 0.15s ease, border-bottom-color 0.15s ease;
          display: inline-block;
          padding-bottom: 1px;
        }
        .brand-name:hover {
          color: var(--ink);
          border-bottom-color: currentColor;
        }
        .brand-separator {
          display: inline-block;
          width: 1px;
          height: 0.85em;
          background: var(--ink-faint);
          margin: 0 16px;
          vertical-align: middle;
          flex-shrink: 0;
        }
        .stack-row {
          background: transparent;
          transition: background 0.2s ease;
          border-radius: 8px;
        }
        .stack-row:hover {
          background: rgba(14, 31, 61, 0.025);
        }
        @media (max-width: 899px) {
          .stack-grid { grid-template-columns: 1fr !important; }
          .stack-row { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .stack-row-label { width: auto !important; }
          .brand-name { font-size: 18px !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px' }}>
        <div className="stack-grid" style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: '64px 80px', alignItems: 'start' }}>

          <HeaderContainer {...headerContainerProps}>
            <MotionItem variants={motion ? kickerVariants : undefined} style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase' }}>
              // STACK DÉPLOYÉE
            </MotionItem>
            <MotionItem variants={motion ? h2Variants : undefined}>
              <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 42, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                Les marques que nous <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>maîtrisons</em>.
              </h2>
            </MotionItem>
            <MotionItem variants={motion ? paraVariants : undefined}>
              <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: 360 }}>
                Pas de marque maison, pas de boîte noire. Les leaders du secteur, installés et maintenus au quotidien.
              </p>
            </MotionItem>
          </HeaderContainer>

          <MotionDivider {...(motion ? rowsContainerProps : {})}>
            {partners.map((category, rowIndex) => (
              <React.Fragment key={category.label}>
                <MotionItem
                  className="stack-row"
                  variants={motion ? rowVariants : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '22px 12px' }}
                >
                  <span
                    className="stack-row-label"
                    style={{ flexShrink: 0, width: 180, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-mute)', fontWeight: 600 }}
                  >
                    {category.label}
                  </span>
                  <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    {category.brands.map((brand, brandIndex) => (
                      <React.Fragment key={brand}>
                        {brandIndex > 0 && <span className="brand-separator" />}
                        <MotionItem
                          variants={motion ? brandVariants : undefined}
                          style={{ display: 'inline-block' }}
                        >
                          <span
                            className="brand-name"
                            style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em' }}
                          >
                            {brand}
                          </span>
                        </MotionItem>
                      </React.Fragment>
                    ))}
                  </div>
                </MotionItem>
                {rowIndex < partners.length - 1 && (
                  <MotionDivider
                    variants={motion ? {
                      hidden: { scaleX: 0 },
                      visible: { scaleX: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: rowIndex * 0.06 + 0.1 } },
                    } : undefined}
                    style={{ height: 1, background: 'var(--ink-faint)', transformOrigin: 'left' }}
                  />
                )}
              </React.Fragment>
            ))}
          </MotionDivider>

        </div>
      </div>
    </section>
  );
}

function Services({ t }) {
  const { useState, useEffect } = React;
  const { services } = window.SAM_DATA;
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const AnimatePresence = Motion.AnimatePresence;

  const [activeId, setActiveId] = useState(services[0].id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 899px)');
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const idx = services.findIndex((s) => s.id === activeId);
    if (idx === -1) return;
    const id = setTimeout(() => {
      setActiveId(services[(idx + 1) % services.length].id);
    }, 5000);
    return () => clearTimeout(id);
  }, [activeId, isMobile]);

  const activeService = services.find((s) => s.id === activeId) || services[0];

  const HeadingTag = motion ? motion.div : 'div';
  const MotionDiv = motion ? motion.div : 'div';

  const easing = [0.22, 1, 0.36, 1];

  const headingContainerProps = motion ? {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-80px' },
    variants: { hidden: {}, visible: {} },
  } : {};

  const kickerProps = motion ? {
    variants: {
      hidden: { opacity: 0, y: 16 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easing } },
    },
  } : {};

  const titleProps = motion ? {
    variants: {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.08, ease: easing } },
    },
  } : {};

  const subtitleProps = motion ? {
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.12, ease: easing } },
    },
  } : {};

  const listContainerProps = motion ? {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-80px' },
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
    },
  } : {};

  const listItemProps = motion ? {
    variants: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easing } },
    },
  } : {};

  const stageProps = motion ? {
    initial: { opacity: 0, x: 24 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.65, delay: 0.22, ease: easing },
  } : {};

  const stageContentProps = motion ? {
    key: activeId,
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12, transition: { duration: 0.22, ease: 'easeIn' } },
    transition: { duration: 0.45, ease: easing },
  } : { key: activeId };

  const accordionContentProps = (isOpen) => motion ? {
    initial: { height: 0, opacity: 0 },
    animate: isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.4, ease: easing },
    style: { overflow: 'hidden' },
  } : { style: { display: isOpen ? 'block' : 'none' } };

  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <style>{`
        .svc-row-btn {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
          padding: 22px 0 22px 24px;
          border: 0;
          border-bottom: 1px solid var(--ink-faint);
          background: transparent;
          cursor: pointer;
          text-align: left;
          position: relative;
          transition: background 0.2s;
        }
        .svc-row-btn:last-child { border-bottom: 0; }
        .svc-row-rail {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--ink-faint);
          border-radius: 2px;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .svc-row-btn.is-active .svc-row-rail { opacity: 1; }
        .svc-row-progress {
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          background: var(--accent);
          border-radius: 2px;
          height: 0;
          animation: svcRowProgress 5s linear forwards;
        }
        @keyframes svcRowProgress {
          0%   { height: 0%; }
          100% { height: 100%; }
        }
        .svc-row-num {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          font-weight: 400;
          color: var(--ink-mute);
          transition: color 0.25s;
        }
        .svc-row-btn.is-active .svc-row-num {
          color: var(--accent);
          font-weight: 700;
        }
        .svc-row-title {
          font-family: var(--font-heading);
          font-size: 26px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--ink-mute);
          transition: color 0.25s, transform 0.2s cubic-bezier(0.22,1,0.36,1);
          margin: 0;
        }
        .svc-row-btn.is-active .svc-row-title { color: var(--ink); }
        .svc-row-btn:not(.is-active):hover .svc-row-title {
          color: var(--ink-soft);
          transform: translateX(4px);
        }
        .svc-row-btn:not(.is-active):hover .svc-row-num { color: var(--ink-soft); }
        .svc-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
        }
        .svc-cta-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--accent);
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .svc-cta-link:hover::after { width: 100%; }
        .svc-cta-link:hover .svc-cta-arrow { transform: translateX(5px); }
        .svc-cta-arrow { display: inline-block; transition: transform 0.2s cubic-bezier(0.22,1,0.36,1); }
        .svc-chevron { display: inline-block; transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); font-style: normal; }
        .svc-chevron.is-open { transform: rotate(180deg); }
        @media (max-width: 1100px) {
          .svc-row-title { font-size: 22px !important; }
        }
        @media (max-width: 899px) {
          .svc-solutions-grid { grid-template-columns: 1fr !important; }
          .svc-stage { display: none !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px' }}>

        <HeadingTag {...headingContainerProps} style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
          <MotionDiv {...kickerProps} style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 700 }}>
            // NOS SOLUTIONS
          </MotionDiv>
          <MotionDiv {...titleProps}>
            <h2 style={{
              margin: '14px auto 0', fontFamily: 'var(--font-heading)',
              fontWeight: t.headingWeight, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em',
            }}>
              Une expertise <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>360°</em> pour votre IT.
            </h2>
          </MotionDiv>
          <MotionDiv {...subtitleProps}>
            <p style={{ margin: '18px auto 0', fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.55 }}>
              Du dépannage express à l'infrastructure réseau complexe, nous couvrons tous vos besoins technologiques sous un seul toit.
            </p>
          </MotionDiv>
        </HeadingTag>

        <div
          className="svc-solutions-grid"
          style={{
            marginTop: 72,
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '0 80px',
            alignItems: 'start',
          }}
        >
          <MotionDiv {...listContainerProps}>
            {services.map((svc, i) => {
              const isActive = svc.id === activeId;
              const num = String(i + 1).padStart(2, '0');

              if (isMobile) {
                return (
                  <MotionDiv key={svc.id} {...listItemProps}>
                    <button
                      className={'svc-row-btn' + (isActive ? ' is-active' : '')}
                      onClick={() => setActiveId(isActive ? null : svc.id)}
                      aria-expanded={isActive}
                    >
                      <span className="svc-row-num">{num}</span>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="svc-row-title">{svc.title}</span>
                        <em className={'svc-chevron' + (isActive ? ' is-open' : '')} style={{ marginLeft: 12, fontSize: 16, color: 'var(--ink-mute)', flexShrink: 0 }}>▾</em>
                      </div>
                    </button>
                    {AnimatePresence ? (
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <MotionDiv {...accordionContentProps(isActive)}>
                            <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                              <img
                                src={svc.image}
                                alt={svc.title}
                                loading="lazy"
                                style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 12 }}
                              />
                              <p style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{svc.title}</p>
                              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{svc.longDesc}</p>
                              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                {svc.features.map((f, fi) => (
                                  <li key={fi} style={{
                                    display: 'flex', alignItems: 'center', gap: 10,
                                    fontSize: 14, color: 'var(--ink-soft)',
                                    padding: '8px 0',
                                    borderTop: fi === 0 ? 'none' : '1px solid var(--ink-faint)',
                                  }}>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', flexShrink: 0 }}>→</span>
                                    {f}
                                  </li>
                                ))}
                              </ul>
                              <a href="#contact" className="svc-cta-link">
                                Discuter de ce besoin
                                <span className="svc-cta-arrow">→</span>
                              </a>
                            </div>
                          </MotionDiv>
                        )}
                      </AnimatePresence>
                    ) : (
                      isActive && (
                        <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                          <img
                            src={svc.image}
                            alt={svc.title}
                            loading="lazy"
                            style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 12 }}
                          />
                          <p style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{svc.title}</p>
                          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{svc.longDesc}</p>
                          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                            {svc.features.map((f, fi) => (
                              <li key={fi} style={{
                                display: 'flex', alignItems: 'center', gap: 10,
                                fontSize: 14, color: 'var(--ink-soft)',
                                padding: '8px 0',
                                borderTop: fi === 0 ? 'none' : '1px solid var(--ink-faint)',
                              }}>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', flexShrink: 0 }}>→</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                          <a href="#contact" className="svc-cta-link">
                            Discuter de ce besoin
                            <span className="svc-cta-arrow">→</span>
                          </a>
                        </div>
                      )
                    )}
                  </MotionDiv>
                );
              }

              return (
                <MotionDiv key={svc.id} {...listItemProps}>
                  <button
                    className={'svc-row-btn' + (isActive ? ' is-active' : '')}
                    onClick={() => setActiveId(svc.id)}
                    aria-pressed={isActive}
                  >
                    <span className="svc-row-rail" aria-hidden="true" />
                    {isActive && <span key={activeId} className="svc-row-progress" aria-hidden="true" />}
                    <span className="svc-row-num">{num}</span>
                    <span className="svc-row-title">{svc.title}</span>
                  </button>
                </MotionDiv>
              );
            })}
          </MotionDiv>

          <MotionDiv
            className="svc-stage"
            {...stageProps}
            style={{
              position: 'sticky',
              top: 100,
              background: '#fff',
              border: '1px solid var(--ink-faint)',
              borderRadius: 20,
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 22,
            }}
          >
            {AnimatePresence ? (
              <AnimatePresence mode="wait">
                <MotionDiv {...stageContentProps} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    loading="lazy"
                    style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 14 }}
                  />
                  <p style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{activeService.title}</p>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{activeService.longDesc}</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {activeService.features.map((f, fi) => (
                      <li key={fi} style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        fontSize: 14, color: 'var(--ink-soft)',
                        padding: '8px 0',
                        borderTop: fi === 0 ? 'none' : '1px solid var(--ink-faint)',
                      }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', flexShrink: 0 }}>→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="svc-cta-link">
                    Discuter de ce besoin
                    <span className="svc-cta-arrow">→</span>
                  </a>
                </MotionDiv>
              </AnimatePresence>
            ) : (
              <div key={activeId} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  loading="lazy"
                  style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 14 }}
                />
                <p style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{activeService.title}</p>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{activeService.longDesc}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {activeService.features.map((f, fi) => (
                    <li key={fi} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      fontSize: 14, color: 'var(--ink-soft)',
                      padding: '8px 0',
                      borderTop: fi === 0 ? 'none' : '1px solid var(--ink-faint)',
                    }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', flexShrink: 0 }}>→</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="svc-cta-link">
                  Discuter de ce besoin
                  <span className="svc-cta-arrow">→</span>
                </a>
              </div>
            )}
          </MotionDiv>
        </div>

        <div style={{ marginTop: 72, textAlign: 'center' }}>
          <a href="#solutions" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'var(--accent)', color: '#fff',
            padding: '16px 28px', borderRadius: 'var(--radius)',
            fontSize: 15, fontWeight: 600,
            boxShadow: 'var(--shadow-cta)',
            transition: 'transform .2s ease',
          }}>
            Découvrir toutes nos solutions en détail
            <span style={{ fontSize: 18 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, ClientLogos, Services, CTAButton, Logo });
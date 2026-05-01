// Sections part 1: Header, Hero, ClientLogos, Services
function Header({ t }) {
  const { brand } = window.SAM_DATA;
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: '#FBF9F4', borderBottom: `1px solid var(--ink-faint)` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '12px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="input/logo.png" alt={brand.name} style={{ height: 44, width: 'auto', display: 'block', mixBlendMode: 'multiply' }} />
        </a>
        <DropdownNav t={t} />
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
    id: 2, label: "L'entreprise",
    subMenus: [
      {
        title: 'À propos',
        items: [
          { label: 'Notre méthode', description: '4 étapes : audit, devis, mise en œuvre, suivi.', icon: NavI.cog, href: '#process' },
          { label: 'Notre équipe', description: 'Techniciens certifiés à Paris 14e.', icon: NavI.users, href: '#' },
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
    id: 3, label: 'Nos solutions',
    subMenus: [
      {
        title: 'Infrastructure',
        items: [
          { label: 'Équipements réseau', description: 'Switches, Wi-Fi pro, VPN.', icon: NavI.network, href: '#services' },
          { label: 'Téléphonie VOIP', description: 'IPBX cloud, intégration CRM.', icon: NavI.phone, href: '#services' },
          { label: 'Photocopieurs', description: 'MFP A3/A4 sécurisés.', icon: NavI.printer, href: '#services' },
        ],
      },
      {
        title: 'Sécurité',
        items: [
          { label: 'Vidéosurveillance', description: 'Caméras IP, NVR, RGPD.', icon: NavI.cam, href: '#services' },
          { label: 'Sécurité informatique', description: 'Firewall, antivirus, sauvegarde.', icon: NavI.shield, href: '#services' },
        ],
      },
      {
        title: 'Services IT',
        items: [
          { label: 'Dépannage', description: 'Intervention < 4h, 7j/7.', icon: NavI.wrench, href: '#services' },
          { label: 'Maintenance', description: 'Helpdesk, supervision 24/7.', icon: NavI.monitor, href: '#services' },
          { label: 'Vente de matériel', description: 'PC pro, serveurs, périphériques.', icon: NavI.building, href: '#services' },
        ],
      },
    ],
  },
  { id: 4, label: 'Nous contacter', link: '#contact' },
];

function DropdownNav({ t }) {
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
                onClick={(e) => { if (item.subMenus) e.preventDefault(); }}
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
                <DropdownPanel item={item} t={t} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function DropdownPanel({ item, t }) {
  return (
    <div style={{
      position: 'absolute', left: 0, top: '100%', paddingTop: 10, zIndex: 20,
    }}>
      <style>{`
        @keyframes nav-panel-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div style={{
        background: '#fff',
        border: '1px solid var(--ink-faint)',
        borderRadius: 16,
        padding: 22,
        boxShadow: '0 24px 60px -12px rgba(14,31,61,0.18), 0 4px 12px rgba(14,31,61,0.06)',
        animation: 'nav-panel-in 0.22s ease-out forwards',
        display: 'flex', gap: 36, whiteSpace: 'nowrap',
      }}>
        {item.subMenus.map((sub) => (
          <div key={sub.title} style={{ minWidth: 200 }}>
            <h3 style={{
              margin: '0 0 14px', fontSize: 11, fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--ink-mute)',
            }}>{sub.title}</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {sub.items.map((it) => (
                <li key={it.label}>
                  <a href={it.href || '#'} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    textDecoration: 'none', color: 'inherit',
                  }}
                  onMouseEnter={(e) => {
                    const icon = e.currentTarget.querySelector('[data-nav-icon]');
                    if (icon) { icon.style.background = 'var(--accent)'; icon.style.color = '#fff'; icon.style.borderColor = 'var(--accent)'; }
                  }}
                  onMouseLeave={(e) => {
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
                    <div style={{ lineHeight: 1.35 }}>
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
    <section style={{ position: 'relative', overflow: 'hidden', background: '#0a0a0b', color: '#fff', fontFamily: 'var(--font-body)' }}>
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

      {/* --- Infinite Carousel Background --- */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {photos.map((p, i) => (
          <div key={i}
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${p.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === index ? 0.45 : 0,
              transition: 'opacity 1.5s ease-in-out',
              filter: 'contrast(1.1) brightness(0.9)',
            }} />
        ))}
        <style>{`
          /* Zoom removed */
        `}</style>
      </div>
      {/* dark overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: `radial-gradient(ellipse at 30% 20%, ${t.accent}25, transparent 50%), radial-gradient(ellipse at 80% 80%, ${t.navy}30, transparent 50%), linear-gradient(180deg, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.85) 100%)` }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto', padding: '90px 32px 80px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }}>

          {/* --- LEFT --- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingTop: 12 }}>

            {/* Badge */}
            <div className="hero-fade-in hero-d100">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 999, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', padding: '7px 14px', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d4d4d8', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
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
              fontSize: 'clamp(40px, 5vw, 72px)',
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
                    background: `linear-gradient(135deg, #fff 0%, #fff 40%, ${t.accent} 100%)`,
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
            <p className="hero-fade-in hero-d300" style={{ margin: 0, maxWidth: 540, fontSize: 18, lineHeight: 1.55, color: '#a1a1aa' }}>
              {t.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="hero-fade-in hero-d400" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 4 }}>
              <a href={`tel:${brand.phoneRaw}`} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                borderRadius: 999, background: '#fff', color: '#0a0a0b',
                padding: '15px 28px', fontSize: 14, fontWeight: 700, letterSpacing: '0.01em',
                textDecoration: 'none', transition: 'transform 0.15s, background 0.15s',
              }} onMouseEnter={e => e.currentTarget.style.background = '#e4e4e7'} onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
                {t.ctaCopy}
                <I.arrow size={16} />
              </a>
              <a href="#services" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                borderRadius: 999, border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.05)',
                color: '#fff', padding: '15px 28px', fontSize: 14, fontWeight: 600,
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
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                  <div style={{ display: 'flex', height: 48, width: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 16, background: 'rgba(255,255,255,0.1)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)', color: '#fff' }}>
                    <I.target size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.1 }}>89+</div>
                    <div style={{ fontSize: 13, color: '#a1a1aa' }}>Avis Google · ★ 4,9/5</div>
                  </div>
                </div>

                {/* Progress: satisfaction */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 10 }}>
                    <span style={{ color: '#a1a1aa' }}>Satisfaction client</span>
                    <span style={{ color: '#fff', fontWeight: 600 }}>98%</span>
                  </div>
                  <div style={{ height: 6, width: '100%', borderRadius: 999, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
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
                <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', color: '#d4d4d8' }}>
                    <span style={{ position: 'relative', width: 8, height: 8 }}>
                      <span className="hero-ping" />
                      <span style={{ position: 'relative', display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
                    </span>
                    EN LIGNE
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', color: '#d4d4d8' }}>
                    <I.crown size={11} />
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
      <span style={{ fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>{value}</span>
      <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#71717a', marginTop: 4 }}>{label}</span>
    </div>
  );
}

function ClientLogos({ t }) {
  return (
    <section style={{ padding: '44px 56px', borderTop: '1px solid var(--ink-faint)', borderBottom: '1px solid var(--ink-faint)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 12, color: 'var(--ink-mute)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20, textAlign: 'center' }}>Ils nous font confiance · 89 avis Google ★ 4,9/5</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.55, fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 18, letterSpacing: '-0.01em' }}>
          <span>◢ Cabinet Lefèvre</span>
          <span>● Helio Imm.</span>
          <span style={{ fontStyle: 'italic' }}>Maison Borel</span>
          <span>◆ Lumen SAS</span>
          <span>● Veritex</span>
          <span style={{ fontStyle: 'italic' }}>Atelier Nord</span>
          <span>▲ Quartz</span>
        </div>
      </div>
    </section>);

}

function Services({ t }) {
  const { services } = window.SAM_DATA;
  return (
    <section id="services" style={{ padding: '100px 56px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60, alignItems: 'end', marginBottom: 56 }}>
          <div>
            <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', fontWeight: 600 }}>// 8 SERVICES</div>
            <h2 style={{ margin: '12px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em', color: "rgb(0, 0, 0)" }}>
              Tout ce dont votre <em style={{ fontStyle: t.headingItalic ? 'italic' : 'normal', color: "rgb(0, 0, 0)" }}>infrastructure</em> a besoin.
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.55, maxWidth: 540 }}>
            Réseau, téléphonie, vidéosurveillance, sécurité, dépannage, maintenance, matériel, impression. Un seul interlocuteur, une vraie expertise terrain à Paris depuis plus de dix ans.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {services.map((s, i) =>
          <div key={s.id} style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius)',
            padding: 24,
            boxShadow: 'var(--shadow-card)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
            minHeight: 240,
            display: 'flex', flexDirection: 'column'
          }} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-4px)';}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)';}}>
              <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: i % 2 === 0 ? 'var(--accent-soft)' : 'var(--navy-soft)', color: i % 2 === 0 ? 'var(--accent)' : 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.5, flex: 1 }}>{s.desc}</div>
              <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {s.features.slice(0, 2).map((f) =>
              <span key={f} style={{ fontSize: 11, padding: '3px 8px', background: 'var(--bg-warm)', borderRadius: 999, color: 'var(--ink-soft)' }}>{f}</span>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, { Header, Hero, ClientLogos, Services, CTAButton, Logo });
function SolutionsPage({ t }) {
  const { services } = window.SAM_DATA;
  return (
    <div style={{ padding: '120px 24px 80px', minHeight: '80vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Toutes nos <span style={{ color: 'var(--accent)' }}>Solutions</span>
          </h1>
          <p style={{ marginTop: 24, fontSize: 20, color: 'var(--ink-mute)', maxWidth: 600, margin: '24px auto 0' }}>
            Découvrez en détail l'ensemble de notre expertise pour l'infrastructure et la sécurité de votre entreprise.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          {services.map((svc) => (
            <div key={svc.id} style={{
              background: '#fff',
              borderRadius: 24,
              padding: 32,
              border: '1px solid var(--ink-faint)',
              boxShadow: '0 12px 40px -12px rgba(14,31,61,0.08)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                width: 56, height: 56, borderRadius: 16, background: 'var(--navy-soft)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--navy)', fontSize: 24, marginBottom: 24
              }}>
                {svc.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, margin: '0 0 16px', color: 'var(--ink)' }}>
                {svc.title}
              </h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 32, flexGrow: 1 }}>
                {svc.desc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {svc.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--ink-mute)', fontWeight: 500 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.SolutionsPage = SolutionsPage;

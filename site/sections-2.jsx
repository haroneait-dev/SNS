// Sections part 2: Stats, DarkSection, Process, Testimonials, Pricing, FAQ, CTA, Footer
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
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', fontWeight: 600 }}>// POURQUOI SAM NETWORK</div>
          <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em' }}>
            Un seul interlocuteur. <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>Aucun jargon.</em>
          </h2>
          <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.6, opacity: 0.85, maxWidth: 480 }}>
            Pas de hotline qui se renvoie la balle. Pas de devis interminables. Vous appelez, on intervient — souvent le jour même.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 14 }}>
            <a href={`tel:${brand.phoneRaw}`} style={{ background: 'var(--accent)', color: '#fff', padding: '14px 22px', borderRadius: 'var(--radius)', fontWeight: 600, fontSize: 15, display: 'inline-block' }}>Appeler maintenant</a>
            <a href={`mailto:${brand.email}`} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '14px 22px', borderRadius: 'var(--radius)', fontWeight: 500, fontSize: 15, display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)' }}>Écrire un email</a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {[
            ['Local', 'Basés à Paris 14e, ancrés en Île-de-France'],
            ['Réactif', 'Intervention sous 4h ouvrées en contrat'],
            ['Multi-services', '8 expertises, un point de contact unique'],
            ['Transparent', 'Devis détaillés, tarifs publiés'],
          ].map(([k, v], i) => (
            <div key={k} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius)', padding: 22 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 600, color: 'var(--accent)' }}>{k}</div>
              <div style={{ marginTop: 8, fontSize: 14, opacity: 0.8, lineHeight: 1.5 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
  return (
    <section style={{ padding: '90px 56px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '72px 64px', position: 'relative', overflow: 'hidden', color: '#fff' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: `radial-gradient(circle, ${t.accent}40, transparent 60%)`, pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '2fr 1fr', alignItems: 'center', gap: 60 }}>
          <div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em' }}>
              On regarde votre infra <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>gratuitement</em>.
            </h2>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, opacity: 0.85, maxWidth: 540 }}>
              Audit sur site, sans engagement, sans jargon. Vous repartez avec un état des lieux clair et nos préconisations chiffrées.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href={`tel:${brand.phoneRaw}`} style={{ background: 'var(--accent)', color: '#fff', padding: '16px 24px', borderRadius: 'var(--radius)', fontWeight: 700, fontSize: 16, textAlign: 'center', boxShadow: 'var(--shadow-cta)' }}>{brand.phone}</a>
            <a href={`mailto:${brand.email}`} style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '16px 24px', borderRadius: 'var(--radius)', fontWeight: 500, fontSize: 14, textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>{brand.email}</a>
          </div>
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
        <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 12, opacity: 0.55 }}>
          <span>© 2026 {brand.name} · SIRET XXX XXX XXX 00000</span>
          <span>Mentions légales · Politique de confidentialité · CGV</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Stats, DarkSection, Process, Testimonials, Pricing, FAQ, CTA, Footer });

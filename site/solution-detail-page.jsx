// Solution detail page — utilise le bento grid scroll pour le hero
// Chaque solution a sa propre galerie d'images Unsplash thématique.

const SOLUTION_GALLERIES = {
  reseaux: [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=85&auto=format&fit=crop',
  ],
  infogerance: [
    'https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?w=1400&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=85&auto=format&fit=crop',
  ],
  cyber: [
    'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1400&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&q=85&auto=format&fit=crop',
  ],
  video: [
    'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1400&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521207418485-99c705420785?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=1000&q=85&auto=format&fit=crop',
  ],
  acces: [
    'https://images.unsplash.com/photo-1606166187734-a4cb74079037?w=1400&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606166325683-e6deb697d301?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1000&q=85&auto=format&fit=crop',
  ],
  depannage: [
    'https://images.unsplash.com/photo-1568234928966-359c35dd8327?w=1400&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1000&q=85&auto=format&fit=crop',
  ],
};

// Per-solution editorial copy for the body
const SOLUTION_BODY = {
  reseaux: {
    intro: "Une infrastructure réseau bien pensée, c'est invisible — et c'est précisément pour ça qu'elle marche. Câblage structuré, baies organisées, équipements pro, Wi-Fi qui couvre vraiment tout le bâtiment.",
    pillars: [
      { n: '01', title: 'Câblage structuré', desc: 'Cat. 6, 6a ou 7 selon vos besoins en débit. Étiquetage normé, chemins de câbles propres, certification possible sur demande.' },
      { n: '02', title: 'Baie de brassage', desc: 'Switches, patch panels, onduleurs : organisés, étiquetés, documentés. Un schéma à jour à la fin de chaque chantier.' },
      { n: '03', title: 'Wi-Fi pro multi-bornes', desc: 'Couverture mesurée au site survey, bornes Ubiquiti / Aruba / Cisco Meraki, roaming transparent, VLAN invité séparé.' },
    ],
  },
  infogerance: {
    intro: "Vous appelez un seul numéro, vous payez un forfait clair, vous dormez tranquille. Supervision 24/7, mises à jour pilotées, helpdesk illimité — votre parc IT est sous contrôle.",
    pillars: [
      { n: '01', title: 'Supervision 24/7', desc: 'Monitoring proactif des serveurs, du réseau et des sauvegardes. On détecte avant que ça casse.' },
      { n: '02', title: 'Helpdesk illimité', desc: 'Vos collaborateurs nous appellent directement. Tickets, suivi, SLA garanti.' },
      { n: '03', title: 'Mises à jour & patchs', desc: 'Microsoft 365, Windows, macOS, applis métiers : on planifie, on teste, on déploie.' },
    ],
  },
  cyber: {
    intro: "Une attaque coûte en moyenne 400 000€ à une PME. La cybersécurité n'est plus optionnelle. On audite, on protège, on forme — pour que vous ne deveniez pas la prochaine cible.",
    pillars: [
      { n: '01', title: 'Pare-feu nouvelle génération', desc: 'Fortinet, Sophos, Stormshield : filtrage applicatif, IPS, anti-malware, VPN intégré.' },
      { n: '02', title: 'Antivirus EDR', desc: 'Bitdefender, SentinelOne : détection comportementale, isolation automatique, console centralisée.' },
      { n: '03', title: 'Audit + formation', desc: 'Test d\'intrusion, scan de vulnérabilités, sessions anti-phishing pour vos équipes.' },
    ],
  },
  video: {
    intro: "Caméras 4K, vision nocturne, IA de détection. La vidéosurveillance moderne dissuade, prouve, et se consulte depuis votre smartphone — en restant 100% RGPD.",
    pillars: [
      { n: '01', title: 'Caméras IP 4K', desc: 'Hikvision, Dahua, Axis. Vision nuit jusqu\'à 30m, anti-vandalisme IK10, étanchéité IP67.' },
      { n: '02', title: 'NVR sécurisé', desc: 'Enregistreur réseau dédié, RAID, archivage longue durée, accès restreint par rôle.' },
      { n: '03', title: 'Conformité RGPD', desc: 'Signalétique, registre, durées de conservation, déclaration CNIL : on s\'occupe de tout.' },
    ],
  },
  acces: {
    intro: "Qui rentre, quand, et avec quel droit ? Maîtrisez chaque accès depuis une interface unique. Couplé à une alarme télésurveillée, votre bâtiment est protégé 24/7.",
    pillars: [
      { n: '01', title: 'Badges & biométrie', desc: 'Lecteurs Suprema, ZKTeco, Salto. Empreinte, badge MIFARE, code, ou combinaison.' },
      { n: '02', title: 'Gestion centralisée', desc: 'Un seul logiciel pour tous vos sites. Création/révocation d\'accès en temps réel.' },
      { n: '03', title: 'Alarme télésurveillée', desc: 'Intervention sur alerte 24/7 par centrale agréée, levée de doute vidéo intégrée.' },
    ],
  },
  depannage: {
    intro: "Quand ça casse, vous appelez. On intervient sous 4h ouvrées en région parisienne — souvent dans la journée. Diagnostic transparent, devis clair, réparation propre.",
    pillars: [
      { n: '01', title: 'Intervention < 4h', desc: 'Astreinte 7j/7, équipe basée à Paris 14e. Pour les contrats de maintenance, c\'est garanti.' },
      { n: '02', title: 'Diagnostic transparent', desc: 'On vous explique ce qu\'on trouve, pourquoi, et combien ça coûte avant de toucher quoi que ce soit.' },
      { n: '03', title: 'Maintenance préventive', desc: 'Forfait mensuel pour anticiper les pannes. Audits réguliers, mises à jour, supervision.' },
    ],
  },
};

function SolutionDetailPage({ t, id }) {
  const { services, brand } = window.SAM_DATA;
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const svc = services.find((s) => s.id === id);

  // Reset scroll on entry
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!svc) {
    return (
      <div style={{ padding: '160px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 48 }}>Solution introuvable</h1>
        <p style={{ marginTop: 16, color: 'var(--ink-soft)' }}>
          La solution « {id} » n'existe pas.
        </p>
        <a href="#solutions" style={{ color: 'var(--accent)', fontWeight: 700, marginTop: 24, display: 'inline-block' }}>
          ← Retour aux solutions
        </a>
      </div>
    );
  }

  const gallery = SOLUTION_GALLERIES[id] || [svc.image, svc.image, svc.image, svc.image, svc.image];
  const body = SOLUTION_BODY[id] || { intro: svc.longDesc, pillars: [] };

  // Find prev/next solution for navigation at bottom
  const idx = services.findIndex((s) => s.id === id);
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];

  const fadeUp = motion ? {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  } : {};
  const FadeDiv = motion ? motion.div : 'div';

  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Bento scroll hero — uses 5 images for the default variant */}
      <ContainerScroll style={{ height: '320vh' }}>
        <BentoGrid
          variant="default"
          style={{
            position: 'sticky', left: 0, top: 0,
            height: '100vh', width: '100%', padding: 16,
            zIndex: 0,
          }}
        >
          {gallery.slice(0, 5).map((img, i) => (
            <BentoCell
              key={i}
              style={{ overflow: 'hidden', borderRadius: 16, boxShadow: '0 24px 60px rgba(14,31,61,0.18)' }}
            >
              <img
                src={img}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </BentoCell>
          ))}
        </BentoGrid>

        <ContainerScale>
          <div style={{ textAlign: 'center', maxWidth: 720, padding: '0 24px' }}>
            <div style={{
              display: 'inline-block',
              fontSize: 12, fontFamily: 'var(--font-mono)',
              color: 'var(--accent)', letterSpacing: '0.18em', fontWeight: 700,
              textTransform: 'uppercase',
              padding: '6px 14px',
              background: 'rgba(255,97,24,0.1)',
              borderRadius: 999,
              marginBottom: 18,
              backdropFilter: 'blur(8px)',
            }}>
              // Solution {String(idx + 1).padStart(2, '0')} / {services.length}
            </div>
            <h1 style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontWeight: t.headingWeight,
              fontSize: 'clamp(36px, 5.5vw, 72px)',
              lineHeight: 1.02,
              letterSpacing: '-0.035em',
              color: 'var(--ink)',
            }}>
              {svc.title}
            </h1>
            <p style={{
              margin: '20px auto 0', maxWidth: 540,
              fontSize: 17, lineHeight: 1.55,
              color: 'var(--ink-soft)',
            }}>
              {svc.desc}
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" style={{
                background: 'var(--accent)', color: '#fff',
                padding: '13px 24px', borderRadius: 'var(--radius)',
                fontWeight: 700, fontSize: 14, letterSpacing: '0.02em',
                boxShadow: 'var(--shadow-cta)', textDecoration: 'none',
              }}>
                Demander un devis →
              </a>
              <a href="#solutions" style={{
                background: 'rgba(255,255,255,0.7)',
                color: 'var(--ink)',
                padding: '13px 24px', borderRadius: 'var(--radius)',
                fontWeight: 600, fontSize: 14,
                border: '1px solid rgba(14,31,61,0.12)',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
              }}>
                ← Toutes les solutions
              </a>
            </div>
          </div>
        </ContainerScale>
      </ContainerScroll>

      {/* Editorial body */}
      <section style={{ padding: '120px 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <FadeDiv {...fadeUp}>
            <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase' }}>
              // Notre approche
            </div>
            <h2 style={{
              margin: '14px 0 24px',
              fontFamily: 'var(--font-heading)',
              fontWeight: t.headingWeight,
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
            }}>
              {body.intro}
            </h2>
          </FadeDiv>
        </div>
      </section>

      {/* 3 pillars */}
      <section style={{ padding: '60px 24px 120px', background: 'var(--bg-warm)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{
            display: 'grid', gap: 28,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}>
            {body.pillars.map((p, i) => (
              <FadeDiv
                key={p.n}
                {...fadeUp}
                transition={fadeUp.transition && { ...fadeUp.transition, delay: i * 0.1 }}
                style={{
                  position: 'relative',
                  padding: '36px 32px',
                  background: '#fff',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 12px 32px rgba(14,31,61,0.06), 0 0 0 1px rgba(14,31,61,0.05)',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
                  color: 'var(--accent)', letterSpacing: '0.18em',
                  marginBottom: 14,
                }}>
                  {p.n}
                </div>
                <h3 style={{
                  margin: '0 0 10px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: t.headingWeight,
                  fontSize: 22,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                }}>
                  {p.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                  {p.desc}
                </p>
              </FadeDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Features list */}
      <section style={{ padding: '120px 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }} className="solution-features-grid">
          <FadeDiv {...fadeUp}>
            <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase' }}>
              // Inclus
            </div>
            <h2 style={{
              margin: '14px 0 0',
              fontFamily: 'var(--font-heading)',
              fontWeight: t.headingWeight,
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
            }}>
              Ce que vous obtenez.
            </h2>
          </FadeDiv>
          <FadeDiv {...fadeUp}>
            <ul style={{
              margin: 0, padding: 0, listStyle: 'none',
              display: 'grid', gap: 18,
            }}>
              {svc.features.map((f, i) => (
                <li
                  key={f}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 16,
                    padding: '20px 24px',
                    background: 'var(--bg-warm)',
                    borderRadius: 'var(--radius)',
                    fontSize: 16, lineHeight: 1.5,
                    color: 'var(--ink)',
                  }}
                >
                  <span style={{
                    flexShrink: 0,
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'var(--accent)', color: '#fff',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </FadeDiv>
        </div>
        <style>{`
          @media (max-width: 880px) {
            .solution-features-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* CTA + nav */}
      <section style={{ padding: '90px 24px 60px', background: 'var(--bg-warm)' }}>
        <div style={{
          maxWidth: 1080, margin: '0 auto',
          background: 'var(--navy)', color: '#fff',
          borderRadius: 'var(--radius-lg)', padding: '56px 48px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -120, right: -120,
            width: 380, height: 380,
            background: `radial-gradient(circle, ${t.accent}40, transparent 60%)`,
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'relative', display: 'grid', gridTemplateColumns: '1.6fr 1fr',
            gap: 40, alignItems: 'center',
          }} className="solution-cta-grid">
            <div>
              <h2 style={{
                margin: 0, fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight,
                fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.025em',
              }}>
                Parlons de votre <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>{svc.title.toLowerCase().split(' ')[0]}</em>.
              </h2>
              <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.55, opacity: 0.85, maxWidth: 480 }}>
                Audit sur site gratuit, devis transparent en 24h. Sans engagement.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={`tel:${brand.phoneRaw}`} style={{
                background: 'var(--accent)', color: '#fff',
                padding: '15px 24px', borderRadius: 'var(--radius)',
                fontWeight: 700, fontSize: 16, textAlign: 'center',
                textDecoration: 'none', boxShadow: 'var(--shadow-cta)',
              }}>
                {brand.phone}
              </a>
              <a href={`mailto:${brand.email}`} style={{
                background: 'rgba(255,255,255,0.08)', color: '#fff',
                padding: '15px 24px', borderRadius: 'var(--radius)',
                fontWeight: 500, fontSize: 14, textAlign: 'center',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                {brand.email}
              </a>
            </div>
          </div>
        </div>

        {/* Prev / Next solution */}
        <div style={{
          maxWidth: 1080, margin: '60px auto 0',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
        }}>
          <a href={`#solution/${prev.id}`} style={{
            display: 'flex', flexDirection: 'column', gap: 8,
            padding: '24px 28px', background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid rgba(14,31,61,0.08)',
            textDecoration: 'none', color: 'inherit',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(-4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(14,31,61,0.08)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>← Précédent</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: t.headingWeight, color: 'var(--ink)' }}>{prev.title}</span>
          </a>
          <a href={`#solution/${next.id}`} style={{
            display: 'flex', flexDirection: 'column', gap: 8,
            padding: '24px 28px', background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid rgba(14,31,61,0.08)',
            textDecoration: 'none', color: 'inherit',
            textAlign: 'right',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(14,31,61,0.08)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Suivant →</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: t.headingWeight, color: 'var(--ink)' }}>{next.title}</span>
          </a>
        </div>
      </section>
    </div>
  );
}

window.SolutionDetailPage = SolutionDetailPage;

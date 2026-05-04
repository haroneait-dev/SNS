// Page dédiée "Pourquoi Sam Network Solutions" — route #pourquoi-nous-choisir
// Hero plein écran avec globe wireframe (DotGlobe) + sections complémentaires.

function WhyHero({ t }) {
  const { brand } = window.SAM_DATA;
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const MD = motion ? motion.div : 'div';
  const MH = motion ? motion.h1 : 'h1';
  const MP = motion ? motion.p : 'p';
  const MA = motion ? motion.a : 'a';

  return (
    <section style={{
      position: 'relative',
      minHeight: 'calc(100vh - 70px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #1f4e60 0%, var(--navy) 40%, #0f2e3a 100%)',
      color: '#fff',
      overflow: 'hidden',
      padding: '80px 32px',
    }}>
      {/* Globe en fond, centré */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(120vh, 1100px)',
          height: 'min(120vh, 1100px)',
          maxWidth: '100vw',
        }}>
          {window.DotGlobe ? <window.DotGlobe rotationSpeed={0.0018} color={t.accent || '#ff6118'} opacity={0.20} radius={1.45} /> : null}
        </div>
        {/* Halos */}
        <div style={{ position: 'absolute', top: '20%', left: '15%', width: 480, height: 480, background: `radial-gradient(circle, ${t.accent}1c, transparent 65%)`, filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '10%', width: 380, height: 380, background: 'radial-gradient(circle, rgba(52,119,143,0.30), transparent 65%)', filter: 'blur(50px)' }} />
        {/* Vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }} />
        {/* Grille subtile */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }} />
      </div>

      <div style={{ position: 'relative', maxWidth: 1100, textAlign: 'center', zIndex: 2 }}>
        {/* Badge */}
        <MD
          {...(motion ? { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.1 } } : {})}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '10px 22px',
            borderRadius: 999,
            background: `linear-gradient(90deg, ${t.accent}25, ${t.accent}10, ${t.accent}25)`,
            border: `1px solid ${t.accent}55`,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: `0 12px 32px ${t.accent}1f`,
          }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: t.accent, animation: 'sns-why-ping 1.8s cubic-bezier(0,0,.2,1) infinite' }} />
          <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: t.accent, letterSpacing: '0.22em', fontWeight: 700, textTransform: 'uppercase' }}>
            Pourquoi Sam Network Solutions
          </span>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: t.accent, animation: 'sns-why-ping 1.8s cubic-bezier(0,0,.2,1) infinite 0.7s' }} />
        </MD>

        {/* Titre */}
        <MH
          {...(motion ? { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: 0.25 } } : {})}
          style={{
            margin: '32px 0 0',
            fontFamily: 'var(--font-heading)',
            fontWeight: t.headingWeight,
            fontSize: 'clamp(48px, 8vw, 112px)',
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
          }}>
          <span style={{ display: 'block', fontWeight: 300, opacity: 0.78, fontSize: 'clamp(28px, 4.5vw, 64px)', marginBottom: 8 }}>
            Un partenaire IT
          </span>
          <span style={{ display: 'block', position: 'relative' }}>
            <span style={{
              background: `linear-gradient(135deg, ${t.accent} 0%, #ffb487 60%, ${t.accent}99 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: t.headingItalic ? 'italic' : 'normal',
              fontWeight: 700,
            }}>
              qui dit ce qu'il fait.
            </span>
            <MD
              {...(motion ? { initial: { width: 0 }, animate: { width: '70%' }, transition: { duration: 1.2, delay: 1.1, ease: 'easeOut' } } : {})}
              style={{
                position: 'absolute', left: '15%', bottom: -10,
                height: 4,
                background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
                borderRadius: 4,
                boxShadow: `0 0 18px ${t.accent}80`,
              }}
            />
          </span>
        </MH>

        {/* Sous-titre */}
        <MP
          {...(motion ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.7 } } : {})}
          style={{
            margin: '40px auto 0',
            maxWidth: 720,
            fontSize: 'clamp(17px, 1.7vw, 21px)',
            lineHeight: 1.6,
            opacity: 0.88,
          }}>
          Pas de hotline qui se renvoie la balle. Pas de devis interminables. Vous appelez,{' '}
          <span style={{
            color: '#fff',
            background: `linear-gradient(180deg, transparent 65%, ${t.accent}55 65%)`,
            padding: '0 4px',
            fontWeight: 600,
          }}>on intervient — souvent le jour même</span>.
        </MP>

        {/* CTAs */}
        <MD
          {...(motion ? { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.95 } } : {})}
          style={{ marginTop: 44, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <MA
            href={`tel:${brand.phoneRaw}`}
            {...(motion ? { whileHover: { y: -3, scale: 1.03 }, whileTap: { scale: 0.97 } } : {})}
            style={{
              position: 'relative',
              background: `linear-gradient(135deg, ${t.accent} 0%, #e54f0d 100%)`,
              color: '#fff',
              padding: '17px 30px',
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 16,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: `0 16px 36px ${t.accent}50, inset 0 1px 0 rgba(255,255,255,0.25)`,
              border: `1px solid ${t.accent}cc`,
            }}>
            <span>Appeler maintenant</span>
            <span>→</span>
          </MA>
          <MA
            href="#contact"
            {...(motion ? { whileHover: { y: -3, scale: 1.03, backgroundColor: 'rgba(255,255,255,0.16)' }, whileTap: { scale: 0.97 } } : {})}
            style={{
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
              padding: '17px 30px',
              borderRadius: 14,
              fontWeight: 600,
              fontSize: 16,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}>
            <span>⚡</span>
            <span>Devis gratuit en 24h</span>
          </MA>
        </MD>

        {/* Trust strip */}
        <MD
          {...(motion ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 1.4 } } : {})}
          style={{
            marginTop: 56,
            display: 'flex', justifyContent: 'center', gap: 'clamp(20px, 4vw, 60px)',
            flexWrap: 'wrap',
            paddingTop: 28,
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}>
          {[
            { v: '10+', k: 'ans à Paris' },
            { v: '< 4h', k: 'intervention' },
            { v: '5★', k: 'sur Google' },
            { v: '7j/7', k: '8h–20h' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, lineHeight: 1, color: t.accent }}>{s.v}</div>
              <div style={{ fontSize: 11, opacity: 0.7, marginTop: 5, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.k}</div>
            </div>
          ))}
        </MD>
      </div>

      <style>{`
        @keyframes sns-why-ping {
          0%   { box-shadow: 0 0 0 0 ${t.accent}90; }
          70%  { box-shadow: 0 0 0 14px ${t.accent}00; }
          100% { box-shadow: 0 0 0 0 ${t.accent}00; }
        }
      `}</style>
    </section>
  );
}

const WHY_PILLARS = [
  {
    icon: '📍',
    title: 'Local',
    head: 'Paris 14e — pas un call center',
    body: 'Boutique-atelier au 43 rue Froidevaux. Vous nous voyez, vous nous parlez, vous nous croisez. Nos techniciens sortent du métro Denfert ou Gaîté.',
    stat: { v: '75014', k: 'arrondissement' },
  },
  {
    icon: '⚡',
    title: 'Réactif',
    head: 'Sous 4h ouvrées en contrat',
    body: 'Hotline directe avec un humain qui connaît votre infra. Astreinte 7j/7, 8h–20h. Pas de ticket renvoyé à un niveau 2 invisible.',
    stat: { v: '< 4h', k: 'd\'intervention' },
  },
  {
    icon: '🔧',
    title: 'Multi-expertises',
    head: 'Un seul interlocuteur pour 8 métiers',
    body: 'Réseau, téléphonie, vidéosurveillance, alarme, contrôle d\'accès, cybersécurité, vente matériel, dépannage. Vous arrêtez de jongler entre prestataires.',
    stat: { v: '8', k: 'expertises IT' },
  },
  {
    icon: '📋',
    title: 'Transparent',
    head: 'Devis détaillé — zéro surprise',
    body: 'On vous explique ce qu\'on trouve, pourquoi, et combien ça coûte avant de toucher quoi que ce soit. Pas de jargon, pas de coûts cachés.',
    stat: { v: '0', k: 'frais cachés' },
  },
];

function WhyPillars({ t }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const MD = motion ? motion.div : 'div';

  return (
    <section style={{ padding: '120px 56px', background: 'var(--bg)', borderTop: '1px solid var(--ink-faint)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 72px' }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.14em', fontWeight: 600, textTransform: 'uppercase' }}>
            // 4 promesses, tenues
          </div>
          <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--ink)' }}>
            Ce qui nous distingue,{' '}
            <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>concrètement</em>.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {WHY_PILLARS.map((p, i) => (
            <MD
              key={p.title}
              {...(motion ? {
                initial: { opacity: 0, y: 28 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.2 },
                transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
                whileHover: { y: -4 },
              } : {})}
              style={{
                position: 'relative',
                background: '#fff',
                border: '1px solid var(--ink-faint)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 28px',
                boxShadow: '0 4px 16px rgba(14,31,61,0.06)',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                display: 'flex', flexDirection: 'column', gap: 18,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${t.accent}80`; e.currentTarget.style.boxShadow = `0 14px 40px ${t.accent}1a`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--ink-faint)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(14,31,61,0.06)'; }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `linear-gradient(135deg, ${t.accent}18, ${t.accent}08)`,
                border: `1px solid ${t.accent}30`,
                fontSize: 28,
              }}>{p.icon}</div>

              <div>
                <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase' }}>
                  {p.title}
                </div>
                <h3 style={{ margin: '8px 0 12px', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
                  {p.head}
                </h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                  {p.body}
                </p>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: 18, borderTop: '1px dashed var(--ink-faint)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: t.accent, letterSpacing: '-0.02em' }}>{p.stat.v}</span>
                  <span style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.stat.k}</span>
                </div>
              </div>
            </MD>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY_COMMITMENTS = [
  { num: '01', title: 'Devis gratuit, signé sous 24h', body: 'Vous décrivez. On chiffre. Vous signez seulement si vous êtes ok. Pas d\'engagement avant.' },
  { num: '02', title: 'Pas de jargon dans les rapports', body: 'Vous comprenez ce qu\'on fait, ce qu\'on a remplacé, et pourquoi. Comptes-rendus en français, pas en sigles réseau.' },
  { num: '03', title: 'Tarifs publiés, pas négociés', body: 'Maintenance, intervention ponctuelle, vente matériel : les grilles sont sur le site. Vous savez où vous mettez les pieds.' },
  { num: '04', title: 'Astreinte humaine 7j/7', body: 'Quand vous appelez, vous tombez sur quelqu\'un qui connaît votre infra. Pas un script, pas une IA, pas un bot.' },
  { num: '05', title: 'Garantie satisfaction 30 jours', body: 'Sur tout déploiement réseau ou installation vidéosurveillance. Si quelque chose cloche, on revient — sans facturer.' },
  { num: '06', title: 'Contrats sans tacite reconduction piégée', body: 'Préavis 1 mois, pas 3. Vous restez parce que ça marche, pas parce que c\'est galère de partir.' },
];

function WhyCommitments({ t }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const MD = motion ? motion.div : 'div';

  return (
    <section style={{ padding: '120px 56px', background: 'var(--bg-warm)', borderTop: '1px solid var(--ink-faint)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 64px' }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.14em', fontWeight: 600, textTransform: 'uppercase' }}>
            // Nos engagements
          </div>
          <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--ink)' }}>
            6 promesses écrites,{' '}
            <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>tenues par défaut</em>.
          </h2>
          <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
            Pas de petits caractères en bas du devis. Tout ce qui suit est appliqué à 100 % de nos clients.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {WHY_COMMITMENTS.map((c, i) => (
            <MD
              key={c.num}
              {...(motion ? {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, amount: 0.3 },
                transition: { duration: 0.5, delay: i * 0.06 },
              } : {})}
              style={{
                background: '#fff',
                border: '1px solid var(--ink-faint)',
                borderRadius: 'var(--radius)',
                padding: '24px 26px',
                display: 'flex', gap: 18, alignItems: 'flex-start',
                boxShadow: '0 2px 10px rgba(14,31,61,0.04)',
              }}>
              <div style={{
                flexShrink: 0,
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                fontWeight: 700,
                color: t.accent,
                letterSpacing: '0.05em',
                width: 36, height: 36, borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `${t.accent}12`,
                border: `1px solid ${t.accent}30`,
              }}>{c.num}</div>
              <div>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
                  {c.title}
                </h3>
                <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
                  {c.body}
                </p>
              </div>
            </MD>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCompare({ t }) {
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const MD = motion ? motion.div : 'div';

  const rows = [
    { k: 'Interlocuteur', them: 'Hotline + niveau 2 + commercial', us: 'Un binôme stable qui connaît votre infra' },
    { k: 'Devis', them: '7 à 15 jours, formule générique', us: 'Détaillé sous 24h, signé seulement si OK' },
    { k: 'Intervention', them: '48h-72h selon disponibilité', us: 'Sous 4h ouvrées en contrat de maintenance' },
    { k: 'Tarifs', them: 'Sur demande, négociation à chaque ligne', us: 'Grilles publiques, identiques pour tous' },
    { k: 'Reporting', them: 'Rapport mensuel en PDF illisible', us: 'Compte-rendu après chaque intervention, en français' },
    { k: 'Préavis contrat', them: '3 à 6 mois, tacite reconduction', us: '1 mois, pas de pénalité de sortie' },
  ];

  return (
    <section style={{ padding: '120px 56px', background: 'var(--bg)', borderTop: '1px solid var(--ink-faint)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.14em', fontWeight: 600, textTransform: 'uppercase' }}>
            // Comparatif honnête
          </div>
          <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 'clamp(36px, 4.5vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--ink)' }}>
            Sam Network Solutions{' '}
            <em style={{ color: 'var(--accent)', fontStyle: t.headingItalic ? 'italic' : 'normal' }}>vs.</em>{' '}
            les gros prestataires.
          </h2>
        </div>

        <MD
          {...(motion ? { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } } : {})}
          style={{
            background: '#fff',
            border: '1px solid var(--ink-faint)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(14,31,61,0.08)',
          }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'var(--bg-warm)', borderBottom: '1px solid var(--ink-faint)' }}>
            <div style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-mute)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Critère</div>
            <div style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-mute)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Prestataire classique</div>
            <div style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: 12, color: t.accent, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, background: `${t.accent}08` }}>Sam Network Solutions</div>
          </div>
          {rows.map((r, i) => (
            <div key={r.k} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              borderBottom: i < rows.length - 1 ? '1px solid var(--ink-faint)' : 'none',
            }}>
              <div style={{ padding: '20px 24px', fontWeight: 600, fontSize: 14, color: 'var(--ink)' }}>{r.k}</div>
              <div style={{ padding: '20px 24px', fontSize: 14, color: 'var(--ink-mute)' }}>
                <span style={{ color: '#c14e3c', marginRight: 8 }}>✕</span>{r.them}
              </div>
              <div style={{ padding: '20px 24px', fontSize: 14, color: 'var(--ink)', background: `${t.accent}06`, fontWeight: 500 }}>
                <span style={{ color: t.accent, marginRight: 8, fontWeight: 700 }}>✓</span>{r.us}
              </div>
            </div>
          ))}
        </MD>
      </div>
    </section>
  );
}

function WhyFinalCTA({ t }) {
  const { brand } = window.SAM_DATA;
  const Motion = window.Motion || window.FramerMotion || {};
  const motion = Motion.motion;
  const MA = motion ? motion.a : 'a';

  return (
    <section style={{
      position: 'relative',
      padding: '120px 56px',
      background: 'linear-gradient(135deg, var(--navy) 0%, #0f2e3a 100%)',
      color: '#fff',
      overflow: 'hidden',
    }}>
      {/* Demi-globe en bas */}
      <div style={{ position: 'absolute', left: '50%', bottom: '-60%', transform: 'translateX(-50%)', width: 'min(120vw, 1200px)', height: 'min(120vw, 1200px)', pointerEvents: 'none' }}>
        {window.DotGlobe ? <window.DotGlobe rotationSpeed={0.0014} color={t.accent || '#ff6118'} opacity={0.16} radius={1.5} /> : null}
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top, transparent 50%, rgba(0,0,0,0.4) 100%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: t.headingWeight, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          Prêt à parler à <em style={{ color: t.accent, fontStyle: t.headingItalic ? 'italic' : 'normal' }}>quelqu'un qui répond</em> ?
        </h2>
        <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.6, opacity: 0.85 }}>
          Décrivez votre besoin. Vous avez un devis détaillé sous 24h, signé seulement si tout est clair.
        </p>
        <div style={{ marginTop: 38, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <MA
            href={`tel:${brand.phoneRaw}`}
            {...(motion ? { whileHover: { y: -2, scale: 1.03 }, whileTap: { scale: 0.97 } } : {})}
            style={{
              background: `linear-gradient(135deg, ${t.accent} 0%, #e54f0d 100%)`,
              color: '#fff',
              padding: '17px 30px',
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 16,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: `0 16px 36px ${t.accent}50, inset 0 1px 0 rgba(255,255,255,0.25)`,
            }}>
            📞 {brand.phone}
          </MA>
          <MA
            href={`mailto:${brand.email}`}
            {...(motion ? { whileHover: { y: -2, scale: 1.03 }, whileTap: { scale: 0.97 } } : {})}
            style={{
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
              padding: '17px 30px',
              borderRadius: 14,
              fontWeight: 600,
              fontSize: 16,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}>
            ✉️ Demander un devis
          </MA>
        </div>
        <p style={{ marginTop: 28, fontSize: 13, opacity: 0.6, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
          7 jours sur 7 · 8h–20h · {brand.address}
        </p>
      </div>
    </section>
  );
}

function WhyPage({ t }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main>
      <WhyHero t={t} />
      <WhyPillars t={t} />
      <WhyCommitments t={t} />
      <WhyCompare t={t} />
      <WhyFinalCTA t={t} />
    </main>
  );
}

window.WhyPage = WhyPage;

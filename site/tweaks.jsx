// Massive tweaks panel
function SiteTweaks({ t, setTweak }) {
  const fonts = ['Fraunces', 'Instrument Serif', 'Inter', 'Space Grotesk', 'DM Sans'];
  const bodyFonts = ['Inter', 'DM Sans', 'Space Grotesk'];
  const palettes = [
    { name: 'Orange × Marine', accent: '#FF6B35', accentDeep: '#E04E1A', navy: '#0E2240', navyDeep: '#061226' },
    { name: 'Terracotta × Encre', accent: '#D9613A', accentDeep: '#B54A28', navy: '#1C2438', navyDeep: '#0B0F1C' },
    { name: 'Saffron × Ardoise', accent: '#E89C2C', accentDeep: '#C77F18', navy: '#222B3A', navyDeep: '#10151E' },
    { name: 'Coral × Bleu nuit', accent: '#F26B5C', accentDeep: '#D44E40', navy: '#0F1E3D', navyDeep: '#06112A' },
    { name: 'Rouille × Noir', accent: '#C24E1F', accentDeep: '#9C3E15', navy: '#16181D', navyDeep: '#0A0B0E' },
  ];
  const bgPalettes = [
    { name: 'Crème chaud', bg: '#FBF9F4', bgWarm: '#F2EDE3' },
    { name: 'Blanc pur', bg: '#FFFFFF', bgWarm: '#F5F5F5' },
    { name: 'Sable doux', bg: '#FAF6EE', bgWarm: '#EFE7D5' },
    { name: 'Gris perle', bg: '#F8F8F7', bgWarm: '#EFEFEC' },
  ];

  return (
    <TweaksPanel title="Tweaks site Sam Network">
      <TweakSection label="Palette accent" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 6 }}>
        {palettes.map(p => (
          <button key={p.name} title={p.name} onClick={() => setTweak({ accent: p.accent, accentDeep: p.accentDeep, navy: p.navy, navyDeep: p.navyDeep })} style={{ height: 26, borderRadius: 6, border: t.accent === p.accent ? '2px solid #29261b' : '0.5px solid rgba(0,0,0,0.15)', cursor: 'pointer', background: `linear-gradient(90deg, ${p.accent} 50%, ${p.navy} 50%)`, padding: 0 }}></button>
        ))}
      </div>
      <TweakColor label="Accent" value={t.accent} onChange={v => setTweak('accent', v)} />
      <TweakColor label="Accent profond" value={t.accentDeep} onChange={v => setTweak('accentDeep', v)} />
      <TweakColor label="Marine" value={t.navy} onChange={v => setTweak('navy', v)} />
      <TweakColor label="Marine profond" value={t.navyDeep} onChange={v => setTweak('navyDeep', v)} />

      <TweakSection label="Fonds" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
        {bgPalettes.map(p => (
          <button key={p.name} title={p.name} onClick={() => setTweak({ bg: p.bg, bgWarm: p.bgWarm })} style={{ height: 26, borderRadius: 6, border: t.bg === p.bg ? '2px solid #29261b' : '0.5px solid rgba(0,0,0,0.15)', cursor: 'pointer', background: `linear-gradient(90deg, ${p.bg} 50%, ${p.bgWarm} 50%)`, padding: 0 }}></button>
        ))}
      </div>
      <TweakColor label="Fond principal" value={t.bg} onChange={v => setTweak('bg', v)} />
      <TweakColor label="Fond chaud" value={t.bgWarm} onChange={v => setTweak('bgWarm', v)} />
      <TweakColor label="Encre" value={t.ink} onChange={v => setTweak('ink', v)} />

      <TweakSection label="Typographie" />
      <TweakSelect label="Police titres" value={t.fontHeading} options={fonts} onChange={v => setTweak('fontHeading', v)} />
      <TweakSelect label="Police corps" value={t.fontBody} options={bodyFonts} onChange={v => setTweak('fontBody', v)} />
      <TweakSlider label="Poids titres" value={t.headingWeight} min={400} max={700} step={100} onChange={v => setTweak('headingWeight', v)} />
      <TweakSlider label="Taille hero" value={t.headingSize} min={48} max={140} unit="px" onChange={v => setTweak('headingSize', v)} />
      <TweakSlider label="Taille corps" value={t.bodySize} min={14} max={20} unit="px" onChange={v => setTweak('bodySize', v)} />
      <TweakToggle label="Italique sur accents" value={t.headingItalic} onChange={v => setTweak('headingItalic', v)} />

      <TweakSection label="Forme & ombres" />
      <TweakSlider label="Rayon arrondis" value={t.radius} min={0} max={28} unit="px" onChange={v => setTweak('radius', v)} />
      <TweakRadio label="Ombres" value={t.shadow} options={['soft','sharp','flat','none']} onChange={v => setTweak('shadow', v)} />
      <TweakRadio label="Boutons" value={t.buttonStyle} options={['filled','outline']} onChange={v => setTweak('buttonStyle', v)} />

      <TweakSection label="Hero" />
      <TweakRadio label="Layout" value={t.heroLayout} options={['split','centered']} onChange={v => setTweak('heroLayout', v)} />
      <TweakText label="Titre hero" value={t.heroTitle} onChange={v => setTweak('heroTitle', v)} />
      <TweakText label="Sous-titre" value={t.heroSubtitle} onChange={v => setTweak('heroSubtitle', v)} />
      <TweakText label="Badge" value={t.badgeText} onChange={v => setTweak('badgeText', v)} />
      <TweakText label="CTA principal" value={t.ctaCopy} onChange={v => setTweak('ctaCopy', v)} />
      <TweakSlider label="Rotation card" value={t.heroCardRotate} min={-6} max={6} step={0.5} unit="°" onChange={v => setTweak('heroCardRotate', v)} />
      <TweakToggle label="Halo orange" value={t.showHaloOrange} onChange={v => setTweak('showHaloOrange', v)} />
      <TweakToggle label="Halo marine" value={t.showHaloNavy} onChange={v => setTweak('showHaloNavy', v)} />
      <TweakToggle label="Badge dispo" value={t.showBadge} onChange={v => setTweak('showBadge', v)} />

      <TweakSection label="Sections affichées" />
      <TweakToggle label="Logos clients" value={t.showLogos} onChange={v => setTweak('showLogos', v)} />
      <TweakToggle label="Stats" value={t.showStats} onChange={v => setTweak('showStats', v)} />
      <TweakToggle label="Section sombre" value={t.navySection} onChange={v => setTweak('navySection', v)} />
      <TweakToggle label="Méthode" value={t.showProcess} onChange={v => setTweak('showProcess', v)} />
      <TweakToggle label="Témoignages" value={t.showTestimonials} onChange={v => setTweak('showTestimonials', v)} />
      <TweakToggle label="FAQ" value={t.showFAQ} onChange={v => setTweak('showFAQ', v)} />

      <TweakSection label="Presets express" />
      <TweakButton onClick={() => setTweak({ accent: '#FF6B35', accentDeep: '#E04E1A', navy: '#0E2240', navyDeep: '#061226', bg: '#FBF9F4', bgWarm: '#F2EDE3', fontHeading: 'Fraunces', headingWeight: 500, radius: 12, shadow: 'soft' })}>Reset Soft Premium</TweakButton>
      <TweakButton onClick={() => setTweak({ accent: '#0E2240', accentDeep: '#061226', navy: '#FF6B35', navyDeep: '#E04E1A', fontHeading: 'Inter', headingWeight: 700, radius: 4, shadow: 'sharp' })}>Inversion</TweakButton>
      <TweakButton onClick={() => setTweak({ radius: 0, shadow: 'flat', headingWeight: 700, fontHeading: 'Space Grotesk' })}>Mode brut</TweakButton>
      <TweakButton onClick={() => setTweak({ radius: 24, shadow: 'soft', headingWeight: 400, fontHeading: 'Instrument Serif' })}>Mode élégant</TweakButton>
    </TweaksPanel>
  );
}

window.SiteTweaks = SiteTweaks;

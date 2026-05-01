const { useEffect, useState, memo } = window.React;

const orbitCss = `
@keyframes orbit-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes orbit-spin-reverse {
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
}
.orbit-path {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 1px dashed rgba(255,97,24, 0.25);
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.orbit-container:has(.orbit-item-content:hover) .orbit-item-wrapper,
.orbit-container:has(.orbit-item-content:hover) .orbit-item-content {
  animation-play-state: paused !important;
}
.orbit-item-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  animation: orbit-spin var(--duration) linear infinite;
  animation-delay: var(--delay);
}
.orbit-item-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(var(--radius) - 50%), -50%);
}
.orbit-item-content {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid var(--ink-faint);
  color: var(--accent);
  animation: orbit-spin-reverse var(--duration) linear infinite;
  animation-delay: var(--delay);
  width: var(--size);
  height: var(--size);
  position: relative;
  transition: transform 0.3s ease;
}
.orbit-item-wrapper:has(.orbit-item-content:hover) {
  z-index: 100;
}
.orbit-item-content:hover {
  transform: scale(1.15);
  z-index: 100;
  box-shadow: 0 15px 40px rgba(255,97,24,0.2);
}
.orbit-label {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--ink);
  color: #fff;
  padding: 4px 10px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.orbit-item-content:hover .orbit-label {
  opacity: 0; /* Hide small label when card shows */
}
.orbit-card {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(15px);
  width: 240px;
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  border: 1px solid var(--ink-faint);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}
.orbit-item-content:hover .orbit-card {
  opacity: 1;
  transform: translateX(-50%) translateY(25px);
}
.orbit-card h4 {
  margin: 0;
  font-family: var(--font-heading);
  color: var(--ink);
  font-size: 16px;
}
.orbit-card p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--ink-soft);
}
`;

// Insert CSS if not already present
if (!document.getElementById('orbiting-css')) {
  const style = document.createElement('style');
  style.id = 'orbiting-css';
  style.textContent = orbitCss;
  document.head.appendChild(style);
}

// Icons
const Icons = {
  Award: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
  ),
  Zap: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  ),
  ThumbsUp: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
  ),
  MapPin: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  Eye: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
  ),
  Headset: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
  ),
};

const orbitItems = [
  // Inner Orbit
  { id: '1', radius: 100, size: 48, speed: 12, icon: 'Award', label: '10+ Ans Exp.', angle: 0, desc: "Une décennie de savoir-faire technique au service des professionnels." },
  { id: '2', radius: 100, size: 48, speed: 12, icon: 'MapPin', label: 'Basés à Paris', angle: 120, desc: "Intervention rapide en Île-de-France depuis nos locaux du 14ème arrondissement." },
  { id: '3', radius: 100, size: 48, speed: 12, icon: 'ThumbsUp', label: '89+ Avis 4.9★', angle: 240, desc: "La satisfaction de nos clients est notre meilleure carte de visite." },
  
  // Outer Orbit
  { id: '4', radius: 180, size: 56, speed: 20, icon: 'Headset', label: 'Infogérance', angle: 45, reverse: true, desc: "Maintenance préventive, sauvegardes et support technique dédié pour votre TPE/PME." },
  { id: '5', radius: 180, size: 56, speed: 20, icon: 'Eye', label: 'Vidéosurveillance', angle: 165, reverse: true, desc: "Installation de caméras IP haute définition avec accès sécurisé sur smartphone." },
  { id: '6', radius: 180, size: 56, speed: 20, icon: 'Zap', label: 'Intervention < 4h', angle: 285, reverse: true, desc: "En cas d'urgence critique, nos techniciens sont sur place en un temps record." },
];

function OrbitingSkills() {
  const innerRadius = 100;
  const outerRadius = 180;

  return (
    <div className="orbit-container" style={{ position: 'relative', width: '100%', height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
      
      {/* Center Logo/Icon */}
      <div style={{
        width: 80, height: 80, borderRadius: '50%', background: 'var(--accent)', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 40px rgba(255,97,24,0.4)', zIndex: 5, position: 'relative'
      }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </div>

      {/* Orbit Paths */}
      <div className="orbit-path" style={{ width: innerRadius * 2, height: innerRadius * 2 }}></div>
      <div className="orbit-path" style={{ width: outerRadius * 2, height: outerRadius * 2 }}></div>

      {/* Items */}
      {orbitItems.map((item) => {
        const Icon = Icons[item.icon];
        const delay = -1 * (item.angle / 360) * item.speed;
        
        // If reverse, we use negative duration for CSS animation? 
        // Actually, animation-direction: reverse is cleaner.
        const spinDirection = item.reverse ? 'reverse' : 'normal';

        return (
          <div key={item.id} className="orbit-item-wrapper" style={{
            '--duration': `${item.speed}s`,
            '--delay': `${delay}s`,
            animationDirection: spinDirection
          }}>
            <div className="orbit-item-inner" style={{ '--radius': `${item.radius}px` }}>
              <div className="orbit-item-content" style={{ 
                '--size': `${item.size}px`,
                animationDirection: spinDirection 
              }}>
                <Icon />
                <div className="orbit-label">{item.label}</div>
                
                {/* Mini fiche */}
                <div className="orbit-card">
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

window.OrbitingSkills = OrbitingSkills;

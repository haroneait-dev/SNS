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
.orbit-container:hover .orbit-item-wrapper,
.orbit-container:hover .orbit-item-content {
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
.orbit-item-content:hover {
  transform: scale(1.15);
  z-index: 10;
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
  z-index: 50;
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
  Star: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  ),
  Clock: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
  ),
  Calendar: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
  ),
  MapPin: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  Camera: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
  ),
  Server: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
  ),
};

const orbitItems = [
  // Inner Orbit
  { id: '1', radius: 100, size: 48, speed: 12, icon: 'Calendar', label: '10+ Ans Exp.', angle: 0, desc: "Une décennie de savoir-faire technique au service des professionnels." },
  { id: '2', radius: 100, size: 48, speed: 12, icon: 'MapPin', label: 'Basés à Paris', angle: 120, desc: "Intervention rapide en Île-de-France depuis nos locaux du 14ème arrondissement." },
  { id: '3', radius: 100, size: 48, speed: 12, icon: 'Star', label: '89+ Avis 4.9★', angle: 240, desc: "La satisfaction de nos clients est notre meilleure carte de visite." },
  
  // Outer Orbit
  { id: '4', radius: 180, size: 56, speed: 20, icon: 'Server', label: 'Infogérance', angle: 45, reverse: true, desc: "Maintenance préventive, sauvegardes et support technique dédié pour votre TPE/PME." },
  { id: '5', radius: 180, size: 56, speed: 20, icon: 'Camera', label: 'Vidéosurveillance', angle: 165, reverse: true, desc: "Installation de caméras IP haute définition avec accès sécurisé sur smartphone." },
  { id: '6', radius: 180, size: 56, speed: 20, icon: 'Clock', label: 'Intervention < 4h', angle: 285, reverse: true, desc: "En cas d'urgence critique, nos techniciens sont sur place en un temps record." },
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

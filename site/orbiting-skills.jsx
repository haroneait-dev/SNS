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
  opacity: 1;
  transform: translateX(-50%) translateY(0);
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
  Wifi: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
  ),
  Camera: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
      <circle cx="12" cy="13" r="3"></circle>
    </svg>
  ),
  Phone: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
  Server: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  ),
  Shield: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  Wrench: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  ),
};

const orbitItems = [
  // Inner Orbit
  { id: '1', radius: 100, size: 48, speed: 12, icon: 'Wifi', label: 'Réseau', angle: 0 },
  { id: '2', radius: 100, size: 48, speed: 12, icon: 'Phone', label: 'Téléphonie IP', angle: 120 },
  { id: '3', radius: 100, size: 48, speed: 12, icon: 'Wrench', label: 'Dépannage', angle: 240 },
  
  // Outer Orbit
  { id: '4', radius: 180, size: 56, speed: 20, icon: 'Server', label: 'Infrastructure', angle: 45, reverse: true },
  { id: '5', radius: 180, size: 56, speed: 20, icon: 'Camera', label: 'Vidéosurveillance', angle: 165, reverse: true },
  { id: '6', radius: 180, size: 56, speed: 20, icon: 'Shield', label: 'Sécurité', angle: 285, reverse: true },
];

function OrbitingSkills() {
  const innerRadius = 100;
  const outerRadius = 180;

  return (
    <div style={{ position: 'relative', width: '100%', height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

window.OrbitingSkills = OrbitingSkills;

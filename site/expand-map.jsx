const { motion, AnimatePresence, useMotionValue, useTransform, useSpring } = window.Motion;

function LocationMap({
  location = "43 rue Froidevaux, 75014 Paris",
  coordinates = "48.8358° N, 2.3276° E",
  className = "",
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const containerRef = React.useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const googleMapsUrl = "https://www.google.com/maps/place/43+Rue+Froidevaux,+75014+Paris";

  return (
    <motion.div
      ref={containerRef}
      className={`relative cursor-pointer select-none ${className}`}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-white border border-[#34778f]/10"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          width: isExpanded ? 500 : 300,
          height: isExpanded ? 400 : 180,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              key="expanded-map"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Real Google Maps Iframe for 43 rue Froidevaux */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.273766299105!2d2.3254295768658826!3d48.835824871329584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671c0bd62df9d%3A0xc3911f6213791000!2s43%20Rue%20Froidevaux%2C%2075014%20Paris!5e0!3m2!1sfr!2sfr!4v1714589000000!5m2!1sfr!2sfr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Footer overlay in expanded state */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm border-t border-[#34778f]/10 flex justify-between items-center">
                <div>
                  <div className="text-[12px] font-bold text-[#34778f]">{location}</div>
                  <div className="text-[10px] text-[#34778f]/60">{coordinates}</div>
                </div>
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#ff6118] text-white text-[11px] font-bold py-2 px-4 rounded-lg shadow-lg shadow-[#ff6118]/20 hover:scale-105 transition-transform"
                  onClick={(e) => e.stopPropagation()}
                >
                  Ouvrir dans Google Maps →
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed-card"
              className="absolute inset-0 p-6 flex flex-col justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6118]/5 via-transparent to-[#34778f]/10 opacity-40" />
              
              <div className="flex items-start justify-between relative z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6118" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                </svg>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff6118]/10">
                  <div className="w-2 h-2 rounded-full bg-[#ff6118]" />
                  <span className="text-[10px] font-bold text-[#ff6118] uppercase tracking-wider">Sam Network</span>
                </div>
              </div>

              <div className="space-y-1 relative z-10">
                <h3 className="text-[#34778f] font-bold text-base tracking-tight">{location}</h3>
                <p className="text-[#34778f]/60 text-xs font-mono">{coordinates}</p>
                <motion.div className="h-1 bg-[#ff6118]/40" initial={{ scaleX: 0.3 }} animate={{ scaleX: isHovered ? 1 : 0.3 }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Hint */}
      {!isExpanded && (
        <motion.div 
          className="absolute -top-8 left-0 text-[10px] font-bold text-[#ff6118] uppercase tracking-widest"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
        >
          Cliquer pour voir la carte réelle
        </motion.div>
      )}
    </motion.div>
  );
}

window.LocationMap = LocationMap;

const { motion, AnimatePresence, useMotionValue, useTransform, useSpring } = window.Motion;

function LocationMap({
  location = "5 rue Bezout, 75014 Paris",
  coordinates = "48.8288° N, 2.3308° E",
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
          width: isExpanded ? 400 : 280,
          height: isExpanded ? 300 : 160,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6118]/5 via-transparent to-[#34778f]/10 opacity-40" />

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-[#F2EDE3]" />

              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                {/* Main roads */}
                <motion.line
                  x1="0%" y1="35%" x2="100%" y2="35%"
                  stroke="#ff6118" strokeWidth="4" strokeOpacity="0.2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.line
                  x1="0%" y1="65%" x2="100%" y2="65%"
                  stroke="#ff6118" strokeWidth="4" strokeOpacity="0.2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />

                {/* Vertical main roads */}
                <motion.line
                  x1="30%" y1="0%" x2="30%" y2="100%"
                  stroke="#34778f" strokeWidth="3" strokeOpacity="0.2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                <motion.line
                  x1="70%" y1="0%" x2="70%" y2="100%"
                  stroke="#34778f" strokeWidth="3" strokeOpacity="0.2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />

                {/* Secondary streets */}
                {[20, 50, 80].map((y, i) => (
                  <motion.line
                    key={`h-${i}`}
                    x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`}
                    stroke="#34778f" strokeWidth="1.5" strokeOpacity="0.1"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  />
                ))}
              </svg>

              {/* Marker */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.3 }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#ff6118" />
                  <circle cx="12" cy="9" r="3" fill="white" />
                </svg>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6">
          <div className="flex items-start justify-between">
            <motion.div animate={{ opacity: isExpanded ? 0 : 1 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6118" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
              </svg>
            </motion.div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff6118]/10">
              <div className="w-2 h-2 rounded-full bg-[#ff6118]" />
              <span className="text-[11px] font-bold text-[#ff6118] uppercase tracking-wider">Sam Network</span>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-[#34778f] font-bold text-base tracking-tight">{location}</h3>
            <AnimatePresence>
              {isExpanded && (
                <motion.p className="text-[#34778f]/60 text-xs font-mono" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  {coordinates}
                </motion.p>
              )}
            </AnimatePresence>
            <motion.div className="h-1 bg-[#ff6118]/40" initial={{ scaleX: 0.3 }} animate={{ scaleX: isHovered || isExpanded ? 1 : 0.3 }} />
          </div>
        </div>
      </motion.div>
      
      {/* Hint */}
      {!isExpanded && (
        <motion.div 
          className="absolute -top-8 left-0 text-[10px] font-bold text-[#ff6118] uppercase tracking-widest"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
        >
          Cliquer pour voir le plan
        </motion.div>
      )}
    </motion.div>
  );
}

window.LocationMap = LocationMap;

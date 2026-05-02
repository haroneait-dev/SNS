const { useState, useEffect, useRef, useCallback } = React;

// TextEffect — port of the framer-motion text reveal component.
// Splits children into segments (word/char) and animates them in with stagger.
// Re-triggers when its `key` prop (or content) changes.
function TextEffect({ children, per = 'word', preset = 'blur', className, style, as = 'span', delay = 0, stagger }) {
  const Motion = window.Motion;
  if (!Motion || !Motion.motion || typeof children !== 'string') {
    return React.createElement(as, { className, style }, children);
  }
  const motion = Motion.motion;

  const segments = per === 'char'
    ? children.split('')
    : per === 'line'
      ? children.split('\n')
      : children.split(/(\s+)/);

  const defaultStagger = per === 'char' ? 0.025 : per === 'word' ? 0.05 : 0.1;
  const stg = stagger ?? defaultStagger;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: stg, delayChildren: delay } },
  };

  const itemVariants = (() => {
    switch (preset) {
      case 'blur':
        return {
          hidden: { opacity: 0, filter: 'blur(12px)' },
          visible: { opacity: 1, filter: 'blur(0px)' },
        };
      case 'slide':
        return {
          hidden: { opacity: 0, y: 18 },
          visible: { opacity: 1, y: 0 },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.6 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'fade':
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  })();

  const MotionTag = motion[as] || motion.span;

  const renderSegment = (seg, i) => {
    if (per === 'char') {
      return React.createElement(motion.span, {
        key: i,
        variants: itemVariants,
        style: { display: 'inline-block', whiteSpace: 'pre' },
      }, seg);
    }
    if (per === 'line') {
      return React.createElement(motion.span, {
        key: i,
        variants: itemVariants,
        style: { display: 'block' },
      }, seg);
    }
    // word
    return React.createElement(motion.span, {
      key: i,
      variants: itemVariants,
      style: { display: 'inline-block', whiteSpace: 'pre' },
    }, seg);
  };

  return React.createElement(MotionTag, {
    initial: 'hidden',
    animate: 'visible',
    variants: containerVariants,
    className,
    style: { display: as === 'p' || as === 'h2' || as === 'h3' || as === 'div' ? 'block' : 'inline-block', whiteSpace: 'pre-wrap', ...style },
    'aria-label': children,
  }, segments.map(renderSegment));
}

const solutionsSlides = [
  {
    title: 'Vidéosurveillance',
    subtitle: 'Sécurité & Protection',
    description:
      'Systèmes de caméras haute définition avec intelligence artificielle. Surveillez vos locaux 24h/24, 7j/7 depuis votre smartphone ou centre de contrôle.',
    accent: '#ff6118',
    imageUrl: 'input/hero-vid.png',
  },
  {
    title: 'Infrastructure Réseau',
    subtitle: 'Connectivité & Performance',
    description:
      'Câblage structuré, bornes Wi-Fi professionnelles et serveurs haute performance. Une base solide pour tous vos services numériques.',
    accent: '#34778f',
    imageUrl: 'input/hero-net.png',
  },
  {
    title: 'Téléphonie IP',
    subtitle: 'Communication Moderne',
    description:
      'Solutions VoIP flexibles et économiques. Gérez vos appels, vos files d\'attente et votre standard depuis n\'importe où.',
    accent: '#ff6118',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop',
  },
  {
    title: 'Dépannage & SAV',
    subtitle: 'Réactivité & Expertise',
    description:
      'Intervention rapide sur site ou à distance. Nos techniciens certifiés résolvent vos problèmes matériels et logiciels en un temps record.',
    accent: '#34778f',
    imageUrl: 'input/hero-rep.png',
  },
];

function ElegantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;
  const TRANSITION_DURATION = 800;

  const goToSlide = useCallback(
    (index, dir) => {
      if (isTransitioning || index === currentIndex) return;
      setDirection(dir || (index > currentIndex ? 'next' : 'prev'));
      setIsTransitioning(true);
      setProgress(0);

      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % solutionsSlides.length;
    goToSlide(nextIndex, 'next');
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + solutionsSlides.length) % solutionsSlides.length;
    goToSlide(prevIndex, 'prev');
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = solutionsSlides[currentIndex];

  return (
    <div
      className="carousel-wrapper"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background accent wash */}
      <div
        className="carousel-bg-wash"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}12 0%, transparent 70%)`,
        }}
      />

      <div className="carousel-inner">
        {/* Left: Text Content */}
        <div className="carousel-content">
          <div className="carousel-content-inner">
            {/* Collection number */}
            <div className="carousel-collection-num visible">
              <span className="carousel-num-line" />
              <span className="carousel-num-text">
                <TextEffect
                  key={`num-${currentIndex}`}
                  per="char"
                  preset="fade"
                  delay={0}
                >
                  {`${String(currentIndex + 1).padStart(2, '0')} / ${String(solutionsSlides.length).padStart(2, '0')}`}
                </TextEffect>
              </span>
            </div>

            {/* Title */}
            <TextEffect
              key={`title-${currentIndex}`}
              as="h2"
              per="word"
              preset="blur"
              delay={0.05}
              stagger={0.05}
              className="carousel-title"
            >
              {currentSlide.title}
            </TextEffect>

            {/* Subtitle */}
            <TextEffect
              key={`sub-${currentIndex}`}
              as="p"
              per="word"
              preset="slide"
              delay={0.25}
              className="carousel-subtitle"
              style={{ color: currentSlide.accent }}
            >
              {currentSlide.subtitle}
            </TextEffect>

            {/* Description */}
            <TextEffect
              key={`desc-${currentIndex}`}
              as="p"
              per="word"
              preset="blur"
              delay={0.4}
              className="carousel-description"
            >
              {currentSlide.description}
            </TextEffect>

            {/* Navigation Arrows */}
            <div className="carousel-nav-arrows">
              <button
                onClick={goPrev}
                className="carousel-arrow-btn"
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="carousel-arrow-btn"
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image (all slides stacked, crossfade via opacity) */}
        <div className="carousel-image-container">
          <div className="carousel-image-frame visible">
            {solutionsSlides.map((slide, i) => (
              <img
                key={slide.imageUrl}
                src={slide.imageUrl}
                alt={slide.title}
                className={`carousel-image ${i === currentIndex ? 'is-active' : ''}`}
              />
            ))}
            <div
              className="carousel-image-overlay"
              style={{
                background: `linear-gradient(135deg, ${currentSlide.accent}15 0%, transparent 50%)`,
              }}
            />
          </div>

          {/* Decorative frame corner */}
          <div className="carousel-frame-corner carousel-frame-corner--tl" style={{ borderColor: currentSlide.accent }} />
          <div className="carousel-frame-corner carousel-frame-corner--br" style={{ borderColor: currentSlide.accent }} />
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="carousel-progress-bar">
        {solutionsSlides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-progress-item ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="carousel-progress-track">
              <div
                className="carousel-progress-fill"
                style={{
                  width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                  backgroundColor: index === currentIndex ? currentSlide.accent : undefined,
                }}
              />
            </div>
            <span className="carousel-progress-label">{slide.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

window.ElegantCarousel = ElegantCarousel;

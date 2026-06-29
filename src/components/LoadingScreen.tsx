import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    const isHomepage = location.pathname === '/' || location.pathname === import.meta.env.BASE_URL;

    if (!hasSeenLoader && isHomepage) {
      setIsLoading(true);
      sessionStorage.setItem('hasSeenLoader', 'true');
      
      const duration = 2000;
      const startTime = performance.now();
      
      const updateProgress = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const currentProgress = Math.min((elapsed / duration) * 100, 100);
        
        setProgress(Math.round(currentProgress));
        
        if (currentProgress < 100) {
          requestAnimationFrame(updateProgress);
        } else {
          // Small delay before fading out so user sees 100%
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
        }
      };
      
      requestAnimationFrame(updateProgress);
      
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [location.pathname]);

  // Clean up overflow if component unmounts unexpectedly
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const circleRadius = 60;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (progress / 100) * circleCircumference;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center w-full max-w-sm"
          >
            {/* Logo and Circular Progress Container */}
            <div className="relative w-40 h-40 flex items-center justify-center mb-8">
              
              {/* SVG Circular Progress Bar */}
              <svg 
                className="absolute inset-0 w-full h-full transform -rotate-90"
                viewBox="0 0 140 140"
              >
                {/* Background track circle */}
                <circle
                  cx="70"
                  cy="70"
                  r={circleRadius}
                  fill="transparent"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="3"
                />
                {/* Progress circle */}
                <circle
                  cx="70"
                  cy="70"
                  r={circleRadius}
                  fill="transparent"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={strokeDashoffset}
                  style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                />
              </svg>

              {/* Logo */}
              <img 
                src={`${import.meta.env.BASE_URL}assets/loading-logo.png`} 
                alt="Al-Ahad Dental Logo" 
                className="h-16 object-contain invert brightness-0 relative z-10"
              />
            </div>
            
            {/* Numeric Percentage */}
            <div className="text-white text-4xl font-light tracking-widest font-serif flex items-center justify-center min-w-[100px]">
              {progress}<span className="text-2xl opacity-50 ml-1">%</span>
            </div>
            
            <p className="mt-4 text-white/40 text-xs tracking-[0.3em] uppercase font-light text-center">
              Loading
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

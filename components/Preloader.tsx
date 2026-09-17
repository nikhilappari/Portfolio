"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Smooth 1 to 100 loading counter with realistic easing
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Accelerate towards the end
      const increment = current < 60 ? Math.floor(Math.random() * 4) + 2 : Math.floor(Math.random() * 6) + 4;
      current += increment;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setIsReady(true), 300);
      } else {
        setProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Unlock function
  const handleUnlock = () => {
    if (!isReady || isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  // Listen for scroll or swipe gestures once ready
  useEffect(() => {
    if (!isReady) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 15) {
        handleUnlock();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchEndY = e.touches[0].clientY;
      if (touchStartY - touchEndY > 30) {
        handleUnlock();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", "Space", "Enter"].includes(e.code)) {
        handleUnlock();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isReady]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] bg-[#07080a] text-white flex flex-col justify-between p-5 sm:p-14 select-none overflow-hidden"
        >
          {/* Subtle Ambient Red Glow in Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-[#ff2a3b]/10 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

          {/* Top Bar: Brand Logo & Status */}
          <div className="flex items-center justify-between z-10 w-full">
            <div className="flex items-center gap-1">
              <Image
                src="/na-brush-logo.png"
                alt="Nikhil Appari NA Logo"
                width={52}
                height={38}
                priority
                className="object-contain h-7 sm:h-9 w-auto filter drop-shadow-[0_0_12px_rgba(255,42,59,0.35)]"
              />
              <span className="text-[#ff2a3b] text-xl sm:text-2xl leading-none ml-1">•</span>
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-gray-400 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff2a3b] animate-ping" />
              <span>INITIALIZING PORTFOLIO</span>
            </div>
          </div>

          {/* Center Stage: Dynamic 1-100 Big Counter & Loading Bar */}
          <div className="flex flex-col items-center justify-center my-auto w-full max-w-xl mx-auto z-10 px-2">
            {/* Massive Percentage Display */}
            <div className="relative mb-4 sm:mb-6">
              <span className="text-7xl sm:text-9xl md:text-[130px] font-black font-sans tracking-tighter text-white tabular-nums">
                {progress}
              </span>
              <span className="text-xl sm:text-3xl font-mono text-[#ff2a3b] font-bold ml-1 sm:ml-2">
                %
              </span>
            </div>

            {/* Precision Loading Progress Bar */}
            <div className="w-full h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ff2a3b] via-[#ff4a5a] to-[#ff2a3b] shadow-[0_0_15px_#ff2a3b]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Status Label or Scroll Invitation */}
            <div className="h-12 flex items-center justify-center">
              {!isReady ? (
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-gray-400 tracking-widest uppercase text-center">
                  <Sparkles className="w-3.5 h-3.5 text-[#ff2a3b] animate-spin flex-shrink-0" />
                  <span>Loading Assets & AI Modules...</span>
                </div>
              ) : (
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={handleUnlock}
                  className="flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#ff2a3b] text-white font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest hover:bg-[#e02232] shadow-[0_0_25px_rgba(255,42,59,0.5)] transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <span>SCROLL OR CLICK TO ENTER</span>
                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
                </motion.button>
              )}
            </div>
          </div>

          {/* Bottom Bar: System Spec & Location */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-500 tracking-widest uppercase gap-1.5 sm:gap-2 z-10 text-center sm:text-left">
            <span>NIKHIL APPARI • AI / ML ENTHUSIAST</span>
            <span className="text-gray-400">ANDHRA PRADESH, INDIA</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

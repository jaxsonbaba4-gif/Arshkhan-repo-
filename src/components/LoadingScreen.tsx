import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { FlowerDoodle, HandDrawnStar, HandDrawnUnderline, PaperClip, WashiTapeStrip } from './HandDrawnSvg';
import { PressedBlossom, PressedDaisy } from './ScrapbookElements';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'gathering' | 'ready' | 'exit'>('gathering');

  useEffect(() => {
    // If reduced-motion is preferred, bypass immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    // Fabulous casual scrapbook timing (~1.5s total)
    const t1 = setTimeout(() => setStage('ready'), 850);
    const t2 = setTimeout(() => setStage('exit'), 1450);
    const t3 = setTimeout(() => onComplete(), 1800);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: stage === 'exit' ? 0 : 1,
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF9F5] paper-canvas-ruled px-4 select-none cursor-pointer overflow-hidden"
      onClick={onComplete}
      title="Click or press ESC to open immediately"
    >
      {/* Background Floating Pressed Florals */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 pointer-events-none opacity-80 hidden sm:block">
        <PressedDaisy className="w-20 h-32" rotation={-14} />
      </div>
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 pointer-events-none opacity-85 hidden sm:block">
        <PressedBlossom className="w-16 h-16" rotation={20} />
      </div>

      {/* Accessible Skip Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onComplete();
        }}
        type="button"
        className="absolute top-6 right-6 font-mono text-[11px] uppercase tracking-widest text-[#171613]/50 hover:text-[#171613] transition-all px-3.5 py-1.5 border border-[#171613]/20 rounded-full hover:border-[#171613]/50 hover:bg-[#171613]/5 cursor-pointer backdrop-blur-xs shadow-xs"
      >
        Skip [ESC]
      </button>

      {/* Casual Tilted Scrapbook Stack Composition */}
      <div className="relative max-w-sm sm:max-w-md w-full">
        {/* Layer 1: Background Mint Note (Tilted +3.5 deg) */}
        <motion.div
          initial={{ opacity: 0, rotate: 8, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 3.5, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#A9DEC9] rounded-3xl border-2 border-[#171613] shadow-sticky"
        >
          {/* Washi tape on mint note */}
          <div className="absolute -top-3.5 right-8">
            <WashiTapeStrip className="w-24 h-5" color="rgba(243, 168, 184, 0.85)" angle={-2} />
          </div>
        </motion.div>

        {/* Layer 2: Main Butter Yellow Note (Tilted -2.5 deg) with fabulous spring physics */}
        <motion.div
          initial={{ opacity: 0, y: 35, rotate: -8, scale: 0.88 }}
          animate={{
            opacity: stage === 'exit' ? 0 : 1,
            y: stage === 'exit' ? -20 : 0,
            rotate: stage === 'ready' ? -1 : -2.5,
            scale: stage === 'exit' ? 1.08 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 280,
            damping: 20,
          }}
          className="relative bg-[#F5D15B] text-[#171613] p-7 sm:p-9 rounded-3xl border-2 border-[#171613] shadow-paper overflow-visible"
        >
          {/* Paperclip holding the paper */}
          <div className="absolute -top-4 left-6 z-20">
            <PaperClip className="w-5 h-10 text-[#171613]/60" />
          </div>

          {/* Floral Blossom Accent in Top-Right Corner */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 15 }}
            transition={{ type: 'spring', stiffness: 240, damping: 18, delay: 0.15 }}
            className="absolute -top-5 -right-3 z-30 pointer-events-none"
          >
            <PressedBlossom className="w-14 h-14" rotation={15} />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-4 pt-1">
            {/* Handwritten intro */}
            <div className="inline-flex flex-col items-center">
              <span className="font-handwriting text-2xl sm:text-3xl text-[#171613]/85 -rotate-2">
                opening the sketchbook of
              </span>
              <HandDrawnUnderline className="w-28 h-3 text-[#171613]/60 -mt-1" />
            </div>

            {/* Enormous Tilted Name Header */}
            <div className="relative my-1">
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#171613] tracking-tight leading-none rotate-1 drop-shadow-xs">
                {siteConfig.name.toUpperCase()}
              </h1>
              <div className="absolute -top-3 -right-3 font-handwriting text-2xl text-[#171613] pointer-events-none">
                ✦
              </div>
            </div>

            {/* Role Tag & Flower doodle */}
            <div className="flex items-center gap-2">
              <div className="px-3.5 py-1 bg-[#FAF9F5] border-2 border-[#171613] rounded-full text-xs font-handwriting font-bold text-[#171613] shadow-xs -rotate-2">
                {siteConfig.profession}
              </div>
              <FlowerDoodle className="w-7 h-7" color="#171613" centerColor="#F3A8B8" />
            </div>

            {/* Dynamic Status with Casual Scrapbook Warmth */}
            <div className="min-h-12 flex flex-col items-center justify-center pt-2">
              <AnimatePresence mode="wait">
                {stage === 'gathering' ? (
                  <motion.div
                    key="gathering"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 font-handwriting text-2xl text-[#171613]"
                  >
                    <span>gathering little details & doodles...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="ready"
                    initial={{ opacity: 0, scale: 0.85, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                    className="flex items-center gap-2 font-handwriting text-2xl sm:text-3xl font-bold text-[#171613]"
                  >
                    <Sparkles className="w-5 h-5 text-[#171613]" />
                    <span>ready to explore!</span>
                    <HandDrawnStar className="w-5 h-5 text-[#171613]" fill="#FAF9F5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Casual Wavy Hand-Drawn Divider */}
            <div className="w-full flex justify-center pt-1">
              <svg viewBox="0 0 160 12" fill="none" className="w-36 h-3 text-[#171613]/35">
                <path d="M2 6 Q 20 1, 40 6 T 80 6 T 120 6 T 158 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

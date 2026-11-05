import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import {
  HandDrawnUnderline,
  BigHeroUnderline,
  FlowerDoodle,
  HandDrawnStar,
  HandDrawnArrow,
  PaperClip,
  WashiTapeStrip,
} from './HandDrawnSvg';
import {
  PressedDaisy,
  PressedBlossom,
  BotanicalSprig,
  DieCutSticker,
} from './ScrapbookElements';
import { VintageTicket } from './PinterestEphemera';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onScrollToPhilosophy: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPhilosophy }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-20 md:pt-20 md:pb-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto overflow-hidden sm:overflow-visible">
      {/* Artistic Studio Date & Folio Stamp */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 mb-6 sm:mb-8 border-b border-[#171613]/10 text-xs text-[#171613]/60">
        <div className="flex items-center gap-2">
          <span className="font-handwriting text-lg sm:text-xl font-bold text-[#171613]">
            Personal Journal & Visual Folio
          </span>
          <span aria-hidden="true" className="text-[#171613]/30">·</span>
          <span className="font-mono text-[11px] text-[#171613]/50 uppercase tracking-widest hidden sm:inline">
            Original Handcrafted Edition
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-handwriting text-base text-[#171613]/80">
          <span>autumn 2026</span>
          <Sparkles className="w-3.5 h-3.5 text-[#F5D15B]" />
        </div>
      </div>

      {/* Background Decorative Pressed Flora (Pure Scrapbook Ambience) */}
      <div className="hidden md:block absolute -top-2 -left-8 z-0 pointer-events-none opacity-80">
        <BotanicalSprig className="w-20 h-36" />
      </div>
      <div className="hidden lg:block absolute top-12 right-6 z-0 pointer-events-none opacity-90">
        <PressedDaisy className="w-24 h-40" rotation={8} />
      </div>

      <div className="relative z-10">
        {/* Step 1: Tiny handwritten introduction with decorative flower */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-3 mb-2 sm:mb-4 select-none"
        >
          <div className="inline-flex flex-col items-start">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#171613]/85 tracking-wide">
              my name is
            </span>
            <HandDrawnUnderline className="w-24 sm:w-28 h-3 text-[#171613]/70 -mt-1" />
          </div>

          <PressedBlossom className="w-8 h-8 sm:w-10 sm:h-10 -mt-2" rotation={-10} />
        </motion.div>

        {/* Step 2: The Enormous, Confident HARIS SYED Centerpiece */}
        <div className="relative select-none my-3 sm:my-6 pt-3 pb-2">
          {/* Typographer's Drafting Gridlines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-[#171613]/10 pointer-events-none" />
          <div className="absolute bottom-6 left-0 right-0 h-px bg-[#171613]/10 pointer-events-none" />
          <div className="hidden sm:flex items-center justify-between text-[9px] font-mono text-[#171613]/35 uppercase tracking-widest pb-1 pointer-events-none">
            <span>Specimen 01 · Display Grotesk</span>
            <span>Kerning: Optical · Weight: 800</span>
          </div>

          {/* Top-Right Decorative Star & Studio Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 12 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
            className="absolute -top-6 right-6 sm:right-28 md:right-40 z-20 pointer-events-none"
          >
            <HandDrawnStar className="w-8 h-8 sm:w-9 sm:h-9 text-[#171613]" fill="#F5D15B" />
          </motion.div>

          <div className="hidden sm:block absolute -top-8 right-0 z-20">
            <DieCutSticker
              text="GRAPHIC ARTIST"
              subtext="crafted by hand"
              bg="#F3A8B8"
              rotation={4}
            />
          </div>

          {/* The Hero Name Lockup with Fluid Responsive Impact */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block"
          >
            {(() => {
              const parts = siteConfig.name.toUpperCase().split(' ');
              const first = parts[0] || '';
              const rest = parts.slice(1).join(' ');
              return (
                <h1 className="font-display font-black tracking-[-0.045em] text-[#171613] text-[3.25rem] xs:text-[4rem] sm:text-[5.5rem] md:text-[6.75rem] lg:text-[7.75rem] leading-[0.88] select-all flex flex-col sm:flex-row sm:items-baseline sm:gap-4 lg:gap-6">
                  <span className="hover:text-[#171613] transition-colors relative">
                    {first}
                  </span>
                  {rest && (
                    <span className="hover:text-[#171613] transition-colors relative">
                      {rest}
                      <span className="absolute -top-3 sm:-top-5 -right-3 font-handwriting text-xl sm:text-2xl text-[#F5D15B] pointer-events-none">
                        ✦
                      </span>
                    </span>
                  )}
                </h1>
              );
            })()}

            {/* Large expressive brush underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="origin-left max-w-xs sm:max-w-xl md:max-w-2xl mt-2 sm:mt-3"
            >
              <BigHeroUnderline className="w-full h-5 sm:h-6 md:h-7" color="#F5D15B" />
            </motion.div>
          </motion.div>

          {/* Mint Sticky Note: visible on desktop right next to the name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
            transition={{ type: 'spring', stiffness: 240, damping: 18, delay: 0.5 }}
            className="hidden md:block absolute -top-6 right-2 md:right-4 z-20 w-48 bg-[#A9DEC9] text-[#171613] p-3.5 rounded-xl shadow-sticky border border-[#171613]/10 cursor-grab active:cursor-grabbing"
          >
            <div className="absolute -top-3 left-4">
              <PaperClip className="w-4 h-8 text-[#171613]/50" />
            </div>
            <div className="pt-2 text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#171613]/60 block">
                Sketchbook Note
              </span>
              <p className="font-handwriting text-lg font-bold leading-snug mt-0.5">
                designed with pencil, grid & human warmth
              </p>
            </div>
          </motion.div>

          {/* Botanical Flower Doodle near the right of the name */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 220, delay: 0.6 }}
            className="absolute -bottom-4 right-1 sm:right-16 md:right-32 pointer-events-none z-10"
          >
            <FlowerDoodle className="w-10 h-10 sm:w-12 sm:h-12" color="#171613" centerColor="#F5D15B" />
          </motion.div>

          {/* Playful Handwritten Annotation Arrow */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="hidden xl:flex items-center gap-2 absolute top-1/2 -left-28 -translate-y-1/2 pointer-events-none"
          >
            <span className="font-handwriting text-base text-[#171613]/70 -rotate-6">
              that's me!
            </span>
            <HandDrawnArrow className="w-10 h-6 text-[#171613]/60 rotate-12" />
          </motion.div>
        </div>

        {/* Mobile Sticky Note & Profession Lockup */}
        <div className="flex flex-wrap items-center gap-3 mt-4 sm:mt-6 mb-6">
          {/* Step 3: Layered handwritten note for profession: "Graphic Designer" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="relative inline-block"
          >
            <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#FAF9F5] border-2 border-[#171613] rounded-lg shadow-paper -rotate-1 hover:rotate-0 transition-transform">
              <WashiTapeStrip
                className="absolute -top-3 left-4 w-12 sm:w-14 h-4 bg-[#F3A8B8]/80"
                color="rgba(243, 168, 184, 0.85)"
                angle={2}
              />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#171613]/60">
                Craft:
              </span>
              <span className="font-handwriting text-xl sm:text-2xl md:text-3xl font-bold text-[#171613]">
                {siteConfig.profession}
              </span>
            </div>
          </motion.div>

          {/* Vintage Admission Ticket (Pinterest Scrapbook Ephemera) */}
          <div className="hidden sm:block">
            <VintageTicket rotation={-2} className="w-44 h-16 sm:w-48 sm:h-18" />
          </div>

          {/* Mobile-Friendly Mini Mint Sticky Note */}
          <div className="block md:hidden">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#A9DEC9] border border-[#171613]/20 rounded-lg shadow-xs text-xs font-handwriting font-bold text-[#171613] rotate-1">
              <FlowerDoodle className="w-4 h-4" />
              <span>pencil + ink + feeling</span>
            </div>
          </div>
        </div>

        {/* Step 4: The Core Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="max-w-2xl space-y-3"
        >
          <p className="font-display text-lg sm:text-2xl md:text-3xl font-medium text-[#171613] leading-snug tracking-tight text-balance">
            {siteConfig.tagline}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <span className="w-8 h-px bg-[#171613]/30" />
            <p className="font-mono text-[11px] sm:text-xs text-[#171613]/60 uppercase tracking-widest">
              Simple over clever · Meaning over decoration
            </p>
          </div>
        </motion.div>

        {/* Interactive Cue to Scroll & Touch the Sketchbook */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="pt-8 sm:pt-10 flex items-center gap-3"
        >
          <button
            onClick={onScrollToPhilosophy}
            type="button"
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#171613]/25 hover:border-[#171613] hover:bg-[#171613]/5 transition-all text-xs font-mono text-[#171613]/80 hover:text-[#171613] cursor-pointer shadow-xs active:scale-95"
          >
            <span className="font-handwriting text-base text-[#171613]">
              flip to journal notes & stickers
            </span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

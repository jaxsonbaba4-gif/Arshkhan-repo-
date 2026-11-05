import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { Copy, Check, Sparkles } from 'lucide-react';

/**
 * Pinterest-inspired tactile ephemera:
 * - Coffee cup ring stain
 * - Vintage designer admission ticket
 * - Pantone paper swatch card with one-click hex copying
 * - Torn paper edge dividers
 */

// Authentic watercolor / coffee mug ring stain
export const CoffeeRingStain: React.FC<{ className?: string; opacity?: number }> = ({
  className = "w-36 h-36",
  opacity = 0.12,
}) => (
  <svg
    viewBox="0 0 140 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
    style={{ opacity }}
    aria-hidden="true"
  >
    {/* Outer coffee ring with imperfect pooling */}
    <path
      d="M70 12 C98 11, 126 36, 127 68 C128 100, 102 127, 70 128 C36 129, 12 102, 13 70 C14 36, 38 13, 70 12Z"
      stroke="#795548"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="40 12 80 18"
      filter="blur(0.6px)"
    />
    <path
      d="M68 18 C94 17, 120 39, 121 68 C122 96, 98 121, 68 122 C38 123, 18 99, 19 70 C20 40, 42 19, 68 18Z"
      stroke="#5D4037"
      strokeWidth="1.8"
      opacity="0.6"
    />
    {/* Inner puddle splashes */}
    <circle cx="100" cy="45" r="3" fill="#6D4C41" opacity="0.4" filter="blur(0.5px)" />
    <circle cx="40" cy="98" r="2.5" fill="#6D4C41" opacity="0.3" filter="blur(0.5px)" />
    <circle cx="95" cy="100" r="1.5" fill="#6D4C41" opacity="0.5" />
  </svg>
);

// Vintage Designer Ticket Stub: "ADMIT ONE: CREATIVE FOLIO"
export const VintageTicket: React.FC<{ className?: string; rotation?: number }> = ({
  className = "w-48 h-20",
  rotation = -4,
}) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 0 }}
    style={{ transform: `rotate(${rotation}deg)` }}
    className={`relative bg-[#F5D15B] text-[#171613] p-2.5 rounded-sm shadow-md border-2 border-dashed border-[#171613]/40 flex items-center justify-between cursor-pointer select-none ${className}`}
  >
    {/* Left notched circle */}
    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FAF9F5] border-r-2 border-dashed border-[#171613]/40" />
    {/* Right notched circle */}
    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FAF9F5] border-l-2 border-dashed border-[#171613]/40" />

    {/* Ticket Content */}
    <div className="flex-1 px-3 text-center border-r border-dashed border-[#171613]/30">
      <span className="font-mono text-[8px] uppercase tracking-widest text-[#171613]/60 block">
        SPECIAL PASS
      </span>
      <span className="font-display font-extrabold text-xs tracking-tight uppercase text-[#171613]">
        CREATIVE FOLIO
      </span>
      <span className="font-handwriting text-xs text-[#171613]/80 block">
        {siteConfig.name.toLowerCase()} studio
      </span>
    </div>

    <div className="px-2 text-center">
      <span className="font-mono font-bold text-xs tracking-wider text-[#171613]">
        № 0426
      </span>
      <span className="font-mono text-[7px] text-[#171613]/60 block uppercase">
        ALL ACCESS
      </span>
    </div>
  </motion.div>
);

// Interactive Pantone / Color Palette Swatch Card
export const DesignerColorSwatches: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const swatches = [
    { name: 'Paper White', hex: '#FAF9F5', role: 'Canvas', light: true },
    { name: 'Butter Yellow', hex: '#F5D15B', role: 'Warmth', light: false },
    { name: 'Soft Mint', hex: '#A9DEC9', role: 'Flora', light: false },
    { name: 'Blush Pink', hex: '#F3A8B8', role: 'Blossom', light: false },
    { name: 'Lavender', hex: '#C8B8F2', role: 'Twilight', light: false },
    { name: 'Ink Black', hex: '#171613', role: 'Contrast', light: false },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div className="relative bg-[#FAF9F5] border-2 border-[#171613] rounded-2xl p-4 sm:p-5 shadow-paper max-w-xl mx-auto my-6 sm:my-8">
      {/* Top washi tape */}
      <div className="absolute -top-3 left-8 w-24 h-5 bg-[#A9DEC9]/80 backdrop-blur-xs -rotate-2 border-x border-dashed border-[#171613]/25" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#171613]/10">
        <div>
          <span className="font-display font-bold text-xs text-[#171613] tracking-tight uppercase">
            Curated Color Swatches
          </span>
          <span className="font-mono text-[10px] text-[#171613]/50 block">
            {siteConfig.name.toLowerCase()} signature palette · click to copy hex
          </span>
        </div>
        <Sparkles className="w-4 h-4 text-[#F5D15B]" />
      </div>

      {/* Swatch Chips */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
        {swatches.map((s) => (
          <motion.button
            key={s.hex}
            onClick={() => handleCopy(s.hex)}
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            className="flex flex-col rounded-xl overflow-hidden border border-[#171613]/20 shadow-xs bg-white text-left transition-all cursor-pointer group"
          >
            {/* Color block */}
            <div
              style={{ backgroundColor: s.hex }}
              className="h-14 sm:h-16 w-full flex items-center justify-center relative border-b border-[#171613]/10"
            >
              {copiedHex === s.hex ? (
                <div className="bg-[#171613] text-white px-1.5 py-0.5 rounded-full text-[9px] font-mono flex items-center gap-1 shadow-xs">
                  <Check className="w-2.5 h-2.5 text-emerald-400" />
                  <span>Copied</span>
                </div>
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-75 transition-opacity text-[#171613]" />
              )}
            </div>

            {/* Label block */}
            <div className="p-1.5">
              <span className="font-mono text-[10px] font-bold text-[#171613] block leading-none truncate">
                {s.hex}
              </span>
              <span className="font-handwriting text-xs text-[#171613]/70 block leading-tight truncate">
                {s.name}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

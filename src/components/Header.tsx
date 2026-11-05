import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { PenTool, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
  isDoodleActive: boolean;
  onToggleDoodle: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onContactClick,
  isDoodleActive,
  onToggleDoodle,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xs bg-[#FAF9F5]/90 border-b border-[#171613]/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-18 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Monogram & Signature */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#"
            className="group flex items-center gap-2 sm:gap-2.5 focus-visible:outline-2 focus-visible:outline-[#171613] rounded-md"
            title="Haris Syed — Return to top"
          >
            {/* Custom HS Monogram Stamp */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#171613] text-[#FAF9F5] flex items-center justify-center font-display font-bold text-xs sm:text-sm tracking-tighter shadow-xs group-hover:rotate-3 transition-transform">
              <span>{siteConfig.initials}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-[#171613] leading-none whitespace-nowrap">
                {siteConfig.name}
              </span>
              <span className="font-handwriting text-xs sm:text-sm text-[#171613]/70 leading-tight whitespace-nowrap">
                {siteConfig.profession}
              </span>
            </div>
          </a>
        </div>

        {/* Zone 2: Editorial Sketchbook Marker (Clean unboxed metadata) */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#171613]/60 tracking-wider">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#171613]/30" />
          <span>Vol. 2026</span>
          <span aria-hidden="true">·</span>
          <span>Sketchbook Edition</span>
        </div>

        {/* Zone 3: Actions (Doodle pad toggle + Contact CTA) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Interactive Doodle Mode Toggle */}
          <button
            onClick={onToggleDoodle}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-lg border transition-all duration-200 cursor-pointer ${
              isDoodleActive
                ? 'bg-[#F5D15B] text-[#171613] border-[#171613] shadow-xs'
                : 'bg-transparent text-[#171613]/80 border-[#171613]/20 hover:border-[#171613]/50 hover:bg-[#171613]/5'
            }`}
            title="Toggle sketchbook doodle pen to draw notes on the paper"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span className="hidden xs:inline whitespace-nowrap">
              {isDoodleActive ? 'Doodling' : 'Doodle'}
            </span>
          </button>

          {/* Primary Contact Action */}
          <button
            onClick={onContactClick}
            type="button"
            className="group flex items-center gap-1.5 px-4 py-2 text-xs font-display font-semibold uppercase tracking-wider text-[#FAF9F5] bg-[#171613] rounded-lg shadow-xs hover:bg-[#171613]/90 hover:shadow-sm active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <span>Say Hello</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};

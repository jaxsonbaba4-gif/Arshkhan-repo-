import React, { useState } from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { WashiTapeStrip, HandDrawnStar } from './HandDrawnSvg';
import { PressedDaisy, PressedBlossom, BotanicalSprig } from './ScrapbookElements';
import { RotateCcw, Move, Sparkles } from 'lucide-react';

interface PhilosophyNotesProps {
  id?: string;
}

export const PhilosophyNotes: React.FC<PhilosophyNotesProps> = ({ id = "philosophies" }) => {
  const [resetKey, setResetKey] = useState(0);
  const [activeNote, setActiveNote] = useState<string | null>(null);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'butter':
        return {
          bg: 'bg-[#F5D15B]',
          border: 'border-[#171613]/20',
          tape: 'rgba(243, 168, 184, 0.85)',
          stamp: '#F3A8B8',
        };
      case 'mint':
        return {
          bg: 'bg-[#A9DEC9]',
          border: 'border-[#171613]/20',
          tape: 'rgba(245, 209, 91, 0.9)',
          stamp: '#F5D15B',
        };
      case 'lavender':
        return {
          bg: 'bg-[#C8B8F2]',
          border: 'border-[#171613]/20',
          tape: 'rgba(169, 222, 201, 0.9)',
          stamp: '#A9DEC9',
        };
      case 'blush':
        return {
          bg: 'bg-[#F3A8B8]',
          border: 'border-[#171613]/20',
          tape: 'rgba(200, 184, 242, 0.9)',
          stamp: '#C8B8F2',
        };
      default:
        return {
          bg: 'bg-[#FAF9F5]',
          border: 'border-[#171613]/20',
          tape: 'rgba(245, 209, 91, 0.85)',
          stamp: '#F5D15B',
        };
    }
  };

  return (
    <section id={id} className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto overflow-hidden sm:overflow-visible">
      {/* Background Decorative Pressed Flora */}
      <div className="hidden lg:block absolute -top-8 -left-6 z-0 pointer-events-none opacity-80">
        <BotanicalSprig className="w-24 h-40" />
      </div>
      <div className="hidden xl:block absolute top-1/2 -right-10 z-0 pointer-events-none opacity-90">
        <PressedDaisy className="w-24 h-40" rotation={-12} />
      </div>

      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#171613]/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-handwriting text-lg sm:text-xl text-[#171613]/85 font-bold">
              studio principles & beliefs
            </span>
            <span aria-hidden="true" className="text-[#171613]/30">·</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#171613]/50">
              handwritten notes
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#171613]">
            Curated Thoughts & Working Notes
          </h2>
        </div>

        {/* Tactile controls: Drag hint + Reset button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#171613]/60 bg-[#171613]/5 px-3 py-1.5 rounded-full">
            <Move className="w-3.5 h-3.5" />
            <span>Drag sticky notes anywhere</span>
          </div>
          <button
            onClick={() => setResetKey((k) => k + 1)}
            type="button"
            className="flex items-center gap-1.5 text-xs font-mono text-[#171613]/75 hover:text-[#171613] hover:bg-[#171613]/5 px-3 py-1.5 rounded-full border border-[#171613]/20 transition-all cursor-pointer shadow-xs active:scale-95"
            title="Reset sticky notes to original desk positions"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Desk</span>
          </button>
        </div>
      </div>

      {/* Grid of Tactile Draggable Sticky Notes */}
      <div
        key={resetKey}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 pt-2 relative z-10"
      >
        {siteConfig.philosophies.map((note, index) => {
          const style = getColorClasses(note.color);
          const isSelected = activeNote === note.id;

          return (
            <motion.div
              key={note.id}
              drag
              dragConstraints={{ left: -25, right: 25, top: -25, bottom: 25 }}
              dragElastic={0.15}
              whileDrag={{ scale: 1.05, zIndex: 40, cursor: 'grabbing' }}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: note.rotation }}
              viewport={{ once: true, margin: '-20px' }}
              whileHover={{ scale: 1.03, rotate: 0, zIndex: 30 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: index * 0.08,
              }}
              onClick={() => setActiveNote(isSelected ? null : note.id)}
              className={`relative ${style.bg} ${style.border} text-[#171613] p-6 rounded-2xl shadow-sticky border-2 transition-shadow cursor-grab active:cursor-grabbing select-none flex flex-col justify-between min-h-[230px]`}
            >
              {/* Realistic Washi Tape holding the note */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                <WashiTapeStrip
                  className="w-20 h-5"
                  color={style.tape}
                  angle={index % 2 === 0 ? -1.5 : 2}
                />
              </div>

              {/* Little Pressed Blossom on alternate notes */}
              {index % 2 === 1 && (
                <div className="absolute -bottom-3 -right-2 pointer-events-none z-10">
                  <PressedBlossom className="w-7 h-7" rotation={index * 25} />
                </div>
              )}

              {/* Note Header */}
              <div className="flex items-center justify-between pt-1 text-xs font-mono text-[#171613]/60">
                <span className="uppercase tracking-widest font-semibold">{note.date}</span>
                <span className="font-handwriting text-sm text-[#171613]/70">
                  folio #{index + 1}
                </span>
              </div>

              {/* Main Handwritten Statement */}
              <div className="my-auto py-3">
                <h3 className="font-handwriting text-2xl sm:text-3xl font-bold leading-tight text-[#171613]">
                  "{note.quote}"
                </h3>
                <p className="font-display text-xs text-[#171613]/75 mt-2.5 leading-relaxed font-medium">
                  {note.subtitle}
                </p>
              </div>

              {/* Note Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-[#171613]/10 text-[10px] font-mono text-[#171613]/50">
                <span className="tracking-wider">HS SCRAPBOOK</span>
                <HandDrawnStar className="w-3.5 h-3.5 text-[#171613]/40" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Designer Margin Note & Casual Botanical Stamp */}
      <div className="mt-10 sm:mt-12 pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
        <Sparkles className="w-4 h-4 text-[#F5D15B]" />
        <p className="font-handwriting text-lg sm:text-xl text-[#171613]/70 text-center max-w-md">
          * feel free to grab, drag or peel any note across the paper *
        </p>
      </div>
    </section>
  );
};

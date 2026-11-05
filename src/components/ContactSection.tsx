import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import {
  HandDrawnUnderline,
  HandDrawnStar,
  WashiTapeStrip,
  FlowerDoodle,
} from './HandDrawnSvg';
import {
  PressedDaisy,
  PressedBlossom,
  BotanicalSprig,
  PostageStamp,
  WaxSeal,
  PhotoCorner,
  DieCutSticker,
} from './ScrapbookElements';
import { CoffeeRingStain } from './PinterestEphemera';
import { ArrowUpRight, Copy, Check, Mail, ExternalLink, Heart, Sparkles, RefreshCw } from 'lucide-react';

interface ContactSectionProps {
  id?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ id = "contact" }) => {
  const [copied, setCopied] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    'Hello Haris — Design Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Haris,\n\nI was exploring your sketchbook and wanted to connect regarding a project.\n\nBest,\n`
  )}`;

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    siteConfig.email
  )}&su=${encodeURIComponent('Hello Haris — Design Inquiry')}`;

  return (
    <section id={id} className="relative pt-14 pb-24 md:pt-20 md:pb-36 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto overflow-hidden sm:overflow-visible">
      {/* Studio Correspondence Header */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 mb-8 sm:mb-12 border-b border-[#171613]/10 text-xs text-[#171613]/60">
        <div className="flex items-center gap-2">
          <span className="font-handwriting text-lg sm:text-xl font-bold text-[#171613]">
            Studio Letterbox & Correspondence
          </span>
          <span aria-hidden="true" className="text-[#171613]/30">·</span>
          <span className="font-mono text-[11px] text-[#171613]/50 uppercase tracking-widest hidden sm:inline">
            Direct Line
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-handwriting text-base text-[#171613]/80">
          <span>an open invitation</span>
          <Sparkles className="w-3.5 h-3.5 text-[#F5D15B]" />
        </div>
      </div>

      {/* Decorative Scrapbook Elements (Coffee ring & flora) */}
      <div className="hidden md:block absolute -top-6 -left-6 z-0 pointer-events-none">
        <CoffeeRingStain className="w-44 h-44" opacity={0.16} />
      </div>
      <div className="hidden lg:block absolute -top-4 right-10 z-0 pointer-events-none opacity-85">
        <BotanicalSprig className="w-24 h-40" />
      </div>
      <div className="hidden md:block absolute -bottom-6 -left-4 z-0 pointer-events-none">
        <PressedBlossom className="w-16 h-16" rotation={15} />
      </div>

      {/* Postcard Flip Controls Header */}
      <div className="flex items-center justify-between pb-3 mb-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#171613]/60 font-semibold">
            {isFlipped ? "Poster Art View" : "Letter & Dispatch View"}
          </span>
        </div>

        <button
          onClick={() => setIsFlipped((prev) => !prev)}
          type="button"
          className="group flex items-center gap-1.5 px-3 py-1 bg-[#FAF9F5] hover:bg-[#F5D15B] border border-[#171613] rounded-full text-xs font-mono text-[#171613] transition-all cursor-pointer shadow-xs active:scale-95"
          title="Flip postcard between letter and art poster"
        >
          <RefreshCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
          <span className="font-handwriting text-sm font-bold">
            {isFlipped ? "Flip to letter ⟲" : "Flip to art poster ⟲"}
          </span>
        </button>
      </div>

      {/* The Scrapbook Postcard & Letter Card with 3D Flip */}
      <div className="relative [perspective:1200px]">
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 25 }}
          className="relative w-full [transform-style:preserve-3d]"
        >
          {/* SIDE A: The Letter & Dispatch Postcard */}
          <div
            className={`relative bg-[#FAF9F5] border-2 border-[#171613] rounded-2xl sm:rounded-3xl shadow-paper p-6 sm:p-10 md:p-14 transition-all [backface-visibility:hidden] ${
              isFlipped ? 'pointer-events-none' : ''
            }`}
          >
            {/* Photo Corner Mounts */}
            <PhotoCorner position="top-left" />
            <PhotoCorner position="top-right" />
            <PhotoCorner position="bottom-left" />
            <PhotoCorner position="bottom-right" />

            {/* Washi Tape Header */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
              <WashiTapeStrip
                className="w-32 sm:w-40 h-6"
                color="rgba(245, 209, 91, 0.85)"
                angle={-1}
              />
            </div>

            {/* Die-cut circular sticker */}
            <div className="absolute -top-5 right-6 sm:right-12 z-20">
              <DieCutSticker
                text="INBOX OPEN"
                subtext="say hello"
                bg="#A9DEC9"
                rotation={6}
              />
            </div>

            {/* 2-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start relative z-10 pt-2">
              {/* Left Column: Letter */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div>
                  <div className="inline-flex flex-col items-start">
                    <span className="font-handwriting text-2xl sm:text-3xl text-[#171613]/75">
                      something on your mind?
                    </span>
                    <HandDrawnUnderline className="w-32 h-3 text-[#F5D15B] -mt-1" />
                  </div>

                  <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#171613] tracking-tight leading-[1.05] mt-2 text-balance">
                    LET'S MAKE SOMETHING BEAUTIFUL.
                  </h2>
                </div>

                {/* Handwritten Letter Body */}
                <div className="relative bg-[#FAF9F5]/90 border border-[#171613]/10 p-5 sm:p-6 rounded-xl space-y-3">
                  <div className="absolute -top-3 -right-3 pointer-events-none">
                    <PressedBlossom className="w-10 h-10" rotation={-12} />
                  </div>

                  <p className="font-handwriting text-xl sm:text-2xl text-[#171613]/90 leading-relaxed">
                    Dear fellow creator & curious mind,
                  </p>
                  <p className="font-handwriting text-lg sm:text-xl text-[#171613]/80 leading-relaxed">
                    {siteConfig.shortBio}
                  </p>
                  <p className="font-handwriting text-lg sm:text-xl text-[#171613]/80 leading-relaxed">
                    I believe in simple ideas with profound character. No corporate fluff, just good design made by human hands.
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-handwriting text-2xl font-bold text-[#171613]">
                      Warmly, {siteConfig.name}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-[#171613]/50 uppercase">
                      {siteConfig.profession} • 2026
                    </span>
                  </div>
                </div>

                {/* Email Box & Quick Copy */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 bg-[#171613]/5 px-3.5 py-2 rounded-xl border border-[#171613]/10 text-xs font-mono text-[#171613]">
                    <Mail className="w-4 h-4 text-[#171613]/60" />
                    <span className="font-semibold select-all">{siteConfig.email}</span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white hover:bg-[#FAF9F5] border border-[#171613]/25 hover:border-[#171613] rounded-xl text-xs font-mono text-[#171613] transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#171613]/60" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Dispatch */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#FAF9F5] border-t lg:border-t-0 lg:border-l border-dashed border-[#171613]/25 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="relative">
                    <PressedDaisy className="w-16 h-28 sm:w-20 sm:h-32" rotation={-6} />
                  </div>
                  <div className="relative">
                    <PostageStamp
                      label={siteConfig.name.toUpperCase()}
                      price="FOLIO"
                      rotation={4}
                      initials={siteConfig.initials}
                      className="w-24 h-32 sm:w-28 sm:h-36"
                    />
                  </div>
                </div>

                {/* Address Lines */}
                <div className="space-y-2.5 pt-2">
                  <div className="border-b border-[#171613]/20 pb-1 flex items-baseline justify-between text-xs font-mono text-[#171613]/70">
                    <span className="uppercase text-[10px] text-[#171613]/40">To:</span>
                    <span className="font-handwriting text-base font-bold text-[#171613]">{siteConfig.name}</span>
                  </div>
                  <div className="border-b border-[#171613]/20 pb-1 flex items-baseline justify-between text-xs font-mono text-[#171613]/70">
                    <span className="uppercase text-[10px] text-[#171613]/40">Field:</span>
                    <span className="font-handwriting text-base text-[#171613]">{siteConfig.roleDetail}</span>
                  </div>
                  <div className="border-b border-[#171613]/20 pb-1 flex items-baseline justify-between text-xs font-mono text-[#171613]/70">
                    <span className="uppercase text-[10px] text-[#171613]/40">Location:</span>
                    <span className="font-handwriting text-base text-[#171613]">{siteConfig.location}</span>
                  </div>
                </div>

                {/* Send CTA */}
                <div className="pt-4 space-y-3">
                  <motion.a
                    href={mailtoUrl}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#171613] text-[#FAF9F5] rounded-2xl shadow-paper hover:shadow-paper-hover border-2 border-[#171613] font-display font-bold text-base tracking-wide transition-all cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <WaxSeal className="w-8 h-8" color="#A9DEC9" initials={siteConfig.initials} />
                    </div>
                    <span className="pl-6">Send A Letter</span>
                    <ArrowUpRight className="w-5 h-5 text-[#F5D15B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>

                  <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#171613]/60">
                    <a
                      href={gmailWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#171613] underline underline-offset-2 transition-colors py-1"
                    >
                      <span>Open in Gmail</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span aria-hidden="true" className="text-[#171613]/30">·</span>
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      className="hover:text-[#171613] underline underline-offset-2 transition-colors cursor-pointer py-1"
                    >
                      Quick Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIDE B: The Graphic Design Specimen Poster (Flipped Side) */}
          <div
            style={{ transform: 'rotateY(180deg)' }}
            className={`absolute inset-0 bg-[#FAF9F5] border-2 border-[#171613] rounded-2xl sm:rounded-3xl shadow-paper p-8 sm:p-12 md:p-16 flex flex-col justify-between items-center text-center [backface-visibility:hidden] overflow-hidden ${
              !isFlipped ? 'pointer-events-none' : ''
            }`}
          >
            {/* Photo Corners */}
            <PhotoCorner position="top-left" />
            <PhotoCorner position="top-right" />
            <PhotoCorner position="bottom-left" />
            <PhotoCorner position="bottom-right" />

            {/* Poster Header */}
            <div className="w-full flex items-center justify-between border-b border-[#171613]/15 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#171613]/60">
                Folio Specimen Nº 26
              </span>
              <span className="font-handwriting text-lg text-[#171613]/70">
                graphic art direction
              </span>
            </div>

            {/* Center Typographic Artpiece */}
            <div className="my-auto space-y-4 py-8 max-w-xl">
              <div className="flex justify-center mb-2">
                <FlowerDoodle className="w-14 h-14" color="#171613" centerColor="#F5D15B" />
              </div>

              <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#171613] tracking-tighter leading-tight">
                MAKE ART.<br />STAY CURIOUS.
              </h3>

              <p className="font-handwriting text-2xl sm:text-3xl text-[#171613]/80 pt-2">
                "Simple over clever. Meaning over decoration."
              </p>

              <div className="pt-4 flex justify-center items-center gap-3">
                <DieCutSticker text={siteConfig.name.toUpperCase()} subtext={siteConfig.profession.toLowerCase()} bg="#F5D15B" rotation={-3} />
                <DieCutSticker text="ORIGINAL" subtext="handcrafted" bg="#F3A8B8" rotation={4} />
              </div>
            </div>

            {/* Poster Footer with Return Trigger */}
            <div className="w-full border-t border-[#171613]/15 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="font-mono text-[11px] text-[#171613]/50">
                {siteConfig.name} · Personal Sketchbook Edition
              </span>
              <button
                onClick={() => setIsFlipped(false)}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#171613] text-[#FAF9F5] rounded-xl font-mono text-xs hover:bg-[#171613]/90 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Turn back to write letter</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Colophon */}
      <footer className="mt-16 sm:mt-20 pt-8 border-t border-[#171613]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#171613]/55">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-sm text-[#171613]">
            {siteConfig.name}
          </span>
          <span aria-hidden="true">·</span>
          <span>{siteConfig.profession}</span>
          <span aria-hidden="true">·</span>
          <span>© 2026</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-handwriting text-base text-[#171613]/70">
            handcrafted with paper, type & feeling
          </span>
          <Heart className="w-3.5 h-3.5 text-[#F3A8B8] fill-[#F3A8B8]" />
        </div>
      </footer>

      {/* Floating Copied Toast Alert */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#171613] text-[#FAF9F5] px-5 py-3 rounded-2xl shadow-paper font-mono text-xs tracking-wider border border-[#FAF9F5]/20"
          >
            <div className="w-5 h-5 rounded-full bg-[#A9DEC9] flex items-center justify-center text-[#171613]">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div>
              <p className="font-bold text-[#FAF9F5]">{siteConfig.email}</p>
              <p className="text-[10px] text-[#FAF9F5]/70">Address copied to clipboard!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PhilosophyNotes } from './components/PhilosophyNotes';
import { ContactSection } from './components/ContactSection';
import { DoodleCanvas } from './components/DoodleCanvas';
import { DesignerColorSwatches } from './components/PinterestEphemera';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDoodleActive, setIsDoodleActive] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPhilosophy = () => {
    const el = document.getElementById('philosophies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#171613] paper-canvas-ruled paper-margin-guide relative selection:bg-[#F5D15B] selection:text-[#171613]">
      {/* Subtle Tactile Paper Grain & Fiber Overlay */}
      <div className="paper-grain-overlay" aria-hidden="true" />

      {/* Loading Sequence */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 flex flex-col min-h-screen"
      >
        {/* Navigation Header */}
        <Header
          onContactClick={scrollToContact}
          isDoodleActive={isDoodleActive}
          onToggleDoodle={() => setIsDoodleActive((prev) => !prev)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Section 1: Hero */}
          <HeroSection onScrollToPhilosophy={scrollToPhilosophy} />

          {/* Section 2: Designer's Working Philosophies & Draggable Sticky Notes */}
          <PhilosophyNotes id="philosophies" />

          {/* Pinterest Designer Ephemera: Interactive Palette Swatches */}
          <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
            <DesignerColorSwatches />
          </div>

          {/* Section 3: The Contact Invitation */}
          <ContactSection id="contact" />
        </main>

        {/* Interactive Doodle Canvas Overlay */}
        <DoodleCanvas
          isActive={isDoodleActive}
          onClose={() => setIsDoodleActive(false)}
        />
      </motion.div>
    </div>
  );
}

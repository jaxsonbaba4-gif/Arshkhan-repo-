# Haris Syed — Graphic Designer Personal Website

An unforgettable, tactile personal website for graphic designer Haris Syed, conceptualized as a curated designer's sketchbook with expressive typography, warm physical stationery textures, hand-drawn annotations, interactive sticky notes, and an inviting contact experience.

### User Review & Critical Decisions

> [!IMPORTANT]
> The site strictly adheres to the Master Creative Brief: no portfolio grids, no fake clients, no testimonials, and no generic templates. It focuses entirely on identity, typography, paper tactility, and personal craft.

- **Contact Email**: Configured with user email `arshkhangh17@gmail.com` as primary contact with instant one-click copy and standard `mailto:` action, alongside a customizable configuration object (`siteConfig.ts`).
- **Tactile Paper Experience**: Built using pure CSS rules, SVG hand-drawn elements, and Motion drag physics—visitors can read, gently drag or peel sticky notes, toggle a playful sketchbook doodle mode, and experience realistic notebook paper grain without heavy images or layout shifts.
- **Typography Direction**: Curated font stack loading Google Fonts (`Space Grotesk` for bold architectural headlines, `Caveat` & `Kalam` for expressive hand-lettering, `Space Mono` for crisp editorial micro-labels) with fluid `clamp()` responsive scaling.

---

### 1. Overview & Core Concept

- **What It Does**: Presents Haris Syed's graphic design identity in a warm, physical sketchbook format. Visitors experience a charming paper-loading intro, an art-directed hero composition centered around the oversized "HARIS SYED" nameplate, interactive sticky notes communicating creative philosophies, and an elegant contact invitation.
- **Target Audience / Persona**: Creative directors, agency leads, founders, and collaborators seeking a graphic designer with taste, typographic precision, and craft.
- **Key Value**: Instantly distinguishes Haris Syed from cookie-cutter developer/designer portfolios by feeling like an authentic, physical object made by human hands.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. *Charming Loading Sequence*: A miniature paper card with a hand-drawn pencil/star enters with spring physics (`"Gathering little details..."` $\rightarrow$ `"Ready to explore."`). Visitors can skip instantly or let it transition naturally in $\le 1.2$s. Reduced motion bypasses this immediately.
  2. *The Sketchbook Canvas*: Warm paper white (`#FAF9F5`) canvas with subtle notebook ruling lines, delicate grain, washi tape strips, and hand-drawn SVG doodles (daisies, stars, squiggles, underlines).
  3. *Hero Composition*:
     - Handwritten intro: *"my name is"* with organic brush stroke underline.
     - Massive centerpiece: **HARIS SYED** in bold architectural display type with fluid `clamp(2.75rem, 8vw, 6.5rem)` sizing, imperfect hand-drawn border frame, and layered mint sticky note.
     - Profession tag: Layered hand-drawn badge: *"Graphic Designer"*.
     - Core philosophy statement: *"I turn ideas into visual stories with clarity, character and feeling."*
  4. *Tactile Philosophy Sticky Notes*:
     - Butter Yellow (`#F5D15B`), Soft Mint (`#A9DEC9`), Lavender (`#C8B8F2`), and Blush Pink (`#F3A8B8`) sticky notes with realistic drop shadows, washi tape headers, and organic slight rotations ($-2^\circ$ to $+3^\circ$).
     - Visitors can drag sticky notes across the desk, peel/flip them to reveal designer thoughts (*"Simple over clever"*, *"Details matter"*, *"Made with curiosity"*, *"Always creating"*), or reset them.
  5. *Interactive Sketchbook Toy (Doodle Canvas)*:
     - An optional lightweight pencil tool letting visitors doodle their own signature or mark directly on the sketchbook paper, with an eraser and clear button.
  6. *Contact Experience*:
     - Headline: *"LET'S MAKE SOMETHING BEAUTIFUL."*
     - Handwritten invitation note: *"Whether you have an ambitious branding project, an editorial publication, or just want to talk typography—my inbox is always open."*
     - Tactile primary button: Ink Black (`#171613`) with spring scale on hover, hand-drawn outline, arrow icon, and direct `mailto:` link.
     - Secondary affordance: One-click "Copy email address" with tactile toast feedback.

- **Visual Identity & Color Palette**:
  - `Paper White`: `#FAF9F5` (Dominant 60% neutral canvas)
  - `Ink Black`: `#171613` (High-contrast structural text & CTAs)
  - `Butter Yellow`: `#F5D15B` (Sticky notes, highlights)
  - `Soft Mint`: `#A9DEC9` (Accent labels, organic doodles)
  - `Lavender`: `#C8B8F2` (Creative notes, subtle tags)
  - `Blush Pink`: `#F3A8B8` (Stamps, decorative marks)
  - `Warm Grey / Rule`: `#E5E3DC` (Subtle notebook ruled lines)

- **Typography System**:
  - *Display*: `Space Grotesk` (700 Bold / 500 Medium) with tight negative tracking (`-0.03em`) and balanced text wrapping.
  - *Handwritten*: `Caveat` & `Kalam` (Casual, authentic designer handwriting for annotations and notes).
  - *Monospace*: `Space Mono` (Tabular figures, date stamps, tiny editorial indexes).

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Pure SVG & CSS Textures over Bitmap Images**
  - *Chosen Approach*: Generate notebook ruling via CSS linear gradients, paper grain via lightweight inline SVG turbulence filters, and all illustrations (daisies, stars, tape, pencil strokes) via bespoke vector SVGs.
  - *Why*: Guarantees crisp rendering on Retina screens, zero layout shifts, instantaneous loading, and perfect adherence to the brief's performance mandate.
  - *Alternatives Considered*: Background JPG paper textures (heavy, risks blurry rendering or slow loads).

- **Decision 2: Draggable Sticky Notes via Motion**
  - *Chosen Approach*: Use Motion's `drag`, `dragConstraints`, and spring transitions with accessible keyboard fallbacks and a "Reset Layout" affordance.
  - *Why*: Fulfills the "artist's personal sketchbook / scrapbook" metaphor in a fun, tactile way while keeping mobile drag bounds controlled so notes never get lost offscreen.

- **Decision 3: Zero Clutter / Zero Forbidden Elements**
  - *Chosen Approach*: Strictly exclude portfolio grids, fake case studies, and fake testimonials as instructed in Section 15 of the brief. Focus deeply on art direction, responsive typography, and tactile delight.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                        index.html                      │
│   (Google Fonts: Space Grotesk, Caveat, Space Mono)    │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                        App.tsx                         │
│  - Loading Screen Orchestrator (with skip / timeout)   │
│  - Paper Texture & Notebook Grid Canvas Wrapper        │
│  - Top Bar (HS Monogram + Contact Shortcut)            │
└───────┬───────────────────┬───────────────────┬────────┘
        │                   │                   │
┌───────▼────────┐  ┌───────▼────────┐  ┌───────▼────────┐
│   HeroSection  │  │ PhilosophyDeck │  │ ContactSection │
│ - "my name is" │  │ - Draggable    │  │ - Headline     │
│ - HARIS SYED   │  │   Sticky Notes │  │ - Mailto CTA   │
│ - Graphic      │  │ - Washi Tape   │  │ - 1-Click Copy │
│   Designer     │  │ - Hand-drawn   │  │ - Interactive  │
│ - Doodles/Star │  │   Philosophy   │  │   Doodle Pad   │
└────────────────┘  └────────────────┘  └────────────────┘
```

- **Configuration Layer (`src/config/siteConfig.ts`)**:
  - Centralizes designer name (`Haris Syed`), title (`Graphic Designer`), email (`arshkhangh17@gmail.com`), statements, and color tokens for clean maintainability.
- **Micro-Interactions**:
  - Framer Motion spring curves (`stiffness: 300, damping: 25`).
  - Tactile soundless interactions (subtle lift on hover, scale on press, smooth return).
  - Responsive breakpoints tested at 360px, 390px, 768px, and 1440px desktop.

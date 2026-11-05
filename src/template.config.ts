/**
 * ============================================================================
 *  HARIS SYED — PORTFOLIO TEMPLATE CONFIGURATION
 * ============================================================================
 *  Want to customize this website for yourself or share it as a template?
 *  Simply edit the fields below! Everything on the website automatically updates.
 * ============================================================================
 */

export const templateConfig = {
  // 1. PERSONAL IDENTITY
  name: "Haris Syed",
  initials: "HS",
  profession: "Graphic Designer",
  roleDetail: "Graphic Design & Art Direction",
  location: "Available Worldwide",

  // 2. CONTACT DETAILS
  // Any inquiries or clicks will automatically route to this email address.
  email: "arshkhangh17@gmail.com",

  // 3. CORE TAGLINE & BIO
  // Shown prominently in the hero section and postcard back.
  tagline: "I turn ideas into visual stories with clarity, character and feeling.",
  shortBio:
    "Whether you have an ambitious brand identity in mind, an editorial publication, a playful packaging concept, or simply want to talk typography—I’d love to collaborate.",

  // 4. CREATIVE PHILOSOPHIES (STICKY NOTES)
  // Each note appears as a draggable, tactile paper note on the desk.
  philosophies: [
    {
      id: "curiosity",
      quote: "Made with curiosity.",
      subtitle: "Always asking what if, why not, and what lies beyond the first obvious answer.",
      color: "butter", // Options: 'butter' | 'mint' | 'lavender' | 'blush'
      rotation: -2.5,
      date: "Entry 01",
    },
    {
      id: "details",
      quote: "Details matter.",
      subtitle: "The curve of an ampersand, the weight of a rule, the intentional pause of whitespace.",
      color: "mint",
      rotation: 1.8,
      date: "Entry 02",
    },
    {
      id: "creating",
      quote: "Always creating.",
      subtitle: "Sketching before screens, letting pencil lead meet paper before pixels lock in.",
      color: "lavender",
      rotation: -1.2,
      date: "Entry 03",
    },
    {
      id: "essence",
      quote: "Simple over clever. Meaning over decoration. Personality over templates.",
      subtitle: "Graphic design that speaks with conviction, restraint, and human warmth.",
      color: "blush",
      rotation: 2.2,
      date: "Core Law",
    },
  ],

  // 5. COLOR PALETTE (Warm paper stationery theme)
  colors: {
    paperWhite: "#FAF9F5",
    inkBlack: "#171613",
    butterYellow: "#F5D15B",
    softMint: "#A9DEC9",
    lavender: "#C8B8F2",
    blushPink: "#F3A8B8",
    warmGrey: "#D9D7D0",
  },
} as const;

export type TemplateConfig = typeof templateConfig;

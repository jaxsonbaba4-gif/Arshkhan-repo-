import React from 'react';

/**
 * Hand-drawn SVG illustrations and decorative marks.
 * Designed with organic, imperfect paths to evoke an artist's personal sketchbook.
 */

// A hand-drawn organic underline brush stroke
export const HandDrawnUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = "w-28 h-3",
  color = "currentColor",
}) => (
  <svg
    viewBox="0 0 160 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M2.5 12.8C25.4 6.2 68.3 4.1 114.2 7.5C132.8 8.9 148.5 11.2 157.5 13.8C132.2 14.8 98.4 15.2 62.1 13.4C41.8 12.4 18.2 10.8 4.2 9.2"
      stroke={color}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Large expressive brush underline for HARIS SYED
export const BigHeroUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = "w-full h-5",
  color = "#F5D15B",
}) => (
  <svg
    viewBox="0 0 420 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M3 14C55.4 6.8 152.1 3.5 284.6 6.8C342.3 8.2 391.8 11.1 417 14.5C362.4 16.5 272.2 18.8 174.5 17.5C108.9 16.6 42.1 14.8 4 12"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.9"
    />
    <path
      d="M18 17C110 13.5 230 11.8 380 15.2"
      stroke="#171613"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

// Hand-drawn botanical flower doodle
export const FlowerDoodle: React.FC<{ className?: string; color?: string; centerColor?: string }> = ({
  className = "w-8 h-8",
  color = "#171613",
  centerColor = "#F5D15B",
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Center */}
    <circle cx="24" cy="24" r="5" fill={centerColor} stroke={color} strokeWidth="1.8" />
    {/* Petals */}
    <path
      d="M24 19C24 12 20 8 16 11C12 14 16 19 20 21"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M27 20C32 17 38 15 39 19C40 23 34 25 29 24"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M28 27C34 29 38 33 36 37C34 41 29 37 26 30"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M21 28C18 34 14 39 10 37C6 35 11 29 18 26"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M19 22C14 21 8 20 9 15C10 10 16 15 20 20"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Stem & Leaves */}
    <path
      d="M24 29C23.5 36 22 43 21 46"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M22 38C26 37 30 35 30 35"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Hand-drawn four-pointed star / sparkle doodle
export const HandDrawnStar: React.FC<{ className?: string; color?: string; fill?: string }> = ({
  className = "w-6 h-6",
  color = "#171613",
  fill = "none",
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M16 2.5C16.8 9.2 19.5 13.5 28.5 15.5C19.8 17.5 16.8 22 15.5 29.5C14.5 21.8 11.2 17.8 2.5 15.8C11.5 13.8 14.8 9.5 16 2.5Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill={fill}
    />
  </svg>
);

// Curved hand-drawn arrow pointing to a note or element
export const HandDrawnArrow: React.FC<{ className?: string; color?: string }> = ({
  className = "w-12 h-8",
  color = "#171613",
}) => (
  <svg
    viewBox="0 0 64 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4 14C18 6 36 6 54 18"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M44 14L55 19L49 29"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Hand-drawn imperfect bounding frame / box
export const HandDrawnFrame: React.FC<{ className?: string; color?: string }> = ({
  className = "w-full h-full",
  color = "#171613",
}) => (
  <svg
    viewBox="0 0 200 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M5 12C35 4 145 6 194 9C198 25 195 58 193 72C150 76 52 74 6 71C4 55 5 28 5 12Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 1"
    />
  </svg>
);

// Paper clip holding an index note or photo
export const PaperClip: React.FC<{ className?: string; color?: string }> = ({
  className = "w-5 h-10",
  color = "#9CA3AF",
}) => (
  <svg
    viewBox="0 0 24 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M7 16V36C7 40.4 10.6 44 15 44C19.4 44 23 40.4 23 36V10C23 5.6 19.4 2 15 2C10.6 2 7 5.6 7 10V33C7 35.2 8.8 37 11 37C13.2 37 15 35.2 15 33V14"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Realistic torn washi tape strip
export const WashiTapeStrip: React.FC<{
  className?: string;
  color?: string;
  angle?: number;
}> = ({
  className = "w-24 h-6",
  color = "rgba(245, 209, 91, 0.75)",
  angle = -1.5,
}) => (
  <div
    style={{
      transform: `rotate(${angle}deg)`,
      backgroundColor: color,
    }}
    className={`relative backdrop-blur-xs shadow-xs rounded-xs pointer-events-none ${className}`}
  >
    {/* Jagged left edge */}
    <div
      className="absolute -left-1 top-0 bottom-0 w-2 pointer-events-none"
      style={{
        background: `radial-gradient(circle at 0 50%, transparent 2px, ${color} 2px)`,
        backgroundSize: '4px 6px',
      }}
    />
    {/* Jagged right edge */}
    <div
      className="absolute -right-1 top-0 bottom-0 w-2 pointer-events-none"
      style={{
        background: `radial-gradient(circle at 100% 50%, transparent 2px, ${color} 2px)`,
        backgroundSize: '4px 6px',
      }}
    />
  </div>
);

// Hand-drawn pencil illustration for loading and doodle pad
export const HandDrawnPencil: React.FC<{ className?: string; color?: string }> = ({
  className = "w-10 h-10",
  color = "#171613",
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Pencil tip */}
    <path d="M6 42L11 38L9 36L6 42Z" fill="#171613" />
    <path d="M11 38L16 34L13 31L9 36L11 38Z" fill="#FAF9F5" stroke={color} strokeWidth="1.5" />
    {/* Pencil body */}
    <path
      d="M16 34L37 13C38.5 11.5 41 11.5 42.5 13C44 14.5 44 17 42.5 18.5L21.5 39.5L13 31L16 34Z"
      fill="#F5D15B"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <line x1="20" y1="30" x2="39" y2="11" stroke={color} strokeWidth="1.2" opacity="0.6" />
    {/* Eraser */}
    <path
      d="M37 13L40 10C41.5 8.5 43.5 8.5 45 10C46.5 11.5 46.5 13.5 45 15L42.5 17.5"
      stroke={color}
      strokeWidth="1.8"
      fill="#F3A8B8"
    />
  </svg>
);

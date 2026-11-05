import React from 'react';

/**
 * High-fidelity vector scrapbook botanical illustrations, pressed flowers,
 * vintage postage stamps, wax seals, and die-cut paper stickers.
 */

// Pressed Daisy with translucent washi tape
export const PressedDaisy: React.FC<{ className?: string; rotation?: number }> = ({
  className = "w-20 h-32",
  rotation = -4,
}) => (
  <div
    style={{ transform: `rotate(${rotation}deg)` }}
    className={`relative inline-block select-none pointer-events-none drop-shadow-sm ${className}`}
  >
    {/* Washi tape pinning the stem */}
    <div className="absolute top-1/2 -left-2 w-12 h-3.5 bg-[#F5D15B]/70 backdrop-blur-xs -rotate-6 z-10 rounded-xs shadow-xs border-x border-dashed border-white/50" />

    <svg
      viewBox="0 0 100 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Stem */}
      <path
        d="M50 45 C48 75, 52 110, 47 155"
        stroke="#4A6B53"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Side Leaves */}
      <path
        d="M49 85 C35 78, 28 85, 25 80 C27 92, 42 90, 49 92"
        fill="#A9DEC9"
        stroke="#4A6B53"
        strokeWidth="1.2"
      />
      <path
        d="M51 115 C65 108, 72 114, 75 109 C72 121, 58 120, 50 122"
        fill="#A9DEC9"
        stroke="#4A6B53"
        strokeWidth="1.2"
      />

      {/* Flower Petals (soft pressed creamy white with subtle tint) */}
      <g opacity="0.95">
        {/* 12 petals radiating outward */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <ellipse
            key={deg}
            cx="50"
            cy="40"
            rx="5.5"
            ry="18"
            fill="#FFFFFF"
            stroke="#D9D7D0"
            strokeWidth="0.8"
            transform={`rotate(${deg} 50 40) translate(0 -16)`}
          />
        ))}
        {/* Petal vein accents */}
        {[15, 75, 135, 195, 255, 315].map((deg) => (
          <ellipse
            key={`inner-${deg}`}
            cx="50"
            cy="40"
            rx="4"
            ry="14"
            fill="#FAF9F5"
            opacity="0.8"
            transform={`rotate(${deg} 50 40) translate(0 -14)`}
          />
        ))}
      </g>

      {/* Center Pistil with texture */}
      <circle cx="50" cy="40" r="10" fill="#F5D15B" stroke="#D4A72C" strokeWidth="1.2" />
      <circle cx="49" cy="39" r="7" fill="#E5B824" opacity="0.6" />
      <circle cx="48" cy="38" r="3" fill="#B38914" opacity="0.7" />
    </svg>
  </div>
);

// Wild botanical sprig / eucalyptus branch
export const BotanicalSprig: React.FC<{ className?: string; color?: string }> = ({
  className = "w-16 h-28",
  color = "#4A6B53",
}) => (
  <svg
    viewBox="0 0 80 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none drop-shadow-xs ${className}`}
    aria-hidden="true"
  >
    <path
      d="M40 135 C38 100, 42 60, 36 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Oval leaves alternating */}
    <ellipse cx="26" cy="30" rx="10" ry="16" fill="#A9DEC9" stroke={color} strokeWidth="1.2" transform="rotate(-35 26 30)" />
    <ellipse cx="52" cy="45" rx="11" ry="17" fill="#A9DEC9" stroke={color} strokeWidth="1.2" transform="rotate(35 52 45)" />
    <ellipse cx="24" cy="65" rx="12" ry="18" fill="#C8B8F2" opacity="0.7" stroke={color} strokeWidth="1.2" transform="rotate(-30 24 65)" />
    <ellipse cx="54" cy="85" rx="12" ry="18" fill="#A9DEC9" stroke={color} strokeWidth="1.2" transform="rotate(30 54 85)" />
    <ellipse cx="28" cy="105" rx="10" ry="16" fill="#A9DEC9" stroke={color} strokeWidth="1.2" transform="rotate(-25 28 105)" />
  </svg>
);

// Pressed Cherry Blossom / Pink Flora
export const PressedBlossom: React.FC<{ className?: string; rotation?: number }> = ({
  className = "w-12 h-12",
  rotation = 0,
}) => (
  <div
    style={{ transform: `rotate(${rotation}deg)` }}
    className={`relative inline-block select-none pointer-events-none drop-shadow-xs ${className}`}
  >
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* 5 Petals */}
      {[0, 72, 144, 216, 288].map((deg) => (
        <path
          key={deg}
          d="M30 30 C22 15, 20 8, 30 5 C40 8, 38 15, 30 30"
          fill="#F3A8B8"
          stroke="#D48395"
          strokeWidth="0.9"
          transform={`rotate(${deg} 30 30)`}
          opacity="0.9"
        />
      ))}
      <circle cx="30" cy="30" r="4.5" fill="#F5D15B" stroke="#D48395" strokeWidth="0.8" />
    </svg>
  </div>
);

// Vintage Postage Stamp with perforated serrated edges and postmark
export const PostageStamp: React.FC<{
  className?: string;
  rotation?: number;
  label?: string;
  price?: string;
  initials?: string;
}> = ({
  className = "w-28 h-36",
  rotation = 3,
  label = "HARIS SYED",
  price = "2026",
  initials = "HS",
}) => (
  <div
    style={{ transform: `rotate(${rotation}deg)` }}
    className={`relative inline-block select-none drop-shadow-md bg-[#FAF9F5] p-2.5 border-2 border-dashed border-[#171613]/25 rounded-xs ${className}`}
  >
    {/* Inner stamp art container */}
    <div className="w-full h-full border border-[#171613]/20 bg-[#FAF9F5] flex flex-col justify-between items-center p-2 relative overflow-hidden">
      {/* Top Stamp Header */}
      <div className="w-full flex justify-between items-center text-[8px] font-mono tracking-widest text-[#171613]/70 font-bold border-b border-[#171613]/15 pb-1">
        <span>AIR MAIL</span>
        <span>{price}</span>
      </div>

      {/* Center Floral Stamp Graphic */}
      <div className="my-auto flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-[#A9DEC9]/40 border border-[#171613]/30 flex items-center justify-center mb-1">
          <span className="font-display font-extrabold text-xs text-[#171613]">{initials}</span>
        </div>
        <span className="font-handwriting text-xs font-bold text-[#171613] tracking-wider">
          {label}
        </span>
        <span className="font-mono text-[7px] text-[#171613]/60 uppercase tracking-widest">
          Graphic Design
        </span>
      </div>

      {/* Bottom Value */}
      <div className="w-full text-center border-t border-[#171613]/15 pt-0.5 text-[7px] font-mono text-[#171613]/50">
        ★ FIRST CLASS FOLIO ★
      </div>

      {/* Postmark / Ink cancellation stamp overlay */}
      <div className="absolute -top-3 -right-4 w-16 h-16 pointer-events-none opacity-40 -rotate-12">
        <svg viewBox="0 0 60 60" fill="none" stroke="#171613" strokeWidth="1.2">
          <circle cx="30" cy="30" r="24" strokeDasharray="3 2" />
          <path d="M6 30 Q 18 24, 30 30 T 54 30" />
          <path d="M6 24 Q 18 18, 30 24 T 54 24" />
          <path d="M6 36 Q 18 30, 30 36 T 54 36" />
        </svg>
      </div>
    </div>
  </div>
);

// Vintage Wax Seal Stamp with Monogram
export const WaxSeal: React.FC<{ className?: string; color?: string; initials?: string }> = ({
  className = "w-14 h-14",
  color = "#B93838",
  initials = "HS",
}) => (
  <div className={`relative inline-flex items-center justify-center select-none drop-shadow-md ${className}`}>
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Organic wax drip shape */}
      <path
        d="M32 4 C46 3, 58 14, 59 28 C60 42, 49 56, 34 59 C20 62, 5 50, 4 35 C3 20, 16 5, 32 4Z"
        fill={color}
        stroke="#7A1D1D"
        strokeWidth="1.5"
      />
      {/* Inner sunken circle */}
      <circle cx="32" cy="32" r="19" fill={color} stroke="#E57373" strokeWidth="1.2" opacity="0.6" />
      <circle cx="32" cy="32" r="16" stroke="#5E1414" strokeWidth="1.5" strokeDasharray="2 2" />
      {/* Embossed Monogram */}
      <text
        x="32"
        y="37"
        textAnchor="middle"
        fill="#FAF9F5"
        fontSize="14"
        fontWeight="bold"
        fontFamily="sans-serif"
        letterSpacing="-1"
      >
        {initials}
      </text>
    </svg>
  </div>
);

// Die-cut rounded sticker with white offset border
export const DieCutSticker: React.FC<{
  text: string;
  subtext?: string;
  bg?: string;
  rotation?: number;
  className?: string;
}> = ({
  text,
  subtext,
  bg = "#F5D15B",
  rotation = -3,
  className = "",
}) => (
  <div
    className={`inline-flex flex-col items-center justify-center p-3 rounded-full transition-transform hover:scale-105 cursor-pointer select-none ${className}`}
    style={{
      backgroundColor: bg,
      transform: `rotate(${rotation}deg)`,
      boxShadow: '0 4px 12px rgba(23, 22, 19, 0.12), 0 0 0 3px #FFFFFF',
    }}
  >
    <span className="font-display font-extrabold text-xs text-[#171613] tracking-tight uppercase whitespace-nowrap px-1">
      {text}
    </span>
    {subtext && (
      <span className="font-handwriting text-[10px] text-[#171613]/80 leading-none">
        {subtext}
      </span>
    )}
  </div>
);

// Vintage Photo Corner Tabs (Mounting brackets)
export const PhotoCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: string;
}> = ({ position, color = "#171613" }) => {
  const rotationMap = {
    'top-left': '0',
    'top-right': '90',
    'bottom-right': '180',
    'bottom-left': '270',
  };

  const posClassMap = {
    'top-left': '-top-1.5 -left-1.5',
    'top-right': '-top-1.5 -right-1.5',
    'bottom-right': '-bottom-1.5 -right-1.5',
    'bottom-left': '-bottom-1.5 -left-1.5',
  };

  return (
    <div className={`absolute ${posClassMap[position]} w-5 h-5 pointer-events-none z-20`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotationMap[position]}deg)` }}
      >
        <path d="M2 2L22 2L2 22Z" fill={color} opacity="0.8" />
        <path d="M4 4L18 4L4 18Z" fill="#FAF9F5" opacity="0.3" />
      </svg>
    </div>
  );
};

// Distressed Rubber Stamp: "APPROVED // HS STUDIO"
export const RubberStampApproved: React.FC<{ className?: string; rotation?: number }> = ({
  className = "w-32 h-14",
  rotation = -8,
}) => (
  <div
    style={{ transform: `rotate(${rotation}deg)` }}
    className={`inline-flex flex-col items-center justify-center border-2 border-dashed border-[#B93838] px-3 py-1 rounded-sm select-none pointer-events-none opacity-85 ${className}`}
  >
    <div className="border border-[#B93838] px-2 py-0.5 text-center rounded-xs w-full">
      <span className="font-mono text-[8px] uppercase tracking-widest text-[#B93838] font-bold block leading-none">
        ★ APPROVED ★
      </span>
      <span className="font-display font-extrabold text-[11px] uppercase tracking-wider text-[#B93838] leading-tight block">
        HS STUDIO 2026
      </span>
    </div>
  </div>
);

// Friendly Hand-Drawn Smiling Sun Doodle
export const SmilingSunDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-10 h-10",
  color = "#F5D15B",
}) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
    aria-hidden="true"
  >
    {/* Sun Center */}
    <circle cx="30" cy="30" r="14" fill={color} stroke="#171613" strokeWidth="1.5" />
    {/* Eyes & Smile */}
    <circle cx="25" cy="28" r="1.5" fill="#171613" />
    <circle cx="35" cy="28" r="1.5" fill="#171613" />
    <path d="M26 33 Q 30 37, 34 33" stroke="#171613" strokeWidth="1.4" strokeLinecap="round" />
    {/* Rays */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <line
        key={deg}
        x1="30"
        y1="9"
        x2="30"
        y2="3"
        stroke="#171613"
        strokeWidth="1.6"
        strokeLinecap="round"
        transform={`rotate(${deg} 30 30)`}
      />
    ))}
  </svg>
);

// Hand-Drawn Heart Doodle
export const HandDrawnHeart: React.FC<{ className?: string; fill?: string }> = ({
  className = "w-6 h-6",
  fill = "#F3A8B8",
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
    aria-hidden="true"
  >
    <path
      d="M16 28 C16 28, 4 20, 4 11 C4 6, 8 3, 12 4 C14.5 4.8, 15.5 7, 16 8 C16.5 7, 17.5 4.8, 20 4 C24 3, 28 6, 28 11 C28 20, 16 28, 16 28 Z"
      fill={fill}
      stroke="#171613"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


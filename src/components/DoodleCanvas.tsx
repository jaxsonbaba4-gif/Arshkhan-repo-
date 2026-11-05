import React, { useRef, useState, useEffect } from 'react';
import { Pen, Eraser, Trash2, X, Check, Flower2, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface DoodleCanvasProps {
  isActive: boolean;
  onClose: () => void;
}

export const DoodleCanvas: React.FC<DoodleCanvasProps> = ({ isActive, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState<string>(siteConfig.colors.inkBlack);
  const [lineWidth, setLineWidth] = useState<number>(2.5);
  const [mode, setMode] = useState<'draw' | 'stamp-flower' | 'stamp-star' | 'erase'>('draw');
  const [hasDoodled, setHasDoodled] = useState(false);

  // Resize canvas to match screen and preserve pixel ratio
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      if (tempCtx) {
        tempCtx.drawImage(canvas, 0, 0);
      }

      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        if (tempCanvas.width > 0) {
          ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width / dpr, tempCanvas.height / dpr);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const drawFlowerStamp = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    // Draw 5 flower petals
    for (let i = 0; i < 5; i++) {
      const angle = (i * 2 * Math.PI) / 5;
      const px = x + Math.cos(angle) * 12;
      const py = y + Math.sin(angle) * 12;
      ctx.beginPath();
      ctx.arc(px, py, 7, 0, Math.PI * 2);
      ctx.fillStyle = color === siteConfig.colors.inkBlack ? '#F3A8B8' : color;
      ctx.fill();
      ctx.strokeStyle = '#171613';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
    // Center pistil
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#F5D15B';
    ctx.fill();
    ctx.strokeStyle = '#171613';
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.restore();
    setHasDoodled(true);
  };

  const drawStarStamp = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    // 4-pointed sparkle
    ctx.beginPath();
    ctx.moveTo(x, y - 14);
    ctx.quadraticCurveTo(x, y, x + 14, y);
    ctx.quadraticCurveTo(x, y, x, y + 14);
    ctx.quadraticCurveTo(x, y, x - 14, y);
    ctx.quadraticCurveTo(x, y, x, y - 14);
    ctx.stroke();
    ctx.fillStyle = '#F5D15B';
    ctx.fill();
    ctx.restore();
    setHasDoodled(true);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (mode === 'stamp-flower') {
      drawFlowerStamp(ctx, x, y);
      return;
    }

    if (mode === 'stamp-star') {
      drawStarStamp(ctx, x, y);
      return;
    }

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasDoodled(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || mode.startsWith('stamp')) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (mode === 'erase') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = 22;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDoodled(false);
  };

  const colors = [
    { label: 'Ink', value: siteConfig.colors.inkBlack },
    { label: 'Butter', value: siteConfig.colors.butterYellow },
    { label: 'Mint', value: siteConfig.colors.softMint },
    { label: 'Lavender', value: siteConfig.colors.lavender },
    { label: 'Blush', value: siteConfig.colors.blushPink },
  ];

  return (
    <>
      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        onMouseDown={isActive ? startDrawing : undefined}
        onMouseMove={isActive ? draw : undefined}
        onMouseUp={isActive ? stopDrawing : undefined}
        onMouseLeave={isActive ? stopDrawing : undefined}
        onTouchStart={isActive ? startDrawing : undefined}
        onTouchMove={isActive ? draw : undefined}
        onTouchEnd={isActive ? stopDrawing : undefined}
        className={`fixed inset-0 z-30 transition-opacity ${
          isActive
            ? 'pointer-events-auto cursor-crosshair'
            : 'pointer-events-none opacity-85'
        }`}
      />

      {/* Floating Scrapbook Toolbar */}
      {isActive && (
        <aside
          aria-label="Sketchbook Scrapbook Toolbar"
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-[#FAF9F5] p-2 sm:p-2.5 rounded-2xl shadow-paper border-2 border-[#171613] backdrop-blur-md max-w-[95vw]"
        >
          {/* Tool Modes: Pencil vs Flower Stamp vs Star Stamp vs Eraser */}
          <div className="flex items-center gap-1 border-r border-[#171613]/20 pr-1.5 sm:pr-2">
            <button
              onClick={() => setMode('draw')}
              type="button"
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                mode === 'draw'
                  ? 'bg-[#171613] text-[#FAF9F5] shadow-xs'
                  : 'text-[#171613]/70 hover:bg-[#171613]/10'
              }`}
              title="Pencil drawing mode"
            >
              <Pen className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMode('stamp-flower')}
              type="button"
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                mode === 'stamp-flower'
                  ? 'bg-[#F3A8B8] text-[#171613] border border-[#171613] shadow-xs'
                  : 'text-[#171613]/70 hover:bg-[#171613]/10'
              }`}
              title="Stamp a flower doodle"
            >
              <Flower2 className="w-4 h-4 text-emerald-800" />
            </button>
            <button
              onClick={() => setMode('stamp-star')}
              type="button"
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                mode === 'stamp-star'
                  ? 'bg-[#F5D15B] text-[#171613] border border-[#171613] shadow-xs'
                  : 'text-[#171613]/70 hover:bg-[#171613]/10'
              }`}
              title="Stamp a star sparkle"
            >
              <Sparkles className="w-4 h-4 text-amber-900" />
            </button>
            <button
              onClick={() => setMode('erase')}
              type="button"
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                mode === 'erase'
                  ? 'bg-[#171613] text-[#FAF9F5] shadow-xs'
                  : 'text-[#171613]/70 hover:bg-[#171613]/10'
              }`}
              title="Eraser"
            >
              <Eraser className="w-4 h-4" />
            </button>
          </div>

          {/* Color Palette */}
          {mode === 'draw' && (
            <div className="flex items-center gap-1.5 border-r border-[#171613]/20 pr-1.5 sm:pr-2">
              {colors.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setColor(c.value)}
                  type="button"
                  style={{ backgroundColor: c.value }}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border transition-transform cursor-pointer flex items-center justify-center ${
                    color === c.value
                      ? 'scale-115 border-[#171613] shadow-xs ring-2 ring-white'
                      : 'border-[#171613]/20 hover:scale-105'
                  }`}
                  title={`${c.label} color`}
                >
                  {color === c.value && (
                    <Check
                      className={`w-3 h-3 ${
                        c.value === siteConfig.colors.inkBlack
                          ? 'text-white'
                          : 'text-[#171613]'
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Clear & Done buttons */}
          <div className="flex items-center gap-1">
            {hasDoodled && (
              <button
                onClick={clearCanvas}
                type="button"
                className="p-2 text-[#171613]/70 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                title="Clear all doodles"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              type="button"
              className="flex items-center gap-1 px-3 py-1.5 bg-[#171613] text-[#FAF9F5] text-xs font-mono rounded-xl hover:bg-[#171613]/90 transition-all cursor-pointer shadow-xs active:scale-95"
              title="Close doodle pen"
            >
              <X className="w-3.5 h-3.5" />
              <span>Done</span>
            </button>
          </div>
        </aside>
      )}
    </>
  );
};

import React, { useState } from 'react';
import { Sliders, RefreshCw, Zap } from 'lucide-react';

interface InterferenceHeroWaveProps {
  interactive?: boolean;
}

export const InterferenceHeroWave: React.FC<InterferenceHeroWaveProps> = () => {
  const [sourceDistance, setSourceDistance] = useState<number>(120);
  const [speed, setSpeed] = useState<number>(7);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [waveCount, setWaveCount] = useState<number>(4);

  const s1X = 200 - sourceDistance / 2;
  const s2X = 200 + sourceDistance / 2;
  const centerY = 200;

  const delays = Array.from({ length: waveCount }, (_, i) => -(i * (speed / waveCount)));

  return (
    <div className="relative w-full max-w-[480px] mx-auto select-none">
      {/* SVG Waves matching the exact design with two-source ripples */}
      <svg
        className="w-full h-auto max-h-[500px] drop-shadow-2xl"
        viewBox="0 0 400 400"
        role="img"
        aria-label="Animated ripples from two sources overlapping to form an interference pattern"
      >
        <defs>
          <radialGradient id="photonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2de2d0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2de2d0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="amberGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb347" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffb347" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient glow centers */}
        <circle cx={s1X} cy={centerY} r="35" fill="url(#photonGlow)" opacity="0.35" />
        <circle cx={s2X} cy={centerY} r="35" fill="url(#amberGlow)" opacity="0.35" />

        {/* Source 1 (Cyan / Photon) Waves */}
        <g>
          {delays.map((delay, index) => (
            <circle
              key={`s1-ring-${index}`}
              className="animate-ripple"
              cx={s1X}
              cy={centerY}
              r="190"
              fill="none"
              stroke="#2de2d0"
              strokeWidth="1.8"
              style={{
                animationDuration: `${speed}s`,
                animationDelay: `${delay}s`,
              }}
            />
          ))}
        </g>

        {/* Source 2 (Amber / Warm) Waves */}
        <g>
          {delays.map((delay, index) => (
            <circle
              key={`s2-ring-${index}`}
              className="animate-ripple"
              cx={s2X}
              cy={centerY}
              r="190"
              fill="none"
              stroke="#ffb347"
              strokeWidth="1.8"
              style={{
                animationDuration: `${speed}s`,
                animationDelay: `${delay}s`,
              }}
            />
          ))}
        </g>

        {/* Wave Center Dots */}
        <circle cx={s1X} cy={centerY} r="6.5" fill="#2de2d0" stroke="#062b2e" strokeWidth="1.5" />
        <circle cx={s2X} cy={centerY} r="6.5" fill="#ffb347" stroke="#062b2e" strokeWidth="1.5" />

        {/* Connecting Baseline showing separation */}
        {showControls && (
          <line
            x1={s1X}
            y1={centerY}
            x2={s2X}
            y2={centerY}
            stroke="#9fc7c3"
            strokeDasharray="3 3"
            strokeWidth="1"
            opacity="0.6"
          />
        )}
      </svg>

      {/* Physics interactive toggle & controls */}
      <div className="absolute bottom-1 right-1 flex flex-col items-end gap-2">
        <button
          onClick={() => setShowControls(!showControls)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#0a4146]/80 hover:bg-[#0a4146] text-[#2de2d0] border border-[#2de2d0]/40 backdrop-blur-md transition-all shadow-md"
          title="Interactive ripple simulation controls"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>{showControls ? 'Hide Controls' : 'Tweak Waves'}</span>
        </button>

        {showControls && (
          <div className="p-3 bg-[#062b2e]/95 border border-[#2de2d0]/30 rounded-xl backdrop-blur-lg shadow-xl text-xs text-[#d8efec] w-64 space-y-2.5 animate-in fade-in">
            <div className="flex justify-between items-center text-[11px] font-bold tracking-wide uppercase text-[#ffb347]">
              <span>Wave Interference Params</span>
              <button
                onClick={() => {
                  setSourceDistance(120);
                  setSpeed(7);
                  setWaveCount(4);
                }}
                className="hover:text-white"
                title="Reset default"
              >
                <RefreshCw className="w-3 h-3" />
              </button>
            </div>

            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span>Slit Separation (d):</span>
                <span className="font-mono text-[#2de2d0]">{sourceDistance} px</span>
              </div>
              <input
                type="range"
                min="40"
                max="240"
                value={sourceDistance}
                onChange={(e) => setSourceDistance(Number(e.target.value))}
                className="w-full accent-[#2de2d0] h-1.5 bg-[#0a4146] rounded cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span>Period / Speed:</span>
                <span className="font-mono text-[#ffb347]">{speed}s</span>
              </div>
              <input
                type="range"
                min="3"
                max="12"
                step="0.5"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full accent-[#ffb347] h-1.5 bg-[#0a4146] rounded cursor-pointer"
              />
            </div>

            <div className="pt-1 border-t border-[#1d5557] text-[10px] text-[#9fc7c3] leading-relaxed flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#ffb347] shrink-0" />
              <span>Constructive: Δx = nλ | Destructive: Δx = (n + ½)λ</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

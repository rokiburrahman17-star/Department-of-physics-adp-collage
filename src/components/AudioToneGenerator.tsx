import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Square, Activity, Sparkles } from 'lucide-react';

interface AudioToneGeneratorProps {
  initialFrequency?: number;
  label?: string;
}

export const AudioToneGenerator: React.FC<AudioToneGeneratorProps> = ({
  initialFrequency = 432,
  label = "God's Frequency (432 Hz) Audio Synth",
}) => {
  const [frequency, setFrequency] = useState<number>(initialFrequency);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.15);
  const [waveType, setWaveType] = useState<OscillatorType>('sine');

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const stopTone = () => {
    if (oscRef.current) {
      try {
        oscRef.current.stop();
        oscRef.current.disconnect();
      } catch {
        // ignore
      }
      oscRef.current = null;
    }
    setIsPlaying(false);
  };

  const startTone = () => {
    stopTone();
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioContextClass();
      } else if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = waveType;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      oscRef.current = osc;
      gainRef.current = gain;
      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio Context init warning:", e);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopTone();
    } else {
      startTone();
    }
  };

  useEffect(() => {
    if (oscRef.current && audioCtxRef.current) {
      oscRef.current.frequency.setTargetAtTime(frequency, audioCtxRef.current.currentTime, 0.03);
    }
  }, [frequency]);

  useEffect(() => {
    if (gainRef.current && audioCtxRef.current) {
      gainRef.current.gain.setTargetAtTime(volume, audioCtxRef.current.currentTime, 0.03);
    }
  }, [volume]);

  useEffect(() => {
    if (oscRef.current) {
      oscRef.current.type = waveType;
    }
  }, [waveType]);

  useEffect(() => {
    return () => {
      stopTone();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Simple waveform canvas visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#141238';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = isPlaying ? '#f7b750' : '#4a4470';
      ctx.lineWidth = 2;
      ctx.beginPath();

      const width = canvas.width;
      const height = canvas.height;
      const mid = height / 2;
      const amplitude = isPlaying ? (height / 2.6) * (volume / 0.3) : 6;
      const cycles = (frequency / 100) * 2;

      for (let x = 0; x < width; x++) {
        const t = (x / width) * cycles * 2 * Math.PI + phase;
        let y = mid;
        if (waveType === 'sine') {
          y = mid + Math.sin(t) * amplitude;
        } else if (waveType === 'triangle') {
          y = mid + (2 / Math.PI) * Math.asin(Math.sin(t)) * amplitude;
        } else {
          y = mid + Math.sin(t) * amplitude;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      if (isPlaying) {
        phase += 0.08;
      } else {
        phase += 0.01;
      }
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, frequency, volume, waveType]);

  return (
    <div className="bg-[#1b1734] text-[#fcf6ea] p-5 rounded-2xl border-2 border-[#cbaf79]/40 shadow-xl my-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-[#dfcca2]/20 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-[#f7b750] animate-pulse" />
          <h4 className="m-0 font-bold text-base text-[#f7b750] font-sans flex items-center gap-2">
            <span>{label}</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#f7b750]/20 text-[#f7b750] border border-[#f7b750]/40 font-mono">
              Web Audio Synthesizer
            </span>
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFrequency(432)}
            className={`px-2.5 py-1 text-xs rounded-lg font-mono transition-all ${
              frequency === 432
                ? 'bg-[#e68a1d] text-white font-bold shadow'
                : 'bg-[#201e52] text-[#fbe4be] hover:bg-[#2e2b70]'
            }`}
          >
            432 Hz (Calm / Nature)
          </button>
          <button
            onClick={() => setFrequency(440)}
            className={`px-2.5 py-1 text-xs rounded-lg font-mono transition-all ${
              frequency === 440
                ? 'bg-[#e68a1d] text-white font-bold shadow'
                : 'bg-[#201e52] text-[#fbe4be] hover:bg-[#2e2b70]'
            }`}
          >
            440 Hz (Standard A4)
          </button>
          <button
            onClick={() => setFrequency(528)}
            className={`px-2.5 py-1 text-xs rounded-lg font-mono transition-all ${
              frequency === 528
                ? 'bg-[#e68a1d] text-white font-bold shadow'
                : 'bg-[#201e52] text-[#fbe4be] hover:bg-[#2e2b70]'
            }`}
          >
            528 Hz (Harmonic)
          </button>
        </div>
      </div>

      {/* Wave Visualizer Canvas */}
      <div className="relative rounded-xl overflow-hidden border border-[#cbaf79]/30 mb-4 bg-[#141238]">
        <canvas ref={canvasRef} width={600} height={70} className="w-full h-[70px] block" />
        <div className="absolute top-2 right-3 font-mono text-xs text-[#f7b750] bg-[#141238]/80 px-2 py-0.5 rounded backdrop-blur-sm">
          f = {frequency} Hz &middot; λ ≈ {(343 / frequency).toFixed(3)} m (in 20°C air)
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        {/* Play/Stop button */}
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md ${
              isPlaying
                ? 'bg-[#c23923] hover:bg-[#911f12] text-white'
                : 'bg-[#e68a1d] hover:bg-[#f7b750] hover:text-[#1b1734] text-white'
            }`}
          >
            {isPlaying ? (
              <>
                <Square className="w-4 h-4 fill-current" />
                <span>Stop Tone</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Listen to {frequency} Hz</span>
              </>
            )}
          </button>

          <span className="text-xs text-[#d7ceb9] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#f7b750]" />
            <span>Pure Harmonic</span>
          </span>
        </div>

        {/* Frequency Slider */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-mono text-[#d7ceb9]">
            <span>Frequency:</span>
            <span className="text-[#f7b750] font-bold">{frequency} Hz</span>
          </div>
          <input
            type="range"
            min="200"
            max="800"
            step="1"
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="w-full accent-[#e68a1d] h-1.5 bg-[#201e52] rounded cursor-pointer"
          />
        </div>

        {/* Volume & Waveform */}
        <div className="flex items-center gap-3 justify-end">
          <div className="flex items-center gap-2">
            {volume === 0 ? (
              <VolumeX className="w-4 h-4 text-[#d7ceb9]" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#f7b750]" />
            )}
            <input
              type="range"
              min="0"
              max="0.4"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-20 accent-[#e68a1d] h-1.5 bg-[#201e52] rounded cursor-pointer"
              title="Volume"
            />
          </div>

          <div className="flex rounded-lg overflow-hidden border border-[#dfcca2]/30 text-xs">
            <button
              onClick={() => setWaveType('sine')}
              className={`px-2 py-1 ${
                waveType === 'sine' ? 'bg-[#e68a1d] text-white' : 'bg-[#201e52] text-[#fbe4be]'
              }`}
            >
              Sine
            </button>
            <button
              onClick={() => setWaveType('triangle')}
              className={`px-2 py-1 ${
                waveType === 'triangle' ? 'bg-[#e68a1d] text-white' : 'bg-[#201e52] text-[#fbe4be]'
              }`}
            >
              Triangle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

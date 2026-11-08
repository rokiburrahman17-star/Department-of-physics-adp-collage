import React from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../data/departmentData';

interface GalleryModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#062b2e]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#062b2e] border border-[#2de2d0]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0a4146] border-b border-[#2de2d0]/30 text-white">
          <div className="flex items-center gap-2">
            <Maximize2 className="w-4 h-4 text-[#2de2d0]" />
            <span className="font-bricolage font-bold text-sm sm:text-base">{currentItem.title}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#2de2d0]/20 text-[#2de2d0] border border-[#2de2d0]/30 font-medium ml-2">
              {currentItem.category}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#9fc7c3] font-mono">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-[#9fc7c3] hover:text-white hover:bg-[#164e52] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image viewport */}
        <div className="relative bg-[#031b1d] flex items-center justify-center min-h-[320px] max-h-[70vh] overflow-hidden">
          <img
            src={currentItem.image}
            alt={currentItem.caption}
            className="w-full h-full max-h-[68vh] object-contain select-none"
          />

          {/* Prev/Next buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#062b2e]/80 text-[#2de2d0] hover:bg-[#0a4146] hover:text-white transition-all border border-[#2de2d0]/30 backdrop-blur-sm shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#062b2e]/80 text-[#2de2d0] hover:bg-[#0a4146] hover:text-white transition-all border border-[#2de2d0]/30 backdrop-blur-sm shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        <div className="px-5 py-4 bg-[#062b2e] border-t border-[#1d5557] text-[#d8efec] text-sm">
          <p className="leading-relaxed">{currentItem.caption}</p>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { WALL_MAGAZINE_DATA } from '../data/departmentData';
import { AudioToneGenerator } from './AudioToneGenerator';
import {
  Sparkles,
  ArrowLeft,
  Music,
  Feather,
  Layers,
  Heart,
  ExternalLink,
  Volume2,
  Atom,
  Share2,
} from 'lucide-react';

interface WallMagazineViewProps {
  onReturnToHome: () => void;
  onOpenPhotoLightbox: (imageUrl: string, title: string) => void;
}

export const WallMagazineView: React.FC<WallMagazineViewProps> = ({
  onReturnToHome,
  onOpenPhotoLightbox,
}) => {
  const [activeTab, setActiveTab] = useState<string>('editorial');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="bg-[#fcf6ea] text-[#1b1734] min-h-screen selection:bg-[#f7b750] selection:text-[#1b1734]">
      {/* 1. HERO HEADER matching exact design */}
      <header
        id="top"
        className="relative bg-gradient-to-br from-[#141238] via-[#201e52] via-75% to-[#911f12] text-white text-center py-16 px-5 border-b-[5px] border-[#e68a1d] overflow-hidden"
      >
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(247,183,80,0.18),transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex flex-wrap justify-center gap-2.5 mb-5">
            <span className="font-bengali-sans text-xs font-semibold uppercase tracking-wider bg-white/12 backdrop-blur-md border border-white/25 text-[#fef3c7] px-3.5 py-1 rounded-full">
              ADP College Nagaon
            </span>
            <span className="font-bengali-sans text-xs font-semibold uppercase tracking-wider bg-white/12 backdrop-blur-md border border-white/25 text-[#fef3c7] px-3.5 py-1 rounded-full">
              Department of Physics
            </span>
            <span className="font-bengali-sans text-xs font-semibold uppercase tracking-wider bg-white/12 backdrop-blur-md border border-white/25 text-[#fef3c7] px-3.5 py-1 rounded-full">
              Annual Wall Magazine 2026
            </span>
          </div>

          <h1 className="font-bengali-serif font-bold text-[clamp(42px,8vw,80px)] leading-[1.2] text-white mb-2 drop-shadow-[0_4px_18px_rgba(0,0,0,0.5)]">
            {WALL_MAGAZINE_DATA.title}
          </h1>

          <h2 className="font-bengali-serif font-bold text-[clamp(22px,4.5vw,36px)] leading-[1.35] text-[#f7b750] max-w-2xl mx-auto mb-4">
            {WALL_MAGAZINE_DATA.subtitle}
          </h2>

          <p className="font-fraunces italic font-semibold text-[clamp(16px,2.5vw,21px)] leading-relaxed text-[#fbe4be] max-w-2xl mx-auto">
            {WALL_MAGAZINE_DATA.tagline}
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={onReturnToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141238]/80 text-[#fbe4be] border border-[#f7b750]/30 hover:bg-[#141238] text-xs font-bold transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Department Portal</span>
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#e68a1d] hover:bg-[#f7b750] hover:text-[#141238] text-white text-xs font-bold transition-all shadow"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Magazine'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. SUB-NAVIGATION BAR matching HTML */}
      <nav
        aria-label="Magazine sections"
        className="sticky top-0 bg-[#fcf6ea]/95 backdrop-blur-md border-b-2 border-[#dfcca2] flex gap-2 overflow-x-auto py-3 px-5 z-30 shadow-[0_4px_12px_rgba(27,23,52,0.06)] justify-center"
      >
        <a
          href="#editorial"
          className="whitespace-nowrap text-[#1b1734] hover:bg-[#e68a1d] hover:text-white font-bengali-sans font-semibold text-[15px] px-4 py-1.5 rounded-full border border-transparent transition-all"
        >
          সম্পাদকীয়
        </a>
        <a
          href="#origin"
          className="whitespace-nowrap text-[#1b1734] hover:bg-[#e68a1d] hover:text-white font-bengali-sans font-semibold text-[15px] px-4 py-1.5 rounded-full border border-transparent transition-all"
        >
          উৎপত্তি
        </a>
        <a
          href="#science"
          className="whitespace-nowrap text-[#1b1734] hover:bg-[#e68a1d] hover:text-white font-bengali-sans font-semibold text-[15px] px-4 py-1.5 rounded-full border border-transparent transition-all"
        >
          বৈজ্ঞানিক
        </a>
        <a
          href="#nature"
          className="whitespace-nowrap text-[#1b1734] hover:bg-[#e68a1d] hover:text-white font-bengali-sans font-semibold text-[15px] px-4 py-1.5 rounded-full border border-transparent transition-all"
        >
          প্ৰকৃতি
        </a>
        <a
          href="#instruments"
          className="whitespace-nowrap text-[#1b1734] hover:bg-[#e68a1d] hover:text-white font-bengali-sans font-semibold text-[15px] px-4 py-1.5 rounded-full border border-transparent transition-all"
        >
          বাদ্যযন্ত্ৰ
        </a>
        <a
          href="#poem"
          className="whitespace-nowrap text-[#1b1734] hover:bg-[#e68a1d] hover:text-white font-bengali-sans font-semibold text-[15px] px-4 py-1.5 rounded-full border border-transparent transition-all"
        >
          সুৰৰ মায়া
        </a>
        <a
          href="#credits"
          className="whitespace-nowrap text-[#1b1734] hover:bg-[#e68a1d] hover:text-white font-bengali-sans font-semibold text-[15px] px-4 py-1.5 rounded-full border border-transparent transition-all"
        >
          Credits
        </a>
        <button
          onClick={onReturnToHome}
          className="whitespace-nowrap bg-[#201e52] hover:bg-[#141238] text-white font-bengali-sans font-bold text-xs px-3.5 py-1.5 rounded-full transition-all ml-1"
        >
          &larr; Department Home
        </button>
      </nav>

      {/* 3. MAIN MAGAZINE CONTENT */}
      <main className="max-w-[880px] mx-auto px-5 pb-24 font-bengali-serif text-[17px] leading-[1.85]">
        {/* SECTION: EDITORIAL (সম্পাদকীয়) */}
        <section id="editorial" className="pt-14">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-bengali-serif font-bold text-[clamp(28px,4.5vw,36px)] text-[#201e52] whitespace-nowrap m-0">
              সম্পাদকীয়
            </h3>
            <div className="grow h-[3px] bg-gradient-to-r from-[#e68a1d] to-transparent rounded" />
          </div>

          <div className="space-y-4 text-justify text-[#2b2649]">
            {WALL_MAGAZINE_DATA.editorial.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="text-right font-bold my-6 text-[#911f12] text-lg font-bengali-serif">
            <div>সম্পাদিকা</div>
            <div className="text-xl text-[#c23923]">{WALL_MAGAZINE_DATA.editor}</div>
          </div>

          {/* Exhibition Photo Figure */}
          <figure
            onClick={() =>
              onOpenPhotoLightbox(
                WALL_MAGAZINE_DATA.coverImage,
                'পদাৰ্থ বিজ্ঞান বিভাগৰ বাৰ্ষিক প্ৰাচীৰ পত্ৰিকা: “সুৰৰ অনুৰণন — প্ৰকৃতিৰ পৰা বিজ্ঞানলৈ”'
              )
            }
            className="my-8 rounded-2xl overflow-hidden border border-[#cbaf79] bg-[#f5ecda] shadow-[0_10px_25px_rgba(27,23,52,0.09)] cursor-pointer group"
          >
            <div className="relative overflow-hidden">
              <img
                src={WALL_MAGAZINE_DATA.coverImage}
                alt="Wall magazine: সুৰৰ অনুৰণন (Surar Anuranon) by Department of Physics, ADP College"
                loading="lazy"
                className="w-full max-h-[500px] object-cover mx-auto transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#141238]/90 text-white text-xs px-3.5 py-1.5 rounded-full font-sans font-bold backdrop-blur-sm border border-[#f7b750]/50">
                  Click to inspect wall magazine exhibit in high resolution
                </span>
              </div>
            </div>
            <figcaption className="font-bengali-sans font-medium text-xs sm:text-sm text-[#635941] bg-[#fdf3dc] px-4 py-2.5 border-t border-[#dfcca2] text-center">
              পদাৰ্থ বিজ্ঞান বিভাগৰ বাৰ্ষিক প্ৰাচীৰ পত্ৰিকা: “সুৰৰ অনুৰণন — প্ৰকৃতিৰ পৰা বিজ্ঞানলৈ” (Department
              Exhibit 2026)
            </figcaption>
          </figure>
        </section>

        {/* SECTION: ORIGIN (উৎপত্তি) */}
        <section id="origin" className="pt-14">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-bengali-serif font-bold text-[clamp(28px,4.5vw,36px)] text-[#201e52] whitespace-nowrap m-0">
              উৎপত্তি
            </h3>
            <div className="grow h-[3px] bg-gradient-to-r from-[#e68a1d] to-transparent rounded" />
          </div>

          {WALL_MAGAZINE_DATA.originArticles.map((art, idx) => (
            <div key={idx} className="mb-8">
              <h4 className="font-bengali-serif font-bold text-[22px] sm:text-[23px] text-[#201e52] my-5 flex items-center gap-2.5">
                <span className="w-1.5 h-5 bg-[#e68a1d] rounded inline-block" />
                <span>{art.title}</span>
              </h4>
              <div className="space-y-3 text-justify text-[#2b2649]">
                {art.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* SECTION: SCIENTIFIC (বৈজ্ঞানিক) */}
        <section id="science" className="pt-14">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-bengali-serif font-bold text-[clamp(28px,4.5vw,36px)] text-[#201e52] whitespace-nowrap m-0">
              বৈজ্ঞানিক
            </h3>
            <div className="grow h-[3px] bg-gradient-to-r from-[#e68a1d] to-transparent rounded" />
          </div>

          {/* Article 1: God's Frequency */}
          <h4 className="font-bengali-serif font-bold text-[22px] sm:text-[23px] text-[#201e52] my-5 flex items-center gap-2.5">
            <span className="w-1.5 h-5 bg-[#e68a1d] rounded inline-block" />
            <span>GOD'S FREQUENCY (৪৩২ হাৰ্টজ আৰু মানসিক স্থিৰতা)</span>
          </h4>

          <div className="bg-[#fffdfa] border border-[#dfcca2] border-l-4 border-l-[#e68a1d] rounded-2xl p-6 my-4 shadow-[0_4px_12px_rgba(27,23,52,0.06)] font-fraunces text-[16.5px] leading-relaxed text-[#26233d]">
            <p className="m-0 text-justify">
              {WALL_MAGAZINE_DATA.scientificArticles[0].englishText}
            </p>
          </div>

          {/* Interactive Audio Tone Generator for 432 Hz */}
          <AudioToneGenerator initialFrequency={432} label="God's Frequency (432 Hz) Audio Experience" />

          {/* Article 2: Resonance in Assamese Musical Instruments */}
          <h4 className="font-bengali-serif font-bold text-[22px] sm:text-[23px] text-[#201e52] mt-8 mb-4 flex items-center gap-2.5">
            <span className="w-1.5 h-5 bg-[#e68a1d] rounded inline-block" />
            <span>Resonance of Sound in Assamese Musical Instruments</span>
          </h4>

          <div className="bg-[#fffdfa] border border-[#dfcca2] border-l-4 border-l-[#e68a1d] rounded-2xl p-6 my-4 shadow-[0_4px_12px_rgba(27,23,52,0.06)] font-fraunces text-[16.5px] leading-relaxed text-[#26233d]">
            <p className="m-0 text-justify">
              {WALL_MAGAZINE_DATA.scientificArticles[1].englishText}
            </p>
          </div>

          {/* Article 3: From Production to Propagation of Sound */}
          <h4 className="font-bengali-serif font-bold text-[22px] sm:text-[23px] text-[#201e52] mt-8 mb-4 flex items-center gap-2.5">
            <span className="w-1.5 h-5 bg-[#e68a1d] rounded inline-block" />
            <span>From Production to Propagation of Sound</span>
          </h4>

          <div className="bg-[#fffdfa] border border-[#dfcca2] border-l-4 border-l-[#e68a1d] rounded-2xl p-6 my-4 shadow-[0_4px_12px_rgba(27,23,52,0.06)] font-fraunces text-[16.5px] leading-relaxed text-[#26233d]">
            <p className="m-0 text-justify">
              {WALL_MAGAZINE_DATA.scientificArticles[2].englishText}
            </p>
          </div>
        </section>

        {/* SECTION: NATURE (প্ৰকৃতি) */}
        <section id="nature" className="pt-14">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-bengali-serif font-bold text-[clamp(28px,4.5vw,36px)] text-[#201e52] whitespace-nowrap m-0">
              প্ৰকৃতি
            </h3>
            <div className="grow h-[3px] bg-gradient-to-r from-[#e68a1d] to-transparent rounded" />
          </div>

          <div className="space-y-5">
            {WALL_MAGAZINE_DATA.natureSounds.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fffcf5] border border-[#dfcca2] rounded-2xl p-6 shadow-[0_4px_12px_rgba(27,23,52,0.06)]"
              >
                <h4 className="font-bengali-serif font-bold text-[21px] text-[#201e52] mt-0 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e68a1d]" />
                  <span>{item.title}</span>
                </h4>
                <p className="text-justify text-[#2b2649] mb-3">{item.description}</p>
                <div className="bg-[#f5ecda] p-2.5 rounded-lg text-xs font-sans font-medium text-[#201e52] border border-[#dfcca2]">
                  <span className="font-bold text-[#c23923]">Physics Principle:</span> {item.physics}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: INSTRUMENTS (বাদ্যযন্ত্ৰ) */}
        <section id="instruments" className="pt-14">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-bengali-serif font-bold text-[clamp(28px,4.5vw,36px)] text-[#201e52] whitespace-nowrap m-0">
              বাদ্যযন্ত্ৰ
            </h3>
            <div className="grow h-[3px] bg-gradient-to-r from-[#e68a1d] to-transparent rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WALL_MAGAZINE_DATA.instruments.map((inst, idx) => (
              <div
                key={idx}
                className="bg-[#fffcf5] border border-[#dfcca2] rounded-2xl p-6 shadow-[0_4px_12px_rgba(27,23,52,0.06)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#fdf3dc] text-[#911f12] border border-[#dfcca2]">
                      {inst.type}
                    </span>
                    <span className="text-xs font-fraunces text-[#635941]">{inst.englishName}</span>
                  </div>

                  <h4 className="font-bengali-serif font-bold text-[22px] text-[#201e52] mt-1 mb-2">
                    {inst.name}
                  </h4>

                  <p className="text-justify text-[#2b2649] text-[16px] leading-relaxed mb-4">
                    {inst.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#dfcca2] text-xs font-sans text-[#201e52] bg-[#fcf6ea] p-2 rounded-lg">
                  <span className="font-bold text-[#911f12]">Acoustic Mechanics:</span> {inst.physics}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: POEM (সুৰৰ মায়া) */}
        <section id="poem" className="pt-14">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-bengali-serif font-bold text-[clamp(28px,4.5vw,36px)] text-[#201e52] whitespace-nowrap m-0">
              সুৰৰ মায়া
            </h3>
            <div className="grow h-[3px] bg-gradient-to-r from-[#e68a1d] to-transparent rounded" />
          </div>

          <div className="bg-gradient-to-br from-[#fffaf0] to-[#fcf3e0] border-2 border-dashed border-[#cbaf79] rounded-3xl p-8 sm:p-10 my-6 text-center shadow-[0_4px_12px_rgba(27,23,52,0.06)] relative overflow-hidden">
            <div className="absolute top-4 left-6 text-4xl text-[#dfcca2] font-serif select-none opacity-40">
              “
            </div>
            <div className="absolute bottom-4 right-6 text-4xl text-[#dfcca2] font-serif select-none opacity-40">
              ”
            </div>

            <p className="font-bengali-serif text-lg sm:text-[20px] leading-[2.3] whitespace-pre-line text-[#201e52] font-semibold mb-0">
              {WALL_MAGAZINE_DATA.poem}
            </p>
          </div>
        </section>

        {/* SECTION: CREDITS */}
        <section id="credits" className="pt-14">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-bengali-serif font-bold text-[clamp(28px,4.5vw,36px)] text-[#201e52] whitespace-nowrap m-0">
              Credits &amp; Contributors
            </h3>
            <div className="grow h-[3px] bg-gradient-to-r from-[#e68a1d] to-transparent rounded" />
          </div>

          <p className="text-sm font-sans text-[#635941] mb-4">
            The annual wall magazine is conceptualized, scripted, hand-drawn, and sculpted by the undergraduate students of the Department of Physics:
          </p>

          <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {WALL_MAGAZINE_DATA.credits.map((item, idx) => (
              <li
                key={idx}
                className="bg-[#fffcf5] border border-[#dfcca2] p-4 rounded-xl font-bengali-sans text-[15px] shadow-[0_4px_12px_rgba(27,23,52,0.06)] flex items-center justify-between"
              >
                <b className="text-[#911f12] font-bold">{item.role}</b>
                <span className="text-[#201e52] font-semibold text-right">{item.name}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <button
              onClick={onReturnToHome}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#201e52] hover:bg-[#141238] text-white font-bold text-sm transition-all shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Department Portal</span>
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#141238] text-[#f4eedb] text-center py-10 px-5 border-t-4 border-[#e68a1d]">
        <p className="m-0 mb-2 font-bengali-sans text-sm text-[#d7ceb9]">
          Anandaram Dhekial Phookan College &middot; Department of Physics &middot; Estd. 1959
        </p>
        <p className="m-0 text-xs text-[#9fc7c3] font-mono">
          Annual Wall Magazine: “সুৰৰ অনুৰণন — প্ৰকৃতিৰ পৰা বিজ্ঞানলৈ” (2026)
        </p>
        <div className="mt-4">
          <button
            onClick={onReturnToHome}
            className="text-[#f7b750] font-bold text-xs underline hover:text-white"
          >
            &larr; Return to Department Homepage
          </button>
        </div>
      </footer>
    </div>
  );
};

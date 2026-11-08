import React, { useState, useEffect } from 'react';
import { Navbar, ActiveView } from './components/Navbar';
import { DepartmentHome } from './components/DepartmentHome';
import { SyllabusView } from './components/SyllabusView';
import { WallMagazineView } from './components/WallMagazineView';
import { GalleryModal } from './components/GalleryModal';
import { GALLERY_ITEMS, GalleryItem } from './data/departmentData';
import { Sparkles, BookOpen, Home, ChevronUp } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ActiveView>('home');
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [customGalleryItems, setCustomGalleryItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (view: ActiveView, sectionId?: string) => {
    setCurrentView(view);
    if (view === 'home' && sectionId) {
      setTimeout(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openGalleryItem = (index: number) => {
    setCustomGalleryItems(GALLERY_ITEMS);
    setGalleryIndex(index);
  };

  const openSingleImage = (imageUrl: string, title: string) => {
    const singleItem: GalleryItem = {
      id: 'custom-view',
      title: title,
      category: 'Exhibition',
      caption: title,
      image: imageUrl,
    };
    setCustomGalleryItems([singleItem]);
    setGalleryIndex(0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-ibm text-[#17302f] bg-[#f4f7f6]">
      {/* Quick View Bar */}
      <div className="bg-[#031b1d] text-[#9fc7c3] text-xs py-2 px-5 border-b border-[#0a4146]/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2de2d0] animate-ping" />
          <span className="font-semibold text-[#c3e3df]">
            Official Portal: Department of Physics &middot; Anandaram Dhekial Phookan College
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-[#9fc7c3] hidden sm:inline">Active View:</span>
          <div className="flex rounded-md p-0.5 bg-[#062b2e] border border-[#0a4146]">
            <button
              onClick={() => handleNavigate('home')}
              className={`px-2.5 py-0.5 rounded text-xs transition-colors flex items-center gap-1 ${
                currentView === 'home'
                  ? 'bg-[#0a4146] text-[#2de2d0] font-bold'
                  : 'text-[#9fc7c3] hover:text-white'
              }`}
            >
              <Home className="w-3 h-3" />
              <span>Department</span>
            </button>
            <button
              onClick={() => handleNavigate('syllabus')}
              className={`px-2.5 py-0.5 rounded text-xs transition-colors flex items-center gap-1 ${
                currentView === 'syllabus'
                  ? 'bg-[#0a4146] text-[#ffb347] font-bold'
                  : 'text-[#9fc7c3] hover:text-white'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span>Syllabus</span>
            </button>
            <button
              onClick={() => handleNavigate('magazine')}
              className={`px-2.5 py-0.5 rounded text-xs transition-colors flex items-center gap-1 font-bengali-sans ${
                currentView === 'magazine'
                  ? 'bg-[#e68a1d] text-white font-bold'
                  : 'text-[#f7b750] hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>সুৰৰ অনুৰণন</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main View Router */}
      <main className="grow">
        {currentView === 'home' && (
          <DepartmentHome
            onNavigateToSyllabus={() => handleNavigate('syllabus')}
            onNavigateToMagazine={() => handleNavigate('magazine')}
            onOpenGalleryItem={openGalleryItem}
          />
        )}

        {currentView === 'syllabus' && (
          <SyllabusView
            onContactAdvisor={() => handleNavigate('home', 'contact')}
          />
        )}

        {currentView === 'magazine' && (
          <WallMagazineView
            onReturnToHome={() => handleNavigate('home')}
            onOpenPhotoLightbox={openSingleImage}
          />
        )}
      </main>

      {/* Department Standard Footer on Home & Syllabus views */}
      {currentView !== 'magazine' && (
        <footer className="bg-[#062b2e] text-[#9fc7c3] py-7 text-sm border-t border-[#0a4146]">
          <div className="max-w-[1140px] mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <span>&copy; {new Date().getFullYear()} Department of Physics, ADP College, Nagaon.</span>
              <span className="block sm:inline sm:ml-2 text-xs text-[#58706f]">All Rights Reserved.</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="text-[#2de2d0]">Affiliated to Gauhati University</span>
              <span className="text-[#1d5557]">&middot;</span>
              <button
                onClick={() => handleNavigate('magazine')}
                className="text-[#ffb347] hover:underline flex items-center gap-1 font-bengali-sans"
              >
                <span>সুৰৰ অনুৰণন (2026)</span>
              </button>
            </div>
          </div>
        </footer>
      )}

      {/* Lightbox Modal */}
      <GalleryModal
        items={customGalleryItems}
        currentIndex={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onNext={() => {
          if (galleryIndex !== null) {
            setGalleryIndex((galleryIndex + 1) % customGalleryItems.length);
          }
        }}
        onPrev={() => {
          if (galleryIndex !== null) {
            setGalleryIndex(
              (galleryIndex - 1 + customGalleryItems.length) % customGalleryItems.length
            );
          }
        }}
      />

      {/* Back to top floating button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#062b2e] text-[#2de2d0] border border-[#2de2d0]/40 shadow-xl hover:bg-[#0a4146] hover:text-white transition-all animate-in fade-in"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

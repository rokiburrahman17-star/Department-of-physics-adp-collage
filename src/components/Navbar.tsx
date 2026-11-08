import React, { useState } from 'react';
import { Menu, X, BookOpen, Sparkles, Home, Layers, Users, Bell, Image as ImageIcon, Mail } from 'lucide-react';

export type ActiveView = 'home' | 'syllabus' | 'magazine';

interface NavbarProps {
  currentView: ActiveView;
  onNavigate: (view: ActiveView, sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleNavClick = (view: ActiveView, sectionId?: string) => {
    onNavigate(view, sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#062b2e] text-white sticky top-0 z-40 border-b border-[#0a4146] shadow-lg">
      <div className="max-w-[1140px] mx-auto px-5 flex items-center justify-between gap-4 min-h-[66px]">
        {/* Brand / Logo matching the exact atomic orbital SVG */}
        <button
          onClick={() => handleNavClick('home', 'top')}
          className="flex items-center gap-3 text-left group focus:outline-none"
          aria-label="Department of Physics, ADP College"
        >
          <div className="relative shrink-0 w-10 h-10 transition-transform group-hover:scale-105">
            <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" className="w-full h-full">
              {/* Nucleus */}
              <circle cx="20" cy="20" r="3.6" fill="#ffb347" />
              {/* Orbital 1 */}
              <ellipse
                cx="20"
                cy="20"
                rx="17"
                ry="7.2"
                fill="none"
                stroke="#2de2d0"
                strokeWidth="1.6"
              />
              {/* Orbital 2 */}
              <ellipse
                cx="20"
                cy="20"
                rx="17"
                ry="7.2"
                fill="none"
                stroke="#2de2d0"
                strokeWidth="1.6"
                transform="rotate(60 20 20)"
              />
              {/* Orbital 3 */}
              <ellipse
                cx="20"
                cy="20"
                rx="17"
                ry="7.2"
                fill="none"
                stroke="#2de2d0"
                strokeWidth="1.6"
                transform="rotate(120 20 20)"
              />
            </svg>
          </div>
          <div>
            <span className="block font-bricolage font-extrabold text-[1.08rem] leading-tight text-white tracking-tight">
              Department of Physics
            </span>
            <small className="block font-ibm text-[0.8rem] text-[#9fc7c3] tracking-normal font-normal">
              ADP College, Nagaon
            </small>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-1 text-[0.93rem] font-medium">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            <li>
              <button
                onClick={() => handleNavClick('home', 'top')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                  currentView === 'home'
                    ? 'text-white bg-[#0a4146] font-semibold'
                    : 'text-[#d8efec] hover:bg-[#0a4146]/60 hover:text-white'
                }`}
              >
                <Home className="w-4 h-4 text-[#2de2d0]" />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'about')}
                className="px-3 py-2 rounded-lg text-[#d8efec] hover:bg-[#0a4146] hover:text-white transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('syllabus')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                  currentView === 'syllabus'
                    ? 'text-white bg-[#0a4146] font-semibold shadow-inner'
                    : 'text-[#d8efec] hover:bg-[#0a4146] hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#ffb347]" />
                <span>Syllabus (FYUGP)</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'labs')}
                className="px-3 py-2 rounded-lg text-[#d8efec] hover:bg-[#0a4146] hover:text-white transition-colors"
              >
                Laboratories
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'faculty')}
                className="px-3 py-2 rounded-lg text-[#d8efec] hover:bg-[#0a4146] hover:text-white transition-colors"
              >
                Faculty
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'notices')}
                className="px-3 py-2 rounded-lg text-[#d8efec] hover:bg-[#0a4146] hover:text-white transition-colors"
              >
                Notices
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'gallery')}
                className="px-3 py-2 rounded-lg text-[#d8efec] hover:bg-[#0a4146] hover:text-white transition-colors"
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('magazine')}
                className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ml-1 ${
                  currentView === 'magazine'
                    ? 'bg-[#e68a1d] text-white font-bold shadow-md'
                    : 'bg-[#18163f] text-[#f7b750] border border-[#f7b750]/30 hover:bg-[#201e52] hover:text-[#fff]'
                }`}
                title="Annual Physics Wall Magazine 2026"
              >
                <Sparkles className="w-4 h-4 text-[#f7b750]" />
                <span className="font-bengali-sans font-bold text-sm">সুৰৰ অনুৰণন</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'contact')}
                className="ml-2 px-4 py-2 rounded-lg bg-[#ffb347] hover:bg-[#ffc470] text-[#2a1a00] font-bold transition-all shadow-sm"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile menu hamburger button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => handleNavClick('magazine')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
              currentView === 'magazine'
                ? 'bg-[#e68a1d] text-white'
                : 'bg-[#18163f] text-[#f7b750] border border-[#f7b750]/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-bengali-sans">সুৰৰ অনুৰণন</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[#2b6a6a] text-white hover:bg-[#0a4146] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          className="lg:hidden bg-[#062b2e] border-t border-[#0a4146] px-5 py-4 animate-in fade-in slide-in-from-top-2"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col gap-2 list-none p-0 m-0 text-sm">
            <li>
              <button
                onClick={() => handleNavClick('home', 'top')}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg flex items-center gap-2.5 ${
                  currentView === 'home'
                    ? 'bg-[#0a4146] text-white font-semibold'
                    : 'text-[#d8efec] hover:bg-[#0a4146]/60'
                }`}
              >
                <Home className="w-4 h-4 text-[#2de2d0]" />
                <span>Department Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('syllabus')}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg flex items-center gap-2.5 ${
                  currentView === 'syllabus'
                    ? 'bg-[#0a4146] text-white font-semibold'
                    : 'text-[#d8efec] hover:bg-[#0a4146]/60'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#ffb347]" />
                <span>Undergraduate Syllabus (FYUGP)</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('magazine')}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg flex items-center gap-2.5 ${
                  currentView === 'magazine'
                    ? 'bg-[#e68a1d] text-white font-bold'
                    : 'bg-[#18163f] text-[#f7b750] border border-[#f7b750]/30'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span className="font-bengali-sans font-bold">সুৰৰ অনুৰণন (Annual Wall Magazine)</span>
              </button>
            </li>
            <li className="pt-2 border-t border-[#0a4146]">
              <span className="px-3.5 text-xs text-[#9fc7c3] font-semibold uppercase tracking-wider block mb-1">
                Department Sections
              </span>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'about')}
                className="w-full text-left px-3.5 py-2 rounded-lg text-[#d8efec] hover:bg-[#0a4146]"
              >
                About Department
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'labs')}
                className="w-full text-left px-3.5 py-2 rounded-lg text-[#d8efec] hover:bg-[#0a4146] flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-[#2de2d0]" />
                <span>Laboratories &amp; Experiments</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'faculty')}
                className="w-full text-left px-3.5 py-2 rounded-lg text-[#d8efec] hover:bg-[#0a4146] flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-[#2de2d0]" />
                <span>Faculty Members</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'notices')}
                className="w-full text-left px-3.5 py-2 rounded-lg text-[#d8efec] hover:bg-[#0a4146] flex items-center gap-2"
              >
                <Bell className="w-4 h-4 text-[#ffb347]" />
                <span>Notices &amp; Events</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'gallery')}
                className="w-full text-left px-3.5 py-2 rounded-lg text-[#d8efec] hover:bg-[#0a4146] flex items-center gap-2"
              >
                <ImageIcon className="w-4 h-4 text-[#2de2d0]" />
                <span>Photo Gallery</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('home', 'contact')}
                className="w-full text-center px-4 py-2.5 rounded-lg bg-[#ffb347] text-[#2a1a00] font-bold mt-2 shadow"
              >
                Contact Department
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

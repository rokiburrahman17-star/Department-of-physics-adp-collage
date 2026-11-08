import React, { useState } from 'react';
import {
  DEPARTMENT_DATA,
  FACULTY_MEMBERS,
  LABORATORIES,
  NOTICES,
  GALLERY_ITEMS,
  LabCard,
  FacultyMember,
} from '../data/departmentData';
import { InterferenceHeroWave } from './InterferenceHeroWave';
import {
  Send,
  CheckCircle2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ExternalLink,
  Info,
  Atom,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface DepartmentHomeProps {
  onNavigateToSyllabus: () => void;
  onNavigateToMagazine: () => void;
  onOpenGalleryItem: (index: number) => void;
}

export const DepartmentHome: React.FC<DepartmentHomeProps> = ({
  onNavigateToSyllabus,
  onNavigateToMagazine,
  onOpenGalleryItem,
}) => {
  // Selected lab modal
  const [selectedLab, setSelectedLab] = useState<LabCard | null>(null);
  // Selected faculty modal
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Academic Inquiry',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Academic Inquiry',
        message: '',
      });
    }, 700);
  };

  return (
    <div className="text-[#17302f] bg-[#f4f7f6]">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        aria-label="Welcome"
        className="relative bg-[radial-gradient(120%_120%_at_70%_40%,var(--deep),var(--night)_70%)] text-white overflow-hidden py-12 md:py-20 border-b border-[#0a4146]"
      >
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(#2de2d0 1px, transparent 1px), radial-gradient(#2de2d0 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0, 18px 18px',
          }}
        />

        <div className="max-w-[1140px] mx-auto px-5 relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center min-h-[520px]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2de2d0]/15 border border-[#2de2d0]/30 text-[#2de2d0] text-xs font-semibold uppercase tracking-wider mb-4">
              <Atom className="w-3.5 h-3.5" />
              <span>ADP College Nagaon &middot; Estd. 1959</span>
            </div>

            <h1 className="font-bricolage text-white text-[clamp(2.3rem,5.2vw,3.8rem)] leading-[1.1] font-extrabold mb-5 tracking-tight">
              Where waves meet, <br className="hidden sm:inline" />
              patterns appear.
            </h1>

            <p className="text-[#c3e3df] text-base md:text-lg max-w-[48ch] leading-relaxed mb-8">
              The Department of Physics at ADP College teaches physics through experiments, careful
              measurement and clear reasoning, for students who want to understand how nature works.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ffb347] hover:bg-[#ffc470] text-[#2a1a00] font-bold text-sm md:text-base transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Explore the department</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onNavigateToSyllabus}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-[#2de2d0] text-[#2de2d0] hover:bg-[#2de2d0]/10 font-bold text-sm md:text-base transition-all active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>B.Sc. Syllabus</span>
              </button>

              <button
                onClick={onNavigateToMagazine}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#141238]/90 text-[#f7b750] border border-[#f7b750]/40 hover:bg-[#201e52] font-bengali-sans font-bold text-sm md:text-base transition-all shadow-md active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>সুৰৰ অনুৰণন (Magazine)</span>
              </button>
            </div>
          </div>

          {/* Wave Ripple Animation */}
          <div className="flex justify-center items-center">
            <InterferenceHeroWave />
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE DEPARTMENT */}
      <section id="about" className="py-16 md:py-20 border-b border-[#d6e2e0]">
        <div className="max-w-[1140px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a4146] bg-[#e2f2ef] px-3 py-1 rounded-md mb-3 inline-block">
              Empirical Foundations &middot; NEP-2020
            </span>
            <h2 className="font-bricolage text-[#062b2e] text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold mb-4 leading-tight">
              About the department
            </h2>
            <p className="text-[#58706f] leading-relaxed text-base md:text-[1.05rem] mb-6">
              {DEPARTMENT_DATA.overview}
            </p>

            <ul className="list-none border-l-4 border-[#2de2d0] pl-5 space-y-2.5 text-[#17302f] font-medium text-sm md:text-base">
              {DEPARTMENT_DATA.facts.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4146] mt-2 shrink-0" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onNavigateToSyllabus}
                className="text-[#0a4146] hover:text-[#062b2e] font-bold text-sm inline-flex items-center gap-1 group"
              >
                <span>View FYUGP Semester Courses</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Department photo matching the exact image URL */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a4146] to-[#2de2d0] shadow-xl border border-[#d6e2e0]">
              <img
                src={DEPARTMENT_DATA.corridorImage}
                alt="Department corridor and verandah at ADP College"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-3 text-xs text-[#58706f] italic flex items-center justify-between">
              <span>ADP College Physics verandah and research corridor</span>
              <span className="font-semibold text-[#0a4146]">Haiborgaon Campus</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LABORATORIES & EXPERIMENTS */}
      <section id="labs" className="py-16 md:py-20 bg-white border-b border-[#d6e2e0]">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a4146] bg-[#e2f2ef] px-3 py-1 rounded-md mb-2 inline-block">
              Hands-On Empirical Rigor
            </span>
            <h2 className="font-bricolage text-[#062b2e] text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold mb-3">
              Laboratories and experiments
            </h2>
            <p className="text-[#58706f] text-base md:text-[1.05rem]">
              Students learn by measuring. Equipped with apparatus for hands-on experimentation
              across classical mechanics, electrodynamics, solid-state physics, and computational physics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LABORATORIES.map((lab) => {
              const isDark = lab.theme === 'dark';
              return (
                <div
                  key={lab.id}
                  onClick={() => setSelectedLab(lab)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 relative group flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#062b2e] border-[#0a4146] text-[#d8efec]'
                      : 'bg-[#f4f7f6] border-[#d6e2e0] text-[#17302f]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isDark
                            ? 'bg-[#2de2d0]/20 text-[#2de2d0] border border-[#2de2d0]/30'
                            : 'bg-[#0a4146]/10 text-[#0a4146] border border-[#0a4146]/20'
                        }`}
                      >
                        {lab.category}
                      </span>
                      <Info
                        className={`w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity ${
                          isDark ? 'text-[#2de2d0]' : 'text-[#0a4146]'
                        }`}
                      />
                    </div>

                    <h3
                      className={`font-bricolage text-xl font-bold mb-2.5 ${
                        isDark ? 'text-white' : 'text-[#062b2e]'
                      }`}
                    >
                      {lab.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed mb-4 ${
                        isDark ? 'text-[#b5d6d2]' : 'text-[#58706f]'
                      }`}
                    >
                      {lab.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-dashed border-current/20 flex items-center justify-between text-xs font-semibold">
                    <span className={isDark ? 'text-[#ffb347]' : 'text-[#0a4146]'}>
                      View key experiments ({lab.keyExperiments.length})
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FACULTY SECTION */}
      <section id="faculty" className="py-16 md:py-20 border-b border-[#d6e2e0]">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a4146] bg-[#e2f2ef] px-3 py-1 rounded-md mb-2 inline-block">
              Mentorship &amp; Research
            </span>
            <h2 className="font-bricolage text-[#062b2e] text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold mb-3">
              Faculty
            </h2>
            <p className="text-[#58706f] text-base md:text-[1.05rem]">
              The teachers who guide students in theory classes, honors research, and in the experimental laboratory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY_MEMBERS.map((faculty) => (
              <div
                key={faculty.id}
                onClick={() => setSelectedFaculty(faculty)}
                className="bg-white border border-[#d6e2e0] rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Avatar circular frame with glowing gradient matching HTML */}
                  <div className="w-[132px] h-[132px] rounded-full mx-auto mb-5 overflow-hidden bg-gradient-to-br from-[#2de2d0] to-[#0a4146] shadow-[0_6px_16px_rgba(6,43,46,0.15)] p-1 border-2 border-white group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <h3 className="font-bricolage text-lg font-bold text-[#062b2e] mb-1 group-hover:text-[#0a4146] transition-colors">
                    {faculty.name}
                  </h3>

                  <p className="text-xs font-bold text-[#0a4146] uppercase tracking-wide mb-1">
                    {faculty.role}
                  </p>

                  <p className="text-xs font-semibold text-[#58706f] font-mono mb-2">
                    {faculty.degree}
                  </p>

                  {faculty.specialization && (
                    <p className="text-xs text-[#58706f] italic bg-[#f4f7f6] p-2 rounded-lg line-clamp-2">
                      {faculty.specialization}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#d6e2e0] text-xs font-bold text-[#0a4146] flex items-center justify-center gap-1 group-hover:text-[#ffb347]">
                  <span>View Profile &amp; Contact</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NOTICES AND EVENTS */}
      <section id="notices" className="py-16 md:py-20 bg-[#062b2e] text-[#d8efec] border-b border-[#0a4146]">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2de2d0] bg-[#2de2d0]/15 px-3 py-1 rounded-md mb-2 inline-block">
              Notice Board
            </span>
            <h2 className="font-bricolage text-white text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold mb-3">
              Notices and events
            </h2>
            <p className="text-[#9fc7c3] text-sm md:text-base">
              Latest departmental circulars, semester practical evaluations, upcoming guest seminars, and exhibitions.
            </p>
          </div>

          <ul className="list-none max-w-[760px] divide-y divide-[#1d5557] p-0 m-0">
            {NOTICES.map((notice) => (
              <li
                key={notice.id}
                className="py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 group hover:bg-[#0a4146]/30 px-3 rounded-xl transition-colors"
              >
                <div className="shrink-0 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#ffb347]" />
                  <time
                    dateTime={notice.date}
                    className="w-24 text-[#ffb347] font-bold font-mono text-sm sm:text-base"
                  >
                    {notice.dayMonth}
                  </time>
                </div>

                <div className="grow">
                  <span className="text-white text-base font-medium leading-relaxed block">
                    {notice.title}
                  </span>
                </div>

                <span className="text-[11px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#0a4146] text-[#2de2d0] border border-[#2de2d0]/30 shrink-0">
                  {notice.category}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. GALLERY */}
      <section id="gallery" className="py-16 md:py-20 bg-white border-b border-[#d6e2e0]">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a4146] bg-[#e2f2ef] px-3 py-1 rounded-md mb-2 inline-block">
              Visual Archives
            </span>
            <h2 className="font-bricolage text-[#062b2e] text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold mb-3">
              Gallery
            </h2>
            <p className="text-[#58706f] text-base md:text-[1.05rem]">
              Photos of labs, experiments, student presentations, blackboard lectures, and the annual wall magazine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item, index) => (
              <figure
                key={item.id}
                onClick={() => onOpenGalleryItem(index)}
                className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a4146] to-[#2de2d0] shadow-[0_6px_20px_rgba(6,43,46,0.08)] flex flex-col group cursor-pointer border border-[#d6e2e0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0a4146]">
                  <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-lg bg-[#062b2e]/90 text-white text-xs font-bold backdrop-blur-sm border border-[#2de2d0]/40">
                      Click to Enlarge
                    </span>
                  </div>
                </div>
                <figcaption className="bg-white p-3.5 text-xs sm:text-sm font-semibold text-[#17302f] border-t border-[#d6e2e0] grow flex items-center justify-between">
                  <span>{item.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#58706f] group-hover:text-[#0a4146] shrink-0 ml-2" />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT THE DEPARTMENT */}
      <section id="contact" className="py-16 md:py-20 border-b border-[#d6e2e0] bg-[#f4f7f6]">
        <div className="max-w-[1140px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a4146] bg-[#e2f2ef] px-3 py-1 rounded-md mb-2 inline-block">
              Communications &middot; Admissions
            </span>
            <h2 className="font-bricolage text-[#062b2e] text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold mb-4">
              Contact the department
            </h2>
            <p className="text-[#58706f] text-base leading-relaxed mb-8">
              We welcome prospective undergraduate students, academic collaborators, alumni, and parents.
              Feel free to visit our campus laboratory or reach out via email and telephone.
            </p>

            <div className="space-y-4 text-sm text-[#17302f]">
              <div className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl border border-[#d6e2e0] shadow-sm">
                <MapPin className="w-5 h-5 text-[#0a4146] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#062b2e]">Department of Physics</div>
                  <div className="text-[#58706f]">{DEPARTMENT_DATA.college}</div>
                  <div className="text-[#58706f]">{DEPARTMENT_DATA.location}</div>
                  <div className="text-xs font-semibold text-[#0a4146] mt-0.5">
                    {DEPARTMENT_DATA.affiliation}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-[#d6e2e0] shadow-sm">
                <Mail className="w-5 h-5 text-[#0a4146] shrink-0" />
                <div>
                  <div className="text-xs text-[#58706f]">Department Email</div>
                  <a
                    href={`mailto:${DEPARTMENT_DATA.email}`}
                    className="font-bold text-[#062b2e] hover:text-[#0a4146] font-mono"
                  >
                    {DEPARTMENT_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-[#d6e2e0] shadow-sm">
                <Phone className="w-5 h-5 text-[#0a4146] shrink-0" />
                <div>
                  <div className="text-xs text-[#58706f]">College Landline</div>
                  <span className="font-bold text-[#062b2e] font-mono">
                    {DEPARTMENT_DATA.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#d6e2e0] shadow-md">
            <h3 className="font-bricolage text-xl font-bold text-[#062b2e] mb-1">
              Send an Academic Message
            </h3>
            <p className="text-xs text-[#58706f] mb-6">
              Inquiries are directed to the Head of Department &amp; Academic Committee.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-[#e2f2ef] border border-[#2de2d0] rounded-xl text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#0a4146] mx-auto" />
                <h4 className="font-bricolage text-lg font-bold text-[#062b2e]">
                  Thank you! Your message has been recorded.
                </h4>
                <p className="text-xs text-[#58706f] leading-relaxed">
                  Our department office will review your inquiry and respond to your email shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 bg-[#062b2e] text-white text-xs font-bold rounded-lg hover:bg-[#0a4146] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#17302f] mb-1">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Priyanku Bora"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#d6e2e0] bg-[#fafcfb] focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0a4146]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#17302f] mb-1">
                    Your Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#d6e2e0] bg-[#fafcfb] focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0a4146]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-[#17302f] mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#d6e2e0] bg-[#fafcfb] focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0a4146]"
                  >
                    <option value="General Academic Inquiry">General Academic Inquiry</option>
                    <option value="B.Sc. Physics Honours Admission">B.Sc. Physics Honours Admission</option>
                    <option value="Laboratory Access & Research">Laboratory Access &amp; Research</option>
                    <option value="Wall Magazine & Physics Society">Wall Magazine &amp; Physics Society</option>
                    <option value="Syllabus & Course Credits">Syllabus &amp; Course Credits</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#17302f] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Write your academic query or question here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#d6e2e0] bg-[#fafcfb] focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0a4146] resize-y min-h-[110px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#062b2e] hover:bg-[#0a4146] text-white font-bold text-sm transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Lab Modal */}
      {selectedLab && (
        <div
          className="fixed inset-0 z-50 bg-[#062b2e]/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedLab(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#d6e2e0]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#d6e2e0] mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a4146]">
                  {selectedLab.category}
                </span>
                <h3 className="font-bricolage text-xl font-bold text-[#062b2e]">
                  {selectedLab.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLab(null)}
                className="text-[#58706f] hover:text-[#062b2e] p-1 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#58706f] mb-4 leading-relaxed">
              {selectedLab.description}
            </p>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold text-[#062b2e] uppercase tracking-wider">
                Prescribed Experiments:
              </h4>
              <ul className="text-xs text-[#17302f] space-y-1.5 pl-4 list-disc">
                {selectedLab.keyExperiments.map((exp, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {exp}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedLab(null)}
              className="w-full py-2.5 rounded-xl bg-[#062b2e] text-white text-xs font-bold hover:bg-[#0a4146]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Faculty Modal */}
      {selectedFaculty && (
        <div
          className="fixed inset-0 z-50 bg-[#062b2e]/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedFaculty(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#d6e2e0] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-[#2de2d0] shadow-md">
              <img
                src={selectedFaculty.image}
                alt={selectedFaculty.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bricolage text-xl font-bold text-[#062b2e] mb-1">
              {selectedFaculty.name}
            </h3>
            <p className="text-xs font-bold text-[#0a4146] uppercase mb-1">
              {selectedFaculty.role}
            </p>
            <p className="text-xs text-[#58706f] font-mono mb-4">{selectedFaculty.degree}</p>

            <div className="bg-[#f4f7f6] p-4 rounded-xl text-xs text-left space-y-2 mb-5">
              <div>
                <span className="font-bold text-[#062b2e]">Specialization:</span>{' '}
                <span className="text-[#58706f]">{selectedFaculty.specialization}</span>
              </div>
              <div>
                <span className="font-bold text-[#062b2e]">Institution:</span>{' '}
                <span className="text-[#58706f]">ADP College, Nagaon</span>
              </div>
              <div>
                <span className="font-bold text-[#062b2e]">Email:</span>{' '}
                <a
                  href={`mailto:${selectedFaculty.email}`}
                  className="text-[#0a4146] font-mono underline ml-1"
                >
                  {selectedFaculty.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => setSelectedFaculty(null)}
              className="w-full py-2.5 rounded-xl bg-[#062b2e] text-white text-xs font-bold hover:bg-[#0a4146]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

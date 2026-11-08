import React, { useState } from 'react';
import { SYLLABUS_SEMESTERS, SemesterSyllabus } from '../data/departmentData';
import {
  Download,
  Mail,
  Search,
  BookOpen,
  ChevronDown,
  Layers,
  CheckCircle,
  FileText,
  Filter,
} from 'lucide-react';
import { SyllabusDownloadModal } from './SyllabusDownloadModal';

interface SyllabusViewProps {
  onContactAdvisor: () => void;
}

export const SyllabusView: React.FC<SyllabusViewProps> = ({ onContactAdvisor }) => {
  const [openSemesters, setOpenSemesters] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSemesterFilter, setSelectedSemesterFilter] = useState<number | 'all'>('all');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleSemester = (semNum: number) => {
    setOpenSemesters((prev) => ({
      ...prev,
      [semNum]: !prev[semNum],
    }));
  };

  const toggleAll = (expand: boolean) => {
    const nextState: Record<number, boolean> = {};
    for (let i = 1; i <= 6; i++) {
      nextState[i] = expand;
    }
    setOpenSemesters(nextState);
  };

  // Filter semesters and courses by search term
  const filteredSemesters = SYLLABUS_SEMESTERS.map((sem) => {
    if (selectedSemesterFilter !== 'all' && sem.semester !== selectedSemesterFilter) {
      return null;
    }

    if (!searchQuery.trim()) {
      return sem;
    }

    const query = searchQuery.toLowerCase();
    const matchingCourses = sem.courses.filter(
      (c) =>
        c.title.toLowerCase().includes(query) ||
        c.code.toLowerCase().includes(query) ||
        c.topics.some((t) => t.toLowerCase().includes(query))
    );

    if (matchingCourses.length === 0) return null;

    return {
      ...sem,
      courses: matchingCourses,
    };
  }).filter(Boolean) as SemesterSyllabus[];

  return (
    <div className="text-[#17302f] bg-[#f4f7f6] min-h-screen">
      {/* Page Header Banner */}
      <div className="bg-[radial-gradient(120%_120%_at_80%_20%,var(--deep),var(--night)_80%)] text-white py-12 md:py-16 border-b border-[#164e52] relative">
        <div className="max-w-[1140px] mx-auto px-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2de2d0] bg-[#2de2d0]/15 px-3 py-1 rounded-full border border-[#2de2d0]/30 inline-block mb-3">
            Academic Curriculum
          </span>

          <h1 className="font-bricolage text-white text-[clamp(2.2rem,4.5vw,3.2rem)] font-extrabold mb-3 leading-tight">
            Undergraduate Syllabus
          </h1>

          <p className="text-[#c3e3df] max-w-[68ch] text-base md:text-[1.1rem] leading-relaxed mb-5">
            B.Sc. Physics curriculum structured under the Four Year Undergraduate Programme (FYUGP) of
            Gauhati University, effective from academic session 2023–24.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-4">
            <span className="bg-[#2de2d0]/15 border border-[#2de2d0]/35 text-[#2de2d0] text-xs font-bold px-3 py-1 rounded-full">
              FYUGP Gauhati University
            </span>
            <span className="bg-[#ffb347]/15 border border-[#ffb347]/40 text-[#ffb347] text-xs font-bold px-3 py-1 rounded-full">
              Semester 1 to Semester 6
            </span>
            <span className="bg-[#2de2d0]/15 border border-[#2de2d0]/35 text-[#2de2d0] text-xs font-bold px-3 py-1 rounded-full">
              Theory &amp; Practical Credits
            </span>
            <span className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
              NEP-2020 Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Main Syllabus Content */}
      <main className="py-12 md:py-16">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-bricolage text-[#062b2e] text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold mb-2">
                Course Structure &amp; Papers
              </h2>
              <p className="text-[#58706f] text-base md:text-[1.05rem] max-w-[70ch]">
                Expand each semester below to view core papers, theory/practical credit weightage, and
                detailed syllabus topics across all six semesters.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => toggleAll(true)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-[#0a4146] border border-[#d6e2e0] hover:bg-[#e2f2ef] transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={() => toggleAll(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-[#58706f] border border-[#d6e2e0] hover:bg-[#f4f7f6] transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-white p-4 rounded-xl border border-[#d6e2e0] shadow-sm mb-8 flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:grow">
              <Search className="w-4 h-4 text-[#58706f] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics (e.g. 'quantum', 'schrödinger', 'mechanics', 'diode', 'diffraction')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#f4f7f6] rounded-lg border border-[#d6e2e0] text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0a4146]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#58706f] hover:text-[#062b2e]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <Filter className="w-4 h-4 text-[#58706f] shrink-0" />
              <select
                value={selectedSemesterFilter}
                onChange={(e) =>
                  setSelectedSemesterFilter(
                    e.target.value === 'all' ? 'all' : Number(e.target.value)
                  )
                }
                className="w-full sm:w-auto px-3 py-2 bg-[#f4f7f6] rounded-lg border border-[#d6e2e0] text-xs font-bold text-[#17302f] focus:outline-none focus:ring-2 focus:ring-[#0a4146]"
              >
                <option value="all">All Semesters (1 - 6)</option>
                <option value={1}>Semester 1</option>
                <option value={2}>Semester 2</option>
                <option value={3}>Semester 3</option>
                <option value={4}>Semester 4</option>
                <option value={5}>Semester 5</option>
                <option value={6}>Semester 6</option>
              </select>
            </div>
          </div>

          {/* Semesters List */}
          <div className="space-y-4">
            {filteredSemesters.length === 0 ? (
              <div className="bg-white p-10 rounded-2xl text-center border border-[#d6e2e0] text-[#58706f]">
                <BookOpen className="w-12 h-12 text-[#9fc7c3] mx-auto mb-3" />
                <h3 className="font-bricolage text-lg font-bold text-[#062b2e] mb-1">
                  No courses matching "{searchQuery}"
                </h3>
                <p className="text-xs mb-4">Try clearing the search or choosing a different filter.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSemesterFilter('all');
                  }}
                  className="px-4 py-2 bg-[#062b2e] text-white text-xs font-bold rounded-lg"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              filteredSemesters.map((sem) => {
                const isOpen = searchQuery.trim() ? true : openSemesters[sem.semester];
                return (
                  <div
                    key={sem.semester}
                    className="bg-white border border-[#d6e2e0] rounded-2xl overflow-hidden shadow-[0_2px_6px_rgba(6,43,46,0.03)] transition-all hover:shadow-[0_4px_12px_rgba(6,43,46,0.06)]"
                  >
                    <button
                      onClick={() => toggleSemester(sem.semester)}
                      className={`w-full text-left px-6 py-5 flex items-center justify-between transition-colors select-none ${
                        isOpen
                          ? 'bg-[#062b2e] text-white border-b border-[#164e52]'
                          : 'bg-white text-[#062b2e] hover:bg-[#fafcfb]'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bricolage font-extrabold text-lg sm:text-xl">
                          {sem.title}
                        </span>
                        <span
                          className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                            isOpen
                              ? 'bg-[#2de2d0]/20 text-[#2de2d0] border border-[#2de2d0]/30'
                              : 'bg-[#e2f2ef] text-[#0a4146]'
                          }`}
                        >
                          {sem.courses.length} {sem.courses.length === 1 ? 'Paper' : 'Papers'} &middot;{' '}
                          {sem.totalCredits} Credits
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-2xl font-light leading-none transition-transform duration-200 ${
                            isOpen ? 'rotate-45 text-[#ffb347]' : 'text-[#0a4146]'
                          }`}
                        >
                          +
                        </span>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="p-6 bg-[#fafcfb] grid grid-cols-1 md:grid-cols-2 gap-5 animate-in fade-in duration-200">
                        {sem.courses.map((course) => (
                          <article
                            key={course.code}
                            className="bg-[#f4f7f6] border border-[#d6e2e0] border-l-4 border-l-[#2de2d0] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-sm"
                          >
                            <div>
                              <h3 className="font-bricolage font-bold text-lg text-[#062b2e] mb-1 leading-snug">
                                {course.title}
                              </h3>

                              <div className="inline-block text-[#0a4146] font-bold text-xs mb-4 bg-[#e2f2ef] px-2.5 py-1 rounded-md">
                                {course.code} &middot; {course.credits}
                              </div>

                              <ul className="space-y-1.5 pl-4 list-disc text-sm text-[#17302f]">
                                {course.topics.map((topic, i) => (
                                  <li key={i} className="leading-relaxed">
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-5 pt-3 border-t border-[#d6e2e0] flex items-center justify-between text-xs text-[#58706f]">
                              <span>
                                Theory: {course.theoryCredits} Cr | Lab: {course.practicalCredits} Cr
                              </span>
                              <span className="font-semibold text-[#0a4146]">GU FYUGP</span>
                            </div>
                          </article>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Overview Info Cards matching the HTML */}
          <div className="mt-12 bg-white border border-[#d6e2e0] rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-sm">
            <div className="border-l-2 border-[#2de2d0] pl-4">
              <h4 className="font-bricolage font-bold text-[#062b2e] text-base mb-2">
                Credit System (FYUGP)
              </h4>
              <p className="text-sm text-[#58706f] leading-relaxed">
                Each semester features a balanced combination of theory core papers and laboratory
                practical credits as prescribed by Gauhati University.
              </p>
            </div>

            <div className="border-l-2 border-[#ffb347] pl-4">
              <h4 className="font-bricolage font-bold text-[#062b2e] text-base mb-2">
                Continuous Internal Evaluation
              </h4>
              <p className="text-sm text-[#58706f] leading-relaxed">
                Theory courses include sessional exams, home assignments, and seminars; practical courses
                include regular lab journals and viva voce.
              </p>
            </div>

            <div className="border-l-2 border-[#2de2d0] pl-4">
              <h4 className="font-bricolage font-bold text-[#062b2e] text-base mb-2">
                Curriculum Document
              </h4>
              <p className="text-sm text-[#58706f] leading-relaxed">
                Students can download the official university syllabus PDF for course outcomes and
                recommended textbooks.
              </p>
            </div>
          </div>

          {/* Action Call to Action matching HTML */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#ffb347] hover:bg-[#ffc470] text-[#2a1a00] font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <Download className="w-5 h-5" />
              <span>Download full syllabus (PDF / Print)</span>
            </button>

            <button
              onClick={onContactAdvisor}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border-2 border-[#0a4146] bg-white text-[#0a4146] hover:bg-[#e2f2ef] font-bold text-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact academic advisor</span>
            </button>
          </div>
        </div>
      </main>

      {/* Syllabus Modal */}
      <SyllabusDownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

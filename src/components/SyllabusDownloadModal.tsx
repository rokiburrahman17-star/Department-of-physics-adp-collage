import React from 'react';
import { X, Printer, Download, BookOpen, CheckCircle, GraduationCap } from 'lucide-react';
import { SYLLABUS_SEMESTERS } from '../data/departmentData';

interface SyllabusDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SyllabusDownloadModal: React.FC<SyllabusDownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    let content = `GAUHATI UNIVERSITY - B.SC. PHYSICS SYLLABUS (FYUGP)\n`;
    content += `DEPARTMENT OF PHYSICS, ADP COLLEGE, NAGAON, ASSAM\n`;
    content += `Effective Academic Session: 2023-24 onwards\n`;
    content += `====================================================\n\n`;

    SYLLABUS_SEMESTERS.forEach((sem) => {
      content += `[ ${sem.title.toUpperCase()} ] - Total Credits: ${sem.totalCredits}\n`;
      content += `----------------------------------------------------\n`;
      sem.courses.forEach((c) => {
        content += `\nCourse: ${c.code} - ${c.title}\n`;
        content += `Credit Structure: ${c.credits}\n`;
        content += `Core Topics:\n`;
        c.topics.forEach((t, i) => {
          content += `  ${i + 1}. ${t}\n`;
        });
      });
      content += `\n\n`;
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ADP_College_BSc_Physics_Syllabus_FYUGP.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#062b2e]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#ffffff] text-[#17302f] rounded-2xl shadow-2xl overflow-hidden border border-[#d6e2e0] my-8 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#062b2e] text-white px-6 py-4 flex items-center justify-between border-b border-[#2de2d0]/30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0a4146] flex items-center justify-center border border-[#2de2d0]/30 text-[#2de2d0]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bricolage text-lg font-bold text-white leading-tight">
                B.Sc. Physics FYUGP Official Syllabus
              </h3>
              <p className="text-xs text-[#9fc7c3]">
                Anandaram Dhekial Phookan College &middot; Gauhati University Curriculum
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a4146] hover:bg-[#164e52] text-[#2de2d0] text-xs font-semibold border border-[#2de2d0]/30 transition-colors"
              title="Print document"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ffb347] hover:bg-[#ffc470] text-[#2a1a00] text-xs font-semibold transition-colors"
              title="Download text file"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download Copy</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#9fc7c3] hover:text-white hover:bg-[#0a4146] transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#17302f]">
          {/* Document Banner */}
          <div className="text-center pb-6 border-b border-[#d6e2e0]">
            <span className="inline-block px-3 py-1 bg-[#e2f2ef] text-[#0a4146] font-semibold text-xs rounded-full uppercase tracking-wider mb-2">
              Four Year Undergraduate Programme (FYUGP)
            </span>
            <h2 className="font-bricolage text-2xl sm:text-3xl font-extrabold text-[#062b2e]">
              DEPARTMENT OF PHYSICS
            </h2>
            <p className="text-sm text-[#58706f] mt-1 font-medium">
              Anandaram Dhekial Phookan College, Haiborgaon, Nagaon, Assam
            </p>
            <p className="text-xs text-[#58706f] mt-0.5">
              Affiliated to Gauhati University, Guwahati, Assam &middot; NEP-2020 Aligned Structure
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#f4f7f6] p-4 rounded-xl border border-[#d6e2e0] text-center">
            <div>
              <div className="text-xs text-[#58706f]">Programme</div>
              <div className="font-bold text-sm text-[#062b2e]">B.Sc. Physics</div>
            </div>
            <div>
              <div className="text-xs text-[#58706f]">Semesters Covered</div>
              <div className="font-bold text-sm text-[#062b2e]">Semester 1 to 6</div>
            </div>
            <div>
              <div className="text-xs text-[#58706f]">Affiliated Body</div>
              <div className="font-bold text-sm text-[#062b2e]">Gauhati University</div>
            </div>
            <div>
              <div className="text-xs text-[#58706f]">Grading / Exam</div>
              <div className="font-bold text-sm text-[#062b2e]">Theory + Practical CIE</div>
            </div>
          </div>

          {/* All 6 Semesters in Printable Layout */}
          <div className="space-y-6">
            {SYLLABUS_SEMESTERS.map((sem) => (
              <div
                key={sem.semester}
                className="bg-[#ffffff] border border-[#d6e2e0] rounded-xl overflow-hidden shadow-sm"
              >
                <div className="bg-[#062b2e] text-white px-5 py-3 flex items-center justify-between">
                  <h4 className="font-bricolage font-bold text-base flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#ffb347]" />
                    <span>{sem.title}</span>
                  </h4>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#2de2d0]/20 text-[#2de2d0] border border-[#2de2d0]/30 font-semibold">
                    Total: {sem.totalCredits} Credits
                  </span>
                </div>

                <div className="p-5 divide-y divide-[#d6e2e0]">
                  {sem.courses.map((course) => (
                    <div key={course.code} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h5 className="font-bricolage font-bold text-[#062b2e] text-base">
                          {course.code}: {course.title}
                        </h5>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#e2f2ef] text-[#0a4146]">
                          {course.credits}
                        </span>
                      </div>

                      <div className="text-xs text-[#58706f] mb-3">
                        <span className="font-semibold text-[#17302f]">Credits Breakdown: </span>
                        Theory: {course.theoryCredits} credits &middot; Practical / Lab:{' '}
                        {course.practicalCredits} credit
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-[#17302f]">
                        {course.topics.map((t, idx) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#2de2d0] shrink-0 mt-0.5" />
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Assessment Scheme Note */}
          <div className="bg-[#f4f7f6] p-4 rounded-xl border border-[#d6e2e0] text-xs text-[#58706f] leading-relaxed">
            <h5 className="font-bold text-[#062b2e] mb-1 text-sm font-bricolage">
              Internal &amp; End-Semester Evaluation Guidelines
            </h5>
            <p>
              Under Gauhati University FYUGP guidelines, theory papers comprise 80% End-Semester
              Examinations and 20% Continuous Internal Evaluation (including two mandatory sessional tests,
              home assignments, seminar presentations, and attendance). Practical evaluation includes
              day-to-day laboratory records, continuous experiments performance, and external viva voce.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#f4f7f6] px-6 py-4 border-t border-[#d6e2e0] flex items-center justify-between text-xs text-[#58706f] shrink-0">
          <span>&copy; Department of Physics, ADP College, Nagaon &middot; Gauhati University</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#062b2e] text-white font-semibold hover:bg-[#0a4146] transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

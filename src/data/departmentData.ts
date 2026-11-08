export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  degree: string;
  specialization?: string;
  email?: string;
  image: string;
}

export interface LabCard {
  id: string;
  title: string;
  description: string;
  theme: 'light' | 'dark';
  category: string;
  keyExperiments: string[];
}

export interface Notice {
  id: string;
  date: string;
  dayMonth: string;
  title: string;
  category: 'Examination' | 'Seminar' | 'Exhibition' | 'Academic';
  isImportant?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface SyllabusCourse {
  code: string;
  title: string;
  credits: string;
  theoryCredits: number;
  practicalCredits: number;
  topics: string[];
}

export interface SemesterSyllabus {
  semester: number;
  title: string;
  totalCredits: number;
  courses: SyllabusCourse[];
}

export interface MagazineSection {
  id: string;
  titleAssamese: string;
  titleEnglish: string;
}

export const DEPARTMENT_DATA = {
  name: "Department of Physics",
  college: "Anandaram Dhekial Phookan College, Nagaon",
  affiliation: "Affiliated to Gauhati University",
  location: "Haiborgaon, Nagaon, Assam - 782002",
  phone: "+91 3672 222123",
  email: "physics@adpcollege.ac.in",
  established: "1959",
  overview:
    "Established to foster scientific curiosity and rigorous empirical inquiry, the Department of Physics at Anandaram Dhekial Phookan College provides comprehensive undergraduate education blending classical mechanics, quantum theory, electrodynamics, and hands-on laboratory experimentation.",
  facts: [
    "Programme: B.Sc. Physics (Honours and General under FYUGP)",
    "Affiliated to Gauhati University, Guwahati",
    "Location: Haiborgaon, Nagaon, Assam (PIN: 782002)",
    "Modern experimental laboratories & computational physics suite",
    "Active student physics society, wall magazine & seminar series",
  ],
  corridorImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDImVdjZALq-SbEuFx85juSn2aNvYheEUtyvtqZd4IsmUR996ti5rjiMz2R0MWQDpF6TH1USawdsAG6dTZCLkYidnjYYmvKLuNh8xsEqHsVJJ-UeQgmfTp3rBi9XvzwhWVRXwXMJaWid2bNd4uFr86UE6KnxSw5jKekqoHKsDIQlxE9bcZnuIgpk2T3llJaFwZY5-kkZ7QYwnyGyPU6uLxv2AT_bTERbuhRS4YOPNbfJ6geWvv9NymlIQ",
};

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "bhaskar-saikia",
    name: "Dr. Bhaskar J. Saikia",
    role: "Assistant Professor & Head of Department",
    degree: "M.Sc., Ph.D.",
    specialization: "Condensed Matter Physics & Spectroscopy",
    email: "b.saikia@adpcollege.ac.in",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVKLwVFzlS1bAsYRiZlmV9mbX340GM8J3tjxNoBIx4C258tchAvHy_gvGiRwL8E-qAtPc0CGO-WkIQCyUoDbQzqPpB8lqJMRjNuFscU9cAwIF_MP9nrnyNsuWRPJnjugY3uyfYV0lwbmR29Jry_ZLid8_ldtuVmnF8CRvjt8LOhI1jMU-GsB5ypILgDjcUwnjFPkh0R_n7aZqnnrAN47vLuGae84qeg2SsstdmXtCDcviR9YAR3meYkQ",
  },
  {
    id: "lakshmi-singh",
    name: "Dr. Lakshmi K. Singh",
    role: "Assistant Professor",
    degree: "M.Sc., Ph.D.",
    specialization: "Nuclear & Particle Physics",
    email: "lakshmi.singh@adpcollege.ac.in",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPQYER68u_aFRlbRgCYpwwJK9c8bCGz5a9hYeu51Unf-hU7WtEfDnMtcBzm5SFRS9qNios0gIh0g2_CvQxwkOunCg0EoDgdGeUuNw_8OU46doJmx1cJHrlCCU0mveFzywFKAYBK9vAfMiDZLrxCigd_Ui4-SDf6VvQMyoqEgifPzSeXHjMwoIYizp2lwN6M5BltOGVw6gvvaf7W_eS78jiENiXF-HiRVybj7POTD0-mQ8PK5uZaplutg",
  },
  {
    id: "dharitree-singh",
    name: "Dr. Dharitree Dutta Singh",
    role: "Assistant Professor",
    degree: "M.Sc., Ph.D.",
    specialization: "Electronics & Material Science",
    email: "dharitree.singh@adpcollege.ac.in",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAee7ExGmpvaijBH4pIzwQbFj9njv5g7jfahM0rw5HD1o3aPDi95ZMpSncxOqLDIhS8pwr6Vxc1JtNKzDDDXXsZ7yLA-tIUgPkZNIV2O2qreH9rAYhO3wTv2tVqMEZnp7v_zOEBTHStfXUzLrQNeCJr0pvmUFhx0ELJu05W5m0bG3NtIeQ_BQrkYDb4RtMbBB4X_YafmsjW6Rakj_J67s-G7op4_A5AtrXH2j-JBA6gseBNoXVXKoD2_g",
  },
  {
    id: "hrishikesh-talukdar",
    name: "Dr. Hrishikesh Talukdar",
    role: "Assistant Professor",
    degree: "M.Sc., Ph.D.",
    specialization: "Astronomy, Astrophysics & Optics",
    email: "h.talukdar@adpcollege.ac.in",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0a0e1RzhShqSC0gUq14EMD23gOnmhPL9KJvwr1HJjYV48wuq-hl-3GbLquBBc_eiE4CdlT5MirShzvZiFsuPfRRVsUXXWEfU8G4hnOMfrcWRnToR8JxcM-tjlClPU_-XYxTrVpCzMwRKq-4yANFjOmrd1gFCe80xoTQiG_yDDMQK_o_1PYGN__3yUuGFNnvbGDYl_uTB7CtWeZfkHD-6Bb9_KQudxCnVJLQ-FmcAC6aQt0LsxphGLng",
  },
];

export const LABORATORIES: LabCard[] = [
  {
    id: "heat",
    title: "Heat and thermodynamics",
    description: "Thermal conductivity by Searle's method, Lee's and Chorlton's disc, and specific heat experiments.",
    theme: "light",
    category: "Thermodynamics",
    keyExperiments: [
      "Thermal conductivity of bad conductors (Lee's Disc)",
      "Searle's apparatus thermal measurement",
      "Mechanical equivalent of heat (Joule's calorimeter)",
      "Platinum resistance thermometry",
    ],
  },
  {
    id: "em",
    title: "Electricity and magnetism",
    description: "B-H curve and hysteresis loss, bridge circuits, and measurement with galvanometers.",
    theme: "light",
    category: "Electromagnetism",
    keyExperiments: [
      "B-H curve tracing using CRO & search coil",
      "Carey Foster's bridge resistance determination",
      "Ballistic galvanometer calibration & flux measurement",
      "Anderson's bridge self-inductance measurement",
    ],
  },
  {
    id: "solid-state",
    title: "Solid state",
    description: "Hall effect in semiconductors, four-probe resistivity and band gap measurement.",
    theme: "light",
    category: "Condensed Matter",
    keyExperiments: [
      "Hall coefficient & carrier concentration measurement",
      "Four-probe method energy band gap determination",
      "Dielectric constant of solids at varying temperatures",
      "Curie temperature measurement of ferromagnetic samples",
    ],
  },
  {
    id: "optics",
    title: "Optics",
    description: "Interference, diffraction, polarisation and spectrometer work.",
    theme: "dark",
    category: "Wave & Quantum Optics",
    keyExperiments: [
      "Newton's rings wavelength determination",
      "Diffraction grating wavelength of sodium D lines",
      "Polarimeter specific rotation of sugar solution",
      "Spectrometer refractive index of prism & Cauchy constants",
    ],
  },
  {
    id: "electronics",
    title: "Electronics",
    description: "Diodes, transistors, amplifiers, logic gates and the oscilloscope.",
    theme: "dark",
    category: "Applied Electronics",
    keyExperiments: [
      "BJT CE configuration input/output characteristics",
      "Op-amp inverting, non-inverting & summing amplifier circuits",
      "IC 555 astable and monostable multivibrators",
      "Verification of Boolean theorems & de Morgan's laws",
    ],
  },
  {
    id: "computational",
    title: "Computational physics",
    description: "Simple programs for data analysis, plotting and numerical solutions.",
    theme: "dark",
    category: "Computational Physics",
    keyExperiments: [
      "Numerical integration via Simpson's & Trapezoidal rules",
      "Runge-Kutta 4th order solver for planetary orbits",
      "Fourier transformation and signal spectral filtering",
      "Monte Carlo simulation of random walks & Ising model",
    ],
  },
];

export const NOTICES: Notice[] = [
  {
    id: "n1",
    date: "2026-11-15",
    dayMonth: "15 Nov",
    title: "Practical examination schedule for B.Sc. Physics semester evaluations.",
    category: "Examination",
    isImportant: true,
  },
  {
    id: "n2",
    date: "2026-12-01",
    dayMonth: "1 Dec",
    title: "Department seminar on quantum mechanics and experimental methods.",
    category: "Seminar",
    isImportant: false,
  },
  {
    id: "n3",
    date: "2026-12-20",
    dayMonth: "20 Dec",
    title: "Annual science exhibition, model presentation, and open laboratory day.",
    category: "Exhibition",
    isImportant: true,
  },
  {
    id: "n4",
    date: "2027-01-10",
    dayMonth: "10 Jan",
    title: "Release of FYUGP Odd Semester Internal Assessment Marks on Department Notice Board.",
    category: "Academic",
    isImportant: false,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Department Gathering & Lab Event",
    category: "Laboratory & Community",
    caption: "Departmental event and laboratory gathering with students and faculty",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsaWPjQLTIlrGWK6dGGb58B2S5g2QcSTTlz4fZOwXDsec8xAcAOyN_ItQMMgzv2Bx6HULeTmOViptL1yhAFZVqbqUWimD5qMttjk27pWduA11yDC3SsCw6MbNaEbL8LtkuUlcUePRif5usFa00zULmdVbYYqkjxI2Y0qhY58EXnbn1T9B4VjTDfOHLz5_TeEV3o_SqdYis8w64v1qZ2z5yvsP-dr2cAvu8RnHLt142crLs1qG2rU8PWw",
  },
  {
    id: "g2",
    title: "Theory Class & Atomic Physics Lecture",
    category: "Academic Classes",
    caption: "Classroom lecture and physics blackboard demonstration with mathematical rigor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhIVs-6T7R_qLIykwqFZW5_6GcENkvAVEQeXXLUWSRB47guZXQ6UwH0iLzsaF4rFo2Dxq5AJWfBSsri4HsrzJl2SDQiewPgOKiRTnMipl60TOvbBZUoCt1I3lmm_rSwIl0x2y3GASTB8XwWsMdX7NOddbECY0z6XJErY68tiHZ2MnTaeH9sSMXHYTGRY-tJUVbfj0BsEBRt--uR0Mhb8cIl4kw8Y8y-enzHCowIPs6MwTMeNnXgDpXLQ",
  },
  {
    id: "g3",
    title: "Student Seminar Presentation",
    category: "Seminars",
    caption: "Student seminar presentation utilizing interactive smart board in physics gallery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLtKBjzH4Eku4mbdyaDE0dzanPoBOJNUZrxOPMv_2fxgeGyb7lV5tHEOXV1VysLcv2EEiQQLeztNLt-jukG9RufyrKkKQiOajSxEpEcHqlcTII-P_XiaT_bOFaEVSWVrg2hrrpgzrapHanWFrmRxhuoSGJ-yno86hi95z5NJGNQRIRV-qE1EbzPYf6LDvxNK07Ly6AtBGhUlDhl7G6L5NQw5EUr0fx9Y_jM_UTYK1JCpXicIhlLFIg9w",
  },
  {
    id: "g4",
    title: "Department Wall Magazine Exhibit",
    category: "Annual Magazine",
    caption: "Departmental wall magazine exhibit: 'সুৰৰ অনুৰণন' (Surar Anuranon) curated by students",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhCagcOpQ6zhtSl0nOssVbfVhPK_cUKA5bk-iHMYcRlJoYAYc54yRs3Gsw_NE9G5znhhA379mP3LOPJRPnKBzN3BtSYI2xSh6Y7l7uYaANQPN-xx7GxDX0HSg1UiRBMnjCiSBjS30LPf0T_9YEXmNtpA9hZIqWYNNcREBmi-1sb1QolSfDJsEBIb8kctX1IBjNg1g9q8KMrhtkhIcJ_ZiRSG1XKF2txQmurxkK8ACW1ghb_OYqc-3l4A",
  },
];

export const SYLLABUS_SEMESTERS: SemesterSyllabus[] = [
  {
    semester: 1,
    title: "Semester 1",
    totalCredits: 4,
    courses: [
      {
        code: "PHY101",
        title: "Mathematical Physics and Mechanics",
        credits: "Theory 3 credits + Practical 1 credit",
        theoryCredits: 3,
        practicalCredits: 1,
        topics: [
          "Vector calculus",
          "Curvilinear coordinates",
          "Dirac delta function",
          "Reference frames",
          "Gravitation and central force motion",
          "Conservation laws",
          "Dynamics of rigid bodies",
          "Work and energy",
          "Oscillations",
          "Properties of matter",
        ],
      },
    ],
  },
  {
    semester: 2,
    title: "Semester 2",
    totalCredits: 4,
    courses: [
      {
        code: "PHY151",
        title: "Mathematical Physics and Electricity and Magnetism",
        credits: "Theory 3 credits + Practical 1 credit",
        theoryCredits: 3,
        practicalCredits: 1,
        topics: [
          "Differential equations",
          "Matrices",
          "Electric field and electric potential",
          "Dielectric properties of matter",
          "Magnetic field",
          "Magnetic properties of matter",
          "Electrical circuits",
        ],
      },
    ],
  },
  {
    semester: 3,
    title: "Semester 3",
    totalCredits: 4,
    courses: [
      {
        code: "PHY201",
        title: "Waves and Optics",
        credits: "Theory 3 credits + Practical 1 credit",
        theoryCredits: 3,
        practicalCredits: 1,
        topics: [
          "Superposition of harmonic oscillations",
          "Wave motion",
          "Velocity of waves",
          "Superposition of two harmonic waves",
          "Wave optics",
          "Interference",
          "Diffraction",
          "Polarization",
        ],
      },
    ],
  },
  {
    semester: 4,
    title: "Semester 4",
    totalCredits: 16,
    courses: [
      {
        code: "PHY251",
        title: "Classical Mechanics",
        credits: "Theory 4 credits",
        theoryCredits: 4,
        practicalCredits: 0,
        topics: [
          "Lagrangian approach",
          "Hamiltonian approach",
          "Small oscillations",
          "Special theory of relativity",
          "Fluid dynamics",
        ],
      },
      {
        code: "PHY252",
        title: "Quantum Mechanics I",
        credits: "Theory 3 credits + Practical 1 credit",
        theoryCredits: 3,
        practicalCredits: 1,
        topics: [
          "Origin of quantum theory",
          "Dynamical variables as operators and uncertainty principle",
          "Matter wave and wave-particle duality",
          "Schrödinger equation and its applications",
        ],
      },
      {
        code: "PHY253",
        title: "Analog Electronics",
        credits: "Theory 3 credits + Practical 1 credit",
        theoryCredits: 3,
        practicalCredits: 1,
        topics: [
          "Semiconductor diodes",
          "Two-terminal devices and their applications",
          "Bipolar junction transistors",
          "Amplifiers",
          "Coupled amplifier",
          "Feedback in amplifiers",
          "Sinusoidal oscillators",
          "Operational amplifiers",
          "Applications of op-amps",
          "Introduction to CRO",
        ],
      },
      {
        code: "PHY254",
        title: "Mathematical Physics",
        credits: "Theory 3 credits + Practical 1 credit",
        theoryCredits: 3,
        practicalCredits: 1,
        topics: [
          "Partial differential equations",
          "Fourier series",
          "Complex analysis",
          "Tensor algebra",
          "Introduction to probability",
        ],
      },
    ],
  },
  {
    semester: 5,
    title: "Semester 5",
    totalCredits: 16,
    courses: [
      {
        code: "PHY301",
        title: "Atomic and Molecular Physics",
        credits: "Theory 4 credits",
        theoryCredits: 4,
        practicalCredits: 0,
        topics: [
          "Atom models",
          "X-rays",
          "Multi-electron atoms",
          "Molecular spectra",
          "Raman effect",
        ],
      },
      {
        code: "PHY302",
        title: "Condensed Matter Physics",
        credits: "Theory 3 credits + Practical 1 credit",
        theoryCredits: 3,
        practicalCredits: 1,
        topics: [
          "Crystal structure and bonding in solids",
          "Elementary lattice dynamics",
          "Dielectric and ferroelectric properties",
          "Transport properties of materials",
          "Nanophysics and soft matter",
          "Magnetic properties of matter",
          "Superconductivity",
        ],
      },
      {
        code: "PHY303",
        title: "Heat and Thermodynamics",
        credits: "Theory 3 credits + Practical 1 credit",
        theoryCredits: 3,
        practicalCredits: 1,
        topics: [
          "Distribution of velocities and molecular collisions",
          "Real gases",
          "Principles of thermodynamics",
          "Entropy",
          "Thermodynamic potentials and relations",
        ],
      },
      {
        code: "PHY304",
        title: "Electromagnetic Theory",
        credits: "Theory 3 credits + Practical 1 credit",
        theoryCredits: 3,
        practicalCredits: 1,
        topics: [
          "Maxwell's equations",
          "EM wave propagation in unbounded media",
          "EM waves in bounded media",
          "Polarization of EM waves",
          "Rotary polarization",
          "Optical fibres",
        ],
      },
    ],
  },
  {
    semester: 6,
    title: "Semester 6",
    totalCredits: 16,
    courses: [
      {
        code: "PHY351",
        title: "Nuclear and Particle Physics",
        credits: "Theory 4 credits",
        theoryCredits: 4,
        practicalCredits: 0,
        topics: [
          "Basic properties of nuclei",
          "Radioactivity and radioactive laws",
          "Nuclear instrumentation",
          "Fission and fusion",
          "Elementary particles",
        ],
      },
      {
        code: "PHY352",
        title: "Digital Electronics",
        credits: "Theory 3 credits + Practical 1 credit",
        theoryCredits: 3,
        practicalCredits: 1,
        topics: [
          "Integrated circuits",
          "Digital circuits",
          "Boolean algebra",
          "Arithmetic circuits",
          "Timers: IC 555",
          "Sequential circuits",
          "Shift registers",
          "Computer organization",
        ],
      },
      {
        code: "PHY353",
        title: "Astronomy and Astrophysics",
        credits: "Theory 4 credits",
        theoryCredits: 4,
        practicalCredits: 0,
        topics: [
          "Fundamentals of astronomy",
          "Astronomical techniques",
          "Stellar astrophysics",
          "The solar system",
          "Galaxies and cosmology",
        ],
      },
      {
        code: "PHY354",
        title: "Statistical Mechanics",
        credits: "Theory 4 credits",
        theoryCredits: 4,
        practicalCredits: 0,
        topics: [
          "Classical statistics",
          "Classical and quantum theory of radiation",
          "Bose-Einstein statistics",
          "Fermi-Dirac statistics",
        ],
      },
    ],
  },
];

export const WALL_MAGAZINE_DATA = {
  title: "সুৰৰ অনুৰণন",
  subtitle: "প্ৰকৃতিৰ পৰা বিজ্ঞানলৈ",
  englishTitle: "Surar Anuranon",
  englishSubtitle: "Resonance from Nature to Physics",
  tagline: "Exploring the Universe, One Equation at a Time · Resonance from Nature to Physics",
  year: "2026",
  coverImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDM83prtwGCCMsOv_vpAmEJOCyu59-kHkweMDQN0a-BlwL1r6v4P-vZKA5iZV82M9eFhZj9o0cmGzZ9LDRni676YRMB3aOilrIOb5adZyTEdu9eunki7fOPqPxJKh5QPUC9Wie8YDX7b_1r7Rxc0dVu8NN7plI3pf_AsgbIvxT3ciqkhzxagNomEy00vPzYZobv7mT2WvLzFOptGfK5zljN39BhQc2dZfXvyUWopd_--wfjXDh_SWzQXw",
  editor: "প্ৰিয়াংকী মহন্ত (Priyanki Mahanta)",
  editorial: [
    "সুৰৰ কোনো নিৰ্দিষ্ট ৰূপ নাই, তথাপিও সি সকলোতে আছে। কেতিয়াবা বৰষুণৰ টোপালত, কেতিয়াবা চৰাইৰ মাতত, কেতিয়াবা পাতৰ মাজেৰে বৈ যোৱা বতাহত, কেতিয়াবা নদীৰ সোঁতত — প্ৰকৃতিয়ে নিজৰ ভাষাৰে সুৰৰ সৃষ্টি কৰে। মানুহে সেই সুৰ শুনিছে, অনুভৱ কৰিছে আৰু সময়ৰ সৈতে তাক নিজৰ জীৱন আৰু সংস্কৃতিৰ অংশ কৰি লৈছে।",
    "কিন্তু সুৰৰ এই সৌন্দৰ্যৰ আঁৰত কি আছে? কিয় এটা শব্দ কোমল, আনটো গভীৰ? কিয় কোনোবাতো শব্দই মনত আনন্দ জগায়? এই প্ৰশ্নবোৰৰ উত্তৰ বিচাৰি আমি আহি পাওঁ বিজ্ঞানৰ ওচৰত। কম্পনাংক, তৰংগ, আৰু অনুৰণনৰ দৰে বৈজ্ঞানিক ধাৰণাই সুৰৰ আঁৰৰ ৰহস্য উন্মোচন কৰে।",
    "আমি, পদাৰ্থ বিজ্ঞান বিভাগৰ ছাত্ৰ-ছাত্ৰী সকলে সুৰ আৰু সুৰৰ বৈজ্ঞানিক দৃষ্টিকোণটোক একেখন কেনভাছত প্ৰতিফলিত কৰাৰ প্ৰয়াস কৰিছো। “সুৰৰ অনুৰণন — প্ৰকৃতিৰ পৰা বিজ্ঞানলৈ” — কেৱল এখন প্ৰাচীৰ পত্ৰিকা নহয়; ই হৈছে সুৰ, সংস্কৃতি, প্ৰকৃতি আৰু বিজ্ঞানক একেডাল সূতাৰে বান্ধি ৰখাৰ এক সৰু প্ৰয়াস মাথোঁ।",
  ],
  originArticles: [
    {
      title: "সংগীতৰ উৎপত্তি (The Origin of Music)",
      paragraphs: [
        "মানৱ ইতিহাসত সংগীতৰ সঠিক উৎপত্তিৰ সময় এতিয়াও নিশ্চিতভাৱে জনা যোৱা নাই। লিখিত ইতিহাসৰ বহু আগতেই মানুহে শব্দ, ছন্দ আৰু স্বৰৰ সৈতে পৰিচিত হৈছিল। প্ৰকৃতিৰ বৰষুণ, নদীৰ কলকলনি, চৰাইৰ মাত আৰু হৃদস্পন্দনৰ দৰে ছন্দময় শব্দই মানুহৰ শ্ৰৱণ অনুভূতিক প্ৰভাৱিত কৰি থাকিব পাৰে।",
        "পুৰাতাত্ত্বিক প্ৰমাণ অনুসৰি প্ৰায় ৪০,০০০ বছৰৰ পূৰ্বে ইউৰোপত হাড় আৰু হাতীদাঁতৰ বাঁহীৰ দৰে বাদ্যযন্ত্ৰ ব্যৱহাৰ কৰা হৈছিল। বিজ্ঞানৰ দৃষ্টিৰে সংগীত হৈছে নিয়মিতভাৱে সংগঠিত শব্দ-কম্পনৰ এক ৰূপ। কম্পনাংকই স্বৰৰ উচ্চতা, বিস্তাৰে শব্দৰ তীব্ৰতা আৰু হাৰ্মনিকে শব্দৰ সুৰৰ গুণ নিৰ্ধাৰণ কৰে। সেয়েহে সংগীত হৈছে বিৱৰ্তন, পদাৰ্থ বিজ্ঞান আৰু স্নায়ুবিজ্ঞানৰ এক সুন্দৰ সমন্বয়।",
      ],
    },
    {
      title: "সুৰ সংৰক্ষণ (Preservation of Sound)",
      paragraphs: [
        "প্ৰতিটো শব্দৰ আঁৰত আছিল এটা কম্পন। কোনো শব্দ কোমল, কোনোবা গভীৰ, আকৌ কোনোবা তীক্ষ্ণ। মানুহে লক্ষ্য কৰিলে যে এই শব্দবোৰৰ এক নিৰ্দিষ্ট বৈজ্ঞানিক গঠন আছে। সেই কৌতূহলেই মানুহক শব্দ ধৰি ৰখাৰ উপায় বিচাৰিবলৈ প্ৰেৰণা দিলে, আৰু যান্ত্ৰিক সংৰক্ষণৰ পৰা বৈদ্যুতিক আৰু ডিজিটেল ৰেকৰ্ডিংলৈ আগবঢ়ালে।",
        "এটা ৰেকৰ্ডিংৰ ভিতৰত সেই সময়ৰ কম্পনৰ তথ্য বৈদ্যুতিক বা ডিজিটেল সংকেত হিচাপে সংৰক্ষিত হৈ থাকে, পিছত পুনৰ শব্দ তৰংগত ৰূপান্তৰিত হৈ আমাৰ কাণত উপনীত হয়।",
      ],
    },
  ],
  scientificArticles: [
    {
      title: "GOD'S FREQUENCY (৪৩২ হাৰ্টজ আৰু মানসিক স্থিৰতা)",
      englishText:
        "Sound is more than what we hear, it is vibration travelling through matter. The 432 Hz tuning is often linked with calmness and meditation, inspiring the poetic name “God’s Frequency.” Scientific studies suggest that meditation can reduce stress and anxiety, improve sleep, and influence physiological markers such as heart rate and blood pressure. Some small studies also report greater relaxation while listening to 432 Hz music, but evidence remains limited. Thus, “God’s Frequency” is symbolic, not a scientifically established divine frequency.",
      frequency: 432,
    },
    {
      title: "Resonance of Sound in Assamese Musical Instruments",
      englishText:
        "Resonance creates the distinctive sounds of Assamese instruments. In the dhol, a stretched membrane vibrates when struck, while its hollow wooden body amplifies the sound. The khol uses two vibrating membranes, and its body enhances resonance. In the pepa, a vibrating air column determines pitch and tone, while the taal produces sound through vibrating metal plates. These instruments demonstrate stress as their membranes and plates deform under force. Swargam, the musical scale, helps organize these sounds into pleasing melodies. It connects notes, rhythm, and resonance, enriching Assamese traditional music with harmony and expression.",
    },
    {
      title: "From Production to Propagation of Sound",
      englishText:
        "Sound is produced when a source undergoes mechanical vibration. These vibrations disturb the particles of a surrounding medium, causing them to oscillate about their equilibrium positions. The disturbance transfers energy from one particle to another, forming a sound wave. In air, sound propagates as a longitudinal wave consisting of alternating compressions (high pressure and density) and rarefactions (low pressure and density). The frequency of vibration determines the pitch, amplitude influences loudness and wavelength is related to the speed and frequency of the wave.",
    },
  ],
  natureSounds: [
    {
      title: "ঢেঁকীৰ মাত (Sound of Dheki)",
      description:
        "অসমীয়া গ্ৰাম্যজীৱনৰ এক চিনাকি শব্দ হৈছে ঢেঁকীৰ মাত। ঢেঁকীত ধান খুন্দোতে কাঠৰ ঢেঁকীতো ওপৰলৈ উঠি পুনৰ তললৈ নামি আঘাত কৰে। এই আঘাতৰ ফলত কাঠৰ কম্পন সৃষ্টি হয় আৰু সেই কম্পন বায়ুৰ মাজেৰে শব্দ তৰংগ হিচাপে বিয়পি পৰে।",
      physics: "Impact impulse creates damped structural vibration propagating through air as low-frequency pulses.",
    },
    {
      title: "তাঁতশালৰ মাত (Sound of Loom)",
      description:
        "তাঁতশালত কাপোৰ বোৱাৰ সময়ত মাকু, তাঁতৰ কাঠ আৰু সূতাৰ মাজত হোৱা নিয়মিত গতি আৰু সংঘৰ্ষৰ ফলত এক বিশেষ ছন্দময় শব্দৰ সৃষ্টি হয়। সেই কম্পন বায়ুৰ মাজেৰে শব্দ তৰংগ হিচাপে বিয়পি আমাৰ কাণত তাঁতশালৰ চিনাকি “খট্-খট্” শব্দ হিচাপে ধৰা দিয়ে।",
      physics: "Periodic mechanical contact and shuttle friction resulting in rhythmic harmonic sound transients.",
    },
    {
      title: "বৰষুণৰ সুৰ (Melody of Rain)",
      description:
        "আকাশৰ বুকুৰ পৰা সৰি অহা প্ৰতিটো বৰষুণৰ টোপাল যেন প্ৰকৃতিৰ একোটা সৰু সুৰ। বৰষুণৰ টোপাল কোনো পৃষ্ঠত খুন্দা খালে সেই পৃষ্ঠত ক্ষণিকৰ কম্পনৰ সৃষ্টি হয়। হাজাৰ হাজাৰ টোপাল একেলগে পৰিলে সেই পৃথক পৃথক শব্দ মিলি এক অনন্য প্ৰাকৃতিক সংগীতৰ সৃষ্টি কৰে।",
      physics: "Superposition of thousands of stochastic droplets creating acoustic pink noise and soothing acoustic envelopes.",
    },
  ],
  instruments: [
    {
      name: "ঢোল (Dhol)",
      englishName: "Assamese Dhol",
      type: "Membranophone",
      description:
        "অসমীয়া লোকসংস্কৃতিৰ এক শক্তিশালী প্ৰতীক হৈছে ঢোল। ঢোলৰ ছালত আঘাত কৰিলে ছালখন কম্পিত হয় আৰু সেই কম্পনে বায়ুত শব্দ তৰংগ সৃষ্টি কৰে। ছালৰ টান, আকাৰ আৰু আঘাতৰ শক্তিয়ে শব্দৰ স্বৰ আৰু তীব্ৰতা সলনি কৰে।",
      physics: "2D circular vibrating membrane under radial surface tension coupled with resonant hollow wooden chamber.",
    },
    {
      name: "খোল (Khol)",
      englishName: "Traditional Khol / Mridanga",
      type: "Bi-membranophone",
      description:
        "খোল প্ৰাচীন ভাৰতীয় পৰম্পৰাৰ সৈতে জড়িত এক ঐতিহ্যবাহী বাদ্যযন্ত্ৰ। অসমত মহাপুৰুষ শ্ৰীমন্ত শংকৰদেৱে নৱবৈষ্ণৱ আন্দোলনৰ জৰিয়তে নাম-প্ৰসংগ, বৰগীত আৰু ভাওনাৰ সৈতে খোলৰ ব্যৱহাৰ জনপ্ৰিয় কৰি তোলে।",
      physics: "Asymmetric dual leather membranes with loaded paste (Ghab) generating rich overtones and deep bass resonance.",
    },
    {
      name: "দুতাৰা (Dutara)",
      englishName: "Dutara",
      type: "Chordophone",
      description:
        "দুতাৰা অসমৰ লোকসংগীতৰ সৈতে জড়িত এক পৰম্পৰাগত বাদ্যযন্ত্ৰ। তাঁৰত টান দি টানিলে বা বজালে তাঁৰ কম্পিত হয় আৰু সেই কম্পন বায়ুৰ মাজেৰে শব্দ তৰংগ হিচাপে বিয়পি পৰে।",
      physics: "Standing transverse waves in plucked strings governed by Mersenne's laws: f = (1/2L)√(T/μ).",
    },
    {
      name: "নাগাৰা (Nagara)",
      englishName: "Nagara",
      type: "Kettledrum",
      description:
        "নাগাৰা অসমৰ এক পৰম্পৰাগত বাদ্যযন্ত্ৰ। নাগাৰাৰ ছালত আঘাত কৰিলে কম্পন সৃষ্টি হয়, যিয়ে বায়ুত শব্দ তৰংগ প্ৰেৰণ কৰে।",
      physics: "Hemispherical bowl cavity acoustic resonance producing powerful low-frequency percussive waves.",
    },
    {
      name: "বাঁহী (Flute)",
      englishName: "Bamboo Flute (Bahi)",
      type: "Aerophone",
      description:
        "বাঁহী অসমৰ এক জনপ্ৰিয় পৰম্পৰাগত বায়ুবাদ্য। ছিদ্ৰ ঢকা-খোলাৰ ফলত বায়ুস্তম্ভৰ দৈৰ্ঘ্য সলনি হয়, যাৰ ফলত বিভিন্ন স্বৰ সৃষ্টি হয়।",
      physics: "Longitudinal standing acoustic wave in an open-closed air column; frequency inversely proportional to effective tube length.",
    },
    {
      name: "গগণা (Gogona)",
      englishName: "Gogona (Jaw Harp)",
      type: "Lamellophone",
      description:
        "গগণা অসমৰ বিহু সংস্কৃতিৰ এক পৰম্পৰাগত মুখবাদ্য। বাঁহেৰে নিৰ্মিত এই সৰু বাদ্যযন্ত্ৰটো মুখৰ ওচৰত ধৰি জিভাৰ দৰে পাতল অংশত আঘাত কৰি বজোৱা হয়। মুখগহ্বৰে অনুৰণন কক্ষ হিচাপে কাম কৰে।",
      physics: "Vibrating bamboo lamella whose timbre and pitch are modulated by altering the acoustic volume and Helmholtz resonance of the oral cavity.",
    },
  ],
  poem: `নীৰৱ ৰাতিৰ জোনাকত, কোনে সিঁচে সুৰৰ মায়া?
মৌন পৃথিৱীয়ে গোপনে গুণগুণা, প্ৰকৃতিৰ মধুৰ ছায়া।
বতাহৰ বাঁহীত জাগে সুৰ, নদীৰ ঢৌত গান,
বৰষুণৰ টোপালে জগায় সুৰৰ প্ৰাণ।
পখীৰ মাতত পাহাৰ জাগে, কঁপি উঠে বননি,
সুৰে সুৰে মিলি গায় প্ৰকৃতিৰ মৌন কাহিনী।
এটি সুৰে আন এটি সুৰক গোপনে চুই যায়,
এটিৰ মিঠা অনুৰণনত আনটি মিলি যায়।
প্ৰতিটো কম্পনত লুকাই থাকে জীৱনৰ গান,
সেই অনুৰণনৰ স্পন্দনত জাগে প্ৰকৃতিৰ প্ৰাণ।`,
  credits: [
    { role: "সম্পাদিকা (Editor)", name: "প্ৰিয়াংকী মহন্ত (Priyanki Mahanta)" },
    { role: "চিত্ৰাংকন (Illustrations)", name: "চন্দন, চুম্পী, ভৈৰৱ (Chandan, Chumpi, Bhairav)" },
    { role: "মৃৎ শিল্প (Clay Art / Models)", name: "মেঘ্না, ছাকিল, বিমিসা, অনুষ্কা, জেবা (Meghna, Shakil, Bimisa, Anushka, Zeba)" },
    { role: "হস্তাক্ষৰ (Calligraphy)", name: "মৰমী, ৰিহান, ৰনি (Moromi, Rihan, Roni)" },
    { role: "অলংকৰণ (Decoration / Layout)", name: "আমানুল্লাহ, পংকজ, ইমন, গালিৱ (Amanullah, Pankaj, Imon, Galib)" },
    { role: "ডিজিটেলীকৰণ (Digitization)", name: "ৰকিবোৰ ৰহমান (Rokibur Rahman)" },
  ],
};

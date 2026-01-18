export type EducationItem = {
  slug: string
  id: string
  period: string
  school: string
  location: string
  summary: string
  details: string[]
}

export const EducationItems: EducationItem[] = [
  {
    slug: "dukeuniversity",
    id: "duke-university",
    period: "08/2027–05/2029 (expected)",
    school: "Duke University",
    location: "Durham, NC",
    summary: "Intended Focus: Economics, Philosophy & Public Policy",
    details: [
        "Fall 2025 Coursework: Economic Fundamentals, Theory of Freedom & Moral Obligations (Philosophy), Theory & Practice of Restorative Justice, Religion and Politics in Post-Revolutionary Iran.",
        "Spring 2026 Coursework: Foundations of Econometrics, Calculus II, Climate Change for Future Leaders, Writing (Wisdom and Comparative Rhetoric), Development and Africa, European Union: Future or Fading?",
        "Extracurriculars: Debate Society, Alexander Hamilton Society (international relations), Duke Fed Challenge Team (macroeconomic modelling), Duke Human Rights Centre Student Advisory Board, Duke Singapore Students Association (Vice-President)",
    ],
  },

  {
    slug: "rafflesinstitution56",
    id: "raffles-institution-y5-6",
    period: "01/2021–12/2022",
    school: "Raffles Institution (Y5-6)",
    location: "Singapore",
    summary: "Focus: Humanities (GCE 'A' Levels)",
    details: [
        "1 of 54 selected to study specialised humanities curriculum. Studied History, Economics, Literature and Maths.",
        "Participated in a highly-selective H3 program to study a university module in Game Theory under Prof. Massimiliano Landi at the Singapore Management University.",
        "Awarded the Academic Excellence Award in 2021 & achieved 7 Distinctions at the GCE 'A' Levels in 2022.",
        "Students' Council: elected as a House Captain. Emphasised planning and executing high-quality initiatives to make student life more vibrant. Developed strong project management and logistics coordination skills.",
        "Squash: member of school team. Emphasised learning through sport, and developing a strong and resilient character.",
        "Singapore Young Leaders Summit: played a leading role in inter-school, youth-led teams analysing how to reimagine living spaces to make them greener and more dignified.",
    ],
  },

{
    slug: "rafflesinstitution14",
    id: "raffles-institution-y1-4",
    period: "01/2017–12/2020",
    school: "Raffles Institution (Y1-4)",
    location: "Singapore",
    summary: "Focus: Raffles Integrated Program (Y1-4)",
    details: [
        "1 of 20 selected for specialised history curriculum under the Raffles Academy program",
        "1 of 6 selected to represent school at Ritusumeikan Super Global Forum 2019 in Osaka, Japan, on plastic waste.",
        "Completed inter-disciplinary module on social issues & marginalisation in Singapore, analysed through critical theory, sociology and human geography.",
        "Prefectorial Board: Served as Department Head. Pioneered inter-school meetings to share student leadership best practices. Advocated for organisational reforms to ensure a more student-centric approach to the Board's work. 1 of 4 awarded top leadership award for exceptional contributions to the Prefectorial Board - the Tan Geok Ser Award.",
        "Squash: Served as Team Captain. Led team through Covid, including transition to online training. Participated in 2-week trip to Penang, Malaysia, where I was coached by a world-class coach who coaches Fmr World No. 1 Nicol David.",
    ],
  },
]

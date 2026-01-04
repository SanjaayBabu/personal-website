export type WorkItem = {
  id: string
  period: string
  role: string
  org: string
  summary: string
  details: string[]
  tags: string[]
}

export const workItems: WorkItem[] = [
  {
    id: "strategic-foresight",
    period: "12/2024–02/2025",
    role: "Strategic Foresight Intern",
    org: "Ministry of Defence (Singapore)",
    summary:
      "Qualitative research to support national-level scenario planning exercises.",
    details: [
      "Applied the Oxford Scenario Planning Approach to analyze Singapore’s 2040 defense landscape, developing robust scenarios to stress-test and future-proof national defense policies.",
      "Formulated short-to-medium term geopolitical assessments of emerging Asia-Pacific powers, directly informing a comprehensive review of bilateral defense strategies.",
      "Communicated complex research to senior leadership, delivering presentations to over 60 policy officers and 5 key decision-makers to facilitate data-driven policy shifts.",
      "Experienced high-level diplomatic engagement at the IISS Shangri-La Sherpa Dialogue 2025; synthesized Track I and Track II discussions involving delegates from 47 countries into actionable records for ministry use.",
    ],
    tags: ["Strategic Foresight", "Policy Research", "Qualitative Research"],
  },

  {
    id: "asia-analyst",
    period: "03/2023-04/2024",
    role: "Asia Analyst (Voluntary)",
    org: "Human Rights Measurement Initiative",
    summary:
      "Analysed human rights data to understand trends in Central, Southeast, and East Asia.",
    details: [
      "Utilized R and Excel to clean and visualise proprietary HRMI datasets",
      "Packaged data analysis to tell a broader human rights story, to be used by human rights defenders in countries of study",
      "Trained in cybersecurity measures to protect human rights defenders in high-risk environments",
      "Improved cross-cultural communication skills by collaborating with a diverse, international team",
    ],
    tags: ["Quantitative Research", "Human Rights"],
  },

  {
    id: "singapore-army",
    period: "01/2023-11/2024",
    role: "Soldier (Conscription)",
    org: "Commandos, Singapore Army",
    summary:
      "Trained in military operations from the air, sea, and land",
    details: [
      "Tested mental fortitute and physical endurance through grueling training exercises including X72, a 72-hour continuous training exercise",
      "Took charge of media affairs for a critical bilateral training exercise between the Singapore and Indonesian special forces",
      "Part of the Guard of Honour Contingent for the SAF Day Parade and National Day Parades 2024. Awarded \"Star Award\" for peer leadership as part of the SAF Day Parade contingent",
    ],
    tags: ["Grit", "Leadership", "Organisation"],
  },


]

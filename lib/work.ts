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
    id: "law-research-assistant",
    period: "08/2026-present",
    role: "Research Assistant",
    org: "Duke Law School",
    summary: "Part of a interdisciplinary research team building an open-access portal consolidating research on Chinese law & policy.",
    details: [
      "Starting a research position with Duke Law school seeking to build an open source portal consolidating scholarship on Chinese law & public policy using AI-human teaming." 
    ],
    tags: ["Research", "AI"],
  },

  {
    id: "ethics-teaching-assistant",
    period: "08/2026-present",
    role: "Teaching Assistant",
    org: "Duke University (Kenan Institute of Ethics)",
    summary: "Facilitating theoretical & practical conversations surrounding the ethics of justice. What is the ethical status of current punitive justice systems? Are there ways to build a better system?",
    details: [
      "Training 15 students on restorative practices as applied to criminal justice, preventative justice & addressing structural issues.",
      "Facilitating rigorous conversations about the ethical foundations of justice systems, and how that informs the ways we should think about justice.",
      "Reading through & responding to student prose essays & reflections relating to the themes of this class."
    ],
    tags: ["Teaching", "Ethical Inquiry", "Facilitation"],
  },

  {
    id: "multilateral-reform",
    period: "05/2026-07/2026",
    role: "Undergraduate Policy Fellow",
    org: "Starling Institute",
    summary: "Research, staffing and tech development for an organization that seeks to enhance the state of global cooperation by building coalitions around key global issues.",
    details: [
      "Supported the UN80 reform process by drafting analytical memos to support Member State partners.",
      "Tracked UN engagements relating to the selection of the next Secretary-General, setting the agenda and expectations for the next SG.",
      "Provided logistics support & leadership for three Starling Institute convenings with Member States representatives (including Permanent Representatives), civil society and academics.",
      "Integrating AI and creating bespoke software tools for the organization in order to save time and streamline processes for the Institute.",],
    tags: ["Policy Research", "AI"],
  },
  
  {
    id: "development-economics",
    period: "02/2026-06/2026",
    role: "Research Assistant",
    org: "Duke University Development Economics Lab",
    summary:
      "Worked on a research project to understand the effects of environmental trade policy on agriculture-driven deforestation",
    details: [
      "Deforestation is normatively bad. But what do you do when people who deforest for agricultural purposes are often poor smallholders?",
      "Analysed papers across development economics, environmental economics, and political economy to understand the effectiveness of trade policies, including the EU Deforestation Regulation, in reducing deforestation while minimizing harm to smallholders.",
    ],
    tags: ["Research", "Development Economics", "Environmental Policy"],
  },

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
    id: "legislative-assistant",
    period: "04/2024-05/2025",
    role: "Legislative Assistant",
    org: "Louis Ng Kok Kwang, Member of Parliament (Singapore)",
    summary:
      "Supported legislative advocacy work for a Member of Parliament in Singapore.",
    details: [
      "Co-drafted Animal Welfare White Paper together with key animal welfare civil society organizations, facilitating a review of the Animals and Birds Act.",
      "Action item research for Sustainability & Decarbonization Motion, promoting greater government support for businesses seeking to decarbonize.",
      "Drafted Parliamentary Questions to advocate for migrant workers, single parents, abuse victims and sustainability.",
      "Attended stakeholder meetings with civil society organizations to support MP's advocacy work in Parliament.", 
    ],
    tags: ["Legislative Research", "Civic Engagement", "Advocacy"],
  },

  {
    id: "legal-internships",
    period: "12/2024–02/2025",
    role: "Legal Intern",
    org: "Forte Law LLC; Davinder Singh Chambers",
    summary:
      "Two legal internships, across corporate and dispute resolution practices.",
    details: [
      "Conducted legal research for corporate clients, working on mergers, sale & purchase agreements, licensing agreements, and Memorandums of Understanding.",
      "Drafted first drafts of bespoke contracts and wrote legal research memos to support senior lawyers.",
      "Worked on family law & criminal litigation matters in a firm led by Singapore’s most well-renowned litigator, Davinder Singh S.C."
    ],
    tags: ["Legal Research", "Client Communication", "Business"],
  },

  {
    id: "singapore-army",
    period: "01/2023-11/2024",
    role: "Soldier (Conscription)",
    org: "Commandos, Singapore Army",
    summary:
      "Trained in military operations from the air, sea, and land.",
    details: [
      "Tested mental fortitute and physical endurance through grueling training exercises including X72, a 72-hour continuous training exercise",
      "Took charge of media affairs for a critical bilateral training exercise between the Singapore and Indonesian special forces",
      "Part of the Guard of Honour Contingent for the SAF Day Parade and National Day Parades 2024. Awarded \"Star Award\" for peer leadership as part of the SAF Day Parade contingent",
    ],
    tags: ["Grit", "Leadership", "Organisation"],
  },
]

export type ProjectsItem = {
  slug: string
  id: string
  period: string
  role: string
  org: string
  summary: string
  details: string[]
  tags: string[]
}

export const ProjectsItems: ProjectsItem[] = [
  {
    slug: "green-scorpions",
    id: "green-scorpions",
    period: "06/2024–present",
    role: "Sustainability in the Singapore Army",
    org: "Singapore Armed Forces",
    summary: "Founded a project team aimed to mitigate incineration of used plastics in the Army.",
    details: [
      "Negotiated a partnership with Singaporean green startup Magorium and successfully ran a pilot to collect used plastics in a military camp for upcycling into asphalt.",
      "Part of a broader effort to reduce waste incineration by 30% by 2030, by redirecting recyclable waste into recycling bins.",
      "Used behavior science & “choice architecture” to encourage people to increase recycling bins utilization rate.",
      "Collaborating with the SAF Sustainability Office to implement this initiative nationwide.",
    ],
    tags: ["Sustainability", "Leadership", "Project Management"],
  },

  {
    slug: "well-being",
    id: "well-being",
    period: "04/2024–11/2024",
    role: "Measuring Mental Well-Being in Singapore",
    org: "The Majurity Trust",
    summary: "Tested the psychometric properties of the Short Warwick-Edinburgh Mental Well-Being Scale (SWEMWBS) in a Singaporean context, to validate its use in initiatives to promote Singaporeans' well-being.",
    details: [
      "Citation: Kwan, J. Y., Hui Xian, O., Babu, S., & Ng, R. (2025). Psychometric evaluation of the Short Warwick-Edinburgh Mental Well-Being Scale (SWEMWBS) in Singapore: confirmatory analysis and measurement invariance testing for applied social work research and evaluation. Asia Pacific Journal of Social Work and Development, 1–14. https://doi.org/10.1080/29949769.2025.2539688",
      "Wrote Introduction and Literature Review sections of the paper",
      "Supported project team's statistical analysis to assess the reliability and validity of SWEMWBS in a Singaporean context",
    ],
    tags: ["Qualitative Research", "Well-Being"],
  },

  {
    slug: "migrant-workers",
    id: "migrant-workers",
    period: "01/2022–08/2022",
    role: "The Future of Migrant Worker Dormitories in 2040",
    org: "Dormitories Association of Singapore Limited (DASL)",
    summary: "Directed a foresight project to envision the future of migrant worker dormitories in Singapore, and proposed recommendations to key stakeholders.",
    details: [
      "Conceptualized and directed a Futures Thinking study that investigated how migrant worker dormitories in 2040 can better meet workers’ needs.",
      "Considered potential developments in Singapore across politics, culture, economics, immigration, and technology.",
      "Worked with over 100 industry leaders, NGO partners and migrant workers in a Design Thinking Process to co-create solutions to problems in migrant worker dorms today.",
      "Presented research findings and ways forward to industry leaders at a national forum in August 2022.",
    ],
    tags: ["Futures Thinking", "Social Justice"],  
}
]

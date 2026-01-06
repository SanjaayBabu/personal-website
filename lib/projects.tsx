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
    period: "06/2024–08/2024",
    role: "Sustainability in the Singapore Army",
    org: "Singapore Armed Forces",
    summary: "Founded a project team aimed to mitigate incineration of used plastics in the Army.",
    details: [
      "Negotiated a partnership with Singaporean green startup Magorium and successfully ran a pilot to collect used plastics in a military camp for upcycling into asphalt.",
      "Persuaded Army Leadership to take on a ground-up initiative to promote sustainability goals, despite not being directly linked to the military’s key organizational missions. ",
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
]

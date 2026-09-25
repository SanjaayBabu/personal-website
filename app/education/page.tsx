import { Lora } from "next/font/google"
import Link from "next/link"
import { Metadata } from "next"
import { EducationItems } from "@/lib/education"

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] })

export const metadata: Metadata = {
  title: "Education — Sanjaay Babu",
  description: "Schools, coursework, and extracurriculars.",
}

export default function EducationPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <div className="flex justify-between items-end mb-14">
        <h1 className={`${lora.className} text-3xl sm:text-4xl font-light`}>Education</h1>
        <span className="text-sm text-muted-foreground">2017–2029</span>
      </div>

      <div className="space-y-20">
        {EducationItems.map((item) => (
          <section key={item.id} className="space-y-6">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-accent-brand">{item.school}</h2>
                {item.location && (
                  <div className="text-sm text-muted-foreground mt-1">{item.location}</div>
                )}
              </div>
              <div className="text-right">
                <span className="text-sm text-muted-foreground">{item.period}</span>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors mt-1"
                  >
                    {item.link.label}
                  </Link>
                )}
              </div>
            </div>

            {item.summary && (
              <p className="text-base text-muted-foreground leading-relaxed">{item.summary}</p>
            )}

            {item.writeup && (
              <p className="text-base leading-relaxed">{item.writeup}</p>
            )}

            {item.coursework && item.coursework.length > 0 && (
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/8 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-4">
                  Coursework
                </p>
                <div className="space-y-4">
                  {item.coursework.map((term) => (
                    <div key={term.term}>
                      <p className="text-sm font-medium mb-1.5">{term.term}</p>
                      <ul className="flex flex-wrap gap-x-2 gap-y-1.5">
                        {term.courses.map((course) => (
                          <li
                            key={course}
                            className="text-sm text-muted-foreground after:content-['·'] after:ml-2 last:after:content-none"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.extracurriculars && item.extracurriculars.length > 0 && (
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/8 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
                  Extracurriculars
                </p>
                <ul className="space-y-2.5">
                  {item.extracurriculars.map((activity) => (
                    <li key={activity.name}>
                      <span className="text-sm font-medium">{activity.name}</span>
                      {activity.note && (
                        <span className="text-sm text-muted-foreground"> — {activity.note}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(!item.coursework || item.coursework.length === 0) &&
              (!item.extracurriculars || item.extracurriculars.length === 0) &&
              item.details.length > 0 && (
                <div className="rounded-xl border border-border bg-muted/20 p-5 sm:p-6">
                  <ul className="space-y-2.5">
                    {item.details.map((d, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5">
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </section>
        ))}
      </div>
    </main>
  )
}

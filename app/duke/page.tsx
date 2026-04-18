"use client"

import { Lora } from "next/font/google"
import Link from "next/link"
import { useEffect, useRef } from "react"

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] })

type Course = {
  name: string
  take?: string
}

type OrgEntry = {
  name: string
  role: string
  note?: string
}

type Semester = {
  id: string
  term: string
  subtitle: string
  courses: Course[]
  orgs: OrgEntry[]
  moments?: string[]
}

// ─── Update this as semesters pass ───────────────────────────────────────────
const semesters: Semester[] = [
  {
    id: "fall-2025",
    term: "Fall 2025",
    subtitle: "First Semester",
    courses: [
      {
        name: "Writing 101",
        take: "Slowed me down in the best way. Precision over volume.",
      },
      {
        name: "Introduction to Political Science",
        take: "Mapped the terrain I'd been navigating intuitively.",
      },
      {
        name: "Calculus I",
        take: "Foundational. Humbling.",
      },
      {
        name: "Cultural Anthropology",
        take: "Changed how I read systems and people.",
      },
    ],
    orgs: [
      {
        name: "Duke Southeast Asian Community",
        role: "Founding Exec",
        note: "Started with a few conversations; grew into an org.",
      },
      {
        name: "Duke DevLab",
        role: "Research Assistant",
        note:
          "Working on supply chain traceability and deforestation in Côte d'Ivoire.",
      },
    ],
    moments: [
      "Arrived in Durham knowing essentially no one.",
      "First time living on a residential quad — figured out how to exist in a new place.",
    ],
  },
  {
    id: "spring-2026",
    term: "Spring 2026",
    subtitle: "Finding My Footing",
    courses: [
      {
        name: "Econometrics",
        take:
          "Where math meets messiness. Learning to be honest about uncertainty.",
      },
      {
        name: "Climate Change",
        take:
          "The most important class I've taken so far. Still processing what to do with it.",
      },
      {
        name: "European Union",
        take:
          "Studying regional integration from the outside — parallels to Southeast Asia everywhere.",
      },
      {
        name: "Mathematics",
        take: "Building the scaffolding.",
      },
    ],
    orgs: [
      {
        name: "Duke Southeast Asian Community",
        role: "Founding Exec",
        note: "Growing programming; building cultural outreach.",
      },
      {
        name: "Kenan Institute ReWork Lab",
        role: "Fellow",
        note:
          "Trained in restorative facilitation with Ada Gregory. Exploring dialogue circles as democratic infrastructure.",
      },
      {
        name: "Duke DevLab",
        role: "Research Assistant",
        note:
          "Co-authoring a paper on the limits of supply chain traceability in reducing deforestation.",
      },
    ],
    moments: [
      "Completed a weekend-long restorative facilitation training.",
      "Started co-writing a white paper with the Himalay Unnati Mission in the Indian Himalayan Region.",
    ],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function AtDuke() {
  const itemRefs = useRef<HTMLElement[]>([])
  itemRefs.current = []

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    )

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const addRef = (el: HTMLElement | null) => {
    if (el) itemRefs.current.push(el)
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
      {/* Back link */}
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 inline-block"
      >
        ← Home
      </Link>

      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-3">
          <h1 className={`${lora.className} text-3xl sm:text-4xl font-semibold`}>
            At Duke
          </h1>
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
            Class of 2029
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-prose">
          A semester-by-semester record — courses I took, organizations I was
          part of, and moments worth noting. Four years of Duke, documented as
          they happen.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical spine */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />

        <div className="space-y-20 pl-8">
          {semesters.map((sem, si) => (
            <div key={sem.id} id={sem.id}>
              {/* Semester heading */}
              <div
                ref={addRef}
                className="opacity-0 relative mb-7"
                style={{ animationDelay: `${si * 0.05}s` }}
              >
                {/* Timeline node */}
                <span className="absolute -left-[36px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-foreground/50" />

                <div className="flex items-baseline gap-3">
                  <h2 className={`${lora.className} text-xl font-semibold`}>
                    {sem.term}
                  </h2>
                  <span className="text-sm text-muted-foreground italic">
                    {sem.subtitle}
                  </span>
                </div>
              </div>

              {/* Cards */}
              <div className="space-y-3">
                {/* Courses */}
                <div
                  ref={addRef}
                  className="opacity-0 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5"
                  style={{ animationDelay: `${si * 0.05 + 0.08}s` }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-4">
                    Courses
                  </p>
                  <ul className="space-y-3.5">
                    {sem.courses.map((c) => (
                      <li key={c.name}>
                        <p className="text-sm font-medium">{c.name}</p>
                        {c.take && (
                          <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                            {c.take}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Orgs */}
                <div
                  ref={addRef}
                  className="opacity-0 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5"
                  style={{ animationDelay: `${si * 0.05 + 0.14}s` }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
                    Involvement
                  </p>
                  <ul className="space-y-3.5">
                    {sem.orgs.map((o) => (
                      <li key={o.name}>
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="text-sm font-medium">{o.name}</span>
                          <span className="text-xs text-muted-foreground">
                            — {o.role}
                          </span>
                        </div>
                        {o.note && (
                          <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                            {o.note}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Moments */}
                {sem.moments && sem.moments.length > 0 && (
                  <div
                    ref={addRef}
                    className="opacity-0 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5"
                    style={{ animationDelay: `${si * 0.05 + 0.2}s` }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-4">
                      Moments
                    </p>
                    <ul className="space-y-2">
                      {sem.moments.map((m) => (
                        <li key={m} className="flex items-start gap-3">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-amber-500/60 shrink-0" />
                          <span className="text-sm">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Future placeholder */}
          <div
            ref={addRef}
            className="opacity-0 relative"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="absolute -left-[36px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-border" />
            <p className="text-sm text-muted-foreground italic">
              More semesters to come.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Updated at the end of each semester.{" "}
          <Link
            href="/now"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            See what I'm doing right now →
          </Link>
        </p>
      </div>
    </main>
  )
}

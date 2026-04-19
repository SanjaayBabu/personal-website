"use client"

import { Lora } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] })

type Course   = { name: string; take?: string }
type OrgEntry = { name: string; role: string; note?: string }
type Semester = {
  id: string
  term: string
  subtitle: string
  /** Drop photos in /public/duke/ e.g. "/duke/fall-2025.jpg" */
  photo?: string
  /** RGB values of the slide's accent — drives the background wash */
  accentRGB: [number, number, number]
  courses: Course[]
  orgs: OrgEntry[]
  moments?: string[]
}

// ─── Add / edit semesters here ───────────────────────────────────────────────
const semesters: Semester[] = [
  {
    id: "fall-2025",
    term: "Fall 2025",
    subtitle: "First Semester",
    accentRGB: [59, 130, 246],   // blue-500
    // photo: "/duke/fall-2025.jpg",
    courses: [
      { name: "Writing 101",                       take: "Slowed me down in the best way. Precision over volume." },
      { name: "Introduction to Political Science",  take: "Mapped the terrain I'd been navigating intuitively." },
      { name: "Calculus I",                         take: "Foundational. Humbling." },
      { name: "Cultural Anthropology",              take: "Changed how I read systems and people." },
    ],
    orgs: [
      { name: "Duke Southeast Asian Community", role: "Founding Exec",      note: "Started with a few conversations; grew into an org." },
      { name: "Duke DevLab",                    role: "Research Assistant",  note: "Supply chain traceability and deforestation in Côte d'Ivoire." },
    ],
    moments: [
      "Arrived in Durham knowing essentially no one.",
      "First time living on a residential quad.",
    ],
  },
  {
    id: "spring-2026",
    term: "Spring 2026",
    subtitle: "Finding My Footing",
    accentRGB: [16, 185, 129],   // emerald-500
    // photo: "/duke/spring-2026.jpg",
    courses: [
      { name: "Econometrics",   take: "Where math meets messiness. Learning to be honest about uncertainty." },
      { name: "Climate Change", take: "The most important class I've taken. Still processing what to do with it." },
      { name: "European Union", take: "Studying integration from the outside — parallels to Southeast Asia everywhere." },
      { name: "Mathematics",    take: "Building the scaffolding." },
    ],
    orgs: [
      { name: "Duke Southeast Asian Community", role: "Founding Exec",      note: "Growing programming; building cultural outreach." },
      { name: "Kenan Institute ReWork Lab",      role: "Fellow",             note: "Trained in restorative facilitation with Ada Gregory." },
      { name: "Duke DevLab",                     role: "Research Assistant", note: "Co-authoring a paper on deforestation and supply chain traceability." },
    ],
    moments: [
      "Completed a weekend-long restorative facilitation training.",
      "Started co-writing a white paper with the Himalay Unnati Mission.",
    ],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const N = semesters.length

// Interpolate between two numbers
const lerp = (a: number, b: number, t: number) => Math.round(a + (b - a) * t)

export default function AtDuke() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef     = useRef<HTMLDivElement>(null)
  const fillRef      = useRef<HTMLDivElement>(null)
  const bgRef        = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current
      const track     = trackRef.current
      const fill      = fillRef.current
      const bg        = bgRef.current
      if (!container || !track) return

      const scrolled = window.scrollY - container.offsetTop
      const clamped  = Math.max(0, Math.min(N - 1, scrolled / window.innerHeight))

      // Slide position — direct DOM, no React re-render
      track.style.transform = `translateX(${-clamped * window.innerWidth}px)`

      // Timeline fill
      if (fill) fill.style.width = N > 1 ? `${(clamped / (N - 1)) * 100}%` : "0%"

      // Smoothly interpolate background accent color between slides
      if (bg) {
        const fromIdx = Math.min(Math.floor(clamped), N - 2)
        const toIdx   = fromIdx + 1
        const t       = clamped - fromIdx
        const [fr, fg, fb] = semesters[Math.max(0, fromIdx)].accentRGB
        const [tr, tg, tb] = semesters[Math.min(N - 1, toIdx)].accentRGB
        const r = lerp(fr, tr, t)
        const g = lerp(fg, tg, t)
        const b = lerp(fb, tb, t)
        bg.style.background = [
          `radial-gradient(ellipse 90% 70% at 10% 10%, rgba(${r},${g},${b},0.22) 0%, transparent 65%)`,
          `radial-gradient(ellipse 60% 50% at 90% 90%, rgba(${r},${g},${b},0.12) 0%, transparent 65%)`,
        ].join(", ")
      }

      const idx = Math.round(clamped)
      setActiveIndex(prev => (prev !== idx ? idx : prev))
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div>
      {/* ── Scroll driver ────────────────────────────────────────────────── */}
      <div ref={containerRef} style={{ height: `${N * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden bg-background">

          {/* Interpolated background wash — updated directly by scroll handler */}
          <div ref={bgRef} className="absolute inset-0 pointer-events-none transition-none" />

          {/* Top bar */}
          <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5 pointer-events-none">
            <Link
              href="/"
              className="pointer-events-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Home
            </Link>
            <span className="text-sm text-muted-foreground">
              <span className={`${lora.className} font-semibold text-foreground`}>At Duke</span>
              {" "}— Class of 2029
            </span>
          </div>

          {/* ── Horizontal track ─────────────────────────────────────────── */}
          <div
            ref={trackRef}
            className="flex h-full will-change-transform"
            style={{ width: `${N * 100}vw` }}
          >
            {semesters.map((sem) => {
              const [r, g, b] = sem.accentRGB
              const accentCSS = `rgb(${r},${g},${b})`
              return (
                <div
                  key={sem.id}
                  className="relative flex flex-col h-full pt-16 pb-20 px-6 sm:px-10 lg:px-14"
                  style={{ width: "100vw" }}
                >
                  <div className="flex flex-col h-full py-6 gap-5">

                    {/* Semester heading */}
                    <div>
                      <h2
                        className={`${lora.className} text-4xl sm:text-6xl font-semibold leading-none mb-1`}
                        style={{ color: accentCSS }}
                      >
                        {sem.term}
                      </h2>
                      <p className="text-muted-foreground italic">{sem.subtitle}</p>
                    </div>

                    {/* Main content: photo left, details right */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 min-h-0">

                      {/* Photo / placeholder */}
                      <div
                        className="relative rounded-2xl overflow-hidden flex items-center justify-center min-h-48 lg:min-h-0 border"
                        style={{
                          backgroundColor: `rgba(${r},${g},${b},0.08)`,
                          borderColor:     `rgba(${r},${g},${b},0.2)`,
                        }}
                      >
                        {sem.photo ? (
                          <Image
                            src={sem.photo}
                            alt={`${sem.term} at Duke`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center gap-2 select-none px-6 text-center">
                            <span
                              className={`${lora.className} text-[6rem] sm:text-[9rem] font-semibold leading-none`}
                              style={{ color: `rgba(${r},${g},${b},0.2)` }}
                            >
                              {sem.term.split(" ")[1]}
                            </span>
                            <span
                              className="text-xs uppercase tracking-widest"
                              style={{ color: `rgba(${r},${g},${b},0.4)` }}
                            >
                              Add photo → /public/duke/
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Details — category colors stay fixed across slides */}
                      <div className="flex flex-col gap-3 min-h-0 overflow-y-auto">

                        {/* Courses — always blue */}
                        <div className="rounded-xl border border-blue-500/20 bg-blue-500/8 p-4 shrink-0">
                          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
                            Courses
                          </p>
                          <ul className="space-y-2.5">
                            {sem.courses.map(c => (
                              <li key={c.name}>
                                <p className="text-sm font-medium leading-snug">{c.name}</p>
                                {c.take && (
                                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{c.take}</p>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Involvement — always emerald */}
                        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/8 p-4 shrink-0">
                          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">
                            Involvement
                          </p>
                          <ul className="space-y-2.5">
                            {sem.orgs.map(o => (
                              <li key={o.name}>
                                <div className="flex items-baseline gap-1.5 flex-wrap">
                                  <span className="text-sm font-medium">{o.name}</span>
                                  <span className="text-xs text-muted-foreground">— {o.role}</span>
                                </div>
                                {o.note && (
                                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{o.note}</p>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Moments — always amber */}
                        {sem.moments && sem.moments.length > 0 && (
                          <div className="rounded-xl border border-amber-500/20 bg-amber-500/8 p-4 shrink-0">
                            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3">
                              Moments
                            </p>
                            <ul className="space-y-1.5">
                              {sem.moments.map(m => (
                                <li key={m} className="flex items-start gap-2.5">
                                  <span className="mt-[6px] w-1 h-1 rounded-full bg-amber-500/50 shrink-0" />
                                  <span className="text-sm text-muted-foreground leading-snug">{m}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Timeline bar ─────────────────────────────────────────────── */}
          <div className="absolute bottom-0 inset-x-0 z-20 px-6 sm:px-10 lg:px-14 pb-5">
            <p className="text-xs text-muted-foreground text-center mb-3">scroll to move through time</p>
            <div className="relative">
              <div className="absolute top-[7px] inset-x-0 h-px bg-border" />
              <div
                ref={fillRef}
                className="absolute top-[7px] left-0 h-px bg-foreground/50"
                style={{ width: "0%" }}
              />
              <div className="relative flex justify-between">
                {semesters.map((sem, i) => (
                  <div key={sem.id} className="flex flex-col items-center gap-2">
                    <div className={`w-[15px] h-[15px] rounded-full border-2 transition-all duration-300 ${
                      i <= activeIndex
                        ? "bg-foreground border-foreground"
                        : "bg-background border-border"
                    }`} />
                    <span className="text-[11px] text-muted-foreground whitespace-nowrap">{sem.term}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 py-12 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Updated at the end of each semester.{" "}
          <Link href="/now" className="underline underline-offset-4 hover:text-foreground transition-colors">
            See what I'm doing right now →
          </Link>
        </p>
      </div>
    </div>
  )
}

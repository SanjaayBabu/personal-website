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
  // Standard semester fields
  courses?: Course[]
  orgs?: OrgEntry[]
  moments?: string[]
  // Break / summer fields (renders instead of courses/orgs when present)
  worked?: string[]
  read?: string[]
  fun?: string[]
}

// ─── Add / edit semesters here ───────────────────────────────────────────────
const semesters: Semester[] = [
  {
    id: "fall-2025",
    term: "Fall 2025",
    subtitle: "New Beginnings - Singapore -> Durham, NC",
    accentRGB: [59, 130, 246],   // blue-500
    photo: "/duke/f25.jpeg",
    courses: [
      { name: "Freedom and Moral Obligation",       take: "Leaning into uncertainty. You often don't reach many conclusions at the end of philosophy classes, but you totally love the process." },
      { name: "Just Work: Restorative Justice Models and Applications",  take: "What a class. Forced me to question old paradigms, not just about justice but also what really defines a 'functiona' society." },
      { name: "Econ 101",                         take: "Simple, but a useful spanning overview." },
      { name: "Religion and Politics in Post-Revolutionary Iran",              take: "Developed a much better understanding of contemporary Iran, the Middle East, and the underlying religious arguments behind theocratic regimes. A highly timely class given volatility in the Middle East. Incredible professor." },
    ],
    orgs: [
      { name: "Duke Debate", role: "Team Member", note: "Decided to hop into college debate despite no high school experience. Had lots of fun learning the fundamentals of British Parliamentary Debate. Broke into Open Quarter-finals at Seattle IV 2025 and ranked 6th best Novice Speaker in the tournament." },
      { name: "Duke Federal Reserve Challenge Team", role: "Junior Analyst",  note: "Developed a baseline understanding on the key data & facts in macroeconomics analysis across inflation, growth, labour markets and financial markets." },
      { name: "Duke Human Rights Center Student Advisory Board", role: "Member", note: "Volunteered with Geer Cemetery to protect the dignity of the dead despite inequal funding policies that disproportionately harmed some communities. Worked on an action project to increase student involvement in human rights causes." },
      { name: "Duke Singapore Student Assocation", role: "Member & Internal Vice President", note: "Had a great time with the Singaporean community on campus. Decided to extend my involvement by running to be the internal vice president of the club."},
    ],
    moments: [
      "Arrived in Durham knowing essentially no one after a 14 hour layover in San Francisco",
      "Went to a few American football games and figured out the rules. Still not a hundred percent sure I get it, but at least I knew what was going on.",
      "Completed the wonderful RDC half-marathon in Durham, NC with some friends from Duke",
      "Went to Washington, DC for the first time with my FOCUS program. Had an awesome time.",
      "Attended an incredible closed-door dinner with the Secretary of State of the United States, Antony Blinken, as part of the Program on American Grand Strategy. Got to ask him a question, six feet apart, about the US' approach towards non-state actors.",
      "Had to drive through a snowstorm in a rental car with no snow tires to get from Aspen to the Rocky Mountains. A day later, was stuck in Chicago with more than 6 hours worth of delays. Still had a great time.",
    ],
  },
  {
    id: "winter-2025",
    term: "Winter 2025",
    subtitle: "Back home in Singapore",
    accentRGB: [139, 92, 246],   // violet-500
    photo: "/duke/winter-2025.jpg",
    worked: [
      "Built this website using ChatGPT, next.js, and Tailwind CSS. Struggled to get it up and running, and had to debug a bunch of things myself. Thanks Akshay.",
      "Learnt how to utilize Artificial Intelligence tools effectively, to ride the wave amidst a new paradigm of work and life.",
      "Consolidated my notes from the fall semester, and reflected on what I want to do going forward. Also did some soul-searching about what I want to do with my life, and how I can make the most of this opportunity at Duke.",
    ],
    read: [
      "Civilized to Death by Christopher Ryan.",
      "Killing Floor by Lee Child.",
      "Discipline and Punish by Michel Foucault.",
    ],
    fun: [
      "Was in the UK. Went to Birmingham, Stratford-upon-Avon, Morpeth, Edinburgh, and London. Had the most incredbile time ever.",
    ],
  },
  {
    id: "spring-2026",
    term: "Spring 2026",
    subtitle: "Upping the ante & taking off",
    accentRGB: [16, 185, 129],   // emerald-500
    photo: "/duke/spring-2026.jpg",
    courses: [
      { name: "Econometrics",   take: "Learning about the statistical models that are all around us all the time. Expected value has been my favourite concept. I've been using that term all the time since learning more about it." },
      { name: "Climate Change", take: "The most important class I've taken. Still processing what to do with it. Climate change will be the biggest threat to human existence, and I'm not a hundred percent sure we're going to realize that in time. Thinking about what I can do in my capacity to prevent us from reaching that brink." },
      { name: "Development and Africa", take: "Development is so much more complicated than it seems. Grasped the complexity of this question, while seeking to understand what a better way forward is. Learnt about state & non-state measures to promote development." },
      { name: "European Union", take: "Learnt more about the structure, policies and happenings of the European Union. Naturally made parallels to Southeast Asia, and dreamt of possibilities for ASEAN to similarly enjoy a more comprehensive economic / regulatory partnership." },
      { name: "Calculus II",    take: "Awesome maths class. Taught me how to be organized with information and think systematically." },
    ],
    orgs: [
      { name: "Duke Debate", role: "Team Member", note: "Had a blast debating again this semester. Novice Champions @ Berkeley IV 2026 tournament, beating out teams from across the US and Canada."},
      { name: "Duke Federal Reserve Challenge Team", role: "Senior Analyst", note: "Dove deeper into macroeconomics analysis, and got to apply it in a competition setting through two internal competitions. Selected to be on the Presentation Team for the Federal Reserve Challenge 2026." },
      { name: "Duke Impact Investing Group", role: "Consulting Analyst", note: "Worked on two projects with non-profits - the first with a non-profit focussed on promoting development in the Indian Himalayan Region, and the second with an NGO utilizing extreme sports to support combat veterans with disabilities."},
      { name: "Duke DevLab", role: "Research Assistant", note: "Working on a paper on deforestation and supply chain traceability." },
      { name: "Bluedot Impact AGI Strategy Course", role: "Fellow", note: "Learning about potential futures for AI, and how we can ensure responsible development." },
      { name: "Kenan Institute ReWork Lab", role: "Fellow", note: "Trained in restorative facilitation with Ada Gregory." },
      { name: "Duke Human Rights Center Student Advisory Board", role: "Member", note: "Continued my work with SAB. Contributed question-generation for Human Rights Across the Professions, an event aimed at revealing potential career paths within the human rights space." },
      { name: "Duke Singapore Students' Association", role: "Internal Vice-President", note: "Continued my work seeking to build a strong Singaporean community on campus. Helped to organize welcome events for incoming freshmen, and participated in a Senior Sendoff event for our dear graduating seniors." },
      { name: "Duke Southeast Asian Community", role: "Founding Exec", note: "Building a space for the Southeast Asian community at Duke. Working on programming and general club administration. Ran an event celebrating Water Festivals in Southeast Asia." },
      { name: "Duke UNICEF", role: "Co-lead of International Advocacy", note: "Led a panel discussion with three experts across psychology, economics and pedagogy to understand the impacts of changing asylum policies around the world on children."},
    ],
    moments: [
      "Popped my knee during a friendly squash game against our sworn rivals, University of North Carolina at Chapel Hill. Spent the next few weeks on crutches, hobbling to class and trying to keep up with coursework while immobile. But had a wonderful group of friends who were my rock and kept me going.",
      "Had a blast during my weekend trip to San Francisco for the Berkeley IV debate tournament. Emerged Novice Champions, and made great memories. Also, got to spend time with my cousin for the first time in more than a decade, and had a delightful time together.",
      "Took a trip to Washington, DC as part of the Sanford Policy Pathways program. Visited fascinating organizations such as the US Department of State, United Nations Foundation, National Geographic Society, and more. Met wonderful people, both students and alumni. Was inspired to make my career meaningful, and make my passions come alive. Got new mentors and new intellectual sparring partners.",
      "Watched Duke trounce UNC at the home game. Campus came alive that day. Also got to see Duke take the loss to UConn at the Elite Eight. We'll be back next time.",
      "Attended a public fireside chat with Mr. Pita Limjaroenrat, a prominent Thai opposition figure. Interesting sharing on the nature of Thai politics, and what lies ahead for him.",
      "Took two maths-related finals in one day. That was rough.",
    ],
  },
  {
    id: "summer-2026",
    term: "Summer 2026",
    subtitle: "TBD",
    accentRGB: [245, 158, 11],   // amber-500
    // photo: "/duke/summer-2026.jpg",
    worked: [],
    read: [],
    fun: [],
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
      const vh = window.innerHeight || 1
      const clamped  = Math.max(0, Math.min(N - 1, scrolled / vh))

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

                      {/* Details */}
                      <div className="flex flex-col gap-3 min-h-0 overflow-y-auto">
                        {sem.worked !== undefined || sem.read !== undefined || sem.fun !== undefined ? (
                          // ── Break / summer layout ──────────────────────────
                          <>
                            {sem.worked !== undefined && (
                              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/8 p-4 shrink-0">
                                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Things I worked on</p>
                                {sem.worked.length > 0 ? (
                                  <ul className="space-y-1.5">
                                    {sem.worked.map(w => (
                                      <li key={w} className="flex items-start gap-2.5">
                                        <span className="mt-[6px] w-1 h-1 rounded-full bg-emerald-500/50 shrink-0" />
                                        <span className="text-sm text-muted-foreground leading-snug">{w}</span>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-sm text-muted-foreground italic">Coming soon.</p>
                                )}
                              </div>
                            )}
                            {sem.read !== undefined && (
                              <div className="rounded-xl border border-blue-500/20 bg-blue-500/8 p-4 shrink-0">
                                <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">Things I read</p>
                                {sem.read.length > 0 ? (
                                  <ul className="space-y-1.5">
                                    {sem.read.map(r => (
                                      <li key={r} className="flex items-start gap-2.5">
                                        <span className="mt-[6px] w-1 h-1 rounded-full bg-blue-500/50 shrink-0" />
                                        <span className="text-sm text-muted-foreground leading-snug">{r}</span>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-sm text-muted-foreground italic">Coming soon.</p>
                                )}
                              </div>
                            )}
                            {sem.fun !== undefined && (
                              <div className="rounded-xl border border-amber-500/20 bg-amber-500/8 p-4 shrink-0">
                                <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3">Things I did for fun</p>
                                {sem.fun.length > 0 ? (
                                  <ul className="space-y-1.5">
                                    {sem.fun.map(f => (
                                      <li key={f} className="flex items-start gap-2.5">
                                        <span className="mt-[6px] w-1 h-1 rounded-full bg-amber-500/50 shrink-0" />
                                        <span className="text-sm text-muted-foreground leading-snug">{f}</span>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-sm text-muted-foreground italic">Coming soon.</p>
                                )}
                              </div>
                            )}
                          </>
                        ) : (
                          // ── Semester layout ────────────────────────────────
                          <>
                            {/* Courses — always blue */}
                            {sem.courses && (
                              <div className="rounded-xl border border-blue-500/20 bg-blue-500/8 p-4 shrink-0">
                                <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">Courses</p>
                                <ul className="space-y-2.5">
                                  {sem.courses.map(c => (
                                    <li key={c.name}>
                                      <p className="text-sm font-medium leading-snug">{c.name}</p>
                                      {c.take && <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{c.take}</p>}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {/* Involvement — always emerald */}
                            {sem.orgs && (
                              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/8 p-4 shrink-0">
                                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Involvement</p>
                                <ul className="space-y-2.5">
                                  {sem.orgs.map(o => (
                                    <li key={o.name}>
                                      <div className="flex items-baseline gap-1.5 flex-wrap">
                                        <span className="text-sm font-medium">{o.name}</span>
                                        <span className="text-xs text-muted-foreground">— {o.role}</span>
                                      </div>
                                      {o.note && <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{o.note}</p>}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {/* Moments — always amber */}
                            {sem.moments && sem.moments.length > 0 && (
                              <div className="rounded-xl border border-amber-500/20 bg-amber-500/8 p-4 shrink-0">
                                <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3">Moments</p>
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
                          </>
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

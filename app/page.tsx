"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { WorkItem } from "@/lib/work"
import { WorkList } from "@/components/work/WorkList"
import { WorkModal } from "@/components/work/WorkModal"
import { ProjectsList } from "@/components/projects/ProjectsList"
import { ProjectsItem } from "@/lib/projects"
import React, { Suspense } from "react";
import WritingSection from "@/components/writing/WritingSection";

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null)

  useEffect(() => {
    console.log("[v0] Theme toggled to:", isDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    console.log("[v0] Setting up intersection observer for sections")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("[v0] Section visible:", entry.target.id)
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) {
        console.log("[v0] Observing section:", section.id)
        observer.observe(section)
      }
    })

    return () => {
      console.log("[v0] Cleaning up intersection observer")
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!activeWork) return

    // Lock body scroll
    document.body.style.overflow = "hidden"

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveWork(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeWork])


  const toggleTheme = () => {
    console.log("[v0] Toggle theme button clicked")
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">

{/* ---- Replace existing nav with this ---- */}
<nav className="fixed left-6 top-1/3 z-50 hidden lg:block">
  <ul className="flex flex-col gap-4 items-start">
    {[
      { id: "intro", label: "Home" },
      { id: "work", label: "Selected work" },
      { id: "projects", label: "Projects" },
      { id: "writing", label: "Writing" },
      { id: "connect", label: "Contact" },
    ].map((item) => {
      const isActive = activeSection === item.id
      return (
        <li key={item.id} className="relative group">
          <button
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
            aria-current={isActive ? "true" : undefined}
            className="flex items-center gap-4 rounded-full px-2 py-1 hover:bg-white/80 dark:hover:bg-black/10 transition-all"
            title={item.label}
          >
            {/* left dot */}
            <span
              className={`inline-block rounded-full transition-all ${
                isActive ? "w-3 h-3 bg-foreground ring-2 ring-foreground/10" : "w-2 h-2 bg-muted-foreground/40"
              }`}
            />
            {/* label - visible on hover, and always visible when active */}

            <span
              className={
                "ml-1 whitespace-nowrap text-sm font-medium transition-colors duration-200 " +
                (isActive
                ? "text-foreground"
                : "text-muted-foreground/60 group-hover:text-muted-foreground")
              }
>
            {item.label}
          </span>
          </button>
        </li>
      )
    })}
  </ul>
</nav>
{/* ---- end replacement ---- */}

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {sectionsRef.current[0] = el}}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Sanjaay
                  <br />
                  <span className="text-muted-foreground">Babu</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  {" "}
                  Freshman @ Duke University (Class of 2029), studying
                  <span className="text-foreground"> economics</span>,<span className="text-foreground"> politics</span>
                  , and
                  <span className="text-foreground"> philosophy</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for internships
                  </div>
                  <div>United States | Singapore</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">B.S. Economics</div>
                  <div className="text-muted-foreground">@ Duke University</div>
                  <div className="text-xs text-muted-foreground">2025 — 2029</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Economic Analysis",
                    "International Relations",
                    "Debating",
                    "Moral & Political Philosophy",
                    "R",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {sectionsRef.current[1] = el}}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <WorkList onSelect={setActiveWork} />
        </section>

        <section
          id="projects" 
          ref={(el) => {sectionsRef.current[2] = el}}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <ProjectsList onSelect={(item) => { console.log('selected', item); }} />
        </section>

        <section
          id="writing"
          ref={(el) => {sectionsRef.current[3] = el}}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <Suspense fallback={<div aria-hidden>Loading writing…</div>}>
            <WritingSection />
            </Suspense>
        </section>


        <section id="connect" ref={(el) => {sectionsRef.current[4] = el}} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about anything under the
                  sun.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:babusanjaay@outlook.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">babusanjaay[at]outlook[dot]com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Substack", handle: "Sanjaay Babu", url: "https://sanjaaybabu.substack.com" },
                  { name: "LinkedIn", handle: "Sanjaay Babu", url: "https://www.linkedin.com/in/sanjaay-babu-sg/" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Sanjaay Babu. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with v0.dev by Sanjaay Babu</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
      {activeWork && (
        <WorkModal
          item={activeWork}
          onClose={() => setActiveWork(null)}
        />
      )}

    </div>
  )
}

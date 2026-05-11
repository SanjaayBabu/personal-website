"use client"
import { Lora } from "next/font/google"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] })
import { useTheme } from "next-themes"
import { WorkItem } from "@/lib/work"
import { WorkList } from "@/components/work/WorkList"
import { WorkModal } from "@/components/work/WorkModal"
import { ProjectsList } from "@/components/projects/ProjectsList"
import { EducationList } from "@/components/education/EducationList"
import React, { Suspense } from "react";
import WritingSection from "@/components/writing/WritingSection";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose, DrawerTitle } from "@/components/ui/drawer"
import { Menu } from "lucide-react"

const navItems = [
  { id: "intro", label: "Home" },
  { id: "work", label: "Selected Work" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "writing", label: "Writing" },
  { id: "connect", label: "Contact" },
]

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = mounted && resolvedTheme === "dark"
  const [activeSection, setActiveSection] = useState("")
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null)
  
  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.1, rootMargin: "-10% 0px -10% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => setTheme(isDark ? "light" : "dark")

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-blue-100 dark:selection:bg-blue-900">
      <div className="absolute inset-0 pointer-events-none">
        <nav className="sticky top-1/2 left-10 z-50 hidden lg:block -translate-y-1/2 w-fit pointer-events-auto">
          <ul className="flex flex-col gap-4 items-start">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id} className="relative group">
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="flex items-center gap-4 rounded-full px-2 py-1 transition-all"
                  >
                    <span
                      className={`inline-block rounded-full transition-all duration-300 ${
                        isActive ? "w-3 h-3 ring-2" : "w-2 h-2 bg-muted-foreground/40"
                      }`}
                      style={isActive ? {
                        backgroundColor: "var(--accent-brand)",
                        boxShadow: "0 0 0 2px color-mix(in oklch, var(--accent-brand) 25%, transparent)"
                      } : {}}
                    />
                    <span className={`ml-1 text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground/60 group-hover:text-muted-foreground"}`}>
                      {item.label}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className="fixed bottom-6 left-6 z-50 lg:hidden">
        <Drawer open={mobileNavOpen} onOpenChange={setMobileNavOpen} direction="bottom">
          <DrawerTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-3 bg-background border border-border rounded-full shadow-lg">
              <Menu className="w-4 h-4" />
              <span className="text-xs">{navItems.find(i => i.id === activeSection)?.label ?? "Menu"}</span>
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle className="sr-only">Navigation</DrawerTitle>
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navItems.map((item) => (
                <DrawerClose asChild key={item.id}>
                  <button
                    onClick={() => setTimeout(() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" }), 300)}
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-lg ${activeSection === item.id ? "bg-foreground text-background" : "hover:bg-muted"}`}
                  >
                    <span className="text-base font-medium">{item.label}</span>
                  </button>
                </DrawerClose>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Changed to h-[100dvh] to lock the viewport size exactly */}
        <header
          id="intro"
          ref={(el) => { sectionsRef.current[0] = el }}
          className="h-[100dvh] flex items-center justify-center opacity-0 transition-opacity"
        >
          {/* Changed items-start to items-center for 'Dead Centered' look */}
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full items-center">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2026</div>
                <h1 className={`${lora.className} text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight`}>
                  <span className="text-gradient-brand animate-word-rise" style={{ animationDelay: "0.15s" }}>Sanjaay</span>
                  <br />
                  <span className="text-muted-foreground" aria-label="Babu">
                    {"Babu".split("").map((char, i) => (
                      <span key={i} className="char-animate" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>{char}</span>
                    ))}
                  </span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className={`${lora.className} text-lg sm:text-xl text-muted-foreground leading-relaxed`}>
                  Freshman @ Duke University (Class of 2029), studying
                  <span className="text-foreground"> economics</span>, <span className="text-foreground"> politics</span>, and <span className="text-foreground"> philosophy</span>.
                </p>
                <p className={`${lora.className} text-lg sm:text-xl text-muted-foreground leading-relaxed`}>
                  I care about applied ethics, international relations, and building happier societies.
                </p>

                <p className={`${lora.className} text-lg sm:text-xl text-muted-foreground leading-relaxed`}>
                  I care about applied ethics, international relations, and building happier societies.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent-brand)" }} />
                    Available for internships
                  </div>
                  <div>United States | Singapore</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/now" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border hover:border-muted-foreground/50 transition-all group">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-muted-foreground group-hover:text-foreground">What I&apos;m working on now</span>
                  </Link>
                  <Link href="/duke" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border hover:border-muted-foreground/50 transition-all group">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent-brand)" }} />
                    <span className="text-muted-foreground group-hover:text-foreground">My Duke journey</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Meta Info */}
            <div className="lg:col-span-2 flex flex-col space-y-6 sm:space-y-12">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground font-medium">B.S. Economics</div>
                  <div className="text-muted-foreground">@ Duke University</div>
                  <div className="text-xs text-muted-foreground/60">2025 — 2029</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["Economic Analysis", "International Relations", "Debating", "Moral & Political Philosophy", "R"].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Following sections... */}
        <section id="work" ref={(el) => { sectionsRef.current[1] = el }} className="min-h-screen py-20 sm:py-32 opacity-0">
          <WorkList onSelect={setActiveWork} />
        </section>

        <section id="projects" ref={(el) => { sectionsRef.current[2] = el }} className="min-h-screen py-20 sm:py-32 opacity-0">
          <ProjectsList />
        </section>

        <section id="education" ref={(el) => { sectionsRef.current[3] = el }} className="min-h-screen py-20 sm:py-32 opacity-0">
          <EducationList onSelect={() => {}} />
        </section>

        <section id="writing" ref={(el) => { sectionsRef.current[4] = el }} className="min-h-screen py-20 sm:py-32 opacity-0">
          <Suspense fallback={<div aria-hidden>Loading writing…</div>}>
            <WritingSection />
          </Suspense>
        </section>

        <section id="connect" ref={(el) => { sectionsRef.current[5] = el }} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let&apos;s Connect</h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Always interested in new opportunities and conversations about anything under the sun.
              </p>
              <Link href="mailto:babusanjaay@outlook.com" className="text-foreground hover:text-muted-foreground transition-colors">
                babusanjaay[at]outlook[dot]com →
              </Link>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-border flex justify-between items-center">
          <div className="text-sm text-muted-foreground">© 2026 Sanjaay Babu</div>
          <button onClick={toggleTheme} className="p-3 rounded-lg border border-border hover:bg-muted transition-all">
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </footer>
      </main>

      {activeWork && <WorkModal item={activeWork} onClose={() => setActiveWork(null)} />}
    </div>
  )
}
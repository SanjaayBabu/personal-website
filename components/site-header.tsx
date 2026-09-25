"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Lora } from "next/font/google"
import { Briefcase, FolderGit2, GraduationCap, Menu, Moon, PenLine, Sun } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] })

const navLinks = [
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/writing", label: "Writing", icon: PenLine },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"
  const toggleTheme = () => setTheme(isDark ? "light" : "dark")
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 h-14 flex items-center justify-between">
        <Link href="/" className={`${lora.className} text-lg sm:text-xl font-semibold tracking-tight hover:text-muted-foreground transition-colors`}>
          Sanjaay Babu
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex items-center gap-1.5 text-sm transition-colors relative py-1 ${
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <link.icon className="w-3.5 h-3.5" />
              {link.label}
              {isActive(link.href) && (
                <span
                  className="absolute -bottom-[1px] left-0 right-0 h-px"
                  style={{ backgroundColor: "var(--accent-brand)" }}
                />
              )}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Drawer open={menuOpen} onOpenChange={setMenuOpen} direction="top">
            <DrawerTrigger asChild>
              <button
                aria-label="Open navigation menu"
                className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Menu className="w-5 h-5" />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerTitle className="sr-only">Navigation</DrawerTitle>
              <div className="px-4 pt-2 pb-8 space-y-1">
                {navLinks.map((link) => (
                  <DrawerClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`w-full flex items-center gap-3 px-4 py-4 rounded-lg text-base font-medium ${
                        isActive(link.href) ? "bg-foreground text-background" : "hover:bg-muted"
                      }`}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  </DrawerClose>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader

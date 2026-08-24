"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose, DrawerTitle } from "@/components/ui/drawer"
import { siteConfig } from "@/lib/site"

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/writing", label: "Writing" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname?.startsWith("/duke")) return null

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg font-semibold text-primary">
          {siteConfig.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="h-4 w-px bg-border" aria-hidden />
          <Link
            href="/#connect"
            className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="lg:hidden">
          <Drawer open={open} onOpenChange={setOpen} direction="bottom">
            <DrawerTrigger asChild>
              <button
                aria-label="Open navigation"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border"
              >
                <Menu className="w-4 h-4" />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerTitle className="sr-only">Navigation</DrawerTitle>
              <div className="px-4 pt-2 pb-8 space-y-1">
                {[...navItems, { href: "/#connect", label: "Contact" }].map((item) => (
                  <DrawerClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="w-full flex items-center justify-between px-4 py-4 rounded-lg hover:bg-muted"
                    >
                      <span className="text-base font-medium">{item.label}</span>
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

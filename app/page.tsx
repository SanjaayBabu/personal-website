"use client"
import { Lora } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] })

export default function Home() {
  return (
    <div className="min-h-[calc(100dvh-3.5rem)] bg-background text-foreground flex items-center selection:bg-blue-100 dark:selection:bg-blue-900">
      <main className="w-full max-w-2xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center gap-8 sm:gap-10">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-border shrink-0">
            <Image
              src="/profile.jpg"
              alt="Sanjaay Babu"
              fill
              sizes="144px"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className={`${lora.className} text-4xl sm:text-5xl font-normal tracking-tight`}>
              <span className="text-gradient-brand">Sanjaay Babu</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Sophomore @ Duke University (&apos;29), studying <span className="text-foreground">economics</span> and{" "}
              <span className="text-foreground">ethics</span>.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
              I care about <span className="text-foreground">exploring better multilateral solutions to the world&apos;s challenges</span>,{" "}
              <span className="text-foreground">building happier societies</span>, and{" "}
              <span className="text-foreground">exploring applied ethical questions</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/now"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border hover:border-muted-foreground/50 transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-muted-foreground group-hover:text-foreground">What I&apos;m working on now</span>
            </Link>
            <Link
              href="/duke"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border hover:border-muted-foreground/50 transition-all group"
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent-brand)" }} />
              <span className="text-muted-foreground group-hover:text-foreground">My Duke journey</span>
            </Link>
          </div>
        </div>

        <footer className="mt-20 sm:mt-28 pt-8 border-t border-border flex justify-between items-center">
          <div className="text-sm text-muted-foreground">© 2026 Sanjaay Babu</div>
          <Link
            href="mailto:babusanjaay@outlook.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Say hello →
          </Link>
        </footer>
      </main>
    </div>
  )
}

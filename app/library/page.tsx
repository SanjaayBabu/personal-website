import Link from "next/link"
import { Metadata } from "next"
import { Lora } from "next/font/google"

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] })

export const metadata: Metadata = {
  title: "Library — Sanjaay Babu",
  description: "Books I've read and found worth recommending.",
}

const LAST_UPDATED = "May 2026"

const nonfiction = [
  {
    title: "Doing Good Better",
    author: "Will MacAskill",
    note: "The case for effective altruism — rigorous, readable, and quietly life-changing.",
  },
  {
    title: "Ethics in the Real World",
    author: "Peter Singer",
    note: "Short essays on applied ethics. Singer makes hard arguments with unusual clarity.",
  },
  {
    title: "Air-Conditioned Nation, Revisited",
    author: "Cherian George",
    note: "A sharp, affectionate critique of Singapore — its contradictions and its potential.",
  },
  {
    title: "Civilized to Death",
    author: "Christopher Ryan",
    note: "A provocative challenge to the idea that modernity is straightforwardly progress.",
  },
  {
    title: "Discipline and Punish",
    author: "Michel Foucault",
    note: "Dense but rewarding. Foucault on how modern institutions — prisons, schools — produce obedient subjects.",
  },
]

const fiction = [
  {
    title: "Killing Floor",
    author: "Lee Child",
    note: "The first Jack Reacher novel. Pure momentum — impossible to put down.",
  },
]

export default function LibraryPage() {
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
      <div className="mb-14">
        <h1 className={`${lora.className} text-3xl sm:text-4xl font-bold mb-3`}>Library</h1>
        <p className="text-sm text-muted-foreground">
          Books I've read and found worth recommending · Updated {LAST_UPDATED}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6 text-base leading-relaxed">
        {/* Non-fiction */}
        <section className="rounded-2xl border border-blue-500/30 bg-blue-500/[0.08] p-6 sm:p-7">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              Non-fiction
            </h2>
          </div>
          <ul className="space-y-5">
            {nonfiction.map(({ title, author, note }) => (
              <li key={title}>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-medium">{title}</span>
                  <span className="text-muted-foreground text-sm">— {author}</span>
                </div>
                <p className="text-sm text-muted-foreground">{note}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Fiction */}
        <section className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.08] p-6 sm:p-7">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Fiction
            </h2>
          </div>
          <ul className="space-y-5">
            {fiction.map(({ title, author, note }) => (
              <li key={title}>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-medium">{title}</span>
                  <span className="text-muted-foreground text-sm">— {author}</span>
                </div>
                <p className="text-sm text-muted-foreground">{note}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Footer note */}
      <div className="mt-14 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          This list is a work in progress — I'll keep adding as I read more.
        </p>
      </div>
    </main>
  )
}

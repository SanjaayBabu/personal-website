import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Now — Sanjaay Babu",
  description: "What I'm working on and thinking about right now.",
}

const LAST_UPDATED = "March 2026"

const sections = [
  {
    label: "Studying",
    color: "text-blue-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/8",
    dotColor: "bg-blue-500",
    content: (
      <div className="space-y-3">
        <p>
          First year at Duke, deep in econ, politics, and philosophy. Currently
          working through a course on game theory that&apos;s reshaping how I think
          about incentives and collective action.
        </p>
        <p>
          Also sitting in on a seminar on political economy — the overlap between
          formal models and real institutions is where it gets interesting.
        </p>
      </div>
    ),
  },
  {
    label: "Reading",
    color: "text-amber-500",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/8",
    dotColor: "bg-amber-500",
    content: (
      <ul className="space-y-3">
        {[
          { title: "The Anatomy of Fascism", author: "Robert Paxton" },
          { title: "The Deficit Myth", author: "Stephanie Kelton" },
          { title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
        ].map(({ title, author }) => (
          <li key={title} className="flex items-baseline gap-2">
            <span className="font-medium">{title}</span>
            <span className="text-muted-foreground text-sm">— {author}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    label: "Building",
    color: "text-emerald-500",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/8",
    dotColor: "bg-emerald-500",
    content: (
      <div className="space-y-3">
        <p>
          Iterating on this personal site — writing more, building in public, and
          thinking about what a useful online presence actually looks like for
          someone still figuring things out.
        </p>
        <p>
          Exploring ideas around software tools that could support policy analysis
          and public deliberation. Very early stage.
        </p>
      </div>
    ),
  },
  {
    label: "Thinking about",
    color: "text-violet-500",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/8",
    dotColor: "bg-violet-500",
    content: (
      <ul className="space-y-2">
        {[
          "How institutions encode values, and whether that\u2019s fixable",
          "The tension between legibility and nuance in public writing",
          "Whether economic growth and ecological sustainability are actually compatible",
          "What it means to write clearly about complex systems",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-500/60 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
]

export default function NowPage() {
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
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl sm:text-4xl font-bold">Now</h1>
          <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            Live
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {LAST_UPDATED} · Durham, NC
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6 text-base leading-relaxed">
        {sections.map(({ label, color, borderColor, bgColor, dotColor, content }) => (
          <section
            key={label}
            className={`rounded-2xl border ${borderColor} ${bgColor} p-6 sm:p-7`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-2 h-2 rounded-full ${dotColor} shrink-0`} />
              <h2 className={`text-xs font-semibold uppercase tracking-widest ${color}`}>
                {label}
              </h2>
            </div>
            <div className="text-foreground">{content}</div>
          </section>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-14 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          This is a{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            now page
          </a>
          . A single page that answers &ldquo;what are you up to these days?&rdquo;
          Updated occasionally when things shift.
        </p>
      </div>
    </main>
  )
}

import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Now — Sanjaay Babu",
  description: "What I'm working on and thinking about right now.",
}

const LAST_UPDATED = "March 2026"

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
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Now</h1>
        <p className="text-sm text-muted-foreground">
          Last updated: {LAST_UPDATED} · Durham, NC
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-12 text-base leading-relaxed">

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Studying
          </h2>
          <div className="space-y-3 text-foreground">
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
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Reading
          </h2>
          <ul className="space-y-2">
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
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Building
          </h2>
          <div className="space-y-3 text-foreground">
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
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Thinking about
          </h2>
          <ul className="space-y-2 text-foreground list-disc list-inside marker:text-muted-foreground">
            <li>How institutions encode values, and whether that&apos;s fixable</li>
            <li>The tension between legibility and nuance in public writing</li>
            <li>Whether economic growth and ecological sustainability are actually compatible</li>
            <li>What it means to write clearly about complex systems</li>
          </ul>
        </section>

      </div>

      {/* Footer note */}
      <div className="mt-16 pt-8 border-t border-border">
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
          . The idea is simple: a single page that answers &ldquo;what are you up to these
          days?&rdquo; Updated occasionally when things shift.
        </p>
      </div>
    </main>
  )
}

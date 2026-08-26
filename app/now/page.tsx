import Link from "next/link"
import { Metadata } from "next"
import { Lora } from "next/font/google"

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] })

export const metadata: Metadata = {
  title: "Now — Sanjaay Babu",
  description: "What I'm working on and thinking about right now.",
}

const LAST_UPDATED = "August 2026"

const sections = [
  {
    label: "Studying",
    color: "text-blue-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/8",
    dotColor: "bg-blue-500",
    content: (
      <div className="space-y-3">
        <p> Strengthening my Economics foundation, through courses on microeconomics, macro analytics and multivariable calculus. </p>
        <p> Learning Russian, a language which is challenging but I think promises to be highly rewarding.</p>
        <p> Taking a course on "Experiments in Ethical Living". The class is still being baked, but I think it promises to be interesting.</p>
        <p> Taking a research course on Chinese law & policy. This course is offered by Duke Law School.</p>
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
          { title: "Steve Jobs", author: "Walter Isaacson" },
          { title: "The Fate of the Day", author: "Rick Atkinson" },
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
    label: "Creating",
    color: "text-emerald-500",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/8",
    dotColor: "bg-emerald-500",
    content: (
      <div className="space-y-3">
        <p>        
          Building “In Pursuit of Happiness”, a website documenting my personal reflections and policy ideas on how we can build happier societies; ideas that I thought about during my gap year prior to college. 
        </p>
        <p>
          Building community amongst Southeast Asians at Duke University, as a founding member of the Southeast Asian Community @ Duke.
        </p>
        <p>
          Hoping to build some kind of tool to help students navigate difficult decisions around using AI in their educational pursuits.
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
          "What is the point of learning in an AI-forward world? How can we communicate this message to people?",
          "What is burnout? Why do so many people experience it? Is there a solution to it, and is tech a part of it?"
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
          <h1 className={`${lora.className} text-3xl sm:text-4xl font-bold`}>Now</h1>
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

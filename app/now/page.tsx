import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Now — Sanjaay Babu",
  description: "What I'm working on and thinking about right now.",
}

const LAST_UPDATED = "April 2026"

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
          Freshman spring semester at Duke. I'm taking a range of classes across mathematics, 
          econometrics, climate change, cultural anthropology and regional studies (European Union). 
          The challenges of the future are going to require us to think across fields, and that's 
          exactly what I've been priming myself to do. Still figuring out majors, but that's not urgent: 
          learning comes first!
        </p>
        <p>
          Outside of formal class, I'm working on Andrew Ng's Deep Learning & Neural Networks course on Coursera 
          to learn about how AI models work. This is a generationally important technology, and I find the need to
          go beyond being a consumer / back-seat driver in the AI push. I think the biggest fork in the road ahead
          is that between people who decide to use AI to replace their thinking, and those who play some kind of active
          role in the AI conversation - whatever that might look like. 
        </p>
        <p>
          I think my biggest interest within this conversation on AI relates to its ethical development and usage.
          To that end, I am now pursuing BlueDot Impact's AGI Strategy Course to learn more about potential futures 
          for AI in the future, and what we can do to ensure responsible development. Complementing my study with BlueDot Impact, 
          I am also playing around with finetuning models on Unsloth's open source Colab notebooks. 
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
          { title: "Doing Good Better", author: "Will MacAskill" },
          { title: "Air-Conditioned Nation, Revisited", author: "Cherian George" },
          { title: "Ethics in the Real World", author: "Peter Singer" },
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
          Working (together with Duke DevLab & a PhD student) on a paper analyzing the effectiveness of supply chain traceability 
          initiatives in reducing agriculture-driven deforestation in Cotê d'Ivoire. Efforts to reduce deforestation through Coasean
          bargaining (Pigouvian taxes/subsidies) have not efficiently reduced deforestation due to insufficient pass-through. 
        </p>
        <p>
          Supporting the Himalay Unnati Mission (HUM), an Indian NGO that builds partnerships for development in the Indian Himalayan Region. 
          We're writing a white paper / strategic overview for them, to explain key challenges in the IHR, government approaches, and how HUM
          is supporting their mission as an implementation partner. I'm impressed at the robustness of a civil society approach in dealing with
          such fundamental challenges. Perhaps there is merit in a more civil-society oriented approach that can more acutely understand ground
          realities.
        </p>
        <p>
          On the founding exec of the Duke Southeast Asian Community - an organization intending to build a tighter network of Southeast Asians 
          at Duke. We're looking into programming and cultural outreach so that each and every Southeast Asian feels right at home at Duke. 
        </p>
        <p>
          Exploring ideas around using dialogue circles & restorative processes to promote well-being centered democracy in Singapore. Getting
          trained on restorative processes as part of the Duke Kenan Institute of Ethics's ReWork Lab, led by Ada Gregory. I attended a weekend
          training session last week on restorative facilitation. 
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
          "How to make a moral argument to deal with climate change that compels meaningful action.",
          "How to ensure that AI is aligned with human values and can actually benefit humanity.",
          "How developed countries can do more for developing countries, without falling into the trap of paternalism or neocolonialism.",
          "What education can and should look like in an AI-centered future.",
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

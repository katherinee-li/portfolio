import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container, Footer, Nav, SectionLabel } from "@/components/site";
import katherinePortrait from "@/assets/katherine-portrait.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Explore />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="md:absolute md:top-0 md:right-0 md:w-1/2 md:h-screen flex items-start justify-center">
        <img
          src={katherinePortrait}
          alt="Katherine holding flowers and a toolkit"
          className="w-full h-[60vh] md:h-[85vh] object-contain"
        />
      </div>

      <Container className="pt-4 pb-32 md:pt-6 md:pb-56 relative">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="md:pr-8 flex flex-col">
            <p className="font-serif-i text-2xl leading-snug text-ink md:text-4xl mb-4">
              Hi, I'm
            </p>

            <h1 className="mt-12 font-display text-[24vw] leading-[0.88] tracking-tight text-accent-cream md:text-[14rem]">
              <span className="font-serif-i italic text-accent-orange">katherine</span>
            </h1>

            <p className="mt-24 font-serif-i text-2xl leading-snug text-ink md:text-4xl whitespace-pre-line">
              I build across <span style={{ color: "#1e3a8a" }}>hardware</span>,{" "}
              <span style={{ color: "#1e3a8a" }}>software</span>, and{" "}
              <span style={{ color: "#1e3a8a" }}>AI</span> to create reliable products people enjoy using.
            </p>
          </div>

          <div className="hidden md:flex md:flex-col md:items-end md:text-right">
            <p className="invisible font-serif-i text-2xl md:text-4xl mb-4">Hi, I'm</p>
            <h1 className="invisible mt-12 font-display text-[24vw] leading-[0.88] md:text-[14rem]" aria-hidden>k</h1>
            <div className="mt-72 text-sm leading-relaxed text-ink-soft">
              <p className="text-foreground">ECE Senior @ Carnegie Mellon</p>
              <p>Incoming PM @ Coinbase</p>
              <p>Prev Lightmatter</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-rule py-20 md:py-28">
      <Container>
        <SectionLabel dot="green">about</SectionLabel>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-serif-i text-3xl leading-snug md:text-5xl">
              I like sitting in the middle of hard conversations about <span className="text-accent-orange">trade-offs</span>, <span className="text-accent-orange">merit</span>, and <span className="text-accent-orange">who a product is really for</span>.
            </p>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              I work across <span className="text-accent-green">technical PM</span>, <span className="text-accent-green">software</span>, and <span className="text-accent-green">hardware</span>, translating complex systems between engineering, business, and end users. I've built agricultural sensor kits at Moss, optimized CI/CD pipelines and deployment automation for program managers at Lightmatter, and will be scaling product systems at Coinbase this summer.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              Outside class I run CMU's Product Management Club, mentor students, and compete in Taekwondo sparring.
            </p>
          </div>
          <aside className="md:col-span-4">
            <div className="rounded-2xl border border-rule p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-ink-soft">Education</p>
              <p className="mt-4 font-display text-2xl">Carnegie Mellon</p>
              <p className="mt-1 text-sm text-ink-soft">B.S. ECE</p>
              <p className="text-sm text-ink-soft">Program GPA 3.74</p>

              <div className="my-6 h-px bg-rule" />

              <p className="text-xs uppercase tracking-[0.22em] text-ink-soft">Skills</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["User Research", "Customer Discovery", "Roadmapping", "PRDs", "A/B Testing", "Agile/Scrum", "Python", "React", "SQL", "JavaScript", "API Design", "Figma", "Jira", "Sparring"].map((t) => (
                  <span key={t} className="rounded-full border border-rule px-3 py-1 text-xs text-ink-soft">
                    {t}
                  </span>
                ))}
              </div>

              <video
                src="/videos/katherine.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="mt-6 w-full rounded-xl border border-rule"
              />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

const explore = [
  { to: "/work" as const, label: "selected work", desc: "Hardware, software, and product capstones.", dot: "orange" as const },
  { to: "/experience" as const, label: "experience", desc: "Internships, research, and leadership.", dot: "green" as const },
  { to: "/thoughts" as const, label: "thoughts & writing", desc: "In the works.", dot: "rose" as const },
];

function Explore() {
  return (
    <section className="border-t border-rule py-20 md:py-28">
      <Container>
        <SectionLabel dot="orange">explore</SectionLabel>
        <div className="grid gap-4 md:grid-cols-3">
          {explore.map((e) => (
            <Link
              key={e.to}
              to={e.to}
              className="group relative flex flex-col justify-between gap-12 overflow-hidden rounded-2xl border border-rule p-8 transition-all hover:-translate-y-1 hover:border-foreground/30 md:min-h-[280px]"
            >
              <div className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${
                e.dot === "orange" ? "from-accent-orange/20 to-accent-orange/5" :
                e.dot === "green"  ? "from-accent-green/20 to-accent-green/5" :
                                     "from-accent-rose/20 to-accent-rose/5"
              }`} />
              <div className="flex items-start justify-end">
                <ArrowUpRight className="h-5 w-5 text-ink-soft transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-orange" />
              </div>
              <div>
                <h3 className="font-display text-3xl leading-[1] md:text-4xl">{e.label}</h3>
                <p className="mt-3 text-sm text-ink-soft">{e.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

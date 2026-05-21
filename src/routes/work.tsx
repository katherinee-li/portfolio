import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container, Footer, Nav, SectionLabel, projects } from "@/components/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Katherine" },
      { name: "description", content: "Selected projects spanning hardware, software, AI, and product." },
      { property: "og:title", content: "Selected Work — Katherine" },
      { property: "og:description", content: "Selected projects spanning hardware, software, AI, and product." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-6 pb-20 md:pt-8 md:pb-28">
        <Container>
          <SectionLabel dot="orange">selected work</SectionLabel>
          <h1 className="mb-8 font-display text-5xl leading-[0.95] md:text-7xl">
            Things I've <span className="font-serif-i italic text-accent-orange">built</span>.
          </h1>
          <div className="grid gap-6 md:grid-cols-12">
            {projects.map((p, i) => {
              const Tag: any = p.href ? Link : "a";
              const tagProps = p.href ? { to: p.href } : { href: "#" };
              return (
              <Tag
                key={p.title}
                {...tagProps}
                className={`group relative overflow-hidden rounded-2xl border border-rule p-6 transition-all hover:-translate-y-1 hover:border-foreground/30 md:p-8 ${
                  i === 0 ? "md:col-span-7 md:min-h-[360px]" :
                  i === 1 ? "md:col-span-5 md:min-h-[420px]" :
                  i === 2 ? "md:col-span-5 md:min-h-[200px]" :
                  i === 3 ? "md:col-span-6 md:min-h-[260px]" :
                            "md:col-span-6 md:min-h-[260px]"
                }`}
              >
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.tint} opacity-90`} />
                <div className="flex h-full flex-col justify-between gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                      {p.kind} · {p.year}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-soft transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-orange" />
                  </div>
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      className={`mx-auto w-auto object-contain ${i === 0 ? "max-h-[260px]" : "max-h-64"}`}
                    />
                  )}
                  <h3 className="font-display text-3xl leading-[1] md:text-5xl">{p.title}</h3>
                </div>
              </Tag>
              );
            })}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

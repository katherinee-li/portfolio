import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/thoughts_/magic-in-the-mundane")({
  head: () => ({
    meta: [
      { title: "Magic in the Mundane · Katherine" },
      { name: "description", content: "On teaching physics to kids, finding magic hidden in ordinary things, and co-founding STEMbox." },
      { property: "og:title", content: "Magic in the Mundane · Katherine" },
      { property: "og:description", content: "On teaching physics to kids, finding magic hidden in ordinary things, and co-founding STEMbox." },
    ],
  }),
  component: MagicInTheMundanePage,
});

function MagicInTheMundanePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <Container className="pt-4">
        <Link to="/thoughts" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" />
          back to thoughts
        </Link>
      </Container>

      <section className="pt-6 pb-12 md:pt-10 md:pb-16">
        <Container>
          <SectionLabel dot="orange">Personal · 2022</SectionLabel>
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
              Magic in the <span className="text-accent-orange">mundane</span>.
            </h1>
          </div>
        </Container>
      </section>

      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-foreground md:text-lg">
            <p>
              The bowl of crisp water shone brightly under the illuminance of my bedroom's artificial light. Even with
              my nose against the glass, all I could see for miles was alluring water. But when I reached my hand into
              the solution, I touched something hidden in plain sight: I was a magician and my audience of sixty had
              their eyes glued to me. From the crystalline water, I pulled out a handful of Orbeez, an item found at
              the toy's section in Walmart. "Oohs" and "Aahs" exploded from the screen. Using nothing more than a bowl,
              a handful of Orbeez, and the concepts of light density and refractive indices, I created magic.
            </p>

            <p>
              With the goal of sharing my interest in physics with others, I co-founded STEMbox, a science program
              dedicated to teaching challenging concepts to young students in an understandable way. The magic I possess
              may seem like the ability to make things appear at will, but my power lies behind my resourcefulness,
              ability to inspire, and creativity that allows me to generate unlimited possibilities within a limited
              realm.
            </p>

            <p>
              The task of teaching difficult concepts to elementary students was daunting in itself. But the budget
              needed to provide students with materials was small and getting smaller. With little room for error, my
              moves needed to be imaginative.
            </p>

            <p>
              In order to find cheap and reliable supplies, I had to understand the workings of every experiment.
              Diving into fields I didn't normally explore, I learned about the cardiovascular system, cell
              reproduction, and acids and bases. I fell upon the world of natural indicators when researching
              phenolphthalein replacements. Everything from cabbage juice to laxative pills were possibilities. Through
              pages of Excel sheets with pros and cons of every material, I separated the pragmatic from the
              theoretical. I collected plastic bottles, turning them into balloon cars that ran on nothing more than the
              concept of energy conservation. By utilizing household materials, I encouraged students to confront
              science in their everyday life.
            </p>

            <p>
              Inviting them to look a little closer, I taught students to find magic hidden in the mundane and
              ordinary.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

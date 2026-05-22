import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/thoughts_/learning-to-take-up-space")({
  head: () => ({
    meta: [
      { title: "Learning to Take Up Space · Katherine" },
      { name: "description", content: "On taekwondo, noise, and learning to claim space." },
      { property: "og:title", content: "Learning to Take Up Space · Katherine" },
      { property: "og:description", content: "On taekwondo, noise, and learning to claim space." },
    ],
  }),
  component: LearningToTakeUpSpacePage,
});

function LearningToTakeUpSpacePage() {
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
              Learning to take up <span className="text-accent-orange">space</span>.
            </h1>
          </div>
        </Container>
      </section>

      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-foreground md:text-lg">
            <p>
              The messy tangle of noise was the first thing I noticed as I walked into my taekwondo dojang. Noise was
              not something I was accustomed to making. My house was a place of hushed voices and quiet whispers: my
              dad doesn't like noise so my family would throw our fingers between doors to stop the loud slams and only
              walk on the uncreeking parts of our waterlogged floor. Our presence was not supposed to be detected and
              our bodies were not supposed to take up space. After a while, the hushed voices and quiet whispers poured
              into other aspects of my life and they became the only way I was able to communicate. I quickly took on
              the role as a listener: I listened to the tone of other people's voices and filtered what I said
              accordingly. I listened to the footsteps that shook the stairs and I adjusted my volume accordingly. My
              movements became the reaction to someone else's action. Creating noise was a means of creating space and
              space was not something I wanted nor deserved.
            </p>

            <p>
              I had trouble adapting to this sport I so desperately wanted to excel in. My motions were weak, like a
              prick or a poke, while other people's were noisy and unapologetic. The girls I fight are loud. They stand
              in the ring like I'm an intruder in their home. They punch and I fall back to my habit of relying on my
              reaction rather than stand my ground. My movements mirrored theirs and I began to fade into lost space,
              becoming nothing more than a shadow.
            </p>

            <p>
              Ending up with a sleeve of bruises after every tournament, I realized my flexibility and speed could only
              take me so far, the rest had to come from muscles and endurance; I decided to change the way I fought. I
              began with extensive muscle building and stamina workouts, the basics. Then I began practicing the more
              daring kicks. Some require you to turn your back onto your opponent, others require you to lift both feet
              off the ground, and they all require you to fully commit. I dedicated myself to a single kick every
              practice. This meant training hundreds and thousands of back kicks, ax kicks and turning kicks for hours
              on end. After training, I poured over youtube videos of my favourite fighters: Jade Jones, Skylar Park,
              and even my own teammate, Josipa Kafadar, a national and international champion. Fully committing didn't
              just mean putting in time or effort, things I always had done. Instead, it meant allowing my body to grow
              and claiming space through my movements. I am still learning to trust myself but I can see how far I've
              come. My calves are bigger, my thighs are tighter, my arms are sturdier and I feel stronger. Trusting my
              body meant knowing my arms are not going to snap in half, knowing my bruises and calluses are going to
              heal, and acknowledging that my presence took up physical space in my dojang.
            </p>

            <p>
              With the confidence I developed from taekwondo, I was able to propel myself into passion projects I never
              thought I could initiate nor lead.
            </p>

            <p>
              The cranks of the electric saw and whirling of the power drill filled my garage as I tinkered away at my
              new project. I created an eddy current braking system to better understand the change of air gap on the
              amount of induced currents created in a non-ferrous disk. My system was 100% designed and built by me in
              my work space, which included a wobbly table, every power tool I could possibly need, and about a dozen
              spiders to keep me company. The heaviness of the machine didn't scare me as I confidently drilled into my
              piece of cedar wood, not worrying about the mess nor the noise I created.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

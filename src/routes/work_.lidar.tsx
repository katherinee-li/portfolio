import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/work_/lidar")({
  head: () => ({
    meta: [
      { title: "MMPUG — LiDAR Validation GUI" },
      { name: "description", content: "Data visualization GUI and live video feedback system for autonomous search and rescue robots." },
      { property: "og:title", content: "MMPUG — LiDAR Validation GUI" },
      { property: "og:description", content: "GUI tools for a fleet of autonomous search and rescue robots operating in GPS-denied environments." },
    ],
  }),
  component: LidarPage,
});

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-base leading-relaxed text-foreground text-center">{children}</p>;
}

function LidarPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <Container className="pt-4">
        <Link to="/work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" />
          back to work
        </Link>
      </Container>

      {/* 1. Hero */}
      <section className="pt-6 pb-12 md:pt-10 md:pb-16">
        <Container>
          <SectionLabel dot="orange">CMU Biorobotics Lab · 2024</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                MMPUG<span className="text-accent-orange">.</span>
              </h1>
              <p className="mt-4 font-serif-i italic text-3xl leading-[1.05] text-accent-orange md:text-5xl">
                GUI tools for autonomous search and rescue robot fleets.
              </p>
              <p className="mt-8 text-lg leading-relaxed text-foreground">
                Data visualization GUI and live video feedback system for a fleet of autonomous search and rescue robots
                operating in GPS-denied, communication-degraded environments.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-foreground">
                Robot Exploration Researcher · Jan 2024
              </p>
            </div>
            <div className="md:col-span-5 flex items-start justify-center">
              <img
                src="/mmpug-rc2.jpg"
                alt="MMPUG RC2 wheeled robot with LiDAR sensor array"
                className="w-full max-w-[420px] object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Problem */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">problem</SectionLabel>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                No structured way to review and replay.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground">
                The CMU Biorobotics Lab operates a heterogeneous fleet of autonomous robots, wheeled and legged,
                designed to explore unknown structures and locate survivors in search and rescue scenarios. The core
                challenge was not the robots. It was the researchers validating them. LiDAR datasets across an entire
                fleet had no structured way to be reviewed, replayed, or verified. Synchronizing maps across multiple
                robots before a mission required 4 minutes of manual calibration per session. There was no way to rewind
                and inspect what a robot had seen 30 seconds ago.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. What Was Built */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">contributions</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Two GUI tools for <span className="font-serif-i italic text-accent-orange">data validation and operator control</span>.
          </h2>

          {/* Video Replay GUI */}
          <div className="mb-8 rounded-2xl border border-rule p-6 md:p-8">
            <span className="text-xs uppercase tracking-[0.22em] text-accent-orange">Video Replay GUI</span>
            <p className="mt-3 text-lg leading-relaxed text-foreground">
              A data visualization interface allowing researchers to rewind and replay LiDAR camera feeds across the full
              robot fleet. Established 10 robustness criteria validated across 10,000 scans. The replay feature,
              accessible directly from the control panel, allows operators to scrub back 30 seconds of footage from any
              robot during or after a mission, enabling rapid identification of dataset anomalies without re-running full
              sessions.
            </p>
            <div className="mt-6">
              <img
                src="/mmpug-replay.jpg"
                alt="Multi-camera replay grid showing RC3 fisheye feeds across three simultaneous viewpoints"
                className="w-full max-w-[560px] mx-auto block rounded-xl border border-rule"
              />
              <Caption>Multi-camera replay grid: RC3 fisheye feeds across three simultaneous viewpoints, victim circled in center frame.</Caption>
            </div>
          </div>

          {/* Control Panel GUI */}
          <div className="rounded-2xl border border-rule p-6 md:p-8">
            <span className="text-xs uppercase tracking-[0.22em] text-accent-orange">Control Panel GUI</span>
            <p className="mt-3 text-lg leading-relaxed text-foreground">
              Mode switching interface for the operator control panel, handling transitions between Manual, Joystick,
              Waypoint, and Exploration autonomy modes. The GUI updates dynamically based on robot behavior tree
              feedback, surfacing only valid actions at each state. Battery level, signal strength, SLAM-safe mode, comms
              constraints, and target speed are all surfaced in a single persistent panel per robot.
            </p>
            <div className="mt-6">
              <img
                src="/mmpug-dual-screen.jpg"
                alt="Full operator setup with RViz 3D LiDAR map and control panel side by side"
                className="w-full rounded-xl border border-rule"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. System Context */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">system · MMPUG</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Sliding-mode autonomy across <span className="font-serif-i italic text-accent-orange">four control levels</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-foreground">
                The broader MMPUG system operates on a principle of sliding-mode autonomy: operators can blend human
                control with machine precision at any point in a mission. Four levels: Full Manual for direct
                teleoperation, Smart Joystick for assisted navigation around obstacles, Waypoint Mode for autonomous path
                planning to a goal, and Exploration Mode for fully autonomous unknown-area mapping. The GUI contributions
                sit at the operator layer, making this control hierarchy accessible and error-resistant in high-stress
                field conditions.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground">
                The system also supports heterogeneous convoy operations. A wheeled robot maps a staircase, shares the
                location across the network, and a legged Spot robot is tasked to navigate there autonomously.
                Communication-degraded environments are handled via a peel-off maneuver, where trailing robots stop and
                act as static relay nodes to extend network range.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="grid gap-4">
                {[
                  { mode: "Full Manual", desc: "Direct teleoperation by operator." },
                  { mode: "Smart Joystick", desc: "Assisted navigation around obstacles." },
                  { mode: "Waypoint Mode", desc: "Autonomous path planning to a goal." },
                  { mode: "Exploration Mode", desc: "Fully autonomous unknown-area mapping." },
                ].map((m) => (
                  <div key={m.mode} className="border-l-2 border-accent-orange pl-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-foreground mb-1">{m.mode}</p>
                    <p className="text-base leading-relaxed text-foreground">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Impact */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 items-center">
            <div className="md:col-span-5">
              <img
                src="/mmpug-fleet.jpg"
                alt="MMPUG heterogeneous robot fleet: wheeled RC robots and legged Spot robots"
                className="w-full border border-rule block rounded-xl"
              />
            </div>
            <div className="md:col-span-7">
              <SectionLabel dot="orange">outcome</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                <span className="font-serif-i italic text-accent-orange">10,000 scans</span> validated with a structured framework.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground max-w-lg">
                The video replay GUI established 10 robustness criteria validated across 10,000 LiDAR scans, giving the
                lab a structured validation framework that did not exist before. The control panel GUI made the full
                autonomy hierarchy accessible in high-stress field conditions, with state-aware controls and persistent
                per-robot status panels.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

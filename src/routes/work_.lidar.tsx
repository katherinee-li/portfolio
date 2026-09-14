import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/work_/lidar")({
  head: () => ({
    meta: [
      { title: "Search-and-Rescue Vehicles · MMPUG" },
      { name: "description", content: "Data visualization GUI and live video feedback system for autonomous search and rescue robots." },
      { property: "og:title", content: "Search-and-Rescue Vehicles · MMPUG" },
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
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <SectionLabel dot="orange">CMU Biorobotics Lab · 2024</SectionLabel>
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                Search-and-Rescue Vehicles
              </h1>
              <p className="mt-4 font-serif-i text-xl leading-snug text-accent-orange md:text-2xl">
                GUI tools for autonomous search and rescue robot fleets
              </p>
              <p className="mt-8 text-lg leading-relaxed text-foreground">
                Built visualization, calibration, and operator-control tools for autonomous search-and-rescue robots
                operating in GPS-denied environments.
              </p>
              <div className="mt-8 max-w-md rounded-2xl border border-rule p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent-orange">What I built</p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-foreground">
                  <li>C++/ROS autonomous behaviors</li>
                  <li>Robot operator controls</li>
                  <li>Sensor-data replay tooling</li>
                  <li>Multi-camera visualization</li>
                  <li>AprilTag-based map calibration</li>
                </ul>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-foreground">
                Robotics Researcher · CMU Biorobotics Lab · 2023–2024
              </p>
            </div>
            <div className="md:col-span-5">
              <img
                src="/mmpug-rc2.jpg"
                alt="MMPUG RC2 wheeled robot with LiDAR sensor array"
                className="max-h-[26rem] w-full rounded-2xl border border-rule object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Problem */}
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <SectionLabel dot="rose">problem</SectionLabel>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                No structured way to review and replay
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
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <SectionLabel dot="green">contributions</SectionLabel>
          <h2 className="mb-6 font-display text-3xl leading-[1.05] md:text-5xl">
            Two GUI tools for <span className="text-accent-orange">data validation and operator control</span>
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
                className="max-h-[26rem] object-contain block w-full rounded-xl border border-rule"
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
                className="max-h-[26rem] object-contain w-full rounded-xl border border-rule"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 4b. Calibration + testing */}
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <SectionLabel dot="green">calibration &amp; testing</SectionLabel>
          <h2 className="mb-6 font-display text-3xl leading-[1.05] md:text-5xl">
            Faster setup, <span className="text-accent-orange">measured behavior</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-foreground">
                Before deployment, robots had to agree on a shared map frame, and the existing process required several
                minutes of manual alignment. I implemented an AprilTag-based calibration workflow that automatically
                aligned maps across robots, reducing setup from roughly four minutes to one.
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-foreground">
                I developed and tested autonomous behaviors across more than 100 simulation runs before deployment,
                evaluated against defined success conditions: goal completion, collision avoidance, localization
                stability, and recovery behavior. The resulting changes improved task success by roughly 25%.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Impact */}
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 items-center">
            <div className="md:col-span-5">
              <img
                src="/mmpug-fleet.jpg"
                alt="MMPUG heterogeneous robot fleet: wheeled RC robots and legged Spot robots"
                className="max-h-[26rem] object-contain w-full border border-rule block rounded-xl"
              />
            </div>
            <div className="md:col-span-7">
              <SectionLabel dot="orange">outcome</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                Full autonomy hierarchy, <span className="text-accent-orange">accessible in the field</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground max-w-lg">
                The tooling reduced setup time, made robot behavior easier to inspect, and gave operators clearer
                control over a fleet with multiple levels of autonomy. More importantly, it gave researchers faster
                feedback when autonomous systems behaved differently from what they expected.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

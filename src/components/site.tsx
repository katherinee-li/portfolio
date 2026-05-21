import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import proximityDevice from "@/assets/proximity-device.png";
import farmSensorKit from "@/assets/farm-sensor-kit.png";

export const categories = [
  "Product Management",
  "Hardware",
  "AI / ML",
  "Software",
  "User Research",
  "Writing",
  "Teaching",
];

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1320px] px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-background/70 backdrop-blur-md">
      <Container className="grid grid-cols-3 items-center py-5">
        <nav className="flex flex-wrap gap-4 text-sm text-ink-soft md:gap-6">
          <Link to="/" className="link-slide hover:text-foreground">home</Link>
          <Link to="/work" className="link-slide hover:text-foreground" activeProps={{ className: "text-foreground" }}>projects</Link>
          <Link to="/experience" className="link-slide hover:text-foreground" activeProps={{ className: "text-foreground" }}>experience</Link>
          <Link to="/thoughts" className="link-slide hover:text-foreground" activeProps={{ className: "text-foreground" }}>thoughts</Link>
        </nav>
        <div className="flex justify-center">
          <Link to="/" className="flex items-baseline">
            <span className="font-serif-i text-2xl text-accent-orange">k</span>
            {"\n\n"}
          </Link>
        </div>
        <div className="flex items-center justify-end gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#1e3a8a" }} />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-orange" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-green" />
        </div>
      </Container>
    </header>
  );
}

export function Marquee() {
  const row = [...categories, ...categories];
  return (
    <div className="overflow-hidden border-y border-rule py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {row.map((c, i) => (
          <span key={i} className="flex items-center gap-12 font-serif-i text-2xl text-ink-soft md:text-3xl">
            {c}
            <span className="text-accent-orange">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionLabel({ children, dot = "orange" }: { children: ReactNode; dot?: "orange" | "green" | "rose" }) {
  const dotClass = dot === "green" ? "bg-accent-green" : dot === "rose" ? "bg-accent-rose" : "bg-accent-orange";
  return (
    <p className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-soft">
      <span className={`inline-block h-2 w-2 rounded-full ${dotClass}`} />
      {children}
    </p>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-rule">
      <Container className="py-24 md:py-32">
        <div className="relative">
          <h2 className="font-display text-[14vw] leading-[0.9] tracking-tight md:text-[10rem]">
            let's
            <span className="font-serif-i italic text-accent-orange"> talk</span>
            <span className="text-accent-orange">.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <a
            href="mailto:kli5@andrew.cmu.edu"
            className="font-serif-i text-3xl text-accent-cream underline decoration-accent-green decoration-2 underline-offset-8 md:col-span-7 md:text-5xl"
          >
            kli5@andrew.cmu.edu
          </a>
          <div className="flex flex-col gap-3 text-sm md:col-span-4 md:col-start-9">
            <a href="https://linkedin.com/in/katherinee-li" className="link-slide self-start text-ink-soft hover:text-foreground">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-rule pt-6 text-xs uppercase tracking-[0.22em] text-ink-soft">
          <span>© {new Date().getFullYear()} Katherine Li</span>
          <span>Pittsburgh, PA</span>
        </div>
      </Container>
    </footer>
  );
}



export const projects = [
  { title: "Farm Sensor Kit", kind: "Moss · Internship", year: "2024", tint: "from-accent-green/30 to-accent-orange/15", image: farmSensorKit, href: "/work/moss" },
  { title: "Proximity-Based Social Navigation", kind: "ECE Capstone", year: "2026", tint: "from-accent-orange/30 to-accent-rose/20", image: proximityDevice, href: "/work/pulse" },
  { title: "Farm Inventory App", kind: "Moss · Internship", year: "2024", tint: "from-accent-rose/25 to-accent-cream/15", image: "/moss-tablet.jpg", href: "/work/farm-app" },
  { title: "LiDAR Validation GUI", kind: "Biorobotics Lab", year: "2023", tint: "from-accent-orange/25 to-accent-green/20", href: "/work/lidar" },
];

export const thoughts = [
  { title: "On Merit, and the Quiet Cost of Being Right", read: "6 min" },
  { title: "What I Learned Writing 55 PRDs in One Summer", read: "5 min" },
  { title: "Running a 100-Person PM Accelerator from Scratch", read: "7 min" },
];

export const work = [
  { role: "Product Management Intern", org: "Coinbase", when: "Summer 2026" },
  { role: "Technical PM Intern", org: "Lightmatter", when: "Summer 2025" },
  { role: "President, PM Club", org: "CMU", when: "2024 — Now" },
  { role: "Software Engineering Intern", org: "Moss", when: "Summer 2024" },
  { role: "Robot Exploration Researcher", org: "CMU Biorobotics", when: "2023 — 2024" },
];

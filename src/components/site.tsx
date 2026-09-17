import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import proximityDevice from "@/assets/proximity-device.png";
import farmSensorKit from "@/assets/farm-sensor-kit.png";

type Accent = "orange" | "green" | "rose" | "blue";

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

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <main className={`min-h-screen overflow-x-hidden bg-background text-foreground ${className}`}>
      <Nav />
      {children}
    </main>
  );
}

export function BackLink({ to, label }: { to: "/work" | "/experience" | "/thoughts"; label: string }) {
  return (
    <Container className="pt-4">
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        {label}
      </Link>
    </Container>
  );
}

export function Caption({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-base leading-relaxed text-foreground text-center">{children}</p>;
}

const accentBorder: Record<Accent, string> = {
  orange: "border-accent-orange",
  green: "border-accent-green",
  rose: "border-accent-rose",
  blue: "border-accent-blue",
};

export function Stat({ value, label, accent = "orange" }: { value: string; label: string; accent?: Accent }) {
  return (
    <div className={`border-l-2 pl-4 ${accentBorder[accent]}`}>
      <p className="font-display text-2xl text-foreground">{value}</p>
      <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{label}</p>
    </div>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-background/70 backdrop-blur-md">
      <Container className="grid grid-cols-3 items-center py-5">
        <nav className="flex flex-wrap gap-4 text-sm md:gap-6">
          <Link to="/" className="rounded-md px-2 py-1 text-ink-soft transition-colors hover:bg-accent-orange/15 hover:text-accent-orange">home</Link>
          <Link to="/work" className="rounded-md px-2 py-1 text-ink-soft transition-colors hover:bg-accent-orange/15 hover:text-accent-orange" activeProps={{ className: "text-foreground" }}>projects</Link>
          <Link to="/experience" className="rounded-md px-2 py-1 text-ink-soft transition-colors hover:bg-accent-orange/15 hover:text-accent-orange" activeProps={{ className: "text-foreground" }}>experience</Link>
          <Link to="/thoughts" className="rounded-md px-2 py-1 text-ink-soft transition-colors hover:bg-accent-orange/15 hover:text-accent-orange" activeProps={{ className: "text-foreground" }}>thoughts</Link>
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

export function SectionLabel({ children, dot = "orange", size = "sm" }: { children: ReactNode; dot?: Accent; size?: "sm" | "base" | "lg" }) {
  const dotClass = dot === "green" ? "bg-accent-green" : dot === "rose" ? "bg-accent-rose" : dot === "blue" ? "bg-accent-blue" : "bg-accent-orange";
  const sizeClass = size === "lg" ? "text-lg" : size === "base" ? "text-base" : "text-sm";
  return (
    <p className={`mb-10 flex items-center gap-3 ${sizeClass} uppercase tracking-[0.18em] text-ink-soft`}>
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
            className="font-serif-i text-3xl text-accent-orange underline decoration-accent-orange decoration-2 underline-offset-8 md:col-span-7 md:text-5xl"
          >
            kli5@andrew.cmu.edu
          </a>
          <div className="flex flex-col gap-3 text-sm md:col-span-4 md:col-start-9">
            <a href="https://linkedin.com/in/katherinee-li" className="link-slide self-start text-ink-soft hover:text-foreground">
              LinkedIn ↗
            </a>
            <a href="https://github.com/katherinee-li" className="link-slide self-start text-ink-soft hover:text-foreground">
              GitHub ↗
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
  { title: "GUI for Search and Rescue Robots", kind: "Biorobotics Lab", year: "2024", tint: "from-accent-orange/25 to-accent-green/20", image: "/mmpug-rc2.jpg", href: "/work/lidar" },
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
  { role: "Engineering Intern", org: "Moss", when: "Summer 2024" },
  { role: "Robot Exploration Researcher", org: "CMU Biorobotics", when: "2023 — 2024" },
];

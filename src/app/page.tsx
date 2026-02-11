import { CyclingText } from "@/components/cycling-text";
import { FadeIn } from "@/components/fade-in";
import { SystemMarquee } from "@/components/system-marquee";
import { DashboardPreview } from "@/components/dashboard-preview";
import { ArrowRight } from "lucide-react";

/* ── Data ─────────────────────────────────────────────────── */

const categories = [
  {
    id: "01",
    name: "Signal Detection",
    items:
      "Intent monitoring, funding alerts, hiring signals, market expansion tracking, competitor moves.",
  },
  {
    id: "02",
    name: "Content Systems",
    items:
      "Automated research, writing, SEO optimization, distribution, scheduling, repurposing.",
  },
  {
    id: "03",
    name: "Pipeline Automation",
    items:
      "Outreach sequencing, lead scoring, event follow-up, referral workflows, LinkedIn engagement.",
  },
  {
    id: "04",
    name: "Operations",
    items:
      "CRM enrichment, reporting sync, onboarding flows, data warehouse, approvals, notifications.",
  },
];

const catalogSystems = [
  {
    name: "Funding Signal Detector",
    category: "Signals",
    description:
      "Instant alerts when target accounts close funding rounds.",
  },
  {
    name: "New Hire Detection",
    category: "Signals",
    description:
      "Know when key roles are filled at your target accounts.",
  },
  {
    name: "Cold Outreach Sequencer",
    category: "Pipeline",
    description:
      "Multi-channel outbound triggered by real-time intent signals.",
  },
  {
    name: "LinkedIn Engagement Engine",
    category: "Pipeline",
    description:
      "Automated connection, engagement, and messaging workflows.",
  },
  {
    name: "CRM Enrichment Engine",
    category: "Operations",
    description:
      "Auto-enrich every contact with firmographic and behavioral data.",
  },
  {
    name: "Lead Scoring Pipeline",
    category: "Pipeline",
    description:
      "Score and route leads based on fit and intent signals.",
  },
  {
    name: "Content Distribution System",
    category: "Content",
    description:
      "Publish once, distribute across every channel automatically.",
  },
  {
    name: "SEO Content Generator",
    category: "Content",
    description:
      "Research-driven content generation optimized for search.",
  },
  {
    name: "Webinar-to-Pipeline Flow",
    category: "Pipeline",
    description:
      "Convert webinar attendees into qualified pipeline, automatically.",
  },
  {
    name: "Competitor Alert System",
    category: "Signals",
    description:
      "Real-time tracking of competitor positioning and activity.",
  },
  {
    name: "Customer Onboarding Flow",
    category: "Operations",
    description:
      "Sequenced onboarding that adapts to user behavior.",
  },
  {
    name: "Reporting Sync Engine",
    category: "Operations",
    description:
      "Aggregate data from every tool into one source of truth.",
  },
];

const steps = [
  {
    id: "01",
    name: "Scope",
    description:
      "We map your workflows, identify the highest-leverage automation opportunities, and select systems from our catalog — or architect new ones.",
  },
  {
    id: "02",
    name: "Build",
    description:
      "Our team configures, connects, and tests every system against your infrastructure. Production-grade from day one.",
  },
  {
    id: "03",
    name: "Deploy",
    description:
      "Your systems go live. Monitor performance, track ROI, and manage everything from your dashboard.",
  },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-300">
            Everything Automation
          </span>
          <div className="hidden sm:flex items-center gap-6">
            <a
              href="#catalog"
              className="font-mono text-[11px] text-neutral-600 transition-colors hover:text-white"
            >
              Systems
            </a>
            <a
              href="#workspace"
              className="font-mono text-[11px] text-neutral-600 transition-colors hover:text-white"
            >
              Workspace
            </a>
            <a
              href="#process"
              className="font-mono text-[11px] text-neutral-600 transition-colors hover:text-white"
            >
              Process
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl">
          <FadeIn>
            <p className="mb-8 font-mono text-xs tracking-[0.25em] uppercase text-neutral-600">
              Automation Infrastructure
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Automation systems
              <br />
              that <CyclingText />
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              A complete catalog of production automation systems. Browse,
              deploy, and manage everything from one workspace.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex items-center gap-6">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm font-medium tracking-wide transition-all hover:border-white hover:bg-white hover:text-black"
              >
                Explore the catalog
              </a>
              <a
                href="#process"
                className="text-sm text-neutral-500 transition-colors hover:text-white"
              >
                How it works
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Marquee ────────────────────────────────────────── */}
      <SystemMarquee />

      {/* ── Categories ─────────────────────────────────────── */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-16 flex items-center gap-6">
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-neutral-600">
                Categories
              </span>
              <div className="h-px flex-1 bg-neutral-800" />
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Every system your business needs
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-500">
                Across four core categories — with new systems added every week.
                If it can be automated, we&apos;ve built it.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 0.08}>
                <div className="h-full border border-neutral-800/70 p-6 transition-colors hover:border-neutral-700">
                  <span className="font-mono text-[10px] text-neutral-700">
                    {cat.id}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-neutral-500">
                    {cat.items}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catalog Grid ───────────────────────────────────── */}
      <section id="catalog" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-16 flex items-center gap-6">
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-neutral-600">
                Featured Systems
              </span>
              <div className="h-px flex-1 bg-neutral-800" />
            </div>
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {catalogSystems.map((system, i) => (
              <FadeIn key={system.name} delay={i * 0.04}>
                <div className="group flex h-full flex-col border border-neutral-800/50 p-5 transition-colors hover:border-neutral-700">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-neutral-700">
                    {system.category}
                  </span>
                  <h4 className="mt-2.5 text-[13px] font-medium tracking-tight sm:text-sm">
                    {system.name}
                  </h4>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-500">
                    {system.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-8 text-center font-mono text-[11px] tracking-wider text-neutral-600">
              And everything else your business needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-800" />
          <div className="h-1 w-1 rounded-full bg-neutral-700" />
          <div className="h-px flex-1 bg-neutral-800" />
        </div>
      </div>

      {/* ── Workspace / Dashboard ──────────────────────────── */}
      <section id="workspace" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-16 flex items-center gap-6">
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-neutral-600">
                Your Workspace
              </span>
              <div className="h-px flex-1 bg-neutral-800" />
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="mb-14 max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Every system. One dashboard.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                Deploy, monitor, and manage your entire automation
                infrastructure from a single workspace. Real-time execution
                data, system health, and performance metrics — all in one place.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <DashboardPreview />
          </FadeIn>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────── */}
      <section id="process" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-16 flex items-center gap-6">
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-neutral-600">
                Process
              </span>
              <div className="h-px flex-1 bg-neutral-800" />
            </div>
          </FadeIn>
          <div className="space-y-0">
            {steps.map((step, i) => (
              <FadeIn key={step.id} delay={i * 0.1}>
                <div
                  className={`grid grid-cols-1 gap-4 py-10 sm:grid-cols-[80px_200px_1fr] sm:items-baseline sm:gap-8 ${
                    i < steps.length - 1
                      ? "border-b border-neutral-800/60"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[11px] text-neutral-600">
                    {step.id}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {step.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="px-6 py-24 sm:py-40">
        <div className="mx-auto max-w-6xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Your systems are
              <br />
              ready to deploy.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mx-auto mt-6 max-w-md text-neutral-400">
              Tell us what you&apos;re trying to automate. We&apos;ll match you
              with systems from the catalog — or build exactly what you need.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition-all hover:bg-neutral-200"
            >
              Get started
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-neutral-800/60 px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-[11px] tracking-wider text-neutral-600">
            &copy; {new Date().getFullYear()} Everything Automation
          </span>
        </div>
      </footer>
    </div>
  );
}

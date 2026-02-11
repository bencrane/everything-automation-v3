import { CyclingText } from "@/components/cycling-text";
import { FadeIn } from "@/components/fade-in";
import { SystemMarquee } from "@/components/system-marquee";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardLabel, CardTitle, CardDescription } from "@/components/ui/card";
import { Heading, Body, Label } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
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
  { name: "Funding Signal Detector", category: "Signals", description: "Instant alerts when target accounts close funding rounds." },
  { name: "New Hire Detection", category: "Signals", description: "Know when key roles are filled at your target accounts." },
  { name: "Cold Outreach Sequencer", category: "Pipeline", description: "Multi-channel outbound triggered by real-time intent signals." },
  { name: "LinkedIn Engagement Engine", category: "Pipeline", description: "Automated connection, engagement, and messaging workflows." },
  { name: "CRM Enrichment Engine", category: "Operations", description: "Auto-enrich every contact with firmographic and behavioral data." },
  { name: "Lead Scoring Pipeline", category: "Pipeline", description: "Score and route leads based on fit and intent signals." },
  { name: "Content Distribution System", category: "Content", description: "Publish once, distribute across every channel automatically." },
  { name: "SEO Content Generator", category: "Content", description: "Research-driven content generation optimized for search." },
  { name: "Webinar-to-Pipeline Flow", category: "Pipeline", description: "Convert webinar attendees into qualified pipeline, automatically." },
  { name: "Competitor Alert System", category: "Signals", description: "Real-time tracking of competitor positioning and activity." },
  { name: "Customer Onboarding Flow", category: "Operations", description: "Sequenced onboarding that adapts to user behavior." },
  { name: "Reporting Sync Engine", category: "Operations", description: "Aggregate data from every tool into one source of truth." },
];

const steps = [
  { id: "01", name: "Scope", description: "We map your workflows, identify the highest-leverage automation opportunities, and match you with systems we've already built — or architect new ones." },
  { id: "02", name: "Build", description: "Our team configures, connects, and tests every system against your infrastructure. Production-grade from day one." },
  { id: "03", name: "Deploy", description: "Your systems go live. Monitor performance, track ROI, and manage everything from your dashboard." },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>

      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
        style={{
          borderBottom: "1px solid var(--color-border-subtle)",
          background: "rgba(0,0,0,0.8)",
        }}
      >
        <Container
          className="flex items-center justify-between"
          style={{ height: "56px" }}
        >
          <Label>Everything Automation</Label>
          <div className="hidden sm:flex items-center" style={{ gap: "var(--space-6)" }}>
            {["Systems", "Workspace", "Process"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>
        </Container>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-screen flex-col justify-center"
        style={{ paddingTop: "56px" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <Container className="relative">
          <FadeIn>
            <Label className="block" style={{ marginBottom: "var(--space-8)" }}>
              Automation Infrastructure
            </Label>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="font-bold"
              style={{
                fontSize: "clamp(var(--text-4xl), 6vw, var(--text-6xl))",
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-tight)",
              }}
            >
              Automation systems
              <br />
              that <CyclingText />
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Body
              size="lg"
              muted
              className="max-w-xl"
              style={{ marginTop: "var(--space-8)" }}
            >
              We engineer and deploy production automation systems.
              Every domain. Every workflow. Managed from one place.
            </Body>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div
              className="flex items-center"
              style={{ marginTop: "var(--space-10)", gap: "var(--space-6)" }}
            >
              <a href="#systems" className="btn-outline">
                See what we build
              </a>
              <a href="#process" className="link-muted">
                How it works
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Marquee ─────────────────────────────────────────── */}
      <SystemMarquee />

      {/* ── Positioning ──────────────────────────────────────── */}
      <Section spacing="xl">
        <div
          className="grid grid-cols-1 gap-[var(--space-16)] lg:grid-cols-2 lg:gap-[var(--space-24)]"
        >
          <FadeIn>
            <Heading size="2xl" className="max-w-md">
              Most companies automate nothing. The rest duct-tape it together.
            </Heading>
          </FadeIn>
          <div className="flex flex-col" style={{ gap: "var(--space-10)" }}>
            <FadeIn delay={0.1}>
              <Body muted className="max-w-md">
                AI has made it possible to automate almost any business workflow.
                But the gap between what&apos;s possible and what&apos;s actually
                running in production is enormous.
              </Body>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Body muted className="max-w-md">
                Building reliable automation systems requires real engineering —
                not a Zapier account and a prayer. We&apos;re an automation
                engineering firm. We&apos;ve built systems across every domain,
                and we deploy them into your infrastructure.
              </Body>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ── Categories ──────────────────────────────────────── */}
      <Section id="systems">
        <FadeIn>
          <div style={{ marginBottom: "var(--space-12)" }}>
            <Heading size="2xl">
              Deep expertise across every automation domain
            </Heading>
            <Body
              size="sm"
              muted
              className="max-w-lg"
              style={{ marginTop: "var(--space-3)" }}
            >
              Four core categories. Dozens of production systems.
              If it can be automated, we&apos;ve already built it.
            </Body>
          </div>
        </FadeIn>
        <div className="grid gap-[var(--space-3)] sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <FadeIn key={cat.id} delay={i * 0.08}>
              <Card variant="compact" className="h-full">
                <CardLabel>{cat.id}</CardLabel>
                <CardTitle as="h3">{cat.name}</CardTitle>
                <CardDescription>{cat.items}</CardDescription>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── Catalog Grid ────────────────────────────────────── */}
      <Section id="catalog">
        <FadeIn>
          <Heading size="2xl" style={{ marginBottom: "var(--space-12)" }}>
            Systems we&apos;ve built
          </Heading>
        </FadeIn>
        <div className="grid gap-[var(--space-3)] sm:grid-cols-2 lg:grid-cols-3">
          {catalogSystems.map((system, i) => (
            <FadeIn key={system.name} delay={i * 0.04}>
              <Card variant="compact" className="h-full flex flex-col">
                <CardLabel>{system.category}</CardLabel>
                <CardTitle as="h4">{system.name}</CardTitle>
                <CardDescription>{system.description}</CardDescription>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <p
            className="text-center font-mono"
            style={{
              marginTop: "var(--space-8)",
              fontSize: "var(--text-xs)",
              letterSpacing: "var(--tracking-wide)",
              color: "var(--color-text-muted)",
            }}
          >
            This is a sample. We&apos;ve built hundreds more.
          </p>
        </FadeIn>
      </Section>

      {/* ── Divider ─────────────────────────────────────────── */}
      <Divider />

      {/* ── Workspace ───────────────────────────────────────── */}
      <Section id="workspace">
        <FadeIn>
          <div className="max-w-xl" style={{ marginBottom: "var(--space-16)" }}>
            <Heading size="2xl">
              Every system. One dashboard.
            </Heading>
            <Body
              size="sm"
              muted
              style={{ marginTop: "var(--space-3)" }}
            >
              Every system we deploy lives in your workspace. Real-time
              execution data, system health, and performance metrics —
              visible and manageable from one place.
            </Body>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <DashboardPreview />
        </FadeIn>
      </Section>

      {/* ── Process ─────────────────────────────────────────── */}
      <Section id="process">
        <FadeIn>
          <Heading size="2xl" style={{ marginBottom: "var(--space-12)" }}>
            How it works
          </Heading>
        </FadeIn>
        <div>
          {steps.map((step, i) => (
            <FadeIn key={step.id} delay={i * 0.1}>
              <div
                className="grid grid-cols-1 sm:grid-cols-[80px_200px_1fr] sm:items-baseline"
                style={{
                  padding: "var(--space-10) 0",
                  gap: "var(--space-4)",
                  borderBottom:
                    i < steps.length - 1
                      ? "1px solid var(--color-border-subtle)"
                      : "none",
                }}
              >
                <Label>{step.id}</Label>
                <h3
                  className="font-semibold"
                  style={{
                    fontSize: "var(--text-lg)",
                    letterSpacing: "var(--tracking-tight)",
                  }}
                >
                  {step.name}
                </h3>
                <Body size="sm" muted>
                  {step.description}
                </Body>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <Section spacing="xl" className="text-center">
        <FadeIn>
          <Heading
            as="h2"
            size="3xl"
            className="sm:text-4xl md:text-5xl"
          >
            Your systems are
            <br />
            ready to deploy.
          </Heading>
        </FadeIn>
        <FadeIn delay={0.15}>
          <Body
            muted
            className="mx-auto max-w-md"
            style={{ marginTop: "var(--space-6)" }}
          >
            Tell us what you&apos;re trying to automate. We&apos;ll scope it,
            engineer it, and deploy it into your infrastructure.
          </Body>
        </FadeIn>
        <FadeIn delay={0.25}>
          <a
            href="#"
            className="btn-solid"
            style={{ marginTop: "var(--space-10)" }}
          >
            Get started
            <ArrowRight style={{ width: "14px", height: "14px" }} />
          </a>
        </FadeIn>
      </Section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid var(--color-border-subtle)",
          padding: "var(--space-8) 0",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "var(--space-4)",
            }}
          >
            <Label>&copy; {new Date().getFullYear()} Everything Automation</Label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "var(--space-1)",
              }}
            >
              <Label>Contact Us: team@everythingautomation.com</Label>
              <Label>(929) 399-0039</Label>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

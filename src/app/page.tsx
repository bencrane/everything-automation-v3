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
    name: "Outbound",
    items:
      "Find leads, enrich contacts, and draft personalized outreach — triggered by hiring signals, funding events, or lookalike targeting.",
  },
  {
    id: "02",
    name: "Content",
    items:
      "Lead magnets, podcast repurposing, social content — generated from your expertise, formatted for every platform.",
  },
  {
    id: "03",
    name: "Sales Intel",
    items:
      "Pre-meeting briefs, competitor ad analysis, market research — delivered before you need to ask for it.",
  },
  {
    id: "04",
    name: "Close",
    items:
      "Proposals, pitch decks, and follow-up sequences — generated in minutes from a conversation.",
  },
  {
    id: "05",
    name: "Creative",
    items:
      "AI-generated video ads, UGC content, ad copy variations — production-quality assets without the production timeline.",
  },
  {
    id: "06",
    name: "Competitive Intel",
    items:
      "Monitor competitor ads across Meta, LinkedIn, TikTok. Know what they're running before your client does.",
  },
];

const catalogSystems = [
  // Outbound
  { name: "Job Posting Signal Outbound", category: "Outbound", description: "Find companies hiring for specific roles and reach their decision makers with personalized outreach." },
  { name: "Funding Signal Outbound", category: "Outbound", description: "Target companies that just raised money with timely, relevant outreach." },
  { name: "Creative Ideas Campaign", category: "Outbound", description: "Scrape your prospect's site, generate specific ideas for how you can help, and send emails that actually get replies." },
  // Content
  { name: "Lead Magnet Generator", category: "Content", description: "Generate ebooks, guides, and checklists from your expertise. Ready to gate behind a landing page." },
  { name: "Podcast Content Transformer", category: "Content", description: "Turn one podcast episode into a week of social content across every platform." },
  // Sales Intel
  { name: "Pre-Meeting Sales Brief", category: "Sales Intel", description: "Company research, contact context, and talking points delivered before every call." },
  { name: "Ad Intelligence Analyzer", category: "Sales Intel", description: "See what competitors are running across Meta, LinkedIn, and TikTok. Breakdowns, rewrites, and creative prompts included." },
  // Close
  { name: "Proposal Generator", category: "Close", description: "Generate branded proposals from a conversation. Sent for signature in minutes." },
  // Creative
  { name: "AI Video Ad Generator", category: "Creative", description: "Upload product photos, get UGC-style video ads back. Script, visuals, and voiceover — all AI-generated." },
  // Competitive Intel
  { name: "Competitor Ad Alerts", category: "Competitive Intel", description: "Monitor competitor ad launches across platforms. Get notified with analysis and suggested counter-moves." },
];

const steps = [
  { id: "01", name: "Find", description: "Identify your ideal prospects through hiring signals, funding events, and lookalike targeting." },
  { id: "02", name: "Engage", description: "Personalized outreach, content, and competitive intel — generated and delivered automatically." },
  { id: "03", name: "Close", description: "Proposals, briefs, and follow-ups — ready before the meeting starts." },
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
              AI-powered systems that find leads, book meetings, generate proposals, and close deals — managed from one dashboard.
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

      {/* ── Positioning ──────────────────────────────────────── */}
      <Section spacing="xl">
        <div
          className="grid grid-cols-1 gap-[var(--space-16)] lg:grid-cols-2 lg:gap-[var(--space-24)]"
        >
          <FadeIn>
            <Heading size="2xl" className="max-w-md">
              Most agencies automate nothing. The rest duct-tape it together.
            </Heading>
          </FadeIn>
          <div className="flex flex-col" style={{ gap: "var(--space-10)" }}>
            <FadeIn delay={0.1}>
              <Body muted className="max-w-md">
                Your team manually scrapes competitors, writes outbound one email at a time, builds proposals from scratch, and preps for sales calls with a Google search. It works — until you try to scale.
              </Body>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Body muted className="max-w-md">
                We&apos;ve built the systems that replace all of that. Outbound that finds and writes itself. Competitive intel that shows up before your client asks. Proposals generated in minutes. All running from one platform, all managed for you.
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
        <div className="grid gap-[var(--space-3)] sm:grid-cols-2 lg:grid-cols-3">
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

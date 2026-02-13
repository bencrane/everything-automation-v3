"use client";

const row1 = [
  "Job Posting Signal Outbound",
  "Ad Intelligence Analyzer",
  "Proposal Generator",
  "Pre-Meeting Sales Brief",
  "Lead Magnet Generator",
  "Podcast Content Transformer",
];

const row2 = [
  "AI Video Ad Generator",
  "Competitor Ad Alerts",
  "Funding Signal Outbound",
  "Inbound Lead Responder",
  "Outbound Email Generator",
  "Sales Briefing System",
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const content = items.map((name, i) => (
    <span
      key={i}
      className="flex items-center"
      style={{ gap: "var(--space-4)", padding: "0 var(--space-5)" }}
    >
      <span
        className="shrink-0 rounded-full"
        style={{
          width: "3px",
          height: "3px",
          background: "var(--gray-7)",
        }}
      />
      <span
        className="whitespace-nowrap font-mono"
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--color-text-muted)",
        }}
      >
        {name}
      </span>
    </span>
  ));

  return (
    <div className="overflow-hidden">
      <div
        className={`flex shrink-0 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        <div className="flex shrink-0">{content}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  );
}

export function SystemMarquee() {
  return (
    <div
      className="relative"
      style={{
        borderTop: "1px solid var(--color-border-subtle)",
        borderBottom: "1px solid var(--color-border-subtle)",
        padding: "var(--space-6) 0",
      }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10"
        style={{
          width: "var(--space-24)",
          background: "linear-gradient(to right, var(--color-bg), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10"
        style={{
          width: "var(--space-24)",
          background: "linear-gradient(to left, var(--color-bg), transparent)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </div>
  );
}

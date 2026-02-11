"use client";

const row1 = [
  "Signal Detection",
  "Cold Outreach Sequencer",
  "CRM Enrichment Engine",
  "Content Distribution",
  "Lead Scoring Pipeline",
  "Webinar Follow-up Flow",
  "Market Expansion Tracker",
  "Invoice Automation",
  "SEO Brief Generator",
  "Customer Onboarding",
  "Hiring Signal Alerts",
  "Referral Engine",
];

const row2 = [
  "Competitor Monitoring",
  "Social Scheduler",
  "Data Warehouse Sync",
  "Event Lead Capture",
  "Reporting Dashboard",
  "LinkedIn Engagement",
  "Newsletter Automation",
  "Proposal Generator",
  "Slack Ops Router",
  "Funding Alert System",
  "Review Request Flow",
  "Intake Form Router",
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const content = items.map((name, i) => (
    <span key={i} className="flex items-center gap-4 px-5">
      <span className="h-[3px] w-[3px] rounded-full bg-neutral-700 shrink-0" />
      <span className="whitespace-nowrap font-mono text-[13px] text-neutral-600">
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
    <div className="relative border-y border-neutral-800/50 py-6 space-y-4">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
    </div>
  );
}

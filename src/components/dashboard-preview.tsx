const dashboardSystems = [
  {
    name: "Signal Detection",
    status: "active" as const,
    metric: "847",
    label: "executions",
    period: "this week",
  },
  {
    name: "Cold Outreach",
    status: "active" as const,
    metric: "1,204",
    label: "sends",
    period: "this week",
  },
  {
    name: "CRM Enrichment",
    status: "active" as const,
    metric: "3.2k",
    label: "records",
    period: "this month",
  },
  {
    name: "Content Pipeline",
    status: "active" as const,
    metric: "156",
    label: "published",
    period: "this month",
  },
  {
    name: "Lead Scoring",
    status: "deploying" as const,
    metric: "—",
    label: "",
    period: "deploying",
  },
  {
    name: "Webinar Follow-up",
    status: "active" as const,
    metric: "89",
    label: "sequences",
    period: "this week",
  },
];

export function DashboardPreview() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

      {/* Dashboard frame */}
      <div className="relative overflow-hidden rounded-lg border border-neutral-800/80 bg-neutral-950">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-neutral-800/50 px-5 py-3">
          <div className="flex items-center gap-8">
            <span className="font-mono text-[11px] font-semibold tracking-wider text-white">
              EA
            </span>
            <nav className="hidden sm:flex items-center gap-5">
              <span className="text-[12px] font-medium text-white">
                Systems
              </span>
              <span className="text-[12px] text-neutral-600">Analytics</span>
              <span className="text-[12px] text-neutral-600">Workflows</span>
              <span className="text-[12px] text-neutral-600">Settings</span>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex h-6 items-center rounded bg-neutral-800/60 px-3">
              <span className="font-mono text-[10px] text-neutral-500">
                + Deploy new
              </span>
            </div>
            <div className="h-6 w-6 rounded-full bg-neutral-800" />
          </div>
        </div>

        {/* Content area */}
        <div className="p-5 sm:p-6">
          {/* Section header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h4 className="text-[13px] font-medium text-white">
                Active Systems
              </h4>
              <p className="mt-0.5 text-[11px] text-neutral-600">
                12 systems deployed · 11 active
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline h-1.5 w-1.5 rounded-full bg-white" />
              <span className="hidden sm:inline text-[11px] text-neutral-500">
                All systems nominal
              </span>
            </div>
          </div>

          {/* System cards grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
            {dashboardSystems.map((system) => (
              <div
                key={system.name}
                className="rounded border border-neutral-800/50 bg-neutral-900/40 p-3.5 sm:p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-neutral-300 sm:text-[12px]">
                    {system.name}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      system.status === "active"
                        ? "bg-white"
                        : "bg-neutral-600 animate-pulse"
                    }`}
                  />
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-mono text-base font-semibold text-white sm:text-lg">
                    {system.metric}
                  </span>
                  <span className="text-[10px] text-neutral-600">
                    {system.label}
                  </span>
                </div>
                <span className="mt-0.5 block text-[10px] text-neutral-700">
                  {system.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="h-12 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>
    </div>
  );
}

const dashboardSystems = [
  { name: "Signal Detection", status: "active" as const, metric: "847", label: "executions", period: "this week" },
  { name: "Cold Outreach", status: "active" as const, metric: "1,204", label: "sends", period: "this week" },
  { name: "CRM Enrichment", status: "active" as const, metric: "3.2k", label: "records", period: "this month" },
  { name: "Content Pipeline", status: "active" as const, metric: "156", label: "published", period: "this month" },
  { name: "Lead Scoring", status: "deploying" as const, metric: "—", label: "", period: "deploying" },
  { name: "Webinar Follow-up", status: "active" as const, metric: "89", label: "sequences", period: "this week" },
];

export function DashboardPreview() {
  return (
    <div className="relative mx-auto" style={{ maxWidth: "900px" }}>
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          inset: "calc(-1 * var(--space-16))",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03), transparent 70%)",
        }}
      />

      {/* Dashboard frame */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--gray-6)",
          background: "var(--gray-1)",
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between"
          style={{
            borderBottom: "1px solid var(--color-border-subtle)",
            padding: "var(--space-3) var(--space-5)",
          }}
        >
          <div className="flex items-center" style={{ gap: "var(--space-8)" }}>
            <span
              className="font-mono font-semibold"
              style={{
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wide)",
                color: "var(--color-text)",
              }}
            >
              EA
            </span>
            <nav className="hidden sm:flex items-center" style={{ gap: "var(--space-5)" }}>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--color-text)" }}>
                Systems
              </span>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>Analytics</span>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>Workflows</span>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>Settings</span>
            </nav>
          </div>
          <div className="flex items-center" style={{ gap: "var(--space-3)" }}>
            <div
              className="hidden sm:flex items-center"
              style={{
                height: "var(--space-6)",
                borderRadius: "var(--radius-sm)",
                background: "var(--gray-4)",
                padding: "0 var(--space-3)",
              }}
            >
              <span className="font-mono" style={{ fontSize: "10px", color: "var(--color-text-faint)" }}>
                + Deploy new
              </span>
            </div>
            <div
              className="rounded-full"
              style={{ width: "var(--space-6)", height: "var(--space-6)", background: "var(--gray-4)" }}
            />
          </div>
        </div>

        {/* Content area */}
        <div style={{ padding: "var(--space-5) var(--space-5)" }}>
          <div
            className="flex items-center justify-between"
            style={{ marginBottom: "var(--space-5)" }}
          >
            <div>
              <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--color-text)" }}>
                Active Systems
              </h4>
              <p style={{ marginTop: "2px", fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>
                12 systems deployed · 11 active
              </p>
            </div>
            <div className="hidden sm:flex items-center" style={{ gap: "var(--space-2)" }}>
              <span className="rounded-full" style={{ width: "6px", height: "6px", background: "var(--color-text)" }} />
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-faint)" }}>
                All systems nominal
              </span>
            </div>
          </div>

          {/* System cards grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3"
            style={{ gap: "var(--space-3)" }}
          >
            {dashboardSystems.map((system) => (
              <div
                key={system.name}
                style={{
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--color-border-subtle)",
                  background: "var(--gray-2)",
                  padding: "var(--space-4)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "var(--color-text-secondary)" }}>
                    {system.name}
                  </span>
                  <span
                    className={`shrink-0 rounded-full ${system.status === "deploying" ? "animate-pulse" : ""}`}
                    style={{
                      width: "6px",
                      height: "6px",
                      background: system.status === "active" ? "var(--color-text)" : "var(--gray-8)",
                    }}
                  />
                </div>
                <div className="flex items-baseline" style={{ marginTop: "var(--space-3)", gap: "var(--space-1)" }}>
                  <span
                    className="font-mono font-semibold"
                    style={{ fontSize: "var(--text-lg)", color: "var(--color-text)" }}
                  >
                    {system.metric}
                  </span>
                  <span style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>
                    {system.label}
                  </span>
                </div>
                <span className="block" style={{ marginTop: "2px", fontSize: "10px", color: "var(--color-text-ghost)" }}>
                  {system.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div style={{ height: "var(--space-12)", background: "linear-gradient(to top, var(--gray-1), transparent)" }} />
      </div>
    </div>
  );
}

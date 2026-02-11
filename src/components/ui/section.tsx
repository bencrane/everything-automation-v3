import { cn } from "@/lib/utils";
import { Container } from "./container";

/* ── Section ──────────────────────────────────────────────── */

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Use "lg" for standard sections, "xl" for hero/CTA */
  spacing?: "md" | "lg" | "xl";
}

const spacingMap = {
  md: "py-[var(--space-16)] sm:py-[var(--space-20)]",
  lg: "py-[var(--space-20)] sm:py-[var(--space-24)]",
  xl: "py-[var(--space-24)] sm:py-[var(--space-32)]",
};

export function Section({
  children,
  className,
  id,
  spacing = "lg",
}: SectionProps) {
  return (
    <section id={id} className={cn(spacingMap[spacing], className)}>
      <Container>{children}</Container>
    </section>
  );
}

/* ── SectionHeader ────────────────────────────────────────── */

interface SectionHeaderProps {
  label: string;
  className?: string;
}

export function SectionHeader({ label, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-[var(--space-12)] flex items-center gap-[var(--space-6)]",
        className
      )}
    >
      <span
        className="shrink-0 font-mono uppercase"
        style={{
          fontSize: "var(--text-xs)",
          letterSpacing: "var(--tracking-mono)",
          color: "var(--color-text-muted)",
        }}
      >
        {label}
      </span>
      <div
        className="h-px flex-1"
        style={{ background: "var(--gray-6)" }}
      />
    </div>
  );
}

import { cn } from "@/lib/utils";

/* ── Card ─────────────────────────────────────────────────── */

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** "default" has standard padding, "compact" is tighter */
  variant?: "default" | "compact";
  hover?: boolean;
}

const variantStyles = {
  default: "p-[var(--space-8)]",
  compact: "p-[var(--space-5)]",
};

export function Card({
  children,
  className,
  variant = "default",
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "border transition-colors",
        variantStyles[variant],
        hover && "hover:border-[var(--gray-7)]",
        className
      )}
      style={{
        borderColor: "var(--gray-6)",
        background: "transparent",
      }}
    >
      {children}
    </div>
  );
}

/* ── CardLabel ────────────────────────────────────────────── */

export function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="block font-mono uppercase"
      style={{
        fontSize: "var(--text-xs)",
        letterSpacing: "var(--tracking-wider)",
        color: "var(--color-text-ghost)",
      }}
    >
      {children}
    </span>
  );
}

/* ── CardTitle ────────────────────────────────────────────── */

interface CardTitleProps {
  children: React.ReactNode;
  as?: "h3" | "h4";
}

export function CardTitle({ children, as: Tag = "h3" }: CardTitleProps) {
  return (
    <Tag
      className="font-semibold"
      style={{
        fontSize: "var(--text-base)",
        letterSpacing: "var(--tracking-tight)",
        lineHeight: "var(--leading-snug)",
        marginTop: "var(--space-3)",
      }}
    >
      {children}
    </Tag>
  );
}

/* ── CardDescription ──────────────────────────────────────── */

export function CardDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p
      style={{
        fontSize: "var(--text-sm)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--color-text-muted)",
        marginTop: "var(--space-2)",
      }}
    >
      {children}
    </p>
  );
}

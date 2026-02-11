import { cn } from "@/lib/utils";

/* ── Heading ──────────────────────────────────────────────── */

interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "xl" | "2xl" | "3xl" | "4xl" | "display";
  className?: string;
  style?: React.CSSProperties;
}

const headingSizes = {
  xl: { fontSize: "var(--text-xl)", letterSpacing: "var(--tracking-tight)" },
  "2xl": { fontSize: "var(--text-2xl)", letterSpacing: "var(--tracking-tight)" },
  "3xl": { fontSize: "var(--text-3xl)", letterSpacing: "var(--tracking-tight)" },
  "4xl": { fontSize: "var(--text-4xl)", letterSpacing: "var(--tracking-tight)" },
  display: { fontSize: "var(--text-5xl)", letterSpacing: "var(--tracking-tight)" },
};

export function Heading({
  children,
  as: Tag = "h2",
  size = "2xl",
  className,
  style,
}: HeadingProps) {
  const sizeStyles = headingSizes[size];
  return (
    <Tag
      className={cn("font-bold", className)}
      style={{
        ...sizeStyles,
        lineHeight: "var(--leading-tight)",
        color: "var(--color-text)",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Body ─────────────────────────────────────────────────── */

interface BodyProps {
  children: React.ReactNode;
  size?: "sm" | "base" | "lg";
  muted?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const bodySizes = {
  sm: "var(--text-sm)",
  base: "var(--text-base)",
  lg: "var(--text-lg)",
};

export function Body({
  children,
  size = "base",
  muted = false,
  className,
  style,
}: BodyProps) {
  return (
    <p
      className={cn(className)}
      style={{
        fontSize: bodySizes[size],
        lineHeight: "var(--leading-relaxed)",
        color: muted ? "var(--color-text-muted)" : "var(--color-text-secondary)",
        ...style,
      }}
    >
      {children}
    </p>
  );
}

/* ── Label ────────────────────────────────────────────────── */

export function Label({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={cn("font-mono uppercase", className)}
      style={{
        fontSize: "var(--text-xs)",
        letterSpacing: "var(--tracking-mono)",
        color: "var(--color-text-muted)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  style,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      style={style}
      className={cn(
        "mx-auto w-full",
        "px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]",
        "max-w-[var(--container-max)]",
        className
      )}
    >
      {children}
    </Component>
  );
}

import { Container } from "./container";

export function Divider() {
  return (
    <Container>
      <div className="flex items-center" style={{ gap: "var(--space-3)" }}>
        <div className="h-px flex-1" style={{ background: "var(--gray-6)" }} />
        <div
          className="shrink-0 rounded-full"
          style={{
            width: "4px",
            height: "4px",
            background: "var(--gray-7)",
          }}
        />
        <div className="h-px flex-1" style={{ background: "var(--gray-6)" }} />
      </div>
    </Container>
  );
}

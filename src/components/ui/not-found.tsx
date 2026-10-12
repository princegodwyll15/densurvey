import { LinkButton } from "@/components/ui/link-button";

export function NotFound() {
  return (
    <main className="detail-page">
      <div className="wrap narrow">
        <span className="eyebrow">404 / Off grid</span>
        <h1>This point could not be located.</h1>
        <LinkButton href="/">Return home</LinkButton>
      </div>
    </main>
  );
}

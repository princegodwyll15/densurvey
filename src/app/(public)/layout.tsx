import { SiteShell } from "@/components/site/site-shell";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell>{children}</SiteShell>;
}

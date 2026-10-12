import "@/styles/index.css";
import { SiteProvider } from "@/components/site/site-provider";

export const metadata = { title: "Densurvey" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}

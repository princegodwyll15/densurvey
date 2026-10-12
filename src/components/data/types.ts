type Service = { title: string; subtitle: string };

export type Project = {
  title: string;
  location: string;
  year: string;
  category: string;
  slug: string;
  image: string;
  client: string;
  scope: string;
  equipment: string;
  deliverables: string;
  pdf: string;
};
type Tool = { name: string; description: string; status: string };

type Article = {
  title: string;
  category: string;
  date: string;
  slug: string;
  body: string;
};
type Theme = Record<string, string>;

export type SiteData = {
  hero: {
    headline: string;
    bio: string;
    primaryLabel: string;
    primaryLink: string;
    secondaryLabel: string;
    secondaryLink: string;
    coordinates: string;
    contour: boolean;
  };
  services: Service[];
  works: Project[];
  apps: Tool[];
  articles: Article[];
  contact: { headline: string; description: string; recipient: string };
  footer: { email: string; phone: string; copyright: string };
  theme: Theme;
};

import { SiteData } from "@/components/data/types";

export function ListingPage({
  data,
  kind,
}: {
  data: SiteData;
  kind: "works" | "apps" | "articles";
}) {
  const titles = {
    works: ["Selected work", "Projects"],
    apps: ["Digital tools", "Apps"],
    articles: ["Field notes", "Write-ups"],
  } as const;
  const [eyebrow, title] = titles[kind];

  return (
    <main className="listing-page">
      <div className="section-head">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
        </div>
      </div>
      <div className="editor-list">
        {kind === "works" &&
          data.works.map((project) => (
            <div key={project.slug} className="editor-card">
              <h2>{project.title}</h2>
              <p>
                {project.location} <span /> {project.year}
              </p>
              <a href={`/works/${project.slug}`}>View project</a>
            </div>
          ))}
        {kind === "apps" &&
          data.apps.map((app) => (
            <div key={app.name} className="editor-card">
              <h2>{app.name}</h2>
              <p>{app.description}</p>
              <span>{app.status}</span>
            </div>
          ))}
        {kind === "articles" &&
          data.articles.map((article) => (
            <div key={article.slug} className="editor-card">
              <h2>{article.title}</h2>
              <p>
                {article.category} <span /> {article.date}
              </p>
              <a href={`/articles/${article.slug}`}>Read write-up</a>
            </div>
          ))}
      </div>
    </main>
  );
}

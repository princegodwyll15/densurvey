import { SiteData } from "@/components/data/types";
import { Icon } from "../ui/icons";
import { NotFound } from "@/components/ui/not-found";
import Image from "next/image";
import Link from "next/link";

export function DetailPage({
  data,
  type,
  slug,
}: {
  data: SiteData;
  type: "works" | "articles";
  slug: string;
}) {
  if (type === "articles") {
    const article = data.articles.find((item) => item.slug === slug);
    if (!article) return <NotFound />;
    return (
      <main className="detail-page">
        <div className="wrap narrow">
          <Link className="back-link" href="/#writing">
            ← Back to field notes
          </Link>
          <span className="eyebrow">
            {article.category} · {article.date}
          </span>
          <h1>{article.title}</h1>
          <p className="article-lead">{article.body}</p>
          <div className="prose">
            <h2>Start with the purpose</h2>
            <p>
              Every technical choice should support the decisions the project
              team needs to make. Agreeing the required accuracy, coordinate
              reference and final formats at the outset keeps the work focused
              and verifiable.
            </p>
            <h2>Keep the record clear</h2>
            <p>
              Good field notes and transparent checks make spatial data
              defensible. They also make it easier for the next surveyor,
              designer or client to understand how the result was produced.
            </p>
          </div>
        </div>
      </main>
    );
  }
  const project = data.works.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  return (
    <main className="detail-page project-detail">
      <div className="wrap">
        <Link className="back-link" href="/#works">
          ← Back to all work
        </Link>
        <div className="detail-title">
          <div>
            <span className="eyebrow">
              {project.category} · {project.year}
            </span>
            <h1>{project.title}</h1>
            <p>{project.location}</p>
          </div>
          <Link
            className="button button-primary"
            href={project.pdf || "#"}
            download
          >
            Download report <Icon name="download" />
          </Link>
        </div>
        <div className="detail-visual">
          <Image
            width={800}
            height={600}
            src={project.image}
            alt={`Aerial overview of ${project.location}`}
          />
          <div className="map-overlay">
            <span>N</span>
            <i />
            <small>Orthophoto preview · GSD 2.8 cm</small>
          </div>
        </div>
        <div className="project-facts">
          <div>
            <span>Client</span>
            <p>{project.client}</p>
          </div>
          <div>
            <span>Location</span>
            <p>{project.location}</p>
          </div>
          <div>
            <span>Year</span>
            <p>{project.year}</p>
          </div>
        </div>
        <div className="scope-grid">
          <div>
            <span className="eyebrow">Project scope</span>
            <h2>Reliable ground truth for the work ahead.</h2>
          </div>
          <div>
            <p className="scope-lead">{project.scope}</p>
            <dl>
              <dt>Equipment used</dt>
              <dd>{project.equipment}</dd>
              <dt>Deliverables</dt>
              <dd>{project.deliverables}</dd>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}

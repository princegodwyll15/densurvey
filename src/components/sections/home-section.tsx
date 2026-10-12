import { SiteData } from "@/components/data/types";
import { LinkButton } from "../ui/link-button";
import { SectionHead } from "./section-head";
import { TopoLines } from "../ui/top-lines";
import { ProjectCard } from "@/components/ui/project-card";
import { Icon } from "../ui/icons";

export function Home({
  data,
  openContact,
}: {
  data: SiteData;
  openContact: () => void;
}) {
  return (
    <>
      <section className="hero" id="home">
        {data.hero.contour && <TopoLines />}
        <div className="hero-glow" />
        <div className="wrap hero-inner">
          <div className="hero-index">
            <span>Geomatic engineering</span>
            <span>Accra · Ghana</span>
          </div>
          <div className="hero-copy">
            <p className="kicker">
              <span />
              From ground truth to clear decisions
            </p>
            <h1>{data.hero.headline}</h1>
            <p className="hero-bio">{data.hero.bio}</p>
            <div className="hero-actions">
              <LinkButton href={data.hero.primaryLink}>
                {data.hero.primaryLabel}
              </LinkButton>
              <LinkButton
                href={data.hero.secondaryLink}
                variant="ghost"
                onClick={
                  data.hero.secondaryLink === "#contact"
                    ? openContact
                    : undefined
                }
              >
                {data.hero.secondaryLabel}
              </LinkButton>
            </div>
          </div>
          <div className="coordinates">
            <span>Field base / ACC</span>
            <strong>{data.hero.coordinates}</strong>
          </div>
        </div>
      </section>

      <section className="services" id="about">
        <div className="wrap">
          <SectionHead
            eyebrow="01 / What I do"
            title="Measured in the field. Made useful everywhere."
          />
          <div className="service-grid">
            {data.services.map((service, index) => (
              <article className="service" key={`${service.title}-${index}`}>
                <span className="service-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="works-section" id="works">
        <div className="wrap">
          <SectionHead
            eyebrow="02 / Selected projects"
            title="Latest works"
            link="All works"
            href="/works"
          />
          <div className="project-grid">
            {data.works.slice(0, 3).map((work, index) => (
              <ProjectCard key={work.slug} project={work} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="apps-section" id="apps">
        <div className="wrap">
          <SectionHead
            eyebrow="03 / Digital tools"
            title="Apps for field and office"
            link="All apps"
            href="/apps"
          />
          <div className="app-grid">
            {data.apps.map((app, index) => (
              <article className="app-card" key={`${app.name}-${index}`}>
                <div className="app-top">
                  <span className="app-icon">
                    <Icon name={index === 0 ? "map" : "external"} />
                  </span>
                  <span
                    className={`status ${app.status === "Live" ? "live" : ""}`}
                  >
                    {app.status}
                  </span>
                </div>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <a href="#contact" className="card-link">
                  {app.status === "Live" ? "Open tool" : "Join the waitlist"}
                  <Icon name="arrow" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="writing-section" id="writing">
        <div className="wrap writing-grid">
          <div>
            <SectionHead eyebrow="04 / Field notes" title="Write-ups" />
            <div className="article-list">
              {data.articles.map((article) => (
                <a
                  className="article-row"
                  href={`/articles/${article.slug}`}
                  key={article.slug}
                >
                  <div>
                    <span>{article.category}</span>
                    <h3>{article.title}</h3>
                  </div>
                  <time>{article.date}</time>
                  <Icon name="arrow" />
                </a>
              ))}
            </div>
          </div>
          <aside className="why-card">
            <span className="eyebrow">Why it matters</span>
            <blockquote>
              “The best survey deliverable is not just accurate. It makes the
              next decision easier.”
            </blockquote>
            <p>
              I write about the practical details behind reliable spatial work —
              from coordinate systems to quality checks.
            </p>
            <LinkButton href="/articles">Read field notes</LinkButton>
          </aside>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div className="wrap contact-inner">
          <div>
            <span className="eyebrow light">05 / Start a project</span>
            <h2>{data.contact.headline}</h2>
            <p>{data.contact.description}</p>
          </div>
          <button className="button button-primary" onClick={openContact}>
            Tell me about it
            <Icon name="arrow" />
          </button>
        </div>
      </section>
    </>
  );
}

import { Icon } from "../ui/icons";

export function SectionHead({
  eyebrow,
  title,
  link,
  href,
}: {
  eyebrow: string;
  title: string;
  link?: string;
  href?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {link && (
        <a className="text-link" href={href}>
          {link}
          <Icon name="arrow" />
        </a>
      )}
    </div>
  );
}

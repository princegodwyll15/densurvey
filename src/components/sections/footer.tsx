import { SiteData } from "@/components/data/types";
import { Brand } from "../ui/icons";

export function Footer({ data }: { data: SiteData }) {
  return (
    <footer>
      <div className="wrap footer-main">
        <div>
          <Brand dark />
          <p>
            Precise spatial work for Ghana’s built and natural environments.
          </p>
        </div>
        <div className="footer-contact">
          <span>Start a conversation</span>
          <a href={`mailto:${data.footer.email}`}>{data.footer.email}</a>
          <a href={`tel:${data.footer.phone.replace(/\s/g, "")}`}>
            {data.footer.phone}
          </a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>{data.footer.copyright}</p>
        <span>Accra · Ghana</span>
      </div>
    </footer>
  );
}

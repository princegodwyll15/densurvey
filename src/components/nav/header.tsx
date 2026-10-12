import { Brand, Icon } from "../ui/icons";
import { MobileDrawer } from "../ui/mobile-drawer";
import Link from "next/link";

export function Header({
  dark,
  toggleDark,
  onNavigate,
}: {
  dark: boolean;
  toggleDark: () => void;
  onNavigate?: () => void;
}) {
  const links = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Works", "/#works"],
    ["Apps", "/#apps"],
    ["Write-ups", "/#writing"],
  ];
  const navigation = <>
    {links.map(([label, href]) => (
      <Link key={label} href={href} onClick={onNavigate}>{label}</Link>
    ))}
    <Link href="/#contact" className="nav-contact" onClick={onNavigate}>Contact</Link>
  </>;
  return (
    <header className="site-header">
      <Link href="/" className="logo-link" aria-label="Densurvey home">
        <Brand dark />
      </Link>
      <nav
        className="nav public-desktop-nav"
        aria-label="Primary navigation"
      >
        {navigation}
      </nav>
      <div className="header-tools">
        <button
          className="icon-button"
          onClick={toggleDark}
          aria-label={dark ? "Use light mode" : "Use dark mode"}
        >
          <Icon name={dark ? "sun" : "moon"} />
        </button>
        <MobileDrawer title="Navigation">
          <nav className="drawer-nav" aria-label="Primary navigation">{navigation}</nav>
        </MobileDrawer>
      </div>
    </header>
  );
}

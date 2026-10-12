import { ReactNode } from "react";
import { Icon } from "./icons";
import Link from "next/link";

export function LinkButton({
  href,
  children,
  variant = "primary",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: string;
  onClick?: () => void;
}) {
  return (
    <Link className={`button button-${variant}`} href={href} onClick={onClick}>
      {children}
      <Icon name="arrow" />
    </Link>
  );
}

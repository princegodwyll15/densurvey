"use client";

import type { ReactNode } from "react";
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/sections/footer";
import { themeStyle } from "@/components/admin/utils";
import { useSite } from "./site-provider";

export function SiteShell({ children }: { children: ReactNode }) {
  const { data, dark, toggleDark } = useSite();
  return (
    <div className="site" style={themeStyle(data.theme)}>
      <Header dark={dark} toggleDark={toggleDark} />
      {children}
      <Footer data={data} />
    </div>
  );
}

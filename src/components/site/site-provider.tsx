"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { initialData } from "@/components/data/home-data";
import { loadData, STORAGE_KEY } from "@/components/data/storage/localstorage";
import type { SiteData } from "@/components/data/types";

const SiteContext = createContext<{
  data: SiteData;
  dark: boolean;
  toggleDark: () => void;
  publish: (next: SiteData) => void;
  ready: boolean;
} | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(initialData);
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Restore browser-only preferences after server hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData(loadData());
    setDark(localStorage.getItem("densurvey-dark") === "true");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("densurvey-dark", String(dark));
  }, [dark, ready]);

  function publish(next: SiteData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setData(next);
  }

  return (
    <SiteContext.Provider
      value={{
        data,
        dark,
        toggleDark: () => setDark((value) => !value),
        publish,
        ready,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const site = useContext(SiteContext);
  if (!site) throw new Error("useSite must be used within SiteProvider");
  return site;
}

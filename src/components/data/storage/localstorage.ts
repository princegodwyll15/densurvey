export const STORAGE_KEY = "densurvey-site-v1";

import { initialData } from "../home-data";

import { SiteData } from "../types";

export function loadData(): SiteData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...initialData, ...JSON.parse(saved) } : initialData;
  } catch {
    return initialData;
  }
}

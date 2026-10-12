import { SiteData } from "./types";

export const images = {
  accra:
    "https://images.unsplash.com/photo-1636137627135-1de8c36e92de?auto=format&fit=crop&w=1200&q=85",
  town: "https://images.unsplash.com/photo-1636137626685-385d7a27c768?auto=format&fit=crop&w=1200&q=85",
  city: "https://images.unsplash.com/photo-1568025848823-86404cd04ad1?auto=format&fit=crop&w=1200&q=85",
  drone:
    "https://images.unsplash.com/photo-1583889352646-bcb7364b7298?auto=format&fit=crop&w=1200&q=85",
};

export const initialData: SiteData = {
  hero: {
    headline: "Maps, surveys and apps that put land on the screen",
    bio: "I’m Dennis Antwi Boadi, a geomatic engineer in Accra. I turn field measurements into precise plans, spatial insight and useful digital tools.",
    primaryLabel: "See my apps",
    primaryLink: "#apps",
    secondaryLabel: "Contact me",
    secondaryLink: "#contact",
    coordinates: "5.6037° N, 0.1870° W",
    contour: true,
  },
  services: [
    {
      title: "Land Surveying",
      subtitle:
        "Boundary, engineering and topographic surveys with survey-grade control.",
    },
    {
      title: "GIS & Spatial Analysis",
      subtitle:
        "Clear spatial intelligence for planning, assets and better decisions.",
    },
    {
      title: "UAV Mapping",
      subtitle:
        "High-resolution orthophotos, terrain models and volumetric surveys.",
    },
    {
      title: "Web Mapping & Apps",
      subtitle: "Practical tools that make complex field data easy to use.",
    },
  ],
  works: [
    {
      title: "Tema Industrial Site Survey",
      location: "Tema, Greater Accra",
      year: "2024",
      category: "Engineering survey",
      slug: "tema-industrial-site",
      image: images.accra,
      client: "Private industrial developer",
      scope:
        "Establish site control and produce a detailed topographic survey for a proposed 8.4-hectare logistics facility.",
      equipment: "Leica TS07 total station, Emlid Reach RS2+ RTK GNSS",
      deliverables:
        "Control report, CAD base plan, spot heights, contours and setting-out schedule",
      pdf: "#",
    },
    {
      title: "Aburi Ridge UAV Mapping",
      location: "Aburi, Eastern Region",
      year: "2024",
      category: "UAV mapping",
      slug: "aburi-ridge-uav",
      image: images.drone,
      client: "Landscape architecture studio",
      scope:
        "Capture steep terrain and mature vegetation to support an environmentally responsive hospitality concept.",
      equipment: "DJI Mavic 3 Enterprise, Emlid Reach RS2+ GNSS ground control",
      deliverables:
        "2.8 cm GSD orthophoto, DSM, DTM, contour map and point cloud",
      pdf: "#",
    },
    {
      title: "Community Parcel Inventory",
      location: "Prampram, Greater Accra",
      year: "2023",
      category: "GIS",
      slug: "prampram-parcel-inventory",
      image: images.town,
      client: "Local land secretariat",
      scope:
        "Consolidate legacy plans and current field observations into a searchable parcel and occupancy register.",
      equipment: "Trimble R2 GNSS, QGIS, PostGIS",
      deliverables:
        "Geodatabase, parcel map book, web map and data quality report",
      pdf: "#",
    },
  ],
  apps: [
    {
      name: "Coordinate Converter",
      description:
        "Convert Ghana National Grid, WGS 84 and UTM coordinates with field-ready precision.",
      status: "Live",
    },
    {
      name: "Plot Area Calculator",
      description:
        "Paste or enter boundary coordinates to calculate area and generate a clean plot sketch.",
      status: "Live",
    },
    {
      name: "Field Notes",
      description:
        "A focused digital field book for observations, station checks and photo records.",
      status: "In development",
    },
  ],
  articles: [
    {
      title: "Choosing the right coordinate system for a Ghana project",
      category: "Field notes",
      date: "18 Jun 2024",
      slug: "coordinate-system-ghana",
      body: "A coordinate system is more than a software setting. It defines how field observations, plans and imagery align. This guide explains the questions to ask before work begins, and why documenting the chosen datum protects every downstream deliverable.",
    },
    {
      title: "From drone photographs to a dependable contour map",
      category: "UAV mapping",
      date: "02 May 2024",
      slug: "drone-to-contours",
      body: "Good contours begin before take-off. Flight height, overlap, ground control and surface classification all affect the final linework. Here is the quality-control workflow I use to turn imagery into an engineering-ready terrain model.",
    },
    {
      title: "What to prepare before a boundary survey",
      category: "Land",
      date: "11 Mar 2024",
      slug: "prepare-boundary-survey",
      body: "Existing site plans, adjoining owner information and clear access help a survey proceed efficiently. This practical checklist covers the documents and conversations that reduce delays without prejudging the evidence on the ground.",
    },
  ],
  contact: {
    headline: "Have a site, dataset or idea to map?",
    description:
      "Tell me where the project is and what you need to decide. I’ll suggest a clear, practical next step.",
    recipient: "hello@densurvey.com",
  },
  footer: {
    email: "hello@densurvey.com",
    phone: "+233 24 555 0184",
    copyright: "© 2025 Densurvey. Built with precision in Accra.",
  },
  theme: {
    primary: "#0A2A66",
    deep: "#071C47",
    accent: "#1F6FEB",
    hover: "#1556BF",
    link: "#0B4FBF",
    light: "#7FB0FF",
    soft: "#F3F6FB",
    text: "#14213D",
  },
};

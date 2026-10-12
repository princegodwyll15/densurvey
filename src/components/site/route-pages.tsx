"use client";

import { useState } from "react";
import { Admin } from "@/components/admin/admin";
import { ListingPage } from "@/components/admin/listing-page";
import { themeStyle } from "@/components/admin/utils";
import { ContactModal } from "@/components/contact/contact-modal";
import { DetailPage } from "@/components/each/details";
import { Home } from "@/components/sections/home-section";
import { useSite } from "./site-provider";

export function HomeRoute() {
  const { data } = useSite();
  const [contact, setContact] = useState(false);
  return (
    <>
      <Home data={data} openContact={() => setContact(true)} />
      {contact && <ContactModal data={data} close={() => setContact(false)} />}
    </>
  );
}

export function ListingRoute({
  kind,
}: {
  kind: "works" | "apps" | "articles";
}) {
  const { data } = useSite();
  return <ListingPage data={data} kind={kind} />;
}

export function DetailRoute({
  type,
  slug,
}: {
  type: "works" | "articles";
  slug: string;
}) {
  const { data, ready } = useSite();
  if (!ready) return null;
  return <DetailPage data={data} type={type} slug={slug} />;
}

export function AdminRoute() {
  const { data, publish, ready, dark, toggleDark } = useSite();
  if (!ready) return null;
  return (
    <div className="theme-surface" style={themeStyle(data.theme)}>
      <Admin data={data} publish={publish} dark={dark} toggleDark={toggleDark} />
    </div>
  );
}

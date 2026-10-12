import { useState } from "react";
import Link from "next/link";
import { MobileDrawer } from "../ui/mobile-drawer";
import { SiteData } from "@/components/data/types";
import { images } from "@/components/data/home-data";
import { Brand, Icon } from "../ui/icons";
import { adminTabs } from "@/components/admin/data";
import { TopoLines } from "@/components/ui/top-lines";
import {
  EditorTitle,
  Field,
  Upload,
  ListEditor,
  themeStyle,
} from "@/components/admin/utils";

export function Admin({
  data,
  publish,
  dark,
  toggleDark,
}: {
  data: SiteData;
  publish: (data: SiteData) => void;
  dark: boolean;
  toggleDark: () => void;
}) {
  const [draft, setDraft] = useState<SiteData>(
    JSON.parse(JSON.stringify(data)),
  );
  const [tab, setTab] = useState("Hero");
  const [saved, setSaved] = useState(false);

  const update = <K extends keyof SiteData>(key: K, value: SiteData[K]) => {
    setDraft((current) => ({ ...current, [key]: value }));
    setSaved(false);
  };

  const updateList = <K extends "services" | "works" | "apps" | "articles">(
    key: K,
    index: number,
    field: string,
    value: string,
  ) => {
    const list = [...draft[key]] as Array<Record<string, string>>;
    list[index] = { ...list[index], [field]: value };
    update(key, list as SiteData[K]);
  };

  const remove = (
    key: "services" | "works" | "apps" | "articles",
    index: number,
  ) =>
    update(
      key,
      draft[key].filter((_, i) => i !== index) as SiteData[typeof key],
    );

  const upload = (index: number, field: "image" | "pdf", file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      updateList("works", index, field, String(reader.result));
    reader.readAsDataURL(file);
  };

  const add = (key: "services" | "works" | "apps" | "articles") => {
    const blanks = {
      services: {
        title: "New service",
        subtitle: "Describe the value of this service.",
      },
      works: {
        title: "New project",
        location: "Accra, Ghana",
        year: "2025",
        category: "Survey",
        slug: `project-${Date.now()}`,
        image: images.city,
        client: "",
        scope: "",
        equipment: "",
        deliverables: "",
        pdf: "#",
      },
      apps: {
        name: "New tool",
        description: "Describe what this tool helps people do.",
        status: "In development",
      },
      articles: {
        title: "New write-up",
        category: "Field notes",
        date: "01 Jan 2025",
        slug: `article-${Date.now()}`,
        body: "Add an introduction for this article.",
      },
    };
    update(key, [...draft[key], blanks[key]] as SiteData[typeof key]);
  };

  function save() {
    publish(draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const navigation = (
    <>
      <Link href="/" className="logo-link" aria-label="Densurvey home">
        <Brand dark />
      </Link>
      <p>Website editor</p>
      <nav aria-label="Editor sections">
        {adminTabs.map((item) => (
          <button
            className={tab === item ? "active" : ""}
            onClick={() => setTab(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </nav>
      <Link className="exit-link" href="/">
        ← View website
      </Link>
    </>
  );

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">{navigation}</aside>
      <main className="admin-main">
        <div className="admin-top">
          <MobileDrawer title="Website editor" admin>
            <div className="admin-drawer-navigation">{navigation}</div>
          </MobileDrawer>
          <div>
            <span>Editing</span>
            <h1>{tab}</h1>
          </div>
          <button
            className="icon-button admin-theme-toggle"
            onClick={toggleDark}
            aria-label={dark ? "Use light mode" : "Use dark mode"}
          >
            <Icon name={dark ? "sun" : "moon"} />
          </button>
          <button className="button button-primary" onClick={save}>
            {saved ? "Published" : "Save / Publish"}
          </button>
        </div>
        <div className="admin-layout">
          <section className="editor-panel">
            {tab === "Hero" && (
              <>
                <EditorTitle
                  title="Hero"
                  help="The first message visitors see."
                />
                <Field
                  label="Headline"
                  value={draft.hero.headline}
                  onChange={(v) =>
                    update("hero", { ...draft.hero, headline: v })
                  }
                  area
                />
                <Field
                  label="Short bio"
                  value={draft.hero.bio}
                  onChange={(v) => update("hero", { ...draft.hero, bio: v })}
                  area
                />
                <div className="two-fields">
                  <Field
                    label="Primary button label"
                    value={draft.hero.primaryLabel}
                    onChange={(v) =>
                      update("hero", { ...draft.hero, primaryLabel: v })
                    }
                  />
                  <Field
                    label="Primary button link"
                    value={draft.hero.primaryLink}
                    onChange={(v) =>
                      update("hero", { ...draft.hero, primaryLink: v })
                    }
                  />
                </div>
                <div className="two-fields">
                  <Field
                    label="Secondary button label"
                    value={draft.hero.secondaryLabel}
                    onChange={(v) =>
                      update("hero", { ...draft.hero, secondaryLabel: v })
                    }
                  />
                  <Field
                    label="Secondary button link"
                    value={draft.hero.secondaryLink}
                    onChange={(v) =>
                      update("hero", { ...draft.hero, secondaryLink: v })
                    }
                  />
                </div>
                <Field
                  label="Coordinates"
                  value={draft.hero.coordinates}
                  onChange={(v) =>
                    update("hero", { ...draft.hero, coordinates: v })
                  }
                />
                <label className="toggle-row">
                  <span>
                    <strong>Contour background</strong>
                    <small>Show topographic line artwork</small>
                  </span>
                  <input
                    type="checkbox"
                    checked={draft.hero.contour}
                    onChange={(e) =>
                      update("hero", {
                        ...draft.hero,
                        contour: e.target.checked,
                      })
                    }
                  />
                </label>
              </>
            )}
            {tab === "Services" && (
              <ListEditor
                items={draft.services}
                addLabel="Add service"
                onAdd={() => add("services")}
                onRemove={(i) => remove("services", i)}
                render={(item, i) => (
                  <>
                    <Field
                      label="Service title"
                      value={item.title}
                      onChange={(v) => updateList("services", i, "title", v)}
                    />
                    <Field
                      label="Subtitle"
                      value={item.subtitle}
                      onChange={(v) => updateList("services", i, "subtitle", v)}
                      area
                    />
                  </>
                )}
              />
            )}
            {tab === "Works" && (
              <ListEditor
                items={draft.works}
                addLabel="Add project"
                onAdd={() => add("works")}
                onRemove={(i) => remove("works", i)}
                render={(item, i) => (
                  <>
                    <Field
                      label="Project title"
                      value={item.title}
                      onChange={(v) => updateList("works", i, "title", v)}
                    />
                    <div className="two-fields">
                      <Field
                        label="Location"
                        value={item.location}
                        onChange={(v) => updateList("works", i, "location", v)}
                      />
                      <Field
                        label="Year"
                        value={item.year}
                        onChange={(v) => updateList("works", i, "year", v)}
                      />
                    </div>
                    <div className="two-fields">
                      <Field
                        label="Category"
                        value={item.category}
                        onChange={(v) => updateList("works", i, "category", v)}
                      />
                      <Field
                        label="Page link"
                        value={item.slug}
                        onChange={(v) => updateList("works", i, "slug", v)}
                      />
                    </div>
                    <Field
                      label="Client"
                      value={item.client}
                      onChange={(v) => updateList("works", i, "client", v)}
                    />
                    <Field
                      label="Scope"
                      value={item.scope}
                      onChange={(v) => updateList("works", i, "scope", v)}
                      area
                    />
                    <Field
                      label="Equipment used"
                      value={item.equipment}
                      onChange={(v) => updateList("works", i, "equipment", v)}
                    />
                    <Field
                      label="Deliverables"
                      value={item.deliverables}
                      onChange={(v) =>
                        updateList("works", i, "deliverables", v)
                      }
                    />
                    <div className="upload-grid">
                      <Upload
                        label="Thumbnail image"
                        accept="image/*"
                        onChange={(f) => upload(i, "image", f)}
                      />
                      <Upload
                        label="PDF report"
                        accept=".pdf"
                        onChange={(f) => upload(i, "pdf", f)}
                      />
                    </div>
                  </>
                )}
              />
            )}
            {tab === "Apps" && (
              <ListEditor
                items={draft.apps}
                addLabel="Add app"
                onAdd={() => add("apps")}
                onRemove={(i) => remove("apps", i)}
                render={(item, i) => (
                  <>
                    <Field
                      label="App name"
                      value={item.name}
                      onChange={(v) => updateList("apps", i, "name", v)}
                    />
                    <Field
                      label="Description"
                      value={item.description}
                      onChange={(v) => updateList("apps", i, "description", v)}
                      area
                    />
                    <label>
                      Status
                      <select
                        value={item.status}
                        onChange={(e) =>
                          updateList("apps", i, "status", e.target.value)
                        }
                      >
                        <option>Live</option>
                        <option>In development</option>
                      </select>
                    </label>
                  </>
                )}
              />
            )}
            {tab === "Write-ups" && (
              <ListEditor
                items={draft.articles}
                addLabel="Add write-up"
                onAdd={() => add("articles")}
                onRemove={(i) => remove("articles", i)}
                render={(item, i) => (
                  <>
                    <Field
                      label="Title"
                      value={item.title}
                      onChange={(v) => updateList("articles", i, "title", v)}
                    />
                    <div className="two-fields">
                      <Field
                        label="Category"
                        value={item.category}
                        onChange={(v) =>
                          updateList("articles", i, "category", v)
                        }
                      />
                      <Field
                        label="Date"
                        value={item.date}
                        onChange={(v) => updateList("articles", i, "date", v)}
                      />
                    </div>
                    <Field
                      label="Page link"
                      value={item.slug}
                      onChange={(v) => updateList("articles", i, "slug", v)}
                    />
                    <Field
                      label="Introduction"
                      value={item.body}
                      onChange={(v) => updateList("articles", i, "body", v)}
                      area
                    />
                  </>
                )}
              />
            )}
            {tab === "Contact" && (
              <>
                <EditorTitle
                  title="Contact"
                  help="Set the invitation and reply address."
                />
                <Field
                  label="Headline"
                  value={draft.contact.headline}
                  onChange={(v) =>
                    update("contact", { ...draft.contact, headline: v })
                  }
                />
                <Field
                  label="Description"
                  value={draft.contact.description}
                  onChange={(v) =>
                    update("contact", { ...draft.contact, description: v })
                  }
                  area
                />
                <Field
                  label="Email recipient"
                  value={draft.contact.recipient}
                  onChange={(v) =>
                    update("contact", { ...draft.contact, recipient: v })
                  }
                />
              </>
            )}
            {tab === "Colors" && (
              <>
                <EditorTitle
                  title="Color theme"
                  help="Changes appear instantly in the preview."
                />
                <div className="color-list">
                  {Object.entries(draft.theme).map(([key, value]) => (
                    <label className="color-field" key={key}>
                      <span>{key[0].toUpperCase() + key.slice(1)}</span>
                      <input
                        type="color"
                        value={value}
                        onChange={(e) =>
                          update("theme", {
                            ...draft.theme,
                            [key]: e.target.value,
                          })
                        }
                      />
                      <input
                        value={value}
                        pattern="^#[0-9A-Fa-f]{6}$"
                        onChange={(e) =>
                          update("theme", {
                            ...draft.theme,
                            [key]: e.target.value,
                          })
                        }
                      />
                    </label>
                  ))}
                </div>
              </>
            )}
            {tab === "Footer" && (
              <>
                <EditorTitle
                  title="Footer"
                  help="Contact details shown on every page."
                />
                <Field
                  label="Email"
                  value={draft.footer.email}
                  onChange={(v) =>
                    update("footer", { ...draft.footer, email: v })
                  }
                />
                <Field
                  label="Phone"
                  value={draft.footer.phone}
                  onChange={(v) =>
                    update("footer", { ...draft.footer, phone: v })
                  }
                />
                <Field
                  label="Copyright line"
                  value={draft.footer.copyright}
                  onChange={(v) =>
                    update("footer", { ...draft.footer, copyright: v })
                  }
                />
              </>
            )}
          </section>
          <aside className="preview-panel">
            <div className="preview-bar">
              <span>Live preview</span>
              <i />
            </div>
            <div className="mini-preview" style={themeStyle(draft.theme)}>
              <div className="mini-hero">
                {draft.hero.contour && <TopoLines />}
                <Brand dark />
                <h2>{draft.hero.headline}</h2>
                <p>{draft.hero.bio}</p>
                <span className="mini-button">{draft.hero.primaryLabel}</span>
              </div>
              <div className="mini-content">
                <span>WHAT I DO</span>
                <h3>
                  Measured in the field.
                  <br />
                  Made useful everywhere.
                </h3>
                <div>
                  {draft.services.slice(0, 3).map((s) => (
                    <p key={s.title}>{s.title}</p>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

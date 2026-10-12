import { ReactNode } from "react";
import { SiteData } from "@/components/data/types";

export function EditorTitle({ title, help }: { title: string; help: string }) {
  return (
    <div className="editor-title">
      <h2>{title}</h2>
      <p>{help}</p>
    </div>
  );
}
export function Field({
  label,
  value,
  onChange,
  area = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  area?: boolean;
}) {
  return (
    <label>
      {label}
      {area ? (
        <textarea
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}
export function Upload({
  label,
  accept,
  onChange,
}: {
  label: string;
  accept: string;
  onChange: (file?: File) => void;
}) {
  return (
    <label className="upload">
      {label}
      <input
        type="file"
        accept={accept}
        onChange={(e) => onChange(e.target.files?.[0])}
      />
      <span>Choose file</span>
    </label>
  );
}
export function ListEditor<T>({
  items,
  render,
  onAdd,
  onRemove,
  addLabel,
}: {
  items: T[];
  render: (item: T, i: number) => ReactNode;
  onAdd: () => void;
  onRemove: (i: number) => void;
  addLabel: string;
}) {
  return (
    <>
      <EditorTitle
        title="Content items"
        help="Edit, reorder by removal, or add something new."
      />
      <div className="editor-list">
        {items.map((item, i) => (
          <div className="editor-card" key={i}>
            <div className="editor-card-head">
              <strong>Item {String(i + 1).padStart(2, "0")}</strong>
              <button onClick={() => onRemove(i)}>Remove</button>
            </div>
            {render(item, i)}
          </div>
        ))}
      </div>
      <button className="add-button" onClick={onAdd}>
        + {addLabel}
      </button>
    </>
  );
}

export function themeStyle(theme: SiteData["theme"]) {
  return {
    "--brand-primary": theme.primary,
    "--brand-deep": theme.deep,
    "--brand-accent": theme.accent,
    "--brand-hover": theme.hover,
    "--brand-link": theme.link,
    "--brand-light": theme.light,
    "--brand-soft": theme.soft,
    "--brand-ink": theme.text,
  } as React.CSSProperties;
}

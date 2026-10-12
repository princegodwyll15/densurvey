"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { Icon } from "./icons";

export function MobileDrawer({ title, children, admin = false }: {
  title: string;
  children: ReactNode;
  admin?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    let previousOverflow: string | undefined;
    const restoreScroll = () => {
      if (previousOverflow === undefined) return;
      document.body.style.overflow = previousOverflow;
      previousOverflow = undefined;
    };
    const lockScroll = () => {
      if (!element.open || previousOverflow !== undefined) return;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    };
    const observer = new MutationObserver(() => {
      if (element.open) lockScroll();
      else restoreScroll();
    });
    observer.observe(element, { attributes: true, attributeFilter: ["open"] });
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => {
      if (desktop.matches && element.open) element.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    element.addEventListener("close", restoreScroll);
    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", closeOnDesktop);
      element.removeEventListener("close", restoreScroll);
      restoreScroll();
    };
  }, []);

  return <>
    <button
      className={`icon-button drawer-trigger${admin ? " admin-drawer-trigger" : ""}`}
      aria-label={`Open ${title.toLowerCase()}`}
      aria-haspopup="dialog"
      aria-controls={id}
      onClick={() => dialog.current?.showModal()}
    >
      <Icon name="menu" />
    </button>
    <dialog
      ref={dialog}
      id={id}
      className="mobile-drawer"
      aria-labelledby={`${id}-title`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
            event.currentTarget.close();
          }
        }
      }}
    >
      <div className="drawer-heading">
        <span id={`${id}-title`}>{title}</span>
        <button className="icon-button" aria-label="Close navigation" onClick={() => dialog.current?.close()} autoFocus>
          <Icon name="close" />
        </button>
      </div>
      <div className="drawer-content" onClick={(event) => {
        if ((event.target as HTMLElement).closest("a, button")) dialog.current?.close();
      }}>
        {children}
      </div>
    </dialog>
  </>;
}

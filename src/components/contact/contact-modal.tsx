import { FormEvent, useState } from "react";
import { SiteData } from "@/components/data/types";
import { Icon } from "../ui/icons";

export const ContactModal = ({
  data,
  close,
}: {
  data: SiteData;
  close: () => void;
}) => {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
      >
        <button
          className="icon-button modal-close"
          onClick={close}
          aria-label="Close form"
        >
          <Icon name="close" />
        </button>
        {sent ? (
          <div className="success">
            <span className="success-mark">✓</span>
            <h2>Message ready.</h2>
            <p>
              Thanks for the project details. Dennis will reply at the email you
              provided.
            </p>
            <button className="button button-primary" onClick={close}>
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="eyebrow">Project enquiry</span>
            <h2 id="contact-title">Tell me about the site.</h2>
            <p className="modal-intro">
              A few details will help me understand the right approach.
            </p>
            <form onSubmit={submit}>
              <div className="form-grid">
                <label>
                  Full name
                  <input required name="name" placeholder="Your name" />
                </label>
                <label>
                  Email address
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                  />
                </label>
                <label>
                  Project type
                  <select name="type" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Survey</option>
                    <option>GIS</option>
                    <option>UAV mapping</option>
                    <option>Web app</option>
                  </select>
                </label>
                <label>
                  Project location
                  <input
                    name="location"
                    placeholder="Town, region or coordinates"
                  />
                </label>
              </div>
              <label>
                How can I help?
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Share the site size, deliverables and timeframe…"
                />
              </label>
              <button className="button button-primary" type="submit">
                Send enquiry <Icon name="arrow" />
              </button>
              <small>
                Sent to {data.contact.recipient}. Your details are only used to
                reply.
              </small>
            </form>
          </>
        )}
      </section>
    </div>
  );
};

import { useEffect, useState } from "react";
import "./ProjectDemoModal.css";

const IFRAME_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; camera; fullscreen";

export default function ProjectDemoModal({ open, title, src, onClose }) {
  const [loaded, setLoaded] = useState(false);
  const [frameError, setFrameError] = useState(false);

  useEffect(() => {
    if (!open) return;
    setLoaded(false);
    setFrameError(false);
  }, [open, src]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !src) return null;

  return (
    <div
      className="project-demo-backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="project-demo-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-demo-title"
      >
        <header className="project-demo-header">
          <h2 id="project-demo-title" className="project-demo-heading">
            {title}
          </h2>
          <button
            type="button"
            className="project-demo-close"
            onClick={onClose}
            aria-label="Close demo"
          >
            ×
          </button>
        </header>
        <div className="project-demo-frame-wrap">
          {!loaded && !frameError ? (
            <div className="project-demo-loading" aria-live="polite">
              Loading demo…
            </div>
          ) : null}
          {frameError ? (
            <p className="project-demo-fallback">
              This demo could not be embedded here (the host may block iframes).
              Use <strong>Details</strong> to open it in a new tab.
            </p>
          ) : (
            <iframe
              title={title}
              className="project-demo-iframe"
              src={src}
              allow={IFRAME_ALLOW}
              onLoad={() => setLoaded(true)}
              onError={() => setFrameError(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

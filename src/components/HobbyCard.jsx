import "./HobbyCard.css";

export default function HobbyCard({
  title,
  summary,
  image,
  links = [],
  onOpenDemo,
}) {
  const initial = title.trim().charAt(0).toUpperCase();
  const validLinks = links.filter(
    (link) => link && link.label && link.url && link.type,
  );
  const hasActions = validLinks.length > 0;

  return (
    <article className="hobby-card">
      <div className="hobby-card-media">
        {image ? (
          <img src={image} alt={title} className="hobby-card-image" />
        ) : (
          <div className="hobby-card-placeholder" aria-hidden="true">
            <span className="hobby-card-initial">{initial}</span>
          </div>
        )}
      </div>
      <div className="hobby-card-body">
        <h3 className="hobby-card-title">{title}</h3>
        <p className="hobby-card-summary">{summary}</p>
        {hasActions ? (
          <div className="hobby-card-actions">
            {validLinks.map((link) =>
              link.type === "demo" ? (
                <button
                  key={`${title}-${link.label}`}
                  type="button"
                  className="hobby-card-btn hobby-card-btn--primary"
                  onClick={() =>
                    onOpenDemo({
                      title: `${title} — ${link.label}`,
                      src: link.url,
                    })
                  }
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={`${title}-${link.label}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hobby-card-btn hobby-card-btn--secondary"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Contact</h3>
          <p>Email: ethan.yen30@gmail.com</p>
          <p>&copy; 2026 Ethan Yen. All rights reserved.</p>
        </div>

        <div className="footer-links" aria-label="Social links">
          <a href="https://github.com/ethanyen30" target="_blank" aria-label="GitHub" className="footer-link" title="GitHub">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.7.5 12.1c0 5.13 3.32 9.48 7.94 11.02.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.23.7-3.91-1.56-3.91-1.56-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.77 2.72 1.26 3.38.96.11-.74.41-1.26.74-1.55-2.58-.3-5.29-1.29-5.29-5.73 0-1.27.45-2.31 1.19-3.12-.12-.3-.52-1.53.11-3.19 0 0 .97-.31 3.18 1.19a11.06 11.06 0 0 1 2.9-.39c.99 0 2 .13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.66.24 2.89.12 3.19.74.81 1.19 1.85 1.19 3.12 0 4.45-2.71 5.42-5.3 5.71.42.36.79 1.09.79 2.2 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56 4.62-1.54 7.94-5.89 7.94-11.02C23.5 5.7 18.35.5 12 .5z"/></svg>
          </a>

          <a href="https://www.youtube.com/@ethanyen30" target="_blank" aria-label="YouTube" className="footer-link" title="YouTube">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.8 2.2 12 2.2 12 2.2h-.1s-4.8 0-8.6.6c-.4 0-1.4.1-2.2 1C.8 4.5.6 6.2.6 6.2S.5 8 .5 9.8v1.4C.5 13.9.6 15.7.6 15.7s.2 1.6.8 2.4c.8.9 1.9.9 2.4 1 1.8.3 7.6.6 7.6.6s4.7 0 8.6-.6c.4 0 1.4-.1 2.2-1 .6-.8.8-2.4.8-2.4s.1-1.8.1-3.6V9.8c0-1.8-.1-3.6-.1-3.6zM9.8 15.1V8.6l6.1 3.2-6.1 3.3z"/></svg>
          </a>

          <a href="https://www.linkedin.com/in/ethan-yen-3883b72b2/" target="_blank" aria-label="LinkedIn" className="footer-link" title="LinkedIn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4.98 3.5C3.34 3.5 2 4.86 2 6.5c0 1.64 1.34 2.99 2.98 2.99h.03c1.64 0 2.98-1.35 2.98-2.99C7.99 4.86 6.65 3.5 4.98 3.5zM2.5 20.5h5V8.99h-5V20.5zM9.99 8.99H15v1.53h.08c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.65V20.5h-5v-6.12c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.34 1.59-2.34 3.22V20.5h-5V8.99z"/></svg>
          </a>

        </div>
      </div>
    </footer>
  );
}
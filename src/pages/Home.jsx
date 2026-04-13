import ReactMarkdown from "react-markdown";
import homeContent from "../content/home.md?raw";
import profileImage from "../assets/pfp.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <img
        src={profileImage}
        alt="Profile"
        className="profile-image"
      />
      <section className="home-section">
        <ReactMarkdown
          components={{
            a: ({ node, ...props }) => (
              <a {...props} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
          {homeContent}
        </ReactMarkdown>
      </section>
    </div>
  );
}

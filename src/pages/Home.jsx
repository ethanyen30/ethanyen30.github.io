import ReactMarkdown from "react-markdown";
import homeContent from "../content/home.md?raw";
import profileImage from "../assets/react.svg";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-section">
      <ReactMarkdown>{homeContent}</ReactMarkdown>

      {/* <img
        src={profileImage}
        alt="Profile"
        className="profile-image"
      /> */}
    </section>
  );
}

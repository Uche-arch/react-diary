import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "../css/landing.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <img src={reactLogo} className="logo" alt="React Logo" />
        <h1>Welcome to My React Diary</h1>
        <p>
          A journey through everything I’ve learned from the official React
          docs.
        </p>
        <Link to="/diary">
          <button className="explore-btn"> Explore Diary</button>
        </Link>
      </header>
    </div>
  );
}

export default LandingPage;

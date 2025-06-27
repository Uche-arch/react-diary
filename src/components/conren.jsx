import React, { useState } from "react";
import "../css/conren.css";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <section className="lesson-section">
      <h2 className="lesson-title">🔀 Conditional Rendering (Interactive)</h2>

      <p className="lesson-text">
        Today I learned how to render different content based on conditions —
        and now I’ve built a live demo that responds to button clicks to switch
        between logged-in and logged-out states.
      </p>

      <div className="button-group">
        <button className="btn" onClick={handleLogin}>
          Log In
        </button>
        <button className="btn btn-secondary" onClick={handleLogout}>
          Log Out
        </button>
      </div>

      <div className="output-box">
        {isLoggedIn ? (
          <h2>Welcome back, user! 🎉</h2>
        ) : (
          <h2>Please log in to continue. 🔐</h2>
        )}
      </div>

      <h3 className="lesson-subtitle">✅ What I Now Understand:</h3>
      <ul className="lesson-list">
        <li>State (`useState`) can control what shows on screen</li>
        <li>Buttons can update state to trigger re-rendering</li>
        <li>Conditional rendering brings life to the UI</li>
      </ul>
    </section>
  );
}

export default ConditionalRendering;

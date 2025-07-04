import React, { useState } from "react";
import "../css/conren.css";
import confetti from "canvas-confetti";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);

    // 🎉 Trigger confetti after logging in
    confetti({
      particleCount: 220,
      spread: 100,
      origin: { y: 0.6 },
    });
  };
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <section className="lesson-section">
      <h2 className="lesson-title">🔀 Conditional Rendering (Interactive)</h2>

      <p className="lesson-text">
        Today I learned how to render different content based on conditions,
        and now I’ve built a live demo that responds to button clicks to switch texts BEAUTIFULLY.
      </p>

      <div className="button-group">
        <button className="btn" onClick={handleLogin}>
          Show
        </button>
        <button className="btn btn-secondary" onClick={handleLogout}>
          Hide
        </button>
      </div>

      <div className="output-box">
        {isLoggedIn ? (
          <h2>Smile, you're amazing!😊</h2>
        ) : (
          <h2>I have a message for you. Click the show button.</h2>
        )}
      </div>

      <h3 className="lesson-subtitle">What I Now Understand:</h3>
      <ul className="lesson-list">
        <li>Working with react hooks</li>
        <li>State (`useState`) can control what shows on screen</li>
        <li>Buttons can update state to trigger re-rendering</li>
        <li>Conditional rendering brings life to the UI</li>
      </ul>
    </section>
  );
}

export default ConditionalRendering;

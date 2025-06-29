import React, { useState } from "react";
import "../css/robotcustomizer.css";

function RobotCustomizer() {
  const [color, setColor] = useState("gray");
  const [face, setFace] = useState("😊");
  const [antenna, setAntenna] = useState(true);
  const [arms, setArms] = useState(true);

  return (
    <section className="lesson-section">
      <h2 className="lesson-title">🤖 Robot Customizer (Advanced Events)</h2>

      <p className="lesson-text">
        I built this interactive robot customizer to explore advanced event
        handling and dynamic rendering. Users can customize face, color, and
        features — and the robot preview updates instantly.
      </p>

      <div className="input-row">
        <label>Choose Face:</label>
        <button className="btn-mini" onClick={() => setFace("😊")}>
          😊
        </button>
        <button className="btn-mini" onClick={() => setFace("😎")}>
          😎
        </button>
        <button className="btn-mini" onClick={() => setFace("🤖")}>
          🤖
        </button>
      </div>

      <div className="input-row">
        <label>Pick a Color:</label>
        <button className="btn-mini" onClick={() => setColor("gray")}>
          Gray
        </button>
        <button className="btn-mini" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className="btn-mini" onClick={() => setColor("green")}>
          Green
        </button>
      </div>

      <div className="input-row">
        <label>
          <input
            type="checkbox"
            checked={antenna}
            onChange={() => setAntenna(!antenna)}
          />
          My weakness
        </label>
        {/* <label>
          <input
            type="checkbox"
            checked={arms}
            onChange={() => setArms(!arms)}
          />
          Show Arms
        </label> */}
      </div>

      <div className="robot-preview" style={{ backgroundColor: color }}>
        <div className="robot-face">{face}</div>
        {antenna && <div className="robot-part">Those pretty eyes of yours</div>}
        {/* {arms && <div className="robot-part">💪 Arms</div>} */}
      </div>

      <h3 className="lesson-subtitle">✅ What I Now Understand:</h3>
      <ul className="lesson-list">
        <li>How to respond to button clicks, checkboxes, and events</li>
        <li>How to update multiple pieces of state</li>
        <li>How to render UI conditionally based on events and state</li>
      </ul>
    </section>
  );
}

export default RobotCustomizer;

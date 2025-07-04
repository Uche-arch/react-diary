import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/bugtracker.css";

function BugTracker() {
  const [bugs, setBugs] = useState([
    { title: "Error on line 132, rubberduck needed.😂", status: "open" },
    { title: "Dashboard crashes on reload", status: "open" },
  ]);
  const [newBug, setNewBug] = useState("");

  const addBug = () => {
    if (newBug.trim() !== "") {
      setBugs([...bugs, { title: newBug.trim(), status: "open" }]);
      setNewBug("");
    }
  };

  const toggleStatus = (index) => {
    const updated = bugs.map((bug, i) =>
      i === index
        ? { ...bug, status: bug.status === "open" ? "closed" : "open" }
        : bug
    );
    setBugs(updated);
  };

  const deleteBug = (index) => {
    setBugs(bugs.filter((_, i) => i !== index));
  };

  return (
    <motion.section
      className="lesson-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="lesson-title">Bug Tracker (Rendering Lists with Power)</h2>
      <p className="lesson-text">
        I created this Bug Tracker to practice rendering lists and managing
        dynamic data. It lets me add, toggle, and delete bugs, all using
        `useState`, conditional rendering, and event handling. Also to track my annoying bugs.
      </p>

      <div className="input-row">
        <input
          className="input"
          type="text"
          placeholder="Enter new bug..."
          value={newBug}
          onChange={(e) => setNewBug(e.target.value)}
        />
        <button className="bug-btn" onClick={addBug}>
          Add Bug
        </button>
      </div>

      <ul className="task-list">
        <AnimatePresence>
          {bugs.length === 0 ? (
            <motion.li
              key="nobugs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No bugs reported. 🎉
            </motion.li>
          ) : (
            bugs.map((bug, index) => (
              <motion.li
                key={index}
                className="task-item"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div>
                  <strong>{bug.title}</strong>
                  <br />
                  <span className={`bug-status ${bug.status}`}>
                    {bug.status.toUpperCase()}
                  </span>
                </div>
                <div>
                  <button
                    className="btn-close-bug"
                    onClick={() => toggleStatus(index)}
                  >
                    {bug.status === "open" ? "Close" : "Reopen"}
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteBug(index)}
                  >
                    🗑
                  </button>
                </div>
              </motion.li>
            ))
          )}
        </AnimatePresence>
      </ul>
    </motion.section>
  );
}

export default BugTracker;

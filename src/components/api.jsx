import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import
import "../css/api.css";

function RandomUserCard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("random");

  const fetchUser = async () => {
    setLoading(true);
    try {
      let url = "https://randomuser.me/api/";
      if (gender !== "random") {
        url += `?gender=${gender}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setUser(data.results[0]);
    } catch (err) {
      console.error("Failed to fetch user:", err);
    }
    setLoading(false);
  };

  return (
    <section className="lesson-section">
      <h2 className="lesson-title">Random User Card (API Project)</h2>
      <p className="lesson-text" style={{ marginBottom: "-4px" }}>
        This was quite a complicated one, but I dealt with it.
      </p>
      <p className="lesson-text" style={{ marginBottom: "-2px" }}>
        I used <code>fetch()</code> and <code>useState</code> to call{" "}
        <code>randomuser.me</code> API and display a new profile on demand.
      </p>
      <p className="lesson-text">For quiet days? Just seeing a smile can make a big difference.🥰</p>

      <div className="filter-group">
        <label htmlFor="gender">Filter by Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="random">Random</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button className="generate-btn" onClick={fetchUser} disabled={loading}>
        {loading ? "Loading..." : "Generate User"}
      </button>

      {/* ✅ AnimatePresence enables entry/exit animations */}
      <AnimatePresence mode="wait">
        {user && (
          <motion.div
            key={user.login.uuid}
            className="user-card"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img src={user.picture.large} alt="User" />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Location:</strong> {user.location.city},{" "}
              {user.location.country}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default RandomUserCard;

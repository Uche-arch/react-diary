import { motion } from "framer-motion";
import "../css/create-com.css";

function CreatingAndNestingComponents() {
  return (
    <motion.section
      className="lesson-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="lesson-title">📘 Creating & Nesting Components</h2>

      <p className="lesson-text">
        Today I learned how to create components in React using JavaScript
        functions, and how to nest them inside one another to build a full UI.
        It’s like building Lego blocks — each one reusable and modular.
      </p>

      <h3 className="lesson-subtitle">🛠️ Demo Code:</h3>

      <motion.pre
        className="lesson-code"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {`
function Header() {
  return <h1>Welcome to My React Diary</h1>;
}

function Footer() {
  return <footer>© 2025 Uche Godswill</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <p>This is my React Diary 📝</p>
      <Footer />
    </div>
  );
}
        `}
      </motion.pre>

      <h3 className="lesson-subtitle-2">✅ What I Now Understand:</h3>
      <ul className="lesson-list">
        <li>React components must start with capital letters</li>
        <li>Each component is just a function that returns JSX</li>
        <li>You can nest components to build larger UIs</li>
      </ul>
    </motion.section>
  );
}

export default CreatingAndNestingComponents;

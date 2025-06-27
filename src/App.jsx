import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing";
import ReactDiary from "./components/reactdiary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/diary" element={<ReactDiary />} />
    </Routes>
  );
}

export default App;

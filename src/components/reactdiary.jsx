import CreatingAndNestingComponents from "./create-com";
import RandomUserCard from "./api";
import LiveStockTracker from "./stocktrak";
import RobotCustomizer from "./resevent";
import ConditionalRendering from "./conren";
import BugTracker from "./render";
import "../css/reactdiary.css";

function ReactDiary() {
  return (
    <div className="diary-wrapper">
      <h1 className="diary-title">My React Diary</h1>

      <div className="diary-section">
        <CreatingAndNestingComponents />
      </div>

      <div className="diary-section">
        <ConditionalRendering />
      </div>

      <div className="diary-section">
        <RandomUserCard />
      </div>

      <div className="diary-section">
        <RobotCustomizer />
      </div>

      <div className="diary-section">
        <BugTracker />
      </div>

      <div className="diary-section">
        <LiveStockTracker />
      </div>
    </div>
  );
}

export default ReactDiary;

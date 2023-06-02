import React, { useState } from "react";
import ShowList from "./ShowList";
import ShowSummary from "./ShowSummary";
import "./styles.css";
const App = () => {
  const [currentScreen, setCurrentScreen] = useState("showList");
  const [selectedShowId, setSelectedShowId] = useState(null);

  const handleShowSummary = (showId) => {
    setSelectedShowId(showId);
    setCurrentScreen("showSummary");
  };

  const renderScreen = () => {
    if (currentScreen === "showList") {
      return <ShowList handleShowSummary={handleShowSummary} />;
    } else if (currentScreen === "showSummary") {
      return <ShowSummary showId={selectedShowId} />;
    }
  };

  return <div className="container">{renderScreen()}</div>;
};

export default App;

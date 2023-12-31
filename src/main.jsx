import React from "react";
import ReactDOM from "react-dom/client";
import ScoreProvider from "./Components/ScoreProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>
);

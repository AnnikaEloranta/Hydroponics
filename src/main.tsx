import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SensorProvider } from "./context/SensorContext";

import "./index.css";
import App from "./App";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
        <SensorProvider>
            <App />
        </SensorProvider>
    </BrowserRouter>
  </React.StrictMode>
);
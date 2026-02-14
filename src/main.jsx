import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Flower from "./flower.jsx";
import Jai from "./jai.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Flower />
    <Jai />
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { HeroesApp } from "./HeroesApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>
);

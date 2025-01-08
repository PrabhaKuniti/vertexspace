import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import { FurnitureStore } from "./furnitureStore/FurnitureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FurnitureStore />
  </React.StrictMode>
);

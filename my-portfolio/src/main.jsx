import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import favicon from "./assets/favicon.png";

const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = favicon;
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
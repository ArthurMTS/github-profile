import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "@/components";
import { ColorModeProvider } from "./contexts/colorMode";
import "@/assets/css/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>,
);

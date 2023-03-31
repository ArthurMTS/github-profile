import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "@/components";
import { ThemeProvider, UserProvider } from "./contexts";
import "@/assets/css/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

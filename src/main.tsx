import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./main.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = createRoot(document.getElementById("app"));

root.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <App />
  </RelayEnvironmentProvider>
);

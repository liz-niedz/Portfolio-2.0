import "@elastic/eui/dist/eui_theme_light.css";
import React from "react";
import { createRoot } from "react-dom/client";
import createCache from "@emotion/cache";
import { EuiProvider, euiStylisPrefixer } from "@elastic/eui";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./App";

const cache = createCache({
  key: "codesandbox",
  stylisPlugins: [euiStylisPrefixer],
  container: document.querySelector('meta[name="emotion-styles"]'),
});
cache.compat = true;

const root = createRoot(document.getElementById("root"));
root.render(
  <EuiProvider cache={cache}>
    <Homepage />
  </EuiProvider>
);

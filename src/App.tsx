import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_light.css";
import Header from "./header";
import "./Home.css";

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiPageSidebar,
  EuiProvider,
  EuiSpacer,
  EuiText,
  EuiTextAlign,
  EuiTitle,
  withEuiTheme,
  WithEuiThemeProps,
  EuiIcon,
  EuiFlexGrid,
} from "@elastic/eui";
import SideNav from "./sideNav";
import { ThemeProvider, css } from "@emotion/react";
import HomePage from "./Home";
import { RowHeightUtils } from "@elastic/eui/src/components/datagrid/utils/row_heights";
import Projects from "./Projects";
import Connect from "./Connect";

const App = () => {
  return (
    <Router>
      <EuiFlexGrid columns={2} className="screenLayout">
        <EuiFlexItem style={{ backgroundColor: "white" }}>
          <SideNav />
        </EuiFlexItem>

        <EuiFlexItem style={{ backgroundColor: "black" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </EuiFlexItem>
      </EuiFlexGrid>
    </Router>
  );
};

export default App;

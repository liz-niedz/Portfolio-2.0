import React from "react";
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
} from "@elastic/eui";
import SideNav from "./sideNav";
import { ThemeProvider, css } from "@emotion/react";
import styled from "@emotion/styled";

// Define a theme interface
interface Theme {
  brandColor: string;
  backgroundColor: string;
}

const theme: Theme = {
  brandColor: "white",
  backgroundColor: "black",
};

// Create a styled component for the EuiFlexGroup
const StyledFlexGroup = styled(EuiFlexGroup)(({ theme }: { theme: Theme }) => ({
  color: theme.brandColor,
  backgroundColor: theme.backgroundColor,
  gap: "10px",
  padding: "40vh 1rem",
  "@media (max-width: 768px)": {
    padding: "40vh 10px",
  },
}));

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          "@media (max-width: 768px)": {
            padding: "40vh 10px",
          },
        }}
      >
        <StyledFlexGroup direction="column" alignItems="center" theme={theme}>
          <EuiTitle className="title">
            <EuiFlexItem>
              <EuiText>
                <h2>Hi, my name is</h2>
              </EuiText>
              <EuiText>
                <h1>Elizabeth Niedzwiecki</h1>
              </EuiText>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <EuiText size="m">
                <h3 className="loading"> I am a Software Developer</h3>
              </EuiText>
            </EuiFlexItem>
          </EuiTitle>
          {/* </EuiFlexItem> */}
        </StyledFlexGroup>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;

/** Old theme:
 * {
        // @ts-ignore - if providing your own Emotion theme, create your own emotion.d.ts - see https://emotion.sh/docs/typescript#define-a-theme
        brandColor: "white",
        backgroundColor: "black",
        padding: "40vh 1rem",
        "@media (max-width: 768px)": {
          padding: "40vh 10px",
        },
        height: "-webkit-fill-available",
        width: "fit-content",
      }
 */

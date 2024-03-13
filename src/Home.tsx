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

const HomePage = () => {
  return (
    <div>
      <ThemeProvider
        theme={{
          // @ts-ignore - if providing your own Emotion theme, create your own emotion.d.ts - see https://emotion.sh/docs/typescript#define-a-theme
          brandColor: "white",
          backgroundColor: "black",
          padding: "50vh",
          height: "-webkit-fill-available",
          width: "fit-content",
        }}
      >
        <EuiFlexGroup
          alignItems="center"
          css={(theme: any) => css`
            color: ${theme.brandColor};
            background-color: ${theme.backgroundColor};
            overflow: hidden;
            white-space: nowrap;
            padding: ${theme.padding};
             }
          `}
        >
          {/* <EuiFlexItem> */}

          <EuiTitle
            //   css={(theme: any) => css`
            //   color: ${theme.brandColor};
            //   background-color: ${theme.backgroundColor};
            //   overflow: hidden;
            //   white-space: nowrap;
            //    }
            // `}
            className="title"
          >
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
        </EuiFlexGroup>
      </ThemeProvider>
    </div>
  );
};

export default HomePage;

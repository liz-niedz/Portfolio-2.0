import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import "./Home.css";
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiText } from "@elastic/eui";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// Define a theme interface
interface Theme {
  brandColor: string;
  backgroundColor: string;
}

const theme: Theme = {
  brandColor: "#03c2fc",
  backgroundColor: "white",
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

const SideNav: React.FC = () => {
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
          {/* Logo and Language Selection */}
          <EuiFlexItem>
            <div
              css={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://img.icons8.com/ios/50/code--v1.png"
                alt="code--v1"
                css={{
                  width: "50px", // Responsive image size
                  height: "auto",
                }}
              />
              <EuiText size="m">
                <h2>EN</h2>
              </EuiText>
            </div>
          </EuiFlexItem>
          {/* Navigation Buttons */}
          <EuiFlexItem>
            <Link to="/" style={{ textDecoration: "none" }}>
              <EuiButton className="homeButton">Home</EuiButton>
            </Link>
          </EuiFlexItem>
          <EuiFlexItem>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <EuiButton className="homeButton">Projects</EuiButton>
            </Link>
          </EuiFlexItem>
          <EuiFlexItem>
            <Link to="/connect" style={{ textDecoration: "none" }}>
              <EuiButton className="homeButton">Connect</EuiButton>
            </Link>
          </EuiFlexItem>
        </StyledFlexGroup>
      </div>
    </ThemeProvider>
  );
};

export default SideNav;

import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import "./Home.css";
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiText } from "@elastic/eui";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

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
            <EuiButton className="homeButton" href="/">
              Home
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiButton className="homeButton" href="/projects">
              Projects
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiButton className="homeButton" href="/connect">
              Connect
            </EuiButton>
          </EuiFlexItem>
        </StyledFlexGroup>
      </div>
    </ThemeProvider>
  );
};

export default SideNav;

// import React from "react";
// import "@elastic/eui/dist/eui_theme_light.css";
// import Header from "./header";
// import "./Home.css";
// import {
//   EuiButton,
//   EuiFlexGrid,
//   EuiFlexGroup,
//   EuiFlexItem,
//   EuiPage,
//   EuiPageSidebar,
//   EuiProvider,
//   EuiText,
// } from "@elastic/eui";
// import { ThemeProvider, css } from "@emotion/react";

// const SideNav = () => {
//   return (
//     <div>
//       <ThemeProvider
//         theme={{
//           // @ts-ignore - if providing your own Emotion theme, create your own emotion.d.ts - see https://emotion.sh/docs/typescript#define-a-theme
//           brandColor: "#03c2fc",
//           backgroundColor: "white",
//           padding: "50vh",
//           height: "-webkit-fill-available",
//           width: "fit-content",
//         }}
//       >
//         <EuiFlexGroup
//           direction="column"
//           alignItems="center"
//           //style={{ gap: "5px" }}
//           css={(theme: any) => css`
//             color: ${theme.brandColor};
//             background-color: ${theme.backgroundColor};
//             padding: ${theme.padding};
//           `}
//         >
//           <EuiFlexItem
//             css={(theme: any) => css`
//               color: ${theme.brandColor};
//               background-color: ${theme.backgroundColor};
//               padding-left: 20px;
//               -webkit-text-stroke-width: 1px;
//               -webkit-text-stroke-color: black;
//             `}
//           >
//             <EuiFlexGrid columns={2} className="logoBox">
//               <EuiFlexItem>
//                 <img
//                   className="logo"
//                   src="https://img.icons8.com/ios/50/code--v1.png"
//                   alt="code--v1"
//                 />
//               </EuiFlexItem>
//               <EuiFlexItem>
//                 <EuiText size="m">
//                   <h2>EN</h2>
//                 </EuiText>
//               </EuiFlexItem>
//             </EuiFlexGrid>
//           </EuiFlexItem>
//           <EuiFlexItem style={{ paddingTop: "10px" }}>
//             <EuiButton
//               className="homeButton"
//               //style={{ backgroundColor: "#CFF3FD", color: "black" }}
//               href="/"
//             >
//               Home
//             </EuiButton>
//           </EuiFlexItem>
//           <EuiFlexItem style={{ paddingTop: "10px" }}>
//             <EuiButton
//               className="homeButton"
//               //style={{ backgroundColor: "#CFF3FD", color: "black" }}
//               href="/projects"
//             >
//               Projects
//             </EuiButton>
//           </EuiFlexItem>
//           <EuiFlexItem style={{ paddingTop: "10px" }}>
//             <EuiButton
//               className="homeButton"
//               //style={{ backgroundColor: "#CFF3FD", color: "black" }}
//               href="/connect"
//             >
//               Connect
//             </EuiButton>
//           </EuiFlexItem>
//         </EuiFlexGroup>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default SideNav;

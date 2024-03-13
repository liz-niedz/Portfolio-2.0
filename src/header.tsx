import React from 'react';
import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
import "./Home.css";
import { ThemeProvider } from '@emotion/react';

 export default function Header () {
  return (
    <ThemeProvider  theme={{
      // @ts-ignore - if providing your own Emotion theme, create your own emotion.d.ts - see https://emotion.sh/docs/typescript#define-a-theme
      brandColor: 'white',
      backgroundColor: 'black',
      padding: '1rem',
    }}>
    <EuiHeader theme='default'>
      {/* <EuiFlexGroup justifyContent='spaceBetween'> */}
      <EuiHeaderSectionItem >
        
          <EuiFlexItem >
          <img width="50" height="50" src="https://img.icons8.com/ios/50/code--v1.png" alt="code--v1"/>
      </EuiFlexItem>
      </EuiHeaderSectionItem>
      <EuiHeaderSectionItem >
      <EuiText  size="m" className="logoTitle">
              <h2>EN</h2>
            </EuiText>
            </EuiHeaderSectionItem>

      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links example">
          <EuiHeaderLink isActive>Docs</EuiHeaderLink>

          <EuiHeaderLink>Code</EuiHeaderLink>

          <EuiHeaderLink iconType="help">Help</EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
    </ThemeProvider>
  );
};
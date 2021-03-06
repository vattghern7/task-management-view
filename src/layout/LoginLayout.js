import React from "react";
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import {theme} from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: "Lato", sans-serif;
    color: ${({theme}) => theme.color.text};
}

*, *::before, *::after {
    box-sizing: border-box;
}
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({theme}) => theme.color.background};
  
  ${({theme}) => theme.media.tablet} {
    width: 500px;
    height: 600px;
    margin: 50px auto 0 auto;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
    border-radius: 5px;
  }
`;

function LoginLayout({children}) {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle/>
                <StyledWrapper>
                    {children}
                </StyledWrapper>
            </>
        </ThemeProvider>
    );
}

export default LoginLayout;
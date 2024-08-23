"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyle from "./globalStyles";
import { theme } from "./theme";

export default function ClientProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

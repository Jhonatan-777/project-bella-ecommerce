import { Poppins } from "next/font/google";

// globalStyles.tsx
import { createGlobalStyle } from "styled-components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const GlobalStyle = createGlobalStyle`
  :root {
    --font-title: ${poppins.style.fontFamily};
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;

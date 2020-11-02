import { createGlobalStyle } from "styled-components";
import theme from "./styles/";

export default createGlobalStyle`   
html {
  background-color: ${theme.colors.white};
  color: ${theme.colors.customBlack};
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: "Lato", "Source Sans Pro", "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(
    90deg,
    rgba(66, 171, 232, 1) 0%,
    rgba(58, 168, 180, 1) 50%,
    rgba(58, 180, 151, 1) 100%
  );
}  

#tsparticles {
  position:absolute;
  top:0;
  width: 100%;
  height: 100%;
  pointer-events:none;
}

`;

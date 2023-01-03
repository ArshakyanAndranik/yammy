import { createGlobalStyle } from "styled-components";
import { accentColors } from ".";

export const GlobalStyle = createGlobalStyle`
.scroll-to-top {
    position: fixed;
    right: 15px;
    bottom: 15px;
    z-index: 99999;
    background: ${accentColors.primary};
    width: 44px;
    height: 44px;
    border-radius: 50px;
    transition: all 0.4s;
svg {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}
:hover {
  background: #ec2727;
  color: #fff;
}
.scroll-top.active {
  visibility: visible;
  opacity: 1;
}
}

`;

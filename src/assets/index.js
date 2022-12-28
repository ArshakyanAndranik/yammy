import styled from "styled-components";
import chervon from "./chevron-down.svg";
import playCircle from "./play-circle.svg";
import hero from "./hero-img.png";
import about from "./about.jpg";
import about2 from "./about2.jpg";
import check from "./checkall.svg";
import clipboard from "./clipboard.svg";
import gem from "./gem.svg";
import inboxes from "./inboxes.svg";
import quote from "./quote.svg";
import star from "./star.svg";
import statsBg from "./statsBg.jpg";
import reservation from "./reservation.jpg";
import teamShape from "./teamShape.svg";
import geoAlt from "./geoAlt.svg";
import clock from "./clock.svg";

// import images for menu
import menu1 from "./menu/menu-item-1.png";
import menu2 from "./menu/menu-item-2.png";
import menu3 from "./menu/menu-item-3.png";
import menu4 from "./menu/menu-item-4.png";
import menu5 from "./menu/menu-item-5.png";
import menu6 from "./menu/menu-item-6.png";

// import images for testimonials
import testimonials1 from "./testimonials/testimonials1.jpg";
import testimonials2 from "./testimonials/testimonials2.jpg";
import testimonials3 from "./testimonials/testimonials3.jpg";
import testimonials4 from "./testimonials/testimonials4.jpg";

// import images for event
import events1 from "./event/events1.jpg";
import events2 from "./event/events2.jpg";
import events3 from "./event/events3.jpg";

// import images for chefs
import chefs1 from "./chefs/chefs1.jpg";
import chefs2 from "./chefs/chefs2.jpg";
import chefs3 from "./chefs/chefs3.jpg";

// import images for social network
import facebook from "./socialNetwork/facebook.svg";
import instagram from "./socialNetwork/instagram.svg";
import linkedin from "./socialNetwork/linkedin.svg";
import twitter from "./socialNetwork/twitter.svg";
// import images for contactUs
import envelopeFill from "./contactUs/envelopeFill.svg";
import map from "./contactUs/map.svg";
import shareFill from "./contactUs/shareFill.svg";
import telephone from "./contactUs/telephone.svg";
// import images for Arrow
import left from "./Arrow/left.svg";
import right from "./Arrow/right.svg";
import x from "./Arrow/x.svg";
// export images for menu
export const menu1SVG = menu1;
export const menu2SVG = menu2;
export const menu3SVG = menu3;
export const menu4SVG = menu4;
export const menu5SVG = menu5;
export const menu6SVG = menu6;
// export images for testimonials
export const testimonials1SVG = testimonials1;
export const testimonials2SVG = testimonials2;
export const testimonials3SVG = testimonials3;
export const testimonials4SVG = testimonials4;
// export images for menu
export const events1SVG = events1;
export const events2SVG = events2;
export const events3SVG = events3;
// export images for chefs
export const chefs1SVG = chefs1;
export const chefs2SVG = chefs2;
export const chefs3SVG = chefs3;
// export images for social network
export const FCSVG = facebook;
export const INSVG = instagram;
export const LNSVG = linkedin;
export const TWSVG = twitter;
// export images for contactUs
export const EnvelopeFillSVG = envelopeFill;
export const MapSVG = map;
export const ShareFillSVG = shareFill;
export const TelephoneSVG = telephone;
// export images for arrow
export const LeftSVG = left;
export const RightSVG = right;
export const XSVG = x;

export const ChervonSVG = chervon;
export const PlayCircleSVG = playCircle;
export const HeroSvg = hero;
export const AboutSvg = about;
export const AboutSvg2 = about2;
export const CheckSvg = check;
export const ClipboardSvg = clipboard;
export const GemSvg = gem;
export const InboxesSvg = inboxes;
export const StatsBgSvg = statsBg;
export const QuoteSvg = quote;
export const StarSvg = star;
export const TeamShapeSvg = teamShape;
export const ReservationSvg = reservation;
export const GeoAltSvg = geoAlt;
export const СlockSvg = clock;


// Fonts
export const defaultt =
  "Open Sans, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji";
export const primary = "Amatic SC, sans-serif";
export const secondary = "Inter, sans-serif";
// Colors
export const accentColors = {
  orangeLight: "#FFE5C3",
  white: "#fff",
  grey: "#7f7f90",
  darkBlue: "#37373f",
  black: "##000",
  default: "#212529",
  primary: "#ce1212",
  secondary: "#37373f",
};
// Sizes
export const size = {
  S: "@media (min-width: 576px)",
  M: " @media (min-width: 768px)",
  L: "@media (min-width: 992px)",
  XL: "@media (min-width: 1200px)",
  XXL: "@media (min-width: 1400px)",
};
export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  ${size.S} {
    max-width: 540px;
  }
  ${size.M} {
    max-width: 720px;
  }
  ${size.L} {
    max-width: 960px;
  }
  ${size.XL} {
    max-width: 1140px;
  }
  ${size.XXL} {
    max-width: 1320px;
  }
`;
export const SectionHeader = styled.div`
  text-align: center;
  padding-bottom: 30px;
  h2 {
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: #7f7f90;
    text-transform: uppercase;
    font-family: ${defaultt};
  }
  p {
    margin: 0;
    font-size: 48px;
    font-weight: 400;
    font-family: ${primary};
    span {
      color: ${accentColors.primary};
    }
  }
`;
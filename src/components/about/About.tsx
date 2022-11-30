import styled from "styled-components";
import { AboutSvg, AboutSvg2, accentColors, CheckSvg, defaultt, primary } from "../../assets";

const Section = styled.section`


`;
const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;
const SectionHeader = styled.div`
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
const Position = styled.div`
  position: relative;
  background-image: url(${AboutSvg});
  background-repeat: no-repeat;
  min-height: 750px;
  width: 760px;
  margin-right: 100px;
  @media (max-width: 992px) {
    margin-left: 0px;
  }
`;
const CallUs = styled.div`
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 10%;
  background-color: #fff;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.08);
  padding: 20px;
  text-align: center;
  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px;
    font-family: ${defaultt};
  }
  p {
    font-size: 28px;
    font-weight: 700;
    color: ${accentColors.primary};
  }
`;
const Row = styled.div`
  display: flex;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const Content = styled.div`
  min-height: 750px;
  margin-top: -20px;
  width: 660px;
  @media (max-width: 992px) {
    width: 760px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 0 0 8px 26px;
      position: relative;
      font-size: 20px;
    }
    img {
      position: absolute;
      font-size: 20px;
      left: 0;
      top: -3px;
      color: ${accentColors.primary};
    }
  }
  p {
    font-style: italic !important;
  }
`;


const Relative = styled.div`
position: relative;
`;

const Ahref = styled.a`
  width: 94px;
  height: 94px;
  background: radial-gradient(
    ${accentColors.primary} 50%,
    rgba(206, 18, 18, 0.4) 52%
  );
  border-radius: 50%;
  display: block;
  position: absolute;
  left: calc(50% - 47px);
  top: calc(50% - 47px);
  overflow: hidden;
  :before {
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation: pulsate-btn 2s;
    animation: pulsate-btn 2s;
    -webkit-animation-direction: forwards;
    animation-direction: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: steps;
    animation-timing-function: steps;
    opacity: 1;
    border-radius: 50%;
    border: 5px solid rgba(206, 18, 18, 0.7);
    top: -15%;
    left: -15%;
    background: rgba(198, 16, 0, 0);
  }
  :after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-40%) translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #fff;
    z-index: 100;
    transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  :hover
  {
    :before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-40%) translateY(-50%);
    width: 0;
    height: 0;
    border: none;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #fff;
    z-index: 200;
    -webkit-animation: none;
    animation: none;
    border-radius: 0;
  }
  }
  :hover
  {
    :after {
    border-left: 15px solid ${accentColors.primary};
    transform: scale(20);
  }
  }
`;





const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionHeader>
          <h2>About Us</h2>
          <p>
            Learn More <span>About Us</span>
          </p>
        </SectionHeader>


        <Row>
          <Position>
            <CallUs>
              <h4>Book a Table</h4>
              <p>+38 098 377 07 77</p>
            </CallUs>
          </Position>
          <Content>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <img src={CheckSvg} /> Ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </li>
              <li>
                <img src={CheckSvg} /> Duis aute irure dolor in reprehenderit in
                voluptate velit.
              </li>
              <li>
                <img src={CheckSvg} /> Ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                pariatur.
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
            <Relative>
              <img
                src={AboutSvg2}
                style={{ maxWidth: "100%", height: "auto" }}
                alt=""
              />
              <Ahref
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox play-btn"
              ></Ahref>
            </Relative>
          </Content>
        </Row>
      </Container>
    </Section>
  );
};

export default About;

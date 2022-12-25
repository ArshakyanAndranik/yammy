import styled from "styled-components";
import { accentColors, HeroSvg, PlayCircleSVG, primary } from "../../assets";
import ModalVideo from "../Modal/view";

const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  background-size: cover;
  background-color: #eee;
  position: relative;
  min-height: 60vh;
  padding: 160px 0 60px 0;
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
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const NoName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 390px) {
    margin-left: 20px;
  }
`;

const Info = styled.h2`
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 20px;

  color: ${accentColors.secondary};
  font-family: "Amatic SC", sans-serif;
  @media (max-width: 640px) {
    font-size: 36px;
  }
  @media (max-width: 390px) {
    display: flex;
    justify-content: center;
  }
`;
const Paragraph = styled.p`
  color: #4f4f5a;
  font-weight: 400;
  /* margin-left: 70px; */
  margin-bottom: 30px;
  max-width: 400px;
  @media (max-width: 390px) {
    text-align: center;
  }
`;
const Buttons = styled.div`
  display: block !important;
`;
const Btn1 = styled.a`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 36px;
  border-radius: 50px;
  transition: 0.5s;
  color: #fff;
  background: ${accentColors.primary};
  box-shadow: 0 8px 28px rgba(206, 18, 18, 0.2);
  :hover {
    background: rgba(206, 18, 18, 0.8);
    color: #fff;
    box-shadow: 0 8px 28px rgba(206, 18, 18, 0.45);
  }
`;

const Btn2 = styled.a`
  font-size: 16px;
  transition: 0.5s;
  margin-left: 25px;
  color: ${accentColors.secondary};
  font-weight: 600;
`;

const ImgSvg = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 390px) {
    max-width: 90%;
    margin-left: 20px;
  }
`;
const Modalka = styled.div`
margin-left: 140px;
margin-top: -50px;
`

const Home = () => {
  return (
    <Section id="hero">
      <Container>
        <Wrapper>
          <NoName>
            <Info data-aos="fade-up">
              Enjoy Your Healthy
              <br />
              Delicious Food
            </Info>
            <Paragraph data-aos="fade-up" data-aos-delay="100">
              Sed autem laudantium dolores. Voluptatem itaque ea consequatur
              eveniet. Eum quas beatae cumque eum quaerat.
            </Paragraph>
            <Buttons data-aos="fade-up" data-aos-delay="200">
              <Btn1 href="#book-a-table">Book a Table</Btn1>
              <Modalka>
                <ModalVideo />
              </Modalka>
            </Buttons>
          </NoName>
          <div>
            <ImgSvg src={HeroSvg} data-aos="zoom-out" data-aos-delay="300" />
          </div>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Home;

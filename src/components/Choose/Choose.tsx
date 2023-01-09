import styled from "styled-components";
import {
  accentColors,
  ClipboardSvg,
  Container,
  GemSvg,
  InboxesSvg,
  secondary,
} from "../../assets";

const Section = styled.section`
  background-color: #eee;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const Container1 = styled.div``;

const WhyBox = styled.div`
  width: 280px;
  padding: 30px;
  background: ${accentColors.primary};
  color: ${accentColors.white};
  margin-right: -60px;
  @media (max-width: 1200px) {
    margin-top: -510px;
  }
  @media (max-width: 1200px) {
    margin-top: -510px;
  }
  @media (max-width: 880px) {
    margin-top: 0px;
  }
  h3 {
    font-weight: 700;
    font-size: 34px;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 30px;
  }
  .more-btn {
    display: inline-block;
    background: rgba(255, 255, 255, 0.3);
    padding: 6px 30px 8px 30px;
    color: ${accentColors.white};
    border-radius: 50px;
    transition: all ease-in-out 0.4s;
  }
  .more-btn:hover {
    color: ${accentColors.primary};
    background: ${accentColors.white};
  }
`;

const TextCenter = styled.div`
  text-align: center !important;
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 880px) {
    flex-direction: column;
  }
  @media (max-width: 390px) {
    margin-right: 60px;
  }
`;

const Cont = styled.div`
  flex: 0 0 auto;
  width: 20%;
  height: 300px;
  margin-left: 90px;
  margin-top: -80px;
  @media (max-width: 1200px) {
    width: 500px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 990px) {
    width: 350px;
  }
  @media (max-width: 880px) {
    width: 280px;
    margin-left: 0px;
  }
  @media (max-width: 767px) {
    margin-left: 0px;
  }
`;

const Cont1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #fff;
  padding: 40px 30px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(55, 55, 63, 0.1);
  transition: 0.3s;
  @media (min-width: 1200px) {
    :hover {
      transform: scale(1.1);
    }
  }
  img {
    color: ${accentColors.primary};
    margin-bottom: 30px;
    font-size: 32px;
    background: rgba(206, 18, 18, 0.1);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
  }
  h4 {
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 30px 0;
    font-family: ${secondary};
  }
  p {
    font-size: 15px;
    color: #6c757d;
  }
`;

const Choose = () => {
  return (
    <Section id="why-us">
      <Container data-aos="fade-up">
        <Row>
          <Container2>
            <Container1 data-aos="fade-up" data-aos-delay="100">
              <WhyBox>
                <h3>Why Choose Yummy?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit Asperiores dolores sed
                  et. Tenetur quia eos. Autem tempore quibusdam vel
                  necessitatibus optio ad corporis.
                </p>
                <TextCenter>
                  <a href="#" className="more-btn">
                    Learn More <i className="bx bx-chevron-right"></i>
                  </a>
                </TextCenter>
              </WhyBox>
            </Container1>
            <Row>
              <Cont data-aos="fade-up" data-aos-delay="200">
                <Cont1>
                  <img src={ClipboardSvg} />
                  <h4>Corporis voluptates officia eiusmod</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </Cont1>
              </Cont>

              <Cont data-aos="fade-up" data-aos-delay="200">
                <Cont1>
                  <img src={GemSvg} />
                  <h4>Ullamco laboris ladore pan</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </Cont1>
              </Cont>

              <Cont data-aos="fade-up" data-aos-delay="200">
                <Cont1>
                  <img src={InboxesSvg} />
                  <h4>Labore consequatur incidid dolore</h4>
                  <p>
                    Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                    maiores omnis facere
                  </p>
                </Cont1>
              </Cont>
            </Row>
          </Container2>
        </Row>
      </Container>
    </Section>
  );
};

export default Choose;

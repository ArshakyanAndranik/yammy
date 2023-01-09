import styled from "styled-components";
import CountUp from "../../countUp/CountUp";
import { Container, secondary, StatsBgSvg } from "../../assets";

const Section = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${StatsBgSvg}) center center;
  background-size: cover;
  padding: 100px 0;
  @media (min-width: 1365px) {
    .stats-counter {
      background-attachment: fixed;
    }
  }
`;
const Row = styled.div`
  display: flex;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const Div2 = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;
const Ptext = styled.p`
  font-family: ${secondary};
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
`;

const Clients = () => {
  return (
    <Section>
      <Container data-aos="zoom-out">
        <Row>
          <Div2>
            <CountUp end={232} timer={5} />
            <Ptext>Clients</Ptext>
          </Div2>
          <Div2>
            <CountUp end={521} timer={2} />
            <Ptext>Projects</Ptext>
          </Div2>
          <Div2>
            <CountUp end={1453} timer={2} />
            <Ptext>Hours Of Support</Ptext>
          </Div2>
          <Div2>
            <CountUp end={32} timer={20} />
            <Ptext>Workers</Ptext>
          </Div2>
        </Row>
      </Container>
    </Section>
  );
};
export default Clients;

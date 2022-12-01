import styled from "styled-components";
import { StatsBgSvg } from "../../assets";
import CountUp from "../../countUp/CountUp";









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
const Row = styled.div`
  display: flex;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Div1 = styled.div`
  flex: 0 0 auto;
  width: 25%;
  flex: 0 0 auto;
  width: 50%;
`;

const Div2 = styled.div`
text-align: center;
width: 100%;
height: 100%;
`

const Clients = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Div1>
            <Div2>
              <CountUp end={232} timer={20} />
              <p>Clients</p>
            </Div2>
          </Div1>
          <Div1>
            <Div2>
              <CountUp end={521} timer={9} />
              <p>Clients</p>
            </Div2>
          </Div1>
        </Row>
      </Container>
    </Section>
  );
};
export default Clients;

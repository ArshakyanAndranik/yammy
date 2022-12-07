import styled from "styled-components";
import { AboutSvg, accentColors, chefs1SVG, defaultt, primary } from "../../assets";

const Section = styled.section`
  background-color: #eee;
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
const SelectionNeader = styled.div`
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
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Collg = styled.div`
  flex: 0 0 auto;
  width: 33.33333333%;
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: stretch;
`;
const MemberImg = styled.div`
  position: relative;
  overflow: hidden;
  :after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: url(${AboutSvg}) no-repeat center bottom;
    background-size: contain;
    z-index: 1;
  }
`;

const ChefImg = styled.img`
    
`
const Chefs = () => {
  return (
    <Section id="chefs">
      <Container data-aos="fade-up">
        <SelectionNeader>
          <h2>Chefs</h2>
          <p>
            Our <span>Proffesional</span> Chefs
          </p>
        </SelectionNeader>
        <Row>
          <Collg data-aos="fade-up" data-aos-delay="100">
            <MemberImg>
              {/* <img src={chefs1SVG} /> */}
            </MemberImg>
          </Collg>
        </Row>
      </Container>
    </Section>
  );
};

export default Chefs;

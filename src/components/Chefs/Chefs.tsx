import styled from "styled-components";
import {
  AboutSvg,
  accentColors,
  chefs1SVG,
  chefs2SVG,
  defaultt,
  FCSVG,
  INSVG,
  LNSVG,
  primary,
  TeamShapeSvg,
  TWSVG,
} from "../../assets";

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
const ChefMember = styled.div`
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0 30px rgba(55, 55, 63, 0.08);
  transition: 0.3s;
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
    background: url(${TeamShapeSvg}) no-repeat center bottom;
    background-size: contain;
    z-index: 1;
  }
`;
const ChefImg = styled.img`
  max-width: 100%;
  height: auto;
`;
const Social = styled.div`
  position: absolute;
  right: -100%;
  top: 30px;
  opacity: 0;
  border-radius: 4px;
  transition: 0.5s;
  background: rgba(255, 255, 255, 0.3);
  z-index: 2;
  a {
    transition: color 0.3s;
    color: rgba(55, 55, 63, 0.4);
    margin: 15px 12px;
    display: block;
    line-height: 0;
    text-align: center;
    :hover {
      color: rgba(55, 55, 63, 0.9);
    }
  }
`;

const MemberInfo = styled.div`
  padding: 10px 15px 20px 15px;
  h4 {
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 20px;
    color: ${accentColors.secondary};
  }
  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: rgba(33, 37, 41, 0.4);
  }
  p {
    font-style: italic;
    font-size: 14px;
    padding-top: 15px;
    line-height: 26px;
    color: rgba(33, 37, 41, 0.7);
  }
  :hover {
    transform: scale(1.08);
    box-shadow: 0px 0 30px rgba(55, 55, 63, 0.15);
    .social {
      right: 8px;
      opacity: 1;
    }
  }
`;

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
            <ChefMember>
              <MemberImg>
                <ChefImg src={chefs1SVG} />
                <Social className="social">
                  <a>
                    <img src={TWSVG} />
                  </a>
                  <a>
                    <img src={FCSVG} />
                  </a>
                  <a>
                    <img src={INSVG} />
                  </a>
                  <a>
                    <img src={LNSVG} />
                  </a>
                </Social>
              </MemberImg>
              <MemberInfo>
                <h4>Sarah Jhonson</h4>
                <span>Patissier</span>
                <p>
                  Quo esse repellendus quia id. Est eum et accusantium pariatur
                  fugit nihil minima suscipit corporis. Voluptate sed quas
                  reiciendis animi neque sapiente.
                </p>
              </MemberInfo>
            </ChefMember>
          </Collg>
        </Row>
      </Container>
    </Section>
  );
};

export default Chefs;

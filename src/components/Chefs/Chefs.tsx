import styled from "styled-components";
import {
  AboutSvg,
  accentColors,
  chefs1SVG,
  chefs2SVG,
  chefs3SVG,
  Container,
  defaultt,
  FCSVG,
  INSVG,
  LNSVG,
  primary,
  SectionHeader,
  TeamShapeSvg,
  TWSVG,
} from "../../assets";

const Section = styled.section`
  background-color: #eee;
`;


const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 390px) {
    flex-direction: column;
  }
`;

const Collg = styled.div`
  display: flex;
  align-items: stretch;
  flex: 0 0 auto;
  margin: 0 auto;
  width: 33.33333333%;
  width: 31%;
  @media (max-width: 390px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const ChefMember = styled.div`
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0 30px rgba(55, 55, 63, 0.08);
  transition: 0.3s;
  :hover {
    transform: scale(1.08);
    box-shadow: 0px 0 30px rgba(55, 55, 63, 0.15);
    .social {
      right: 8px;
      opacity: 1;
    }
  }
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
`;

const Chefs = () => {
  return (
    <Section id="chefs">
      <Container data-aos="fade-up">
        <SectionHeader>
          <h2>Chefs</h2>
          <p>
            Our <span>Proffesional</span> Chefs
          </p>
        </SectionHeader>

        <Row>
          <Collg data-aos="fade-up" data-aos-delay="100">
            <ChefMember>
              <MemberImg>
                <ChefImg src={chefs1SVG} />
                <Social className="social">
                  <a href="">
                    <img src={TWSVG} />
                  </a>
                  <a href="">
                    <img src={FCSVG} />
                  </a>
                  <a href="">
                    <img src={INSVG} />
                  </a>
                  <a href="">
                    <img src={LNSVG} />
                  </a>
                </Social>
              </MemberImg>
              <MemberInfo>
                <h4>Walter White</h4>
                <span>Master Chef</span>
                <p>
                  Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                  tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                  corporis et voluptate.
                </p>
              </MemberInfo>
            </ChefMember>
          </Collg>
          <Collg data-aos="fade-up" data-aos-delay="100">
            <ChefMember>
              <MemberImg>
                <ChefImg src={chefs2SVG} />
                <Social className="social">
                  <a href="">
                    <img src={TWSVG} />
                  </a>
                  <a href="">
                    <img src={FCSVG} />
                  </a>
                  <a href="">
                    <img src={INSVG} />
                  </a>
                  <a href="">
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
          <Collg data-aos="fade-up" data-aos-delay="100">
            <ChefMember>
              <MemberImg>
                <ChefImg src={chefs3SVG} />
                <Social className="social">
                  <a href="">
                    <img src={TWSVG} />
                  </a>
                  <a href="">
                    <img src={FCSVG} />
                  </a>
                  <a href="">
                    <img src={INSVG} />
                  </a>
                  <a href="">
                    <img src={LNSVG} />
                  </a>
                </Social>
              </MemberImg>
              <MemberInfo>
                <h4>William Anderson</h4>
                <span>Cook</span>
                <p>
                  Vero omnis enim consequatur. Voluptas consectetur unde qui
                  molestiae deserunt. Voluptates enim aut architecto porro
                  aspernatur molestiae modi.
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

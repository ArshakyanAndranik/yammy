import styled from "styled-components";
import {
  СlockSvg,
  FCSVG,
  GeoAltSvg,
  INSVG,
  LNSVG,
  TelephoneSVG,
  TWSVG,
  Container,
} from "../../assets";

const Footers = styled.footer`
  font-size: 14px;
  background-color: #1f1f24;
  padding: 50px 0;
  color: rgba(255, 255, 255, 0.7);
  h4 {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    color: #fff;
  }
`;
const Rowgy3 = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Collz3colmd6 = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 0 auto;
  margin-bottom: 30px;
  width: 23%;
  img {
    margin-left: 55px;
    margin-top: -50px;
  }
  @media (max-width: 1200px) {
    img {
      margin-left: 20px;
    }
  }
  @media (max-width: 992px) {
    width: 50%;
    margin-left: 100px;
  }
  @media (max-width: 768px) {
    img {
      margin-left: 0px;
    }
  }
  @media (max-width: 576px) {
    img {
      margin-left: 0px;
    }
  }
`;
const Collz3colmd7 = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 0 auto;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 23%;
  }
`;
const SocialLinks = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin-right: 10px;
    transition: 0.3s;
    :hover {
      color: #fff;
      border-color: #fff;
    }
  }
`;
const SocialDiv = styled.div`
  margin-left: 100px;
`;
const Copyright = styled.div`
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer = () => {
  return (
    <Footers id="footer">
      <Container>
        <Rowgy3>
          <Collz3colmd6 className="col-md-6">
            <img src={GeoAltSvg} />
            <div>
              <h4>Address</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022 - US
                <br />
              </p>
            </div>
          </Collz3colmd6>
          <Collz3colmd6 className="col-md-6">
            <img src={TelephoneSVG} style={{ width: "24px" }} />
            <div>
              <h4>Reservations</h4>
              <p>
                Phone: +1 5589 55488 55 <br />
                Email: info@example.com
                <br />
              </p>
            </div>
          </Collz3colmd6>
          <Collz3colmd6 className="col-md-6">
            <img src={СlockSvg} />
            <div>
              <h4>Opening Hours</h4>
              <p>
                Mon-Sat: 11AM - 23PM <br />
                Sunday: Closed
                <br />
              </p>
            </div>
          </Collz3colmd6>
          <Collz3colmd7 className="col-md-6">
            <SocialDiv>
              <h4>Follow Us</h4>
              <SocialLinks>
                <a href="#">
                  <img src={TWSVG} />
                </a>
                <a href="#">
                  <img src={FCSVG} />
                </a>
                <a href="#">
                  <img src={INSVG} />
                </a>
                <a href="#">
                  <img src={LNSVG} />
                </a>
              </SocialLinks>
            </SocialDiv>
          </Collz3colmd7>
        </Rowgy3>
      </Container>
      <Container>
        <Copyright>
          {" "}
          &copy; Copyright{" "}
          <strong>
            <span>Yummy</span>
          </strong>
          . All Rights Reserved
        </Copyright>
      </Container>
    </Footers>
  );
};

export default Footer;

import styled from "styled-components";
import {
  accentColors,
  CheckSvg,
  defaultt,
  menu1SVG,
  primary,
  secondary,
} from "../../assets";

const Section = styled.section``;
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
const Nav = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border: 0;
`;
const Li = styled.li`
  color: ${accentColors.grey};
  background-color: ${accentColors.white};
  border-color: ${accentColors.white};
  flex: 1 1 auto;
  text-align: center;
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
  width: 100%;
`;
const Link = styled.a`
  margin: 0 10px;
  padding: 10px 5px;
  transition: 0.3s;
  color: ${accentColors.secondary};
  border-radius: 0;
  cursor: pointer;
  height: 100%;
  border: 0;
  border-bottom: 2px solid #b6b6bf;
  h4 {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    font-family: ${secondary};
  }
  :hover {
    color: ${accentColors.primary};
  }
  @media (max-width: 575px) {
    margin: 0 10px;
    padding: 10px 0;
    h4 {
      font-size: 16px;
    }
  }
  .nav-link.active {
    color: ${accentColors.primary};
    border-color: ${accentColors.primary};
  }
`;
const Header = styled.div``;
const TabHeader = styled.div`
  padding: 30px 0;
  text-align: center;
  p {
    font-size: 14px;
    text-transform: uppercase;
    color: #676775;
    margin-bottom: 0;
  }
  h3 {
    font-size: 36px;
    font-weight: 600;
    color: ${accentColors.primary};
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const MenuItem = styled.div`
  -moz-text-align-last: center;
  text-align-last: center;
  img {
    padding: 0 60px;
    margin-bottom: 15px;
    max-width: 100%;
    height: auto;
  }
`;

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <Container data-aos="fade-up">
        <SectionHeader>
          <h2>Our Menu</h2>
          <p>
            Check Our <span>Yummy Menu</span>
          </p>
        </SectionHeader>
        <Nav data-aos="fade-up" data-aos-delay="200">
          <Link className="nav-link active show">
            <h4>Starters</h4>
          </Link>
          <Link className="nav-link">
            <h4>Breakfast</h4>
          </Link>
          <Link className="nav-link">
            <h4>Lunch</h4>
          </Link>
          <Link className="nav-link">
            <h4>Dinner</h4>
          </Link>
        </Nav>
        <Header data-aos="fade-up" data-aos-delay="300">
          <div>
            <TabHeader>
              <p>Menu</p>
              <h3>Starters</h3>
            </TabHeader>
          </div>
        </Header>
        <Row>
          <MenuItem>
                <a href="assets/img/menu/menu-item-1.png" 
                className="glightbox">
                <img src={menu1SVG} 
                className="menu-img img-fluid" alt=""/>
              </a>
                <h4>Magnam Tiste</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $5.95
                </p>
          </MenuItem>
          
        </Row>
      </Container>
    </section>
  );
};

export default Menu;

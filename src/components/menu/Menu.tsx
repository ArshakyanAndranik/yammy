import React, { useState } from "react";
import styled from "styled-components";
import Index from "..";
import { accentColors, defaultt, primary, secondary } from "../../assets";

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

  h2 {
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 400;
    margin: 0;
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

  list-style: none;
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
  max-width: 300px;
  text-align: center;
  margin-left: 40px;
  @media (max-width: 390px) {
    margin-left: 0px;
  }
  h4 {
    font-size: 22px;
    font-weight: 500;
    color: ${accentColors.secondary};
    font-family: ${secondary};
    font-weight: 30px;
    margin-bottom: 5px;
    margin-left: 90px;
    @media (max-width: 390px) {
      margin-left: 110px;
    }
  }
  h2 {
    font-family: ${secondary};
    color: #8d8d9b;
    margin-bottom: 5px;
    font-size: 16px;
    margin-left: 50px;
    @media (max-width: 390px) {
      margin-left: 110px;
    }
  }
  p {
    font-size: 24px;
    font-weight: 700;
    color: ${accentColors.primary};
    margin-left: 60px;
    @media (max-width: 390px) {
      margin-left: 110px;
    }
  }
  img {
    padding: 0 60px;
    margin-bottom: 15px;
    max-width: 100%;
    height: auto;
  }
`;

const Menu = () => {
  let str = ''
   const [state, setState] = useState("Starters");

  function changeName(value:string) {
    setState(value);
  }
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
          <Link className="active show">
            <h4
              onClick={() => {
                changeName("Starters");
              }}
            >
              Starters
            </h4>
          </Link>
          <Link>
            <h4
              onClick={() => {
                changeName("Breakfast");
              }}
            >
              Breakfast
            </h4>
          </Link>
          <Link>
            <h4
              onClick={() => {
                changeName("Lunch");
              }}
            >
              Lunch
            </h4>
          </Link>
          <Link>
            <h4
              onClick={() => {
                changeName("Dinner");
              }}
            >
              Dinner
            </h4>
          </Link>
        </Nav>
        <Header data-aos="fade-up" data-aos-delay="300">
          <div>
            <TabHeader>
              <p>Menu</p>
              <h3>{state}</h3>
            </TabHeader>
          </div>
        </Header>
      </Container>
      <Index />
    </section>
  );
};

export default Menu;

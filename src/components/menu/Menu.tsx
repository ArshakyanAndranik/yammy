import React, { useState } from "react";
import styled from "styled-components";
import Index from "..";
import { accentColors, Container, secondary, SectionHeader } from "../../assets";


const Nav = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
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
  :hover {
    border-bottom: 2px solid #bfb6b670;
  }

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
`;
const TabHeader = styled.div`
  text-align: center;

  p {
    font-size: 14px;
    text-transform: uppercase;
    color: #676775;

  }
  h3 {
    font-size: 36px;
    font-weight: 600;
    color: ${accentColors.primary};
    margin-top: -15px;
  }
`;


const Menu = () => {
   const [state, setState] = useState("Starters");

  function changeName(value:string) {
    setState(value);
  }
  return (
    <section id="menu">
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
        <div data-aos="fade-up" data-aos-delay="300">
          <div>
            <TabHeader>
              <p>Menu</p>
              <h3>{state}</h3>
            </TabHeader>
          </div>
        </div>
      </Container>
      <Index />
    </section>
  );
};

export default Menu;

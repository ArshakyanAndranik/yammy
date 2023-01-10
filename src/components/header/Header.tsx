import React, { useState } from "react";
import styled from "styled-components";
import { ChervonSVG, secondary, size } from "../../assets";
import { accentColors } from "../../assets";

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  background: ${accentColors.white};
  transition: all 0.5s;
  z-index: 997;
  height: 90px;
  width: 100%;
  border-bottom: 1px solid ${accentColors.white};
  @media (max-width: 575px) {
    height: 70px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  ${size.S} {
    max-width: 540px;
  }
  ${size.M} {
    max-width: 720px;
  }
  ${size.L} {
    max-width: 960px;
  }
  ${size.XL} {
    max-width: 1140px;
  }
  ${size.XXL} {
    max-width: 1320px;
  }
`;
const Logo = styled.a`
  font-weight: 700;
  color: ${accentColors.default};
  margin: 0;
  @media (max-width: 390px) {
    margin-left: 0px;
  }
  span {
    color: ${accentColors.primary};
  }
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #000;
    margin: 0;
    font-family: ${secondary};
  }
`;
const Book = styled.a`
  font-size: 14px;
  color: ${accentColors.white};
  background: ${accentColors.primary};
  padding: 8px 20px;
  margin-left: 30px;
  border-radius: 50px;
  transition: 0.3s;
  :focus {
    font-size: 14px;
    color: ${accentColors.white};
    background: ${accentColors.primary};
    padding: 8px 20px;
    margin-left: 50px;
    border-radius: 50px;
    transition: 0.3s;
    :hover {
      color: ${accentColors.white};
      background: rgba(206, 18, 18, 0.8);
    }
  }
  :hover {
    color: ${accentColors.white};
    background: rgba(206, 18, 18, 0.8);
  }
`;
const Icon = styled.i`
  color: ${accentColors.darkBlue};
  font-size: 28px;
  cursor: pointer;
  line-height: 0;
  transition: 0.5s;
  z-index: 9999;
  margin: 0 10px 0 20px;
`;
const Icon2 = styled.i`
  color: ${accentColors.darkBlue};
  font-size: 32px;
  cursor: pointer;
  line-height: 0;
  transition: 0.5s;
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 9999;
`;

const StyledBurger = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 1279px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 40px;
    height: 5px;
    background-color: ${
      // @ts-ignore
      ({ open }) => (open ? "#ccc" : "#333")
    };
    border-radius: 10px;
    transform-origin: 5px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${
        // @ts-ignore
        ({ open }) => (open ? "rotate(45deg)" : "rotate(0)")
      };
    }

    &:nth-child(2) {
      transform: ${
        // @ts-ignore
        ({ open }) => (open ? "translateX(100%)" : "translateX(0)")
      };
      opacity: ${
        // @ts-ignore
        ({ open }) => (open ? 0 : 1)
      };
    }

    &:nth-child(3) {
      transform: ${
        // @ts-ignore
        ({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")
      };
    }
  }
`;

const Navbar = styled.nav`
  padding: 0;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }
  li {
    position: relative;
  }
  > ul > li {
    white-space: nowrap;
    padding: 10px 0 10px 28px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px;
    font-family: ${secondary};
    font-size: 16px;
    font-weight: 600;
    color: ${accentColors.grey};
    white-space: nowrap;
    transition: 0.3s;
    position: relative;
    :focus {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 3px;
      font-family: ${secondary};
      font-size: 16px;
      font-weight: 600;
      color: ${accentColors.grey};
      white-space: nowrap;
      transition: 0.3s;
      position: relative;
    }
  }
  > ul > li > a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -6px;
    left: 0;
    background-color: ${accentColors.primary};
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
  }
  a:hover:before {
    visibility: visible;
    width: 100%;
  }

  li:hover > a:before {
    visibility: visible;
    width: 100%;
  }
  .active:before {
    visibility: visible;
    width: 100%;
  }
  a:hover {
    color: #000;
  }
  .active {
    color: #000;
  }
  .active:focus {
    color: #000;
  }
  li:hover > a {
    color: #000;
  }

  .dropdown {
    ul {
      display: block;
      position: absolute;
      left: 28px;
      top: calc(100% + 30px);
      margin: 0;
      padding: 10px 0;
      z-index: 99;
      opacity: 0;
      visibility: hidden;
      background: ${accentColors.white};
      box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
      transition: 0.3s;
      border-radius: 4px;
      li {
        min-width: 200px;
      }
      a {
        padding: 10px 20px;
        font-size: 15px;
        text-transform: none;
        font-weight: 600;
      }
      ul {
        a:hover {
          color: ${accentColors.primary};
        }
      }
      ul {
        .active:hover {
          color: ${accentColors.primary};
        }
      }

      ul {
        li:hover > a {
          color: ${accentColors.primary};
        }
      }

      .dropdown:hover > ul {
        opacity: 1;
        top: 100%;
        visibility: visible;
      }
      .dropdown {
        .dropdown {
          ul {
            top: 0;
            left: calc(100% - 30px);
            visibility: hidden;
          }
        }
      }

      .dropdown {
        .dropdown:hover > ul {
          opacity: 1;
          top: 0;
          left: 100%;
          visibility: visible;
        }
      }

      .active {
        :hover {
          color: ${accentColors.primary};
        }
      }
      li {
        min-width: 200px;

        a {
          padding: 10px 20px;
          font-size: 15px;
          text-transform: none;
          font-weight: 600;
          :hover {
            color: "#ce1212";
          }
          i {
            font-size: 12px;
          }
        }
      }
    }
  }
  .dropdown {
    ul {
      li:hover > a {
        color: "#ce1212";
      }
    }
  }
  .dropdown:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }
  .dropdown {
    .dropdown {
      ul {
        top: 0;
        left: calc(100% - 30px);
        visibility: hidden;
      }
    }
  }
  .dropdown {
    .dropdown :hover > ul {
      opacity: 1;
      top: 0;
      left: 100%;
      visibility: visible;
    }
  }

  .dropdown {
    .dropdown {
      ul {
        left: -90%;
      }
    }
  }
  .dropdown {
    .dropdown:hover > ul {
      left: -100%;
    }
  }
  @media (max-width: 1279px) {
    position: fixed;
    top: 0;
    right: -100%;

    transform: ${
      // @ts-ignore
      ({ open }) => (open ? "translateX(0)" : "translateX(100%)")
    };
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 70px;
    transition: transform 0.3s ease-in-out;
    ul {
      position: absolute;
      inset: 0;
      flex-flow: column nowrap;
      padding: 10px 0 10px 0;
      margin: 0;
      background: rgba(255, 255, 255, 0.9);
      overflow-y: auto;
      transition: 0.3s;
      z-index: 9998;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.8);
      font-size: 16px;
      font-weight: 600;
      color: #7f7f90;
      white-space: nowrap;
      transition: 0.3s;
    }
    a {
      :focus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        /* font-family: var(--font-secondary); */
        border-bottom: 2px solid rgba(255, 255, 255, 0.8);
        font-size: 16px;
        font-weight: 600;
        color: #7f7f90;
        white-space: nowrap;
        transition: 0.3s;
      }
    }
    a {
      i {
        font-size: 12px;
        line-height: 0;
        margin-left: 5px;
      }
    }
    a {
      :focus {
        i {
          font-size: 12px;
          line-height: 0;
          margin-left: 5px;
        }
      }
    }
    a {
      :hover {
        color: #000;
      }
    }
    li {
      :hover {
        a {
          color: #000;
        }
      }
    }
    .active {
      color: #000;
      border-color: ${accentColors.primary};
    }
    .active {
      :focus {
        color: #000;
        border-color: ${accentColors.primary};
      }
    }
    .dropdown {
      ul {
        position: static;
        display: none;
        padding: 10px 0;
        margin: 10px 20px;
        transition: all 0.5s ease-in-out;
        border: 1px solid #eee;
      }
    }
    .dropdown {
      .dropdown {
        ul {
          position: static;
          display: none;
          padding: 10px 0;
          margin: 10px 20px;
          transition: all 0.5s ease-in-out;
          border: 1px solid #eee;
        }
      }
    }
    .dropdown {
      .dropdown-active {
        display: block;
      }
    }
    .dropdown {
      .dropdown {
        .dropdown-active {
          display: block;
        }
      }
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Container>
        <Logo>
          <h1>
            Yummy<span>.</span>
          </h1>
        </Logo>
        {/* @ts-ignore */}
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        {/* @ts-ignore */}
        <Navbar open={open}>
          {/* @ts-ignore */}
          <ul>
            <li>
              <a href="#hero">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#chefs">Chefs</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <img src={ChervonSVG} />
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>
                    <img src={ChervonSVG} />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </Navbar>
        <Book href="#book-a-table">Book a Table</Book>
        <Icon className="mobile-nav-toggle bi bi-list"></Icon>
        <Icon2 className="mobile-nav-toggle  d-none bi bi-x"></Icon2>
      </Container>
    </Wrapper>
  );
};

export default Header;

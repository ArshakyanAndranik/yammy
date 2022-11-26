import { ChervonSVG } from "../../assets";
import styled from "styled-components";
import { accentColors } from "../../assets";
// import "./header.css";

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
`;
const Logo = styled.a`
  font-weight: 700;
  color: ${accentColors.default};
  margin: 0;
  margin-left: 140px;
`;
const Dut = styled.span`
  color: ${accentColors.primary};
`;
const Book = styled.a`
  font-size: 14px;
  color: ${accentColors.white};
  background: ${accentColors.primary};
  padding: 8px 20px;
  margin-left: 50px;
  border-radius: 50px;
  transition: 0.3s;
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
const Navbar = styled.nav`
  @media (min-width: 1280px) {
    padding: 0;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
      align-items: center;
      li {
        white-space: nowrap;
        padding: 10px 0 10px 28px;
      }
    }
    li {
      position: relative;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 3px;
      /* font-family: var(--font-secondary); */
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
        /* font-family: var(--font-secondary); */
        font-size: 16px;
        font-weight: 600;
        color: ${accentColors.grey};
        white-space: nowrap;
        transition: 0.3s;
        position: relative;
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
      :focus i {
        font-size: 12px;
        line-height: 0;
        margin-left: 5px;
      }
    }
    ul {
      li {
        a {
          :before {
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
        }
      }
    }
    a {
      :hover {
        :before {
          visibility: visible;
          width: 100%;
        }
      }
    }
    li {
      :hover {
        a {
          :before {
            visibility: visible;
            width: 100%;
          }
        }
      }
    }
    .active {
      :before {
        visibility: visible;
        width: 100%;
      }
    }
    a {
      :hover {
        color: ${accentColors.black};
      }
    }

    .active {
      color: ${accentColors.black};
    }
    .active {
      :focus {
        color: ${accentColors.black};
      }
    }
    li {
      :hover {
        a {
          color: ${accentColors.black};
        }
      }
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
        background: #fff;
        box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
        transition: 0.3s;
        border-radius: 4px;
        .active {
          :hover {
            color: "#ce1212";
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
        li {
          :hover {
            a {
              color: "#ce1212";
            }
          }
        }
      }
    }
    .dropdown {
      :hover {
        ul {
          opacity: 1;
          top: 100%;
          visibility: visible;
        }
      }
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
      .dropdown {
        :hover {
          ul {
            opacity: 1;
            top: 0;
            left: 100%;
            visibility: visible;
          }
        }
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
      .dropdown {
        :hover {
          ul {
            left: -100%;
          }
        }
      }
    }
    @media (max-width: 1366px) {
      .dropdown {
        .dropdown {
          ul {
            left: -90%;
          }
        }
      }
      .dropdown {
        .dropdown {
          :hover {
            ul {
              left: -100%;
            }
          }
        }
      }
    }
    @media (max-width: 1279px) {
      position: fixed;
      top: 0;
      right: -100%;
      width: 100%;
      max-width: 400px;
      border-left: 1px solid #666;
      bottom: 0;
      transition: 0.3s;
      z-index: 9997;
      ul {
        position: absolute;
        inset: 0;
        padding: 50px 0 10px 0;
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
        /* font-family: var(--font-secondary); */
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
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <h1>
            Yummy<Dut>.</Dut>
          </h1>
        </Logo>
        <Navbar>
          <ul>
            <li>
              <a href="#hero">Home</a>
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

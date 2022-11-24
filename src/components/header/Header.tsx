import { ChervonSVG } from '../../assets';
import  './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a className="logo">
          <h1>
            Yummy<span>.</span>
          </h1>
        </a>
        <nav className="navbar">
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
        </nav>
        <a className="book" href="#book-a-table">
          Book a Table
        </a>

      </div>
    </header>
  );};

export default Header;

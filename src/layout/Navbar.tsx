import { useState, useEffect } from "react";
import DarkModeBtn from "../components/navbar/DarkModeBtn";
import favicon from "../assets/images/icons/favicon-dark.svg";
import whiteFavicon from "../assets/images/icons/favicon-light.svg";
import "../assets/scss/style.scss";
import { AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";
import { UseThemeContext } from "../context/theme";
import Navigation from "../components/navbar/Navigation";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const { theme } = UseThemeContext();
  const [navbarScroll, setNavbarScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
  }, []);
  const onWindowScroll = () => {
    if (window.innerWidth > 768) {
      const isScrolled =
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200;

      if (isScrolled) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    }
  };
  return (
    <header
      className={`header ${navbarScroll ? "scroll-header" : ""}`}
      id="header"
    >
      <nav className="nav container">
        <a href="#" className="nav_logo">
          <img
            src={theme === "light" ? whiteFavicon : favicon}
            alt="favicon"
            height="70px"
            width="170px"
            loading="lazy"
          />
        </a>
        <div
          className={`nav_menu ${showNav ? "show-menu" : ""}`}
          id="js-navbar-tabs-id"
        >
          <Navigation />
          <div
            className="nav_close"
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className="nav_btns">
          <DarkModeBtn />
          <div
            className="nav_toggle"
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            <AiOutlineAppstore />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

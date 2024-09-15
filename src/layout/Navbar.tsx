import { useState, useEffect, useRef } from "react";
import DarkModeBtn from "../components/navbar/DarkModeBtn";
import favicon from "../assets/images/icons/favicon-dark.svg";
import whiteFavicon from "../assets/images/icons/favicon-light.svg";
import "../assets/scss/style.scss";
import { AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";
import { UseThemeContext } from "../context/theme";
import Navigation from "../components/navbar/Navigation";

function Navbar() {
  const dropdownWrapperRef = useRef<HTMLDivElement>(null);
  const dropdownToggleRef = useRef<HTMLButtonElement>(null);
  const [showNav, setShowNav] = useState(false);
  const { theme } = UseThemeContext();
  const [navbarScroll, setNavbarScroll] = useState(false);

  useEffect(() => {
    // Assign click handler to listen the click to close the dropdown when clicked outside
    document.addEventListener("click", onClickOutside);

    window.addEventListener("scroll", onWindowScroll);

    return () => {
      // Remove the listener
      document.removeEventListener("click", onClickOutside);
    };
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
  const onClickOutside = (evt: MouseEvent) => {
    const isClickOutside =
      !dropdownWrapperRef?.current?.contains(evt.target as Node) &&
      !dropdownToggleRef?.current?.contains(evt.target as Node);
    console.log(isClickOutside);

    if (isClickOutside) {
      setShowNav(false);
      document.querySelector(".nav_menu")?.classList.remove("show-menu");
    }
  };
  return (
    <div className="container">
      <header
        className={`header ${navbarScroll ? "scroll-header" : ""}`}
        id="header"
      >
        <nav className="nav">
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
            ref={dropdownWrapperRef}
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
            <button
              className="nav_toggle"
              onClick={() => {
                setShowNav(!showNav);
              }}
              ref={dropdownToggleRef}
            >
              <AiOutlineAppstore size={30} />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

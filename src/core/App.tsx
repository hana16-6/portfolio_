import { useEffect } from "react";
import { Tooltip } from "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../layout/Navbar";
import "../App.scss";
import { ThemeProvider } from "../context/theme";
import Header from "../layout/Header";
import BackToTop from "../components/BackToTop";
import AboutMe from "../components/AboutMe";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    // Remove loading animation after content load
    document.body.classList.remove("load");
    Aos.init({
      // Global settings:
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120,
      delay: 300,
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
    document
      .querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach((element) => new Tooltip(element));
  }, []);
  return (
    <>
      <div>
        <ThemeProvider>
          <Navbar />
          <BackToTop />
          <Header />
          <AboutMe />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;

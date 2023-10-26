import aboutme from "../assets/images/backgrounds/aboutme.webp";
import { FEATURES } from "../constants/about";
import { BsCheck2All, BsFillFastForwardFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { PiFlaskFill } from "react-icons/pi";
import CONFIG from "../constants/config";
import { AiOutlineCloudDownload } from "react-icons/ai";
function AboutMe() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My introduction</span>

      <div className="about_container container grid">
        <img className="about_img" loading="lazy" src={aboutme} alt="" />
        <div className="about_data">
          <p className="about_description">
            I am an enthusiast frontend developer with a great passion to
            design, analysis and developing software web applications. I am
            always looking for challenges so that I improve and give all I have
            to make everything possible.
          </p>
          <div className="about_info">
            <div>
              <span className="about_info-title">
                <span className="about_icons">
                  <PiFlaskFill />
                </span>
                <i className="uil uil-flask about_icons"></i>
              </span>
              <span className="about_info-name">
                Self <br />
                learner
              </span>
            </div>
            <div>
              <span className="about_info-title">
                <span className="about_icons">
                  <BsFillFastForwardFill />
                </span>
              </span>
              <span className="about_info-name">
                Always <br />
                motivated
              </span>
            </div>
            <div>
              <span className="about_info-title">
                <span className="about_icons">
                  <HiUsers />
                </span>{" "}
              </span>
              <span className="about_info-name">Teamwork</span>
            </div>
          </div>
          <ul className="list-unstyled tech-feature-list mt-4">
            {FEATURES.map((feature, index) => (
              <li
                className="py-1"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 300}
                key={feature.title}
              >
                <span className="icon icon-xs me-2 text-aurora">
                  <BsCheck2All className="fs-5" />
                </span>
                <strong>{feature.title}</strong> {feature.subtitle}
              </li>
            ))}
          </ul>
          <div className="mt-4 d-md-flex align-items-center">
            <a
              href="https://github.com/hana16-6"
              target="_blank"
              className="runner-btn"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Continue Reading
            </a>
            <span className="d-block d-md-none"></span>
            <a
              className="bubbly-btn mx-md-4 mx-0 mt-3 mt-md-0"
              href={CONFIG.urls.cv}
              target="_blank"
              rel="noopener"
              download=""
            >
              Download CV
              <span className="ms-2">
                <AiOutlineCloudDownload size={28} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

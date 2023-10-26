import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiMaildotru } from "react-icons/si";
import avatar from "../assets/images/backgrounds/avatar.webp";
import CONFIG from "../constants/config";

function Header() {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <div className="home_social">
            <a
              href="https://www.linkedin.com/in/hana-mohamed16"
              target="_blank"
              title="Linkedin"
              className="home_social-icon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/hana16-6"
              target="_blank"
              title="Github"
              className="home_social-icon"
            >
              <FiGithub />
            </a>
            <a
              href="mailto:hanaamohamed632@gmail.com"
              target="_blank"
              title="Gmail"
              className="home_social-icon"
            >
              <SiMaildotru />
            </a>
          </div>
          <div className="home_img" data-aos="fade-down">
            <img
              className="img-fluid border-transform"
              src={avatar}
              alt="my avatar"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </div>
          <div className="home_data" data-aos="fade-up">
            <h1 className="home_title">
              Hi,I'm <span className="hovered bg-underline">Hana</span>
            </h1>
            <h3 className="home_subtitle">Frontend Developer</h3>
            <p className="home_description">
              I have proven ability to collaborate effectively with team
              members. I have joined information technology institute and
              studied computer science at Cairo University for two years. I have
              passion for both personal growth and software development which
              I'm ready to apply for coding to develop quality solutions
            </p>
            <a
              className="bubbly-btn"
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

export default Header;

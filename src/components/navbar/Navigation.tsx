import { NAVIGATION } from "../../constants/navbar";
import CONFIG from "../../constants/config";
import { AiOutlineCloudDownload } from "react-icons/ai";

function Navigation() {
  return (
    <ul className="nav_list grid">
      {NAVIGATION.map((link) => (
        <li className="nav_item" key={link.href}>
          <a href={`#${link.href}`} className="nav_link">
            <link.icon className="nav_icon" /> {link.label}
          </a>
        </li>
      ))}

      <li className="nav_item">
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
      </li>
    </ul>
  );
}

export default Navigation;

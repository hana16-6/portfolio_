import { AiOutlineUser } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { FaMagic } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
const NAVIGATION = [
  {
    href: "home",
    title: "Home",
    label: "Home",
    icon: BiHome,
  },
  {
    href: "about",
    title: "About Me",
    label: "About",
    icon: AiOutlineUser,
  },
  {
    href: "skills",
    title: "My Skills",
    label: "Skills",
    icon: FaMagic,
  },
  {
    href: "projects",
    title: "My Projects",
    label: "Projects",
    icon: PiSuitcaseSimpleBold,
  },
];

export { NAVIGATION };

import {
  FaBootstrap,
  FaGulp,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiAntdesign,
  SiCss3,
  SiEslint,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJquery,
  SiJsonwebtokens,
  SiMarkdown,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { TbBrandMantine } from "react-icons/tb";
import { FaVuejs, FaAngular } from "react-icons/fa";

const LANGUAGES: Skill[] = [
  {
    title: "HTML",
    icon: {
      name: SiHtml5,
      props: {
        fill: "#e54d26",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "html",
  },
  {
    title: "CSS",
    icon: {
      name: SiCss3,
      props: {
        fill: "#3d8fc6",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "css",
  },
  {
    title: "Javascript",
    icon: {
      name: SiJavascript,
      props: {
        fill: "#f0db4f",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "javascript",
  },
  {
    title: "Jquery",
    icon: {
      name: SiJquery,
      props: {
        fill: "#0769ad",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "jquery",
  },
  {
    title: "React.Js",
    icon: {
      name: FaReact,
      props: {
        fill: "#61dafb",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "react",
  },
  {
    title: "Typescript",
    icon: {
      name: SiTypescript,
      props: {
        fill: "#007acc",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "typescript",
  },
  {
    title: "Bootstrap",
    icon: {
      name: FaBootstrap,
      props: {
        fill: "#7952b3",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "bootstrap",
  },
  {
    title: "Gulp.Js",
    icon: {
      name: FaGulp,
      props: {
        fill: "#de4749",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "gulp",
  },
  {
    title: "Redux",
    icon: {
      name: SiRedux,
      props: {
        fill: "#764abc",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "redux",
  },
  {
    title: "Sass",
    icon: {
      name: FaSass,
      props: {
        fill: "#ce6f9f",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "sass",
  },
  {
    title: "Tailwind CSS",
    icon: {
      name: SiTailwindcss,
      props: {
        fill: "#38b2ac",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "tailwindcss",
  },
  {
    title: "Material UI",
    icon: {
      name: SiMui,
      props: {
        fill: "#1c7fb6",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "materialui",
  },
  {
    title: "Mantine",
    icon: {
      name: TbBrandMantine,
      props: {
        color: "#12b886",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "mantine",
  },
  {
    title: "Ant Design",
    icon: {
      name: SiAntdesign,
      props: {
        fill: "#0d6fff",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "ant.design",
  },
  {
    title: "Next.js",
    icon: {
      name: SiNextdotjs,
      props: {
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "next",
  },
  {
    title: "Jest",
    icon: {
      name: SiJest,
      props: {
        fill: "#99425b",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "jest",
  },
  {
    title: "Vue",
    icon: {
      name: FaVuejs,
      props: {
        fill: "#41b883",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "vue",
  },
  {
    title: "Angular",
    icon: {
      name: FaAngular,
      props: {
        fill: "#C4473A",
        size: "1.5rem",
      },
    },
    variant: "frontend",
    slug: "angular",
  },
  {
    title: "Node.Js",
    icon: {
      name: FaNodeJs,
      props: {
        fill: "#83cd29",
        size: "1.5rem",
      },
    },
    variant: "backend",
    slug: "nodejs",
  },
  {
    title: "MongoDB",
    icon: {
      name: SiMongodb,
      props: {
        fill: "#439934",
        size: "1.5rem",
      },
    },
    variant: "backend",
    slug: "mongodb",
  },
  {
    title: "GraphQL",
    icon: {
      name: SiGraphql,
      props: {
        fill: "#e434aa",
        size: "1.5rem",
      },
    },
    variant: "backend",
    slug: "graphql",
  },
  {
    title: "Express.Js",
    icon: {
      name: SiExpress,
      props: {
        fill: "#404040",
        size: "1.5rem",
      },
    },
    variant: "backend",
    slug: "express",
  },
  {
    title: "Json web tokens",
    icon: {
      name: SiJsonwebtokens,
      props: {
        size: "1.5rem",
      },
    },
    variant: "backend",
    slug: "jwt",
  },
  {
    title: "Firebase",
    icon: {
      name: SiFirebase,
      props: {
        fill: "#f58220",
        size: "1.5rem",
      },
    },
    variant: "backend",
    slug: "Firebase",
  },
  {
    title: "Npm",
    icon: {
      name: FaNpm,
      props: {
        fill: "#cb3837",
        size: "1.5rem",
      },
    },
    variant: "tool",
    slug: "npm",
  },
  {
    title: "Markdown",
    icon: {
      name: SiMarkdown,
      props: {
        size: "1.5rem",
      },
    },
    variant: "tool",
    slug: "markdown",
  },
  {
    title: "Git",
    icon: {
      name: SiGit,
      props: {
        fill: "#f34f29",
        size: "1.5rem",
      },
    },
    variant: "tool",
    slug: "git",
  },
  {
    title: "Github",
    icon: {
      name: SiGithub,
      props: {
        size: "1.5rem",
      },
    },
    variant: "tool",
    slug: "github",
  },
  {
    title: "Eslint",
    icon: {
      name: SiEslint,
      props: {
        fill: "#4b32c3",
        size: "1.5rem",
      },
    },
    variant: "tool",
    slug: "eslint",
  },
  {
    title: "Figma",
    icon: {
      name: SiFigma,
      props: {
        fill: "#f24e1e",
        size: "1.5rem",
      },
    },
    variant: "tool",
    slug: "figma",
  },
];

const FRONTEND_ICONS = LANGUAGES.filter(
  (skill) => skill.variant === "frontend"
);

const BACKEND_ICONS = LANGUAGES.filter((skill) => skill.variant === "backend");

const TOOLS_ICONS = LANGUAGES.filter((skill) => skill.variant === "tool");

export { BACKEND_ICONS, FRONTEND_ICONS, LANGUAGES, TOOLS_ICONS };

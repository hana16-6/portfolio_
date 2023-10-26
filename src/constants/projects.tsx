import astro from "../assets/images/projects/astro.webp";
import scandiweb from "../assets/images/projects/scandiweb.webp";
import myReads from "../assets/images/projects/myreads.webp";
import portfolio from "../assets/images/projects/portfolio.webp";
import banksystem from "../assets/images/projects/bank.webp";
import zedPage from "../assets/images/projects/inovola-vue.js.webp";
import ECommerce from "../assets/images/projects/Commerce.webp";
import gallery from "../assets/images/projects/Gallery.webp";
import todoList from "../assets/images/projects/todojs.webp";
import cosmo from "../assets/images/projects/Cosmo-Junkie.webp";
import colorlib from "../assets/images/projects/iti-template.webp";
import webe from "../assets/images/projects/webe.webp";
import moGo from "../assets/images/projects/MoGo.webp";
import loopstudios from "../assets/images/projects/loopstudios.webp";
const FILTERS: FilterConstant = {
  react: {
    filter: "react-project",
    label: "React",
  },
  bootstrap: {
    filter: "bootstrap-project",
    label: "Bootstrap",
  },
  javaScript: {
    filter: "javaScript",
    label: "javaScript",
  },
  other: {
    filter: "other",
    label: "Other",
  },
};
const PROJECTS: SingleProject[] = [
  {
    title: "My-reads",
    info: "here you can search for a book an add it to your list you will be have three shelves --currently reading --want to read --read you can toggles between shelves as you like and change book shelf you can also search for a specific book by inter value at the search input when you add specific to a shelf it will be showing the shelf state in both main page and search page if there are books haven't been added to any shelf book it will be display as none at the selection input you can't search for an invalid value but on the other hand you can search by title or author",
    img: myReads,
    urls: {
      github: "https://my-reads-react-app-beta.vercel.app/",
      demo: "https://github.com/hana16-6/my-reads-react-app",
    },
    tags: ["react", "css"],
    filter: ["react-project"],
  },
  {
    title: "Scandiweb",
    info: "This task will put you face-to-face to some common tasks in the world of React development and possibly will get you acknowledged with a bit of new technologies.",
    img: scandiweb,
    urls: {
      github: "https://github.com/hana16-6/scadiweb-shopping-app-graphQl",
      demo: "https://scadiweb-shopping-app-graph-ql-bqmb.vercel.app/",
    },
    tags: ["react", "graphql", "css", "bootstrap"],
    filter: ["react-project"],
  },
  {
    title: "Astro",
    info: "Astro is a management system app where you can create, assign, and track tasks and projects with ease. Our app allows you to set priorities, deadlines, and dependencies, ensuring that you stay on top of your to-do list.",
    img: astro,
    urls: {
      github: "https://github.com/hana16-6/ASTRO-management-system-tool",
      demo: "https://astro-beta.vercel.app/",
    },
    tags: ["react", "Firebase", "css", "bootstrap"],
    filter: ["react-project"],
  },
  {
    title: "Gallery app React.js - Firebase",
    info: "simple gallery to upload images and show them using firebase",
    img: gallery,
    urls: {
      github: "https://github.com/hana16-6/gallery-firebase",
      demo: "https://gallery-firebase-cyan.vercel.app/",
    },
    tags: ["react", "Firebase", "css"],
    filter: ["react-project"],
  },
  {
    title: "Portfolio",
    info: "a simple portfolio where you can share your projects and skills",
    img: portfolio,
    urls: {
      github: "https://github.com/hana16-6/portfolio",
      demo: "https://portfolio-hana16-6.vercel.app/",
    },
    tags: ["html", "javascript", "css", "bootstrap"],
    filter: ["javaScript"],
  },
  {
    title: "TO-DO list app",
    info: "you can add your task , grag and drop it and all saved in local storage",
    img: todoList,
    urls: {
      github: "https://github.com/hana16-6/TODO-list-app-javaScript",
      demo: "https://todo-list-app-java-script.vercel.app/",
    },
    tags: ["html", "javascript", "css", "bootstrap"],
    filter: ["javaScript"],
  },
  {
    title: "bank-system-JSON server",
    info: "a simple system for bank account transactions",
    img: banksystem,
    urls: {
      github: "https://github.com/hana16-6/bank-system-app",
      demo: "https://bank-system-app-alpha.vercel.app/",
    },
    tags: ["react", "css", "bootstrap"],
    filter: ["react-project"],
  },
  {
    title: "Zed landing page Vue",
    info: "Home page learing Vue js",
    img: zedPage,
    urls: {
      github: "https://github.com/hana16-6/inovola-vue",
      demo: "https://inovola-vue.vercel.app/",
    },
    tags: ["vue", "css", "bootstrap"],
    filter: ["other"],
  },
  {
    title: "E-Commerce App Angular ",
    info: " Our eCommerce web app is designed to make shopping easy, convenient, and enjoyable for customers of all preferences and needs.",
    img: ECommerce,
    urls: {
      github: "https://github.com/hana16-6/shopping-app-angular",
      demo: "https://shopping-app-angular.vercel.app/product-list",
    },
    tags: ["angular", "css", "bootstrap"],
    filter: ["other"],
  },
  {
    title: "Cosmo Junkie",
    info: "Simple landing page to start learning responsive design",
    img: cosmo,
    urls: {
      github: "https://github.com/hana16-6/mobile-responsive",
      demo: "https://mobile-responsive-tau.vercel.app/",
    },
    tags: ["html", "css", "bootstrap"],
    filter: ["bootstrap-project"],
  },
  {
    title: "Colorlib",
    info: "ITI resposive design task",
    img: colorlib,
    urls: {
      github: "https://github.com/hana16-6/landing_page-ITI",
      demo: "https://landing-page-chi-lovat.vercel.app/",
    },
    tags: ["html", "css", "bootstrap"],
    filter: ["bootstrap-project"],
  },
  {
    title: "MoGo",
    info: "ITI Bootstrap task",
    img: moGo,
    urls: {
      github: "https://github.com/hana16-6/Landing-page-bootstrap",
      demo: "https://landing-page-bootstrap.vercel.app/",
    },
    tags: ["html", "css", "bootstrap"],
    filter: ["bootstrap-project"],
  },
  {
    title: "WEBE",
    info: "Apply required landing page design for a client",
    img: webe,
    urls: {
      github: "https://github.com/hana16-6/WEBE-Landing-page",
      demo: "https://webe-landing-page.vercel.app/",
    },
    tags: ["react", "sass", "bootstrap"],
    filter: ["bootstrap-project"],
  },
  {
    title: "loopstudios",
    info: "Apply frontend mentor challenge",
    img: loopstudios,
    urls: {
      github: "https://github.com/hana16-6/frontend",
      demo: "https://frontend-rust-sigma-22.vercel.app/#",
    },
    tags: ["html", "css"],
    filter: ["other"],
  },
];
export { FILTERS, PROJECTS };

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  xd,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hipe,
  command,
  tesla,
  shopify,
  shopifyP,
  licenseP,
  ekitenP,
  threejs,
  smtp,
  cms,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web + App Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Adobe Xd",
    icon: xd,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Game Dev",
    company_name: "Capstone",
    icon: command,
    iconBg: "#383E56",
    date: "August 2021 - July 2022",
    points: [
      "Document technical specifications, implementation details, and knowledge sharing among team members. ",
      "Write clean, efficient code to implement gameplay systems, including AI behavior. ",
      "Develop algorithms and systems for simulating realistic city dynamics,",
      "Collaborate with the design team to conceptualize and refine gameplay mechanics, features, and user interactions.",
      "Contribute creative ideas to enhance the overall player experience.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web app Developer",
    company_name: "Shopify (MERN Stack)",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2025 - Jan 2026",
    points: [
      "Developing and maintaining web app applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including product owner and other developers to create high-quality products.",
      "Implementing functional, interactive features from approved design layouts.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Hipe Japan Inc.",
    icon: hipe,
    iconBg: "#E6DEDD",
    date: "Marc 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shopify MERN",
    description:
      "Web app for Shopify stores,  an advanced translation app listed on the Shopify App Store, designed to translate both store content and third-party apps, creating a fully multilingual experience across the entire store",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopifyP,
    source_code_link: "https://github.com/",
  },
  {
    name: "License Scraping",
    description:
      "Web scraping extracts licensing data from Government Data Scraping Description(MLIT) public databases for construction companies and real estate agents, using JavaScript-based detail retrieval with sequential ID iteration and error handling.",
    tags: [
      {
        name: "FatsAPI",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: licenseP,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ekiten Scraping",
    description:
      "Web scraping extracts Ekiten shop data from public store listings by collecting information directly from store page URLs, with pagination and error checking. The extracted data - shop name, address, contact details, and other available business information.",
    tags: [
      {
        name: "FatsAPI",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: ekitenP,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sending Email API",
    description:
      "Developed and documented a scalable Email Sending API using Python FastAPI, enabling secure and efficient email delivery services. Designed RESTful endpoints for sending emails and validating SMTP configurations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "FatsAPI",
        color: "pink-text-gradient",
      },
    ],
    image: smtp,
    source_code_link: "https://github.com/",
  },
  {
    name: "CMS(MAINTENACE)",
    description:
      "Responsible for maintaining and enhancing web application systems by identifying and resolving bugs and system errors to ensure stable performance. Implemented new features based on business requirements and optimized backend processes.",
    tags: [
      {
        name: "CakePHP",
        color: "blue-text-gradient",
      },
      {
        name: "UML",
        color: "green-text-gradient",
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image: cms,
    source_code_link: "https://github.com/",
  },
  {
    name: "FE: Landang Page",
    description:
      "Developed architecture of a landing page. Implemented responsive design principles to ensure the website layout dynamically adapts to various devices and screen sizes, providing an optimal user experience across desktop, tablet, and mobile platforms.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "worldPress",
        color: "green-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
    ],
    image: cms,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

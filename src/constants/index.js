import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
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
    title: "Web Developer",
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
  {
    title: "Mobile App Developer",
    icon: creator,
  },
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
    name: "Redux Toolkit",
    icon: redux,
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
    title: "Web Developer",
    company_name: "Mayer PLC",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2018 - June 2020",
    points: [
      "Developed custom WordPress websites for clients using HTML, CSS, and PHP.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Worked on optimizing website speed and performance.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Gerlach and Sons",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2020 - April 2023",
    points: [
      "Worked on developing and maintaining multiple web applications using ReactJS, VueJS, Node.js, and MongoDB.",
      "Built REST APIs to support the frontend development team.",
      "Collaborate with cross-functional teams to design and develop scalable web applications.",
      "Implement responsive designs that provide optimal user experience across devices.",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company_name: "Berge-Hermiston",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Designed and developed a highly scalable and responsive e-commerce platform using React and Node.js.",
      "Built RESTful APIs for the platform using Express.j.s",
      "Developed a custom CMS using React and Redux to manage product listings and user data.",
      "Utilized AWS services such as S3 and CloudFront to store and serve static content.",
    ],
  },
];

const testimonials = [
  {
    testimonial: `Working with Kang was an absolute pleasure. His attention to detail and commitment to delivering high-quality work exceeded my expectations.  
      I would highly recommend them to anyone in need of a talented and reliable freelancer.`,
    name: "Camille Durand",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: `I was blown away by Kang's creativity and professionalism. 
      He took the time to understand my vision and brought it to life in a way that exceeded my expectations.
       Their communication and responsiveness were also top-notch. I would definitely work with them again.`,
    name: "Sophie Dumont",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: `I had the pleasure of working with Kang on a complex project that required a high level of skill and expertise. 
      He not only delivered exceptional work, but also provided valuable insights and suggestions that helped to improve the project even further.`,
    name: "Lisa Wang",
    designation: "CTO",
    company: "Ziemann Inc",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/apollon-comet",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/apollon-comet",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/apollon-comet",
  },
  // {
  //   name: "Real estate App",
  //   description: "Web App created with Vue JS",
  //   source_code_link: "https://real-estate-management.netlify.app/",
  //   image: quiz,
  //   // color: "color:var(--vue-color)",
  //   tags: [
  //     {
  //       name: "Vue",
  //       icon: reactjs,
  //     },
  //     {
  //       name: "html",
  //       icon: html,
  //     },
  //     {
  //       name: "css",
  //       icon: css,
  //     },
  //   ],
  // },
];

export { experiences, projects, services, technologies, testimonials };

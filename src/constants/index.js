import {
  java,
  problemsolver,

  self2,
  herobg,
  l3,
  l2,
  l4,
  l6,
  l7,
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  hoob,
  sumzz,
  news,
  jobj,
  modAi,
  chat,
  collaborator,
  evogym,
  fileshare,
  expt,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'project',
    title: 'Projects',
  },
   {
    id: 'Experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  
];

const selfpro = {
  image1: self2,
  imagebg: herobg,
};


const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Jr Data Analyst',
    icon: backend,
  },
  {
    title: 'AI Engineer',
    icon: mobile,
  },
  {
    title: 'Problem Solver',
    icon: problemsolver,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'java',
    icon: java,
  },

];

const experiences = [
  {
    title: 'ML Engineering Intern',
    company_name: 'NovaXccelerate',
    icon: l7,
    iconBg: '#ffffff',
    date: 'May 2025 – Aug 2025',
    points: [
      "Collaborated in a team of 6 to develop an AI chatbot for a university web app and built a completely new website for Hazara University.",
      "Worked on a collaborative project involving multiple people.",
    ],
  },
  {
    title: 'Artificial Intelligence Intern',
    company_name: 'Cedrus Group Pvt. Ltd',
    icon: l6,
    iconBg: '#ffffff',
    date: 'June 2024 - November 2025',
    points: [
      "Completed small ML/Python projects, preprocessing data, performing EDA, and evaluating models (Logistic Regression, Random Forest, XGBoost). Assisted in LLM-based app development with prompt engineering and documentation.",
    ],
  },
  {
    title: 'Jr Data Analyst',
    icon: l3,
    iconBg: '#383E56',
    points: [
      "Aspiring Jr Data Analyst with hands-on experience in Python, SQL, and data visualization tools like Power BI and Tableau. Completed multiple projects involving data cleaning, analysis, and reporting to derive actionable insights."
    ],
  },
  {
    title: 'React Develpment ',
    company_name: 'React.dev',
    icon: l4,
    iconBg: '#E6DEDD',
    points: [
      'React is a a great Library to work an provides fast and modular design',
      'JSX paints the canvas bright, components bloom in modular light.',
      "From simple form to grandest screen, React's magic, a developer's dream.",
      ' Made this portfolio using React and Tailwind CSS.',
    ],
  },
];

const projects = [
  {
    name: 'Collaborator',
    description:
      'Collaborator is an application that helps us to manage the tasks, track progress of the task and assign task to different team members.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'toast',
        color: 'green-text-gradient',
      },
    ],
    image: collaborator,
    source_code_link: 'https://collaborators-8cwo.onrender.com/dashboard',
  },
  // {
  //   name: 'Job junction',
  //   description:
  //     'The  Job junction  project is a web-based platform designed to facilitate job posting and job seeking . It is a web-based platform designed for job posting and job seeking .',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'mongodb',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'toast',
  //       color: 'pink-text-gradient',
  //     },
  //     {
  //       name: 'axios',
  //       color: 'red-text-gradient',
  //     },
  //   ],
  //   image: jobj,
  //   source_code_link: 'https://job-junction-cfsh.onrender.com/',
  // },
  // {
  //   name: 'Hey-',
  //   description:
  //     'This project is a chat application built using , React, Express, MongoDB, and Socket.IO. It allows users to connect with each other and communicate with each other.',
  //   tags: [
  //     {
  //       name: 'React',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'socket-io',
  //       color: 'white-text-gradient',
  //     },
  //   ],
  //   image: chat,
  //   source_code_link: 'https://hey-0b6j.onrender.com/',
  // },
  {
    name: 'Expense Tracker',
    description:
      'Expense Tracker is a full-stack web application built with GraphQL, React, and MongoDB. It allows users to track their expenses and manage their finances effectively.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'Graph-QL',
        color: 'pink-text-gradient',
      },
    ],
    image: expt,
    source_code_link: 'https://expense-tracker-z1iv.onrender.com/login',
  },
  {
    name: 'Easy-share',
    description:
      'This web application allows users to securely share files of any type with others. Built with Node.js, Express.js, EJS, Tailwind CSS, and MongoDB, it offers features like password protection for shared links.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: fileshare,
    source_code_link:
      'https://github.com/Anubhav-dev-web/CodeClauseInternship_File-Sharing-Platform',
  },
  {
    name: 'Mod-AI',
    description:
      'This landing page is built with React, Tailwind CSS, and Vite, providing a modern and efficient development environment for showcasing AI-related content.  ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Ai-page ',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: modAi,
    source_code_link: 'https://mod-ai-six.vercel.app/',
  },
  {
    name: 'EvoGym',
    description:
      'Fitness Site Landing Page project! This landing page is designed for fitness enthusiasts and is built with React, Tailwind CSS, Vite, TypeScript, Framer Motion etc.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: evogym,
    source_code_link: 'https://evo-fitness.netlify.app/',
  },

  {
    name: 'Article summarizer',
    description:
      'This website serves as a tool to summarize lengthy articles into concise and digestible summaries. It leverages the power of GPT AI model to generate accurate and coherent summaries.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'GPT-4 model',
        color: 'pink-text-gradient',
      },
    ],
    image: sumzz,
    source_code_link: 'https://ai-article-summarizer-livid.vercel.app/',
  },
  // {
  //   name: 'News App',
  //   description:
  //     'This is a web application that provides news articles from various categories sourced from an API. The app is built using React and Bootstrap, It also have multiple categories to filter from . ',
  //   tags: [
  //     {
  //       name: 'React',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'new -API',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: news,
  //   source_code_link: 'https://github.com/Anubhav-dev-web/newsapp',
  // },
];

export { services, technologies, experiences, projects, selfpro };

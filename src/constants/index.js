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
  //{
    //title: 'System Administrator',
    //company_name: 'Car Zone Maint.W.shop L.L.C.SP-Dubai Branch',
    //icon: l7,
    //iconBg: '#ffffff',
    //date: 'Present',
    //points: [
    //  "Managed system infrastructure, extracting performance data and developing automated SQL and Excel dashboards. Analyzed logs for trends, driving efficiency, while collaborating with cross-functional teams on data-informed decisions",
    //],
  //},
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
    name: '3D Animated portfolio',
    description:
      'My 3D animated portfolio is a visually dynamic showcase that highlights my skills, projects, and creative vision through immersive 3D animations and interactive design.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },

    ],
    image: collaborator,
    source_code_link: 'https://collaborators-8cwo.onrender.com/dashboard',
  },
  {
    name: 'Campus GPT(Web Portal)',
    description:
      'Campus GPT is an AI-powered university assistant that helps students instantly access academic information, guidance, and campus services in one place.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'PYTHON',
        color: 'pink-text-gradient',
      },
    ],
    image: expt,
    source_code_link: 'https://github.com/Aneesullah321/CampusGPT-Hazara-university-portal.git',
  },
  {
    name: 'Credit Card Fraud Detection using ML',
    description:
      'A machine learning system that detects credit card fraud by analyzing transaction patterns using classification models like Logistic Regression, Random Forest, and XGBoost.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: fileshare,
    source_code_link:
      'https://github.com/Aneesullah321/Credit-card-fraud-detection-using-machine-learning',
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
  

];

export { services, technologies, experiences, projects, selfpro };

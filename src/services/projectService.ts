type ProjectType = {
  title: string;
  description: string;
  githubLink: string;
  siteLink: string;
  languages: string[];
  id: string;
}[];

const projects: ProjectType = [
  {
    title: "Debbs Portfolio",
    description:
      "A single-page Product Designer and UX Researcher’s portfolio website. It showcases how I implements pixel-perfect UI/UX design, one of my HNGi7 Internship tasks",
    githubLink: "https://github.com/davidoluseun/Debbs-Portfolio",
    siteLink: "https://debbs-portfolio.herokuapp.com",
    languages: ["Bootstrap", "jQuery", "JavaScript", "PHP"],
    id: "" + Math.random(),
  },
  {
    title: "React Amazon Clone",
    description:
      "Amazon clone built with React, Node and Firebase. It uses React Functional Components, Stripe payment gateway and Firebase services",
    githubLink: "https://github.com/davidoluseun/react-amazon-clone-stripe",
    siteLink: "https://react-amazon-clone-stripe.herokuapp.com",
    languages: ["React", "Node", "Firebase", "Stripe API"],
    id: "" + Math.random(),
  },
  {
    title: "Vidly",
    description:
      "Vidly is an imaginary video rental app built with React. Uses React Class Components for global state management, pagination, sorting and searching. Integrated with Node and Express app for RESTful API services",
    githubLink: "https://github.com/davidoluseun/react-vidly",
    siteLink: "https://aod-react-vidly.herokuapp.com/",
    languages: ["React", "Node", "Bootstrap"],
    id: "" + Math.random(),
  },
  {
    title: "React Amazon Clone Paystack",
    description:
      "Amazon clone built with React, Node and Firebase. Integrated with Paystack payment gateway and Firebase services",
    githubLink: "https://github.com/davidoluseun/react-amazon-clone-stripe",
    siteLink: "https://react-amazon-clone-paystack.herokuapp.com",
    languages: ["React", "Node", "Firebase", "Paystack API"],
    id: "" + Math.random(),
  },
  {
    title: "Material UI Clone",
    description:
      "A clone of Material UI website homepage using TypeScript, React and Chakra UI",
    githubLink: "https://github.com/davidoluseun/material-ui-homepage",
    siteLink: "https://aod-material-ui.herokuapp.com/",
    languages: ["React", "Chakra UI", "TypeScript"],
    id: "" + Math.random(),
  },
  {
    title: "Quiz App",
    description: "A simple React quiz application using React Class Components",
    githubLink: "https://github.com/davidoluseun/react-quiz-app",
    siteLink: "https://aod-react-quiz.netlify.app",
    languages: ["JavaScript", "React", "CSS"],
    id: "" + Math.random(),
  },
  {
    title: "AODtechz",
    description:
      "A fictitious Web Design Agency website built with HTML, CSS, CSS Grid Module, CSS Flexible Box Module, and Woocommerce FlexSlider",
    githubLink: "https://github.com/davidoluseun/aodtechz",
    siteLink: "https://davidoluseun.github.io/aodtechz",
    languages: ["HTML", "CSS", "JavaScript", "jQuery"],
    id: "" + Math.random(),
  },
  {
    title: "React Todo App",
    description: "A todo application built with React Class Components.",
    githubLink: "https://github.com/davidoluseun/react-todo-app",
    siteLink: "https://aod-react-todo.netlify.app/",
    languages: ["React", "JavaScript", "CSS"],
    id: "" + Math.random(),
  },
  {
    title: "MyFlirt",
    description:
      "MyFlirt is a be-notify page for a mobile application. It's a UI/UX Designer & Frontend task at HNGi7 Internship",
    githubLink: "https://github.com/davidoluseun/myFlirt",
    siteLink: "https://myflirt.herokuapp.com/",
    languages: ["Bootstrap", "JavaScript", "jQuery", "PHP"],
    id: "" + Math.random(),
  },
  {
    title: "Typing Game",
    description: "Typing game application built with vanilla JavaScript",
    githubLink: "https://github.com/davidoluseun/typing-game",
    siteLink: "https://davidoluseun.github.io/typing-game",
    languages: ["JS", "CSS", "HTML"],
    id: "" + Math.random(),
  },
  {
    title: "AODtechz B",
    description:
      "A fictitious Web Design Agency website built with HTML and Bootstrap 4, integrated with Google Map Services",
    githubLink: "https://github.com/davidoluseun/aodtechz-b",
    siteLink: "https://davidoluseun.github.io/aodtechz-b",
    languages: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    id: "" + Math.random(),
  },
  {
    title: "Buffermedia Website Clone",
    description:
      "Buffermedia website clone built with HTML, CSS and vanilla JavaScript.",
    githubLink: "https://github.com/davidoluseun/buffermedia-modern",
    siteLink: "https://davidoluseun.github.io/buffermedia-modern",
    languages: ["HTML", "CSS", "JavaScript"],
    id: "" + Math.random(),
  },
];

export const getProjects = () => projects;

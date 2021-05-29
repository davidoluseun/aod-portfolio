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
      "A single page Product Designer and UX Researcher’s portfolio website. It showcases how I implement pixel-perfect design",
    githubLink: "https://github.com/davidoluseun/Debbs-Portfolio",
    siteLink: "https://debbs-portfolio.herokuapp.com",
    languages: ["Bootstrap", "jQuery", "PHP"],
    id: "" + Math.random(),
  },
  {
    title: "React Amazon Clone",
    description:
      "Amazon clone built with React, Node and Firebase. It uses Stripe payment gateway and Firebase auth services",
    githubLink: "https://github.com/davidoluseun/react-amazon-clone-stripe",
    siteLink: "https://react-amazon-clone-stripe.herokuapp.com",
    languages: ["React", "Node", "Firebase", "Stripe API"],
    id: "" + Math.random(),
  },
  {
    title: "Vidly",
    description:
      "Vidly is an imaginary video rental app built with React. It showcases pagination, sorting and searching in a React App and integration of React App with Node",
    githubLink: "https://github.com/davidoluseun/react-vidly",
    siteLink: "https://aod-react-vidly.herokuapp.com/",
    languages: ["React", "Node", "Bootstrap"],
    id: "" + Math.random(),
  },
  {
    title: "React Amazon Clone Paystack",
    description:
      "Amazon clone built with React, Node and Firebase. It uses Paystack payment gateway and Firebase auth services",
    githubLink: "https://github.com/davidoluseun/react-amazon-clone-stripe",
    siteLink: "https://react-amazon-clone-paystack.herokuapp.com",
    languages: ["React", "Node", "Firebase", "Paystack API"],
    id: "" + Math.random(),
  },
  {
    title: "Typing Game",
    description: "Typing game application built with vanilla Javascript",
    githubLink: "https://github.com/davidoluseun/typing-game",
    siteLink: "https://davidoluseun.github.io/typing-game",
    languages: ["JS", "CSS", "HTML"],
    id: "" + Math.random(),
  },
  {
    title: "Quiz App",
    description: "A simple React quiz application.",
    githubLink: "https://github.com/davidoluseun/react-quiz-app",
    siteLink: "https://aod-react-quiz.netlify.app",
    languages: ["React", "CSS"],
    id: "" + Math.random(),
  },
];

export const getProjects = () => projects;

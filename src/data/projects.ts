import { Project, OpenSourceProject } from '../types';

export const projects: Project[] = [
  {
    title: "QuadX | SFI | Cadi Inc",
    subtitle: "Warehouse Management & Automation Systems",
    description: "Projects focused on streamlining inventory management, order packing, and cross-border delivery through custom web and mobile applications. These included RFID-enabled warehouse systems for Quadx, digital kiosks for SFI, and logistics optimization platforms.",
    details: "Contributed to the development and maintenance of these systems, integrating hardware such as barcode scanners, RFID readers, OCR modules, weight bins, webcams, and MQTT for real-time operations.",
    technologies: ["ReactJS", "React Native", "Redux Toolkit", "Redux Saga", "TypeScript", "Android", "Kubernetes", "AWS (S3)", "Jenkins", "Jira", "Sonar", "GitHub Copilot", "Bolt.new", "Lovable", "MGX", "Firebase Studio"],
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Enterprise"
  },
  {
    title: "Kohl's Business Intelligence [KOHBI]",
    subtitle: "E-commerce Analytics Platform",
    description: "Projects aimed at improving user engagement and marketing effectiveness on Kohl's e-commerce platform, including a strategy management dashboard and personalized recommendation trap features.",
    details: "Contributed to the development of frontend solutions that tracked and analyzed user behavior to support personalized shopping experiences and data-driven marketing strategies.",
    technologies: ["Angular", "Vanilla JavaScript", "TypeScript", "Git", "Jasmine", "Karma"],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Analytics"
  },
  {
    title: "Trace Metric",
    subtitle: "Social Interaction Tracking & Visualization Engine",
    description: "Project designed to help organizations maintain daily operations safely during pandemics like COVID-19, minimizing business disruptions.",
    details: "Contributed to the development of a contact tracing system that supported workflow continuity while reducing health and economic risks.",
    technologies: ["Node.js", "AWS Lambda", "ReactJS", "Neo4J", "MongoDB", "Amazon SQS", "Amazon S3", "NodeMCU", "C++", "Python", "Git"],
    image: "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Healthcare"
  },
  {
    title: "CROPPY",
    subtitle: "Decentralized Agricultural Supply Chain Platform",
    description: "Project aimed at enabling secure and transparent smart contracts for local and international agricultural trade.",
    details: "Contributed to building a decentralized platform with an optimized architecture to reduce blockchain gas costs and improve transaction efficiency.",
    technologies: ["Next.js", "React", "Node.js", "Ethereum", "Web3.js", "BullMQ", "Redis", "Sass", "Git", "MetaMask", "Ganache"],
    image: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Blockchain"
  },
  {
    title: "Redeem Smart Widget",
    subtitle: "AI-Driven Retail Solutions",
    description: "Project focused on supporting AI-driven retail solutions by centralizing loyalty, marketing, and analytics features.",
    details: "Contributed to building a user-friendly dashboard to help clients manage and track customer engagement more effectively.",
    technologies: ["Angular", "Git", "Gulp", "Webpack"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Retail"
  },
  {
    title: "IBRAC",
    subtitle: "Product Recommendation Platform",
    description: "Product by Zone24x7 (Pvt) Ltd. to support recommendation algorithms and strategy execution.",
    details: "Led the development of frontend components and built dashboards for configuration and insight visualization.",
    technologies: ["Angular", "TypeScript", "Git", "Jasmine", "Karma"],
    image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "AI"
  }
];

export const openSourceProjects: OpenSourceProject[] = [
  {
    title: "ReactDashKit",
    description: "A comprehensive dashboard toolkit for React developers featuring customizable components, data visualization tools, and responsive layouts. Built with performance and scalability in mind, this toolkit allows developers to quickly implement beautiful admin interfaces with minimal configuration.",
    technologies: ["React", "TypeScript", "Redux", "Chart.js", "Tailwind CSS"],
    image: "https://camo.githubusercontent.com/ac0e6bb7ae76cf9e63febd505073071420a9aa7ae9e257799eca68a1bdcf551a/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d31364d336c506d687156596b476179475871506d345f4e3339464b42565059644d",
    githubUrl: "https://github.com/SandaruChamod/ReactDashKit",
    demoUrl: "https://reactdashkit.demo.com"
  },
  {
    title: "EtherScripter",
    description: "A development environment for Ethereum smart contracts that simplifies the creation, testing, and deployment of decentralized applications. EtherScripter features an intuitive UI, real-time compilation feedback, and integrated testing tools to streamline the blockchain development workflow.",
    technologies: ["Solidity", "JavaScript", "Web3.js", "React", "Node.js"],
    image: "https://camo.githubusercontent.com/5e972b5e78a2174a77030ed0a4a4c2c42ad86b9eeb44b9edd9d2eeddd2ffea52/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d316e6976646a685551325f6e64417a5a37574e6a3976652d4f71344f6f75507343",
    githubUrl: "https://github.com/SandaruChamod/EtherScripter"
  }
];
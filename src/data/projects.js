export const projects = [
  {
    id: "certinexa",
    title: "CertiNexa",
    subtitle: "Blockchain Certificate Verification System",
    description: "Decentralized platform where organizations issue credentials, recipients view them, and third-party verifiers confirm authenticity via tamper-proof hashing.",
    bullets: [
      "Served as primary backend architect on a 3-member team, designing 12 REST API endpoints across admin, organization, recipient, and certificate modules using Node.js/Express.",
      "Built a SHA-256-based hashing system that verifies certificate authenticity in under 2 seconds, keeping issued records tamper-proof.",
      "Designed role-based access for 3 user types — Organizations, Recipients, and Verifiers — and coordinated smart contract deployment to the Sepolia Ethereum testnet.",
      "Conducted Wireshark network traffic analysis and OWASP ZAP vulnerability assessment to test platform security end-to-end."
    ],
    tech: ["MERN", "Solidity", "Hardhat"],
    github: "https://github.com/SinghAniket24/certinexa",
    live: "https://certinexa.vercel.app/",
    image: "/projects/certinexa.png"
  },
  {
    id: "edustream",
    title: "EduStream",
    subtitle: "Personalized Learning Platform",
    description: "Full-stack learning platform that turns public YouTube videos into structured study blueprints with AI-generated comprehension quizzes.",
    bullets: [
      "Built robust backend workflows in ASP.NET Core (Razor Pages) with Supabase PostgreSQL to handle secure data storage, user progress tracking, and dynamic quiz configurations.",
      "Integrated 3 third-party APIs — YouTube Data API, Gemini API, and Auth0 — to create a seamless pipeline for video ingestion, AI-generated learning content, and user authentication.",
      "Implemented EF Core migrations for structured database schema management, ensuring reliable data handling and scalability across the platform."
    ],
    tech: ["ASP.NET Core", "Supabase", "PostgreSQL", "Gemini API", "Auth0"],
    github: "https://github.com/SinghAniket24/Learning_site",
    live: null,
    image: "/projects/EduStream.png"
  },
  {
    id: "socket-monitor",
    title: "Socket-Based System Monitor",
    subtitle: "Live Hardware Diagnostics",
    description: "A lightweight network utility that lets a mobile app remotely track and display live machine performance diagnostics from a remote server.",
    bullets: [
      "Built a socket-based client-server system connecting a Flutter mobile app to a Python server, utilizing Docker containerization for the local deployment environment.",
      "Set it up to fetch real-time CPU, memory, and disk usage metrics over the network on request.",
      "Tuned the polling to run on a stable sub-second interval so metrics stayed current without delay."
    ],
    tech: ["Python", "Flutter", "Sockets", "Docker"],
    github: "https://github.com/SinghAniket24/socket-based-system-monitor",
    live: null,
    image: "/projects/socket_app.png"
  },
  {
    id: "event-portal",
    title: "Event Portal",
    subtitle: "Event Management & Ticketing Platform",
    description: "A user-friendly Event Portal allowing users to browse events, register, and download tickets, complete with a secure admin panel for event and participant management.",
    bullets: [
      "Built a complete full-stack event platform using PHP and MySQL.",
      "Implemented a ticket generation system for successful registrations.",
      "Developed a secure admin panel for administrators to track and manage events and view participant details."
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/SinghAniket24/Event_Portal",
    live: null,
    image: "/projects/event_portal.png"
  }
];

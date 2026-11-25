export const projects = [
  {
    id: "userpulse",
    title: "UserPulse",
    subtitle: "Real-Time User Activity Pipeline",
    description: "Event-driven backend that processes user activity events in real time and serves persistent analytics, with built-in failure handling and full containerization.",
    bullets: [
      "Built a Spring Boot service that publishes user activity events to a three-partition Kafka topic and derives event counts and failed-login alerts from PostgreSQL-persisted history, so state survives restarts.",
      "Implemented retries and dead-letter handling for failed messages, and used unique event IDs with PostgreSQL conflict handling to make processing idempotent against duplicate Kafka deliveries.",
      "Containerized the full stack (Spring Boot app, Kafka, PostgreSQL) with Docker Compose for one-command setup.",
      "Wrote 57 JUnit 5 tests and configured GitHub Actions CI to run the test suite on every push and pull request."
    ],
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "JUnit"],
    github: "https://github.com/SinghAniket24/UserPulse",
    live: null,
    image: "/projects/userpulse.png"
  },
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
      "Built robust backend workflows with Supabase PostgreSQL to handle secure data storage, user progress tracking, and dynamic quiz configurations.",
      "Integrated 3 third-party APIs — YouTube Data API, Gemini API, and Auth0 — to create a seamless pipeline for video ingestion, AI-generated learning content, and user authentication.",
      "Implemented database migrations for structured schema management, ensuring reliable data handling and scalability across the platform."
    ],
    tech: ["Supabase", "PostgreSQL", "Gemini API", "Auth0"],
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
  }
];

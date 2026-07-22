export const projects = [
  {
    id: "certinexa",
    title: "CertiNexa",
    subtitle: "Blockchain Certificate Verification System",
    description: "A decentralized digital certificate platform where organizations issue credentials, recipients view them, and third-party verifiers confirm authenticity using tamper-proof hashing.",
    bullets: [
      "Served as the primary backend architect on a 3-student capstone team, designing scalable REST APIs and database layers for certificate issuance, storage, and verification.",
      "Built a SHA-256 based hashing system that verifies certificate authenticity in under 2 seconds, keeping records tamper-proof.",
      "Designed role-based access for 3 user types — Organizations, Recipients, and Verifiers — each with distinct permissions, and coordinated with 2 teammates to build the platform on the Sepolia Ethereum testnet."
    ],
    tech: ["MERN Stack", "Blockchain", "REST APIs", "Ethereum Testnet", "SHA-256"],
    github: "https://github.com/SinghAniket24/certinexa",
    live: "https://certinexa.vercel.app/",
    image: "/projectss/certinexa.png"
  },
  {
    id: "edustream",
    title: "EduStream",
    subtitle: "Personalized Learning Platform",
    description: "A full-stack learning management platform that turns public YouTube videos into structured, step-by-step study blueprints with AI-generated comprehension quizzes.",
    bullets: [
      "Developed backend workflows in ASP.NET Core integrated with Supabase (Postgres) to manage secure data storage, user progress tracking, and quiz configurations.",
      "Integrated the YouTube Data API to pull video content into study plans, and the Gemini API to automatically generate structured study plans and quizzes."
    ],
    tech: ["ASP.NET Core", "Supabase", "Postgres", "Gemini API", "YouTube Data API"],
    github: "https://github.com/SinghAniket24/Learning_site",
    live: null,
    image: "/projectss/EduStream.png"
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
    image: "/projectss/socket_app.png"
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
    image: "/event_portal.png"
  }
];

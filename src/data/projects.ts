import { Project } from "../types";

export const projects: Project[] = [
  {
    name: "Roza",
    description:
      "A full-stack platform for writers and readers. Authors plan and draft books in a Writing Studio, publish them as EPUBs, and read them in a Reading Room with an AI reading companion, a Hebrew dictionary, and audiobook narration. Claude and ChatGPT can propose edits through an MCP connector, and nothing reaches the book until the author approves it. Roza runs on the web, as an installable PWA, and as a Windows desktop app.",
    features: [
      {
        title: "Writing Studio",
        description:
          "A Slate-based manuscript editor with drafts, backups of the main text, inline draft comparison, find, go to line, word goals, and change-only saving.",
      },
      {
        title: "Chapter Bible and Planning",
        description:
          "Each chapter links to its characters, themes, plotlines, notes, and summary. A chapter overview board and book-level task boards support planning, with drag-and-drop ordering.",
      },
      {
        title: "Screenplay Mode",
        description:
          "Chapters can be written as screenplays with semantic scene, action, character, and dialogue blocks and dedicated keyboard shortcuts.",
      },
      {
        title: "Inline Notes",
        description:
          "Writers can attach notes to an exact text selection. Notes appear in the margin, in Read mode, and in the Chapter Bible.",
      },
      {
        title: "EPUB Publishing",
        description:
          "A Writing Studio book can be published as an EPUB with a cover, title page, and table of contents. It then opens in the Reading Room, and it can be updated after more writing.",
      },
      {
        title: "Reading Room",
        description:
          "A private EPUB library and reader with saved progress, highlights, personal annotations, flagged passages, full-text search, and offline caching of recent books.",
      },
      {
        title: "AI Reading Companion",
        description:
          "Readers can ask about a passage, a character, or the whole book in tabbed chat groups. Answers draw on relevant excerpts and avoid spoilers past the reader's position unless allowed.",
      },
      {
        title: "Audiobook Mode",
        description:
          "Books are narrated with OpenAI voices, local Kokoro voices, or system voices, with sentence and word highlighting that follows the audio. Local voices are free, private, and work offline in the desktop app.",
      },
      {
        title: "Language Tools and Focused Reading",
        description:
          "Readers get a Hebrew dictionary with a translation fallback and a private vocabulary list. Sentence Mode, RSVP speed reading, and keyboard word navigation support close reading.",
      },
      {
        title: "AI Editing Through MCP",
        description:
          "An MCP server lets Claude and ChatGPT propose chapter drafts, story elements, and tasks. A Staging Room shows each change as a diff, and the author approves or rejects it. The live book is backed up before every approval.",
      },
      {
        title: "Windows Desktop App",
        description:
          "An Electron app packages the Reading Room and Writing Studio, runs local narration voices, and shows reading and writing progress on the taskbar.",
      },
      {
        title: "Book Reviews and Research",
        description:
          "Readers can build structured book reviews with quotations, page references, notes, and images, and reorder them with drag and drop.",
      },
      {
        title: "Hebrew and English",
        description:
          "The interface supports Hebrew and English with right-to-left layouts, and chapters can be exported as styled PDFs.",
      },
      {
        title: "Automated Deployment",
        description:
          "The app is built as a Docker image and deployed to AWS through GitHub Actions and AWS Systems Manager.",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/Roza",
    liveInstanceUrl: "https://roza.esheleyni.com/",
    imageUrl: "/projects/roza.webp",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Slate",
      "epub.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI",
      "MCP",
      "Electron",
      "Docker",
      "AWS",
    ],
  },
  {
    name: "Fatal Combat",
    description:
      "A retro 2D fighting game with a custom Canvas engine, CPU opponents, and real-time online multiplayer. Built with Vue, FastAPI, and WebSockets, it features secure accounts, matchmaking, synchronized combat, and containerized deployment.",
    features: [
      {
        title: "Multiple Game Modes",
        description:
          "Players can choose between single-player battles against the computer, local two-player matches, and online multiplayer combat.",
      },
      {
        title: "Custom Canvas Game Engine",
        description:
          "The combat system is powered by a custom HTML Canvas engine that controls the animation loop, fighter movement, attacks, physics, and rendering.",
      },
      {
        title: "Real-Time Online Battles",
        description:
          "WebSocket communication synchronizes keyboard input and combat actions between players during online matches.",
      },
      {
        title: "CPU Decision Engine",
        description:
          "Single-player mode includes a custom AI decision engine that controls the opponent's movement and attacks.",
      },
      {
        title: "Match Timer and Health Bars",
        description:
          "Each match includes animated health indicators, a countdown timer, and match-result messages.",
      },
      {
        title: "Online Lobby and Matchmaking",
        description:
          "Authenticated players can find available opponents, exchange match invitations, and join private multiplayer rooms.",
      },
      {
        title: "Disconnect Handling",
        description:
          "The server detects dropped connections, notifies opponents, and cleans up inactive players and empty rooms.",
      },
      {
        title: "Containerized Deployment",
        description:
          "The frontend and backend are containerized with Docker, served through Nginx, and configured for deployment on AWS.",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/fatal-combat",
    liveInstanceUrl: "",
    imageUrl: "/projects/fatal-combat.png",
    technologies: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "HTML Canvas",
      "WebSockets",
      "Python",
      "FastAPI",
      "SQLModel",
      "Docker",
      "AWS",
    ],
  },
  {
    name: "Kceli",
    description:
      "A health-tracking application that calculates daily energy needs, estimates meal calories with the OpenAI API, and visualizes nutrition and weight trends. Users can manage workouts, set goals, and review daily, weekly, and monthly progress.",
    features: [
      {
        title: "Total Daily Energy Expenditure Calculation",
        description:
          "Kceli calculates each user's Total Daily Energy Expenditure (TDEE) to establish a personalized daily target.",
      },
      {
        title: "Caloric Tracking with OpenAI API",
        description:
          "Users log meals while the OpenAI API estimates calorie intake and tracks it against their daily target.",
      },
      {
        title: "Dynamic Color-Coded Calendar",
        description:
          "A color-coded calendar provides an at-a-glance view of daily nutritional progress.",
      },
      {
        title: "Detailed Nutritional Reports",
        description:
          "Daily, weekly, and monthly reports reveal nutrition patterns over time.",
      },
      {
        title: "Workout Management",
        description:
          "Users can manage individual workouts and maintain a weekly training schedule.",
      },
      {
        title: "Goal Setting and Tracking",
        description:
          "Weekly and monthly goals make progress measurable and easy to follow.",
      },
      {
        title: "Interactive Weight Change Graph",
        description:
          "An interactive chart visualizes weight changes and long-term progress.",
      },
      {
        title: "Celebratory Milestone Features",
        description:
          "On-screen effects celebrate completed goals and key milestones.",
      },
      {
        title: "User Profile Customization",
        description:
          "Users can update the personal data and preferences that shape their targets.",
      },
      {
        title: "Responsive Design",
        description:
          "The interface adapts across desktop, tablet, and mobile screens.",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/Kceli",
    liveInstanceUrl: "",
    imageUrl: "/projects/kceli.png",
    technologies: [
      "React",
      "TypeScript",
      "Sass",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Rest API",
      "OpenAI API",
    ],
  },
  {
    name: "DevQuiz",
    description:
      "An interactive learning platform with thousands of developer-focused questions across JavaScript, React, Node.js, databases, and web fundamentals. Built with React, TypeScript, Node.js, and RavenDB.",
    features: [
      {
        title: "Wide Range of Topics",
        description:
          "The app covers a broad spectrum of technologies commonly used in web development.",
      },
      {
        title: "Thousands of Questions",
        description:
          "With thousands of questions available, users can extensively test their knowledge in a variety of areas.",
      },
      {
        title: "Interactive Quiz Experience",
        description:
          "The application provides an interactive user interface, making the learning process engaging and fun.",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/DevQuiz",
    liveInstanceUrl: "",
    imageUrl: "/projects/devQuiz.png",
    technologies: [
      "React",
      "TypeScript",
      "Sass",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Rest API",
    ],
  },
];

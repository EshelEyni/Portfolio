import { Project } from "../types";

export const projects: Project[] = [
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
    liveInstanceUrl: "https://fatal-combat.esheleyni.com",
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
    name: "Roza",
    description:
      "A full-stack workspace for authors and literary researchers to write books, develop characters and plotlines, organize research, and create structured reviews. Features include rich-text editing, multilingual and offline support, image uploads, and styled PDF export.",
    features: [
      {
        title: "Structured Book Writing",
        description:
          "Writers can organize books into chapters and manage supporting information such as characters, themes, plotlines, and notes from one workspace.",
      },
      {
        title: "Rich-Text Editor",
        description:
          "The Slate-based editor supports headings, paragraphs, block quotes, numbered and bulleted lists, text alignment, bold, italic, and underlined text.",
      },
      {
        title: "Story Development",
        description:
          "Dedicated tools connect characters, themes, plotlines, and notes to the book being developed.",
      },
      {
        title: "Book Review Workspace",
        description:
          "Users can create detailed book reviews composed of individual review entries, references, images, and a structured final analysis.",
      },
      {
        title: "Research and References",
        description:
          "Readers can organize quotations, page numbers, notes, and images, then reorder supporting content with drag and drop.",
      },
      {
        title: "Reading and Editing Modes",
        description:
          "Users can switch between focused reading and editing modes, minimize individual sections, or use fullscreen mode for distraction-free work.",
      },
      {
        title: "PDF Export",
        description:
          "Book chapters can be exported as styled PDF documents while preserving headings, lists, quotations, text formatting, and alignment.",
      },
      {
        title: "Multilingual PDF Export",
        description:
          "Hebrew and English content can be exported as styled PDFs with right-to-left layout and rich-text formatting preserved.",
      },
      {
        title: "Progressive Web App",
        description:
          "Roza is installable as a PWA and includes offline support for a more reliable experience across desktop and mobile devices.",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/Roza",
    liveInstanceUrl: "",
    imageUrl: "/projects/roza.png",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Slate",
      "Sass",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Docker",
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
    liveInstanceUrl: "https://kceli.esheleyni.com/home",
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
    liveInstanceUrl: "https://devquiz.esheleyni.com/home",
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
  {
    name: "Chirper",
    description:
      "A full-stack social posting platform supporting text, media, GIFs, location tags, and scheduled posts. Its Node.js API includes JWT authentication, rate limiting, and XSS protection.",
    features: [
      {
        title: "Post Creation",
        description:
          "Create posts of up to 247 characters with images, videos, GIFs, and location data.",
      },
      {
        title: "Gif Integration",
        description:
          "The Gif modal allows users to search for and select gifs to include in their posts.",
      },
      {
        title: "Post Location Tagging",
        description:
          "The application integrates Google's location API to allow users to tag posts with a location.",
      },
      {
        title: "Post Scheduling",
        description:
          "The application provides a post schedule modal with a complex range of inputs, built with custom hooks, for users to schedule their posts.",
      },
      {
        title: "Post Statistics",
        description:
          "The Post Stat feature provides insights and analytics of individual posts.",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/Chirper",
    liveInstanceUrl: "",
    imageUrl: "/projects/chirper.png",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "React Router",
      "Axios",
      "Material UI",
      "Google Maps API",
      "Sass",
      "Node.JS",
      "TypeScript",
      "Express",
      "JWT",
      "Bcrypt",
      "Express",
      "Rate Limiter",
      "Helmet",
      "MongoDB",
      "Mongoose",
      "MongoDB Atlas",
    ],
  },
  {
    name: "Snapshot",
    description:
      "A photo-first social platform with customizable posts, stories, profiles, hashtags, location tagging, notifications, and direct messaging. Built with Angular, Node.js, Express, and SQLite.",
    features: [
      {
        title: "Photo Posts",
        description:
          "Users can publish captioned photos and customize them with cropping and color filters.",
      },
      {
        title: "Social Engagement",
        description:
          "Likes, comments, and hashtags help users interact and discover relevant content.",
      },
      {
        title: "Location Tagging",
        description:
          "Posts and stories can include locations to add context and support discovery.",
      },
      {
        title: "Stories",
        description:
          "Customizable photo stories remain visible for 24 hours and can later be saved as profile highlights.",
      },
      {
        title: "User Profiles",
        description:
          "Profiles support bios, profile images, cover photos, and saved story highlights.",
      },
      {
        title: "Search and Discovery",
        description:
          "Search connects users with people, hashtags, and content that match their interests.",
      },
      {
        title: "Notifications and Messaging",
        description:
          "Push notifications surface activity while private messaging supports direct conversations.",
      },
      {
        title: "Responsive Dark Mode",
        description:
          "The responsive interface works across screen sizes and includes a dark theme for low-light use.",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/Snapshot",
    liveInstanceUrl: "https://snapshot.esheleyni.com/#/",
    imageUrl: "/projects/snapshot.png",
    technologies: [
      "SQLite3",
      "Express",
      "Node.js",
      "Rest API",
      "Angular",
      "Sass",
    ],
  },
  {
    name: "Symphony",
    description:
      "A music player and social discovery platform powered by the YouTube API. Users can search and play music, build playlists, follow listeners with similar tastes, and receive real-time profile and playlist updates.",
    features: [
      {
        title: "Multifunctional Media Player",
        description:
          "Playback controls include seeking, volume, mute, playback modes, and a live queue.",
      },
      {
        title: "Search and Play Songs",
        description:
          "YouTube-powered search lets users play songs instantly and save them to Liked Songs or custom playlists.",
      },
      {
        title: "Playlist Creation and Management",
        description:
          "Users can create, edit, reorder, and share playlists with custom artwork and automatically generated color themes.",
      },
      {
        title: "User Profiles and Social Interaction",
        description:
          "Profiles and shared music preferences help listeners discover and follow people with similar tastes.",
      },
      {
        title: "Real-Time Online Updates",
        description:
          "WebSockets deliver live updates to profiles and shared playlists.",
      },
      {
        title: "PWA Support",
        description:
          "The installable PWA supports use across desktop and mobile devices.",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/Symphony",
    liveInstanceUrl: "https://symphony.esheleyni.com/",
    imageUrl: "/projects/symphony.png",
    technologies: [
      "React",
      "Sass",
      "Node.js",
      "Express",
      "Rest API",
      "MongoDB",
    ],
  },
];

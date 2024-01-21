export type Project = {
  name: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  gitHubUrl: string;
  liveInstanceUrl: string;
  imageUrl: string;
  technologies: string[];
};

export type Course = {
  id: string;
  name: string;
  logo: string;
  year: number;
  imgUrl: string;
};

export type Skill = {
  name: string;
  logo: string;
  courseIds: string[];
  projectNames: string[];
  proffesionalExperienceIds: string[];
};

export type ProffesionalExperience = {
  id: string;
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
};

export const proffesionalExperience: ProffesionalExperience[] = [
  {
    id: "1",
    companyName: "IDMR Solutions",
    position: "Full Stack Developer",
    startDate: "01-02-2022",
    endDate: "Present",
    description:
      "As a Full Stack Developer at IDMR Solutions, I maintain and enhance application features for optimal functionality and user experience. My duties include bug resolution, developing XSL templates with jQuery integration, and managing SQL Server stored procedures for efficient data operations. I also create comprehensive reports using DevExpress Reporting tools, aiding in data-driven decisions at the company.",
    logo: "/idmr-logo.png",
  },
];

export const skills: Skill[] = [
  {
    name: "HTML",
    logo: "/html-logo.png",
    courseIds: ["1", "2", "3"],
    projectNames: ["Snapshot", "Symphony", "Chirper", "DevQuiz", "Kceli"],
    proffesionalExperienceIds: ["1"],
  },
  {
    name: "CSS",
    logo: "/css-logo.png",
    courseIds: ["1", "2", "3"],
    projectNames: ["Snapshot", "Symphony", "Chirper", "DevQuiz", "Kceli"],
    proffesionalExperienceIds: ["1"],
  },
  {
    name: "SASS",
    logo: "/sass-logo.png",
    courseIds: ["1", "3"],
    projectNames: ["Snapshot", "Symphony", "Chirper", "DevQuiz", "Kceli"],
    proffesionalExperienceIds: ["1"],
  },
  {
    name: "Tailwind CSS",
    logo: "/tailwind-logo.png",
    courseIds: ["6"],
    projectNames: ["DevQuiz"],
    proffesionalExperienceIds: [],
  },
  {
    name: "Bootstrap",
    logo: "/bootstrap-logo.png",
    courseIds: ["1"],
    projectNames: [],
    proffesionalExperienceIds: ["1"],
  },
  {
    name: "JavaScript",
    logo: "/javascript-logo.png",
    courseIds: ["1", "4", "5", "6", "7", "10", "11", "12"],
    projectNames: ["Snapshot", "Symphony", "Chirper", "DevQuiz", "Kceli"],
    proffesionalExperienceIds: ["1"],
  },
  {
    name: "TypeScript",
    logo: "/typescript-logo.png",
    courseIds: ["1", "5", "11"],
    projectNames: ["Snapshot", "Chirper", "DevQuiz", "Kceli"],
    proffesionalExperienceIds: [],
  },
  {
    name: "JQuery",
    logo: "/jquery-logo.png",
    courseIds: ["1"],
    projectNames: [],
    proffesionalExperienceIds: ["1"],
  },
  {
    name: "React",
    logo: "/react-logo.png",
    courseIds: ["1", "6"],
    projectNames: ["Symphony", "Chirper", "DevQuiz", "Kceli"],
    proffesionalExperienceIds: [],
  },
  {
    name: "Redux",
    logo: "/redux-logo.png",
    courseIds: ["1", "6"],
    projectNames: ["Symphony", "Chirper", "DevQuiz", "Kceli"],
    proffesionalExperienceIds: [],
  },
  {
    name: "Angular",
    logo: "/angular-logo.png",
    courseIds: ["1"],
    projectNames: ["Snapshot"],
    proffesionalExperienceIds: [],
  },
  {
    name: "Node.js",
    logo: "/nodejs-logo.png",
    courseIds: ["1", "7", "10", "11"],
    projectNames: ["Symphony", "Snapshot", "Chirper", "DevQuiz", "Kceli"],
    proffesionalExperienceIds: [],
  },
  {
    name: "Express",
    logo: "/express-logo.png",
    courseIds: ["1", "7", "9", "10"],
    projectNames: ["Symphony", "Snapshot", "Chirper", "DevQuiz", "Kceli"],
    proffesionalExperienceIds: [],
  },
  {
    name: "MongoDB",
    logo: "/mongodb-logo.png",
    courseIds: ["1", "7", "9"],
    projectNames: ["Symphony", "Chirper", "Kceli"],
    proffesionalExperienceIds: [],
  },
  {
    name: "Mongoose",
    logo: "/mongoose-logo.png",
    courseIds: ["7"],
    projectNames: ["Chirper", "Kceli"],
    proffesionalExperienceIds: [],
  },
  {
    name: "SQL",
    logo: "/sql-logo.png",
    courseIds: ["8"],
    projectNames: ["Snapshot"],
    proffesionalExperienceIds: ["1"],
  },
  {
    name: "RavenDB",
    logo: "/ravendb-logo.png",
    courseIds: [],
    projectNames: ["DevQuiz"],
    proffesionalExperienceIds: [],
  },
  {
    name: "Jest",
    logo: "/jest-logo.png",
    courseIds: ["10", "11"],
    projectNames: ["Chirper", "Kceli"],
    proffesionalExperienceIds: [],
  },
  {
    name: "Git",
    logo: "/git-logo.png",
    courseIds: ["13"],
    projectNames: ["Symphony", "Snapshot", "Chirper", "DevQuiz", "Kceli"],
    proffesionalExperienceIds: [],
  },
  {
    name: "GitHub",
    logo: "/github-logo.png",
    courseIds: ["13"],
    projectNames: ["Symphony", "Snapshot", "Chirper", "DevQuiz", "Kceli"],
    proffesionalExperienceIds: [],
  },
];

export const projects: Project[] = [
  {
    name: "Kceli",
    description:
      "Kceli, a React-based app, revolutionizes weight loss tracking by calculating Total Daily Energy Expenditure (TDEE) and monitoring daily calorie intake via the OpenAI API. Its dynamic calendar interface changes colors to reflect daily nutritional intake, offering detailed reports and effective goal-setting for both short and long-term objectives. Beyond tracking, Kceli celebrates milestones with fireworks and Queen's 'We Are the Champions', making it a proactive companion in your health and fitness journey.",
    features: [
      {
        title: "Total Daily Energy Expenditure Calculation",
        description:
          "Upon signup, Kceli calculates your Total Daily Energy Expenditure (TDEE), providing a personalized starting point for your weight loss journey",
      },
      {
        title: "Caloric Tracking with OpenAI API",
        description:
          "Users can add their daily meals, and Kceli uses the OpenAI API to accurately calculate and track calorie intake, ensuring precise dietary management",
      },
      {
        title: "Dynamic Color-Coded Calendar",
        description:
          "The home page features a calendar that changes color from blue to darker shades to indicate daily nutritional status, providing a quick visual reference of your dietary adherence",
      },
      {
        title: "Detailed Nutritional Reports",
        description:
          "Kceli offers in-depth reports on nutritional intake, broken down into daily, weekly, and monthly summaries, allowing users to monitor and adjust their eating habits effectively",
      },
      {
        title: "Workout Management",
        description:
          "Users can add, edit, and delete workouts on the dedicated workout page, and set a weekly workout schedule, supporting a balanced approach to weight loss",
      },
      {
        title: "Goal Setting and Tracking",
        description:
          "Set and track weight loss goals on a weekly and monthly basis, with Kceli providing the tools and motivation to reach these milestones systematically",
      },
      {
        title: "Interactive Weight Change Graph",
        description:
          "The profile page features an interactive graph showing the total weight changes over time, offering users a visual representation of their progress",
      },
      {
        title: "Celebratory Milestone Features",
        description:
          "When users reach their weight loss goals, Kceli celebrates their achievement with on-screen fireworks and the playing of Queen's 'We Are the Champions,' adding an element of fun and encouragement",
      },
      {
        title: "User Profile Customization",
        description:
          "Users can edit their personal data in the profile page, tailoring the Kceli experience to their specific weight loss journey and preferences",
      },
      {
        title: "Responsive Design",
        description:
          "Kceli is optimized for various devices, ensuring a seamless and accessible experience across all screens",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/Kceli",
    liveInstanceUrl: "https://kceli-m8oe.onrender.com/home",
    imageUrl: "/kceli.png",
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
      "DevQuiz is an interactive quiz application designed to help developers enhance their skills in various technologies. It's built with a tech stack of Vite, React, TypeScript, Node.js, and RavenDB. DevQuiz features a dynamic quiz interface, with questions and answers stored in a RavenDB database.The application offers a wide range of topics, including HTML, CSS, JavaScript, React, Node.js, MongoDB, and many more. With thousands of questions in the database, users can test their knowledge and gain a deeper understanding of the mentioned technologies.",
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
    imageUrl: "/devQuiz.png",
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
    description: `Chirper is a developing Twitter clone using React and TypeScript for the frontend, and Node.js with TypeScript for the backend, integrated with MongoDB and Mongoose for data management. It supports posts with text, media, and location tags using Google's API. The server emphasizes cleanliness and security, featuring JWT authentication, a rate limiter, and XSS prevention. This project is ongoing with more features planned.`,
    features: [
      {
        title: "Post Creation",
        description:
          "Create posts with a limit of 247 characters, gifs, images, videos or gifs.",
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
    imageUrl: "/chirper.png",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "React Router",
      "Axios",
      "Material UI",
      "Google Maps API",
      "Sass",
      "NodeJS",
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
    description: `Snapshot is a photo-focused social media platform offering intuitive tools for uploading, sharing, and exploring images. It features photo posting with captions and customization, interaction through comments, likes, and hashtags, and unique elements like location tagging and 24-hour stories. The app also provides personalized user profiles, search functionality, private messaging, and is optimized for all devices with a dark mode for ease of use.`,
    features: [
      {
        title: "Creating posts",
        description:
          "Users can upload pictures and add captions to create new posts. Users are required to attach at least one photo to the post. The photos can be customized with a crop tool and color filters.",
      },
      {
        title: "Commenting",
        description:
          "Users can leave comments on other users' posts. This feature allows users to engage with the content and start conversations.",
      },
      {
        title: "Likes",
        description:
          "Users can like other users' posts. This feature allows users to show appreciation for the content and support for the user who posted it.",
      },
      {
        title: "Hashtags",
        description:
          "Users can add hashtags to their posts, making it easier for others to discover content related to a specific topic. Hashtags also make it easier for users to find and follow content that interests them.",
      },
      {
        title: "Location tagging",
        description:
          "Users can tag their location when posting a picture or story. This feature allows users to share where they are and what they are doing, and also allows other users to discover content from a specific location.",
      },
      {
        title: "Stories",
        description:
          "Users can upload a picture, customize it with text, drawing or stickers, and it will be uploaded and available for viewing on the app for 24 hours. After 24 hours the story will be archived, but you can still attach it to your profile at your personal profile page, and it will be saved as a highlight to your profile.",
      },
      {
        title: "User profiles",
        description:
          "Users can personalize their profiles by adding a bio, a profile picture, and a cover photo. This feature allows users to express themselves and showcase their personal brand.",
      },
      {
        title: "Search function",
        description:
          "Users can search for other users and hashtags. This feature makes it easy for users to find and follow content and people that interest them.",
      },
      {
        title: "Push notifications",
        description:
          "Users will receive notifications when someone likes, comments or messages them. This feature keeps users engaged and informed about the activity on their posts.",
      },
      {
        title: "Message page",
        description:
          "As a social network, Snapshot has a message page where you can chat with other users online, and create personal relationships.",
      },
      {
        title: "Direct messaging",
        description:
          "Users can send private messages to other users. This feature enables users to communicate with each other in a more intimate setting.",
      },
      {
        title: "Responsive design",
        description:
          "The app is optimized for all screen sizes and devices, allowing users to access and use the app on any device.",
      },
      {
        title: "Dark mode",
        description:
          "The dark mode feature on Snapshot allows users to switch to a darker color scheme on the app, reducing eye strain and making it easier to use in low-light environments. It also provides a sleek and modern aesthetic for users who prefer a darker theme.",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/Snapshot",
    liveInstanceUrl: "https://snapshot-zzha.onrender.com/#/",
    imageUrl: "/snapshot.png",
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
    description: `Symphony is a multilayered music app. With it's search engine and music player Symphony serves the need of the singular music lover. You can like a song,and he will be saved to your personal library under the saved playlist "Liked Songs". You can also create you own playlists, giving you the options to manage your love of music. But that's not all, Symphony also serves as a musical social network. Once you liked a song, Symphony will look for other users who like the same music and showcase them to you, in your home page. You can follow those users and expand your musical horizons. Profiles will also be showcased in the search page, if their playlists includes the search term you were looking for.`,
    features: [
      {
        title: "Multifunctional Media Player",
        description:
          "Play songs and playlists with options to switch songs, skip 10 seconds back and forward, set playback mode, timeline, and volume. Features include toggle mute and access to the Queue page to see the currently running playlist.",
      },
      {
        title: "Search and Play Songs",
        description:
          "Search songs using the YouTube API, play them instantly, like them to save to your 'Liked Songs' playlist, or add them to your personal playlists.",
      },
      {
        title: "Playlist Creation",
        description:
          "Create your own playlist with the option to add an image. Symphony automatically colors the background with the dominant color of the image, creating a unique visual. Edit the playlist name, description, and background color. Add playlists to your profile for others to see.",
      },
      {
        title: "Playlist Management",
        description:
          "Add or remove songs from your playlist and shuffle the order using Drag and Drop (DND), with changes saved for the next entry.",
      },
      {
        title: "DND Functionality",
        description:
          "DND is applied throughout the application, including in the sidebar with the playlist list and inside any playlist. Changes are saved if the user owns the playlist.",
      },
      {
        title: "User Profiles and Social Interaction",
        description:
          "View other users' profiles and follow them for social interaction within the app.",
      },
      {
        title: "Real-Time Online Updates",
        description:
          "Online updates are available using Web sockets, allowing users to see real-time updates of others' profiles or playlists.",
      },
      {
        title: "PWA Support",
        description:
          "Symphony supports Progressive Web App (PWA) functionality, enabling download and use on mobile devices or personal computers.",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/Symphony",
    liveInstanceUrl: "https://symphony.onrender.com/",
    imageUrl: "/symphony.png",
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

export const courses: Course[] = [
  {
    id: "1",
    name: "Full Stack Development",
    logo: "/coding-academy-logo.jpg",
    year: 2022,
    imgUrl: "/certificate - Coding Academy.png",
  },
  {
    id: "2",
    name: "Build Responsive Real World Websites with HTML and CSS",
    logo: "/udemy-logo.png",
    year: 2023,
    imgUrl:
      "/certificate - Build Responsive Real World Websites with HTML and CSS.jpg",
  },
  {
    id: "3",
    name: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    logo: "/udemy-logo.png",
    year: 2023,
    imgUrl:
      "/certificate - Advanced CSS and Sass Flexbox, Grid, Animations and More!.jpg",
  },
  {
    id: "4",
    name: "The Complete JavaScript Course 2021: From Zero to Expert!",
    logo: "/udemy-logo.png",
    year: 2023,
    imgUrl:
      "/certificate - The Complete JavaScript Course 2021 From Zero to Expert!.jpg",
  },
  {
    id: "5",
    name: "Understanding TypeScript",
    logo: "/udemy-logo.png",
    year: 2023,
    imgUrl: "/certificate - Understanding TypeScript.jpg",
  },
  {
    id: "6",
    name: "The Ultimate React Course 2023: React, Redux & More",
    logo: "/udemy-logo.png",
    year: 2023,
    imgUrl:
      "/certificate - The Ultimate React Course 2023 React, Redux & More.jpg",
  },
  {
    id: "7",
    name: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2023",
    logo: "/udemy-logo.png",
    year: 2023,
    imgUrl:
      "/certificate - Node.js, Express, MongoDB & More The Complete Bootcamp 2023.jpg",
  },
  {
    id: "8",
    name: "The Complete SQL Bootcamp: Go from Zero to Hero",
    logo: "/udemy-logo.png",
    year: 2023,
    imgUrl: "/certificate - The Complete SQL Bootcamp Go from Zero to Hero.jpg",
  },
  {
    id: "9",
    name: "MongoDB - The Complete Developer's Guide 2023",
    logo: "/udemy-logo.png",
    year: 2023,
    imgUrl: "/certificate - MongoDB The Complete Developer's Guide 2023.jpg",
  },
  {
    id: "10",
    name: "JavaScript Unit Testing - The Practical Guide",
    logo: "/udemy-logo.png",
    year: 2023,
    imgUrl: "/certificate - JavaScript Unit Testing The Practical Guide.jpg",
  },
  {
    id: "11",
    name: "Unit Testing for Typescript & Node.js Developers With Jest",
    logo: "/udemy-logo.png",
    year: 2023,
    imgUrl:
      "/certificate - Unit Testing for Typescript & Node.js Developers With Jest.jpg",
  },
  {
    id: "12",
    name: "Progressive Web Apps (PWA) - The Complete Guide",
    logo: "/udemy-logo.png",
    year: 2023,
    imgUrl: "/certificate - Progressive Web Apps (PWA) The Complete Guide.jpg",
  },
  {
    id: "13",
    name: "The Git & Github Bootcamp",
    logo: "/udemy-logo.png",
    year: 2024,
    imgUrl: "/certificate - The Git & Github Bootcamp.jpg",
  },
];

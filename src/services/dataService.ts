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

export const skills = [];

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
  {
    name: "MineSweeper",
    description: `A classic Minesweeper game built using vanilla JavaScript and CSS, following the Object-Oriented Programming (OOP) paradigm. The application is bundled using Parcel and tested with Vitest to ensure quality and functionality.`,
    features: [
      {
        title: "Interactive GUI",
        description:
          "Interactive GUI that allows players to test their skills and strategy.",
      },
      {
        title: "Variable Difficulty Levels",
        description: "Supports different difficulty levels.",
      },
      {
        title: "Hints and Safe Clicks",
        description: "Offers hints and safe clicks to assist during gameplay.",
      },
      {
        title: "Customizable Mine Placement",
        description:
          "Enables manual placement of mines and a 'seven boom' feature.",
      },
      {
        title: "Game State Undo",
        description: "Allows game state undo for previous moves.",
      },
      {
        title: "Interactive Game Features",
        description:
          "Features an interactive timer, flag counter, and live count.",
      },
    ],
    gitHubUrl: "https://github.com/EshelEyni/mine-sweeper",
    liveInstanceUrl: "https://mine-sweeper-esheleyni.netlify.app/",
    imageUrl: "/mine-sweeper.png",
    technologies: ["JavaScript", "HTML", "CSS", "OOP", "Jest"],
  },
];

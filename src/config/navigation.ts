export const homeNavigation = [
  { id: "intro", label: "Home" },
  { id: "resume", label: "Resume" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
] as const;

export type HomeSectionId = (typeof homeNavigation)[number]["id"];

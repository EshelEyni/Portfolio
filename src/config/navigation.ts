export const homeNavigation = [
  { id: "intro", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Learning" },
  { id: "resume", label: "Resume" },
] as const;

export type HomeSectionId = (typeof homeNavigation)[number]["id"];

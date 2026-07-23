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
  provider: "Coding Academy" | "Udemy";
  logo: string;
  year: number;
  imgUrl: string;
};

export type Skill = {
  name: string;
  logo: string;
  courseIds: string[];
  projectNames: string[];
  professionalExperienceIds: string[];
};

export type ProfessionalExperience = {
  id: string;
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
  companyUrl: string;
};

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

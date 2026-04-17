export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface Organization {
  id: string;
  role: string;
  name: string;
  period: string;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  period: string;
  description: string;
}

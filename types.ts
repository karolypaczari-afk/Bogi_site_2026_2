
export interface Achievement {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface Testimonial {
  id: number;
  initials: string;
  author: string;
  role: string;
  text: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

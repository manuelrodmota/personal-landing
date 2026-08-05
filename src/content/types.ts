export interface NavContent {
  about: string;
  work: string;
  experience: string;
  skills: string;
  cta: string;
}

export interface HeroContent {
  eyebrow: string;
  name1: string;
  name2: string;
  role: string;
  intro: string;
  chips: string[];
  ctaWork: string;
  ctaContact: string;
}

export interface AboutContent {
  kicker: string;
  title: string;
  paras: string[];
}

export interface WorkContent {
  kicker: string;
  title: string;
}

export interface Project {
  n: string;
  tag: string;
  title: string;
  role: string;
  desc: string;
  points: string[];
  tags: string[];
  link: string;
  linkLabel: string;
  shot: string;
  image?: string;
  aspect?: string;
  fit?: "cover" | "contain";
  wide?: boolean;
}

export interface ExperienceContent {
  kicker: string;
  title: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  link: string;
  linkLabel: string;
  points: string[];
}

export interface SkillsContent {
  kicker: string;
  title: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ContactContent {
  kicker: string;
  title: string;
  sub: string;
  emailLabel: string;
  linkedinLabel: string;
}

export interface Content {
  nav: NavContent;
  hero: HeroContent;
  clientsLabel: string;
  about: AboutContent;
  work: WorkContent;
  projects: Project[];
  exp: ExperienceContent;
  jobs: Job[];
  skills: SkillsContent;
  skillGroups: SkillGroup[];
  contact: ContactContent;
  footer: string;
}

export interface Client {
  name: string;
  link: string;
}

export type Lang = "en" | "es";

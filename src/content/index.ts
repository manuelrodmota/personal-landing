import { en } from "./en";
import { es } from "./es";
import type { Content, Lang } from "./types";

export const content: Record<Lang, Content> = { en, es };

export { clients } from "./clients";
export type { Content, Lang, Project, Job, SkillGroup, Client } from "./types";

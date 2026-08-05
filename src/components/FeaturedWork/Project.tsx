import type { Project as ProjectData } from "@/content";
import { Reveal } from "@/components/Reveal/Reveal";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ImageSlot/ImageSlot";
import styles from "./Project.module.css";

export function Project({ project }: { project: ProjectData }) {
  return (
    <Reveal as="article" className={styles.article}>
      <div>
        <div className={styles.meta}>
          <span className={styles.index}>{project.n}</span>
          <Tag variant="accent">{project.tag}</Tag>
          <span className={styles.role}>{project.role}</span>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>

        <ul className={styles.points}>
          {project.points.map((point) => (
            <li key={point} className={styles.point}>
              <span className={styles.marker}>—</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag} variant="neutral">
              {tag}
            </Tag>
          ))}
        </div>

        <Button href={project.link} variant="ghost" className={styles.link}>
          {project.linkLabel} ↗
        </Button>
      </div>

      <figure className={styles.shotwrap}>
        <div className={styles.shot}>
          <ImageSlot alt={project.shot} shape="rect" placeholder={project.shot} />
        </div>
      </figure>
    </Reveal>
  );
}

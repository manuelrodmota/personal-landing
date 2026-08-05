import type { Job } from "@/content";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./JobRow.module.css";

export function JobRow({ job }: { job: Job }) {
  return (
    <Reveal className={styles.row}>
      <div className={styles.rule} />
      <div>
        <h3 className={styles.company}>{job.company}</h3>
        <p className={styles.role}>{job.role}</p>
        <p className={styles.period}>{job.period}</p>
        <a href={job.link} target="_blank" rel="noopener" className={styles.link}>
          {job.linkLabel} ↗
        </a>
      </div>
      <ul className={styles.points}>
        {job.points.map((point) => (
          <li key={point} className={styles.point}>
            <span className={styles.marker}>—</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

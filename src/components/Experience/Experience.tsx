"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionKicker } from "@/components/SectionKicker/SectionKicker";
import { JobRow } from "./JobRow";
import styles from "./Experience.module.css";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className={styles.section}>
      <Reveal className={styles.header}>
        <SectionKicker label={t.exp.kicker} className={styles.kicker} />
        <h2 className={styles.title}>{t.exp.title}</h2>
      </Reveal>

      <div>
        {t.jobs.map((job) => (
          <JobRow key={job.company} job={job} />
        ))}
      </div>
    </section>
  );
}

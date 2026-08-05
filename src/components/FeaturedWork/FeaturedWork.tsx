"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionKicker } from "@/components/SectionKicker/SectionKicker";
import { Project } from "./Project";
import styles from "./FeaturedWork.module.css";

export function FeaturedWork() {
  const { t } = useLanguage();

  return (
    <section id="work" className={styles.section}>
      <Reveal className={styles.header}>
        <SectionKicker label={t.work.kicker} className={styles.kicker} />
        <h2 className={styles.title}>{t.work.title}</h2>
      </Reveal>

      <div className={styles.list}>
        {t.projects.map((project) => (
          <Project key={project.n} project={project} />
        ))}
      </div>
    </section>
  );
}

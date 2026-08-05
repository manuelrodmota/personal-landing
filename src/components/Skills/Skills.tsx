"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionKicker } from "@/components/SectionKicker/SectionKicker";
import styles from "./Skills.module.css";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className={styles.section}>
      <Reveal className={styles.header}>
        <SectionKicker label={t.skills.kicker} className={styles.kicker} />
        <h2 className={styles.title}>{t.skills.title}</h2>
      </Reveal>

      <div className={styles.grid}>
        {t.skillGroups.map((group) => (
          <Reveal key={group.title} className={styles.group}>
            <h4 className={styles.groupTitle}>{group.title}</h4>
            <div className={styles.chips}>
              {group.items.map((item) => (
                <span key={item} className={styles.chip}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

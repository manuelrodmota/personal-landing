"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionKicker } from "@/components/SectionKicker/SectionKicker";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <header className={styles.header}>
      <SectionKicker label={t.hero.eyebrow} className={`${styles.rise} ${styles.kickerRow}`} />

      <h1 className={styles.name}>
        <span className={`${styles.rise} ${styles.name1}`}>{t.hero.name1}</span>
        <br />
        <span className={`${styles.rise} ${styles.name2}`}>{t.hero.name2}</span>
      </h1>

      <p className={`${styles.rise} ${styles.role}`}>{t.hero.role}</p>
      <p className={`${styles.rise} ${styles.intro}`}>{t.hero.intro}</p>

      <div className={`${styles.rise} ${styles.chips}`}>
        {t.hero.chips.map((chip) => (
          <Tag key={chip} variant="outline" className={styles.chip}>
            {chip}
          </Tag>
        ))}
      </div>

      <div className={`${styles.rise} ${styles.ctas}`}>
        <Button href="#work" variant="primary" className={styles.cta}>
          {t.hero.ctaWork}
        </Button>
        <Button href="#contact" variant="secondary" className={styles.cta}>
          {t.hero.ctaContact}
        </Button>
      </div>
    </header>
  );
}

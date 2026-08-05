"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionKicker } from "@/components/SectionKicker/SectionKicker";
import styles from "./Contact.module.css";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className={styles.section}>
      <Reveal className={styles.wrap}>
        <SectionKicker label={t.contact.kicker} className={styles.kicker} />
        <h2 className={styles.title}>{t.contact.title}</h2>
        <p className={styles.sub}>{t.contact.sub}</p>

        <div className={styles.cards}>
          <a href="mailto:manuelrodmota@gmail.com" className={styles.card}>
            <span className={styles.cardLabel}>{t.contact.emailLabel}</span>
            <span className={styles.cardValue}>manuelrodmota@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/manuel-rodriguez-mota/"
            target="_blank"
            rel="noopener"
            className={styles.card}
          >
            <span className={styles.cardLabel}>{t.contact.linkedinLabel}</span>
            <span className={styles.cardValue}>manuel-rodriguez-mota ↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

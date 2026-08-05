"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionKicker } from "@/components/SectionKicker/SectionKicker";
import { ImageSlot } from "@/components/ImageSlot/ImageSlot";
import styles from "./About.module.css";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
        <Reveal>
          <figure className={styles.figure}>
            <div className={styles.photoFrame}>
              <ImageSlot
                src="/images/headshot.jpeg"
                alt="Manuel Rodriguez headshot"
                shape="rounded"
                placeholder="Drop your headshot"
                priority
              />
            </div>
          </figure>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionKicker label={t.about.kicker} className={styles.kicker} />
          <h2 className={styles.title}>{t.about.title}</h2>
          <div className={styles.paras}>
            {t.about.paras.map((para, i) => (
              <p key={i} className={styles.para}>
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

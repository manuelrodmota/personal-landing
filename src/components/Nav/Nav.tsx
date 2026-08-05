"use client";

import { useLanguage } from "@/context/LanguageContext";
import { UkFlag, EsFlag } from "./Flags";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "#about", key: "about" as const },
  { href: "#work", key: "work" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#skills", key: "skills" as const },
];

export function Nav() {
  const { t, isEn, isEs, setLang } = useLanguage();

  return (
    <nav className={styles.nav}>
      <a href="#top" className={styles.brand}>
        Manuel Rodriguez<span className={styles.dot}>.</span>
      </a>

      <div className={styles.center}>
        {LINKS.map((link) => (
          <a key={link.key} href={link.href} className={styles.navLink}>
            {t.nav[link.key]}
          </a>
        ))}
      </div>

      <div className={styles.seg} role="group" aria-label="Language">
        <label className={styles.segOpt}>
          <input
            type="radio"
            name="mrp-lang"
            checked={isEn}
            onChange={() => setLang("en")}
            aria-label="English"
          />
          <UkFlag />
        </label>
        <label className={styles.segOpt}>
          <input
            type="radio"
            name="mrp-lang"
            checked={isEs}
            onChange={() => setLang("es")}
            aria-label="Español"
          />
          <EsFlag />
        </label>
      </div>
    </nav>
  );
}

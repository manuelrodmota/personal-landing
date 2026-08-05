"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <span>
        Manuel Rodriguez<span className={styles.dot}>.</span>
      </span>
      <span>{t.footer}</span>
    </footer>
  );
}

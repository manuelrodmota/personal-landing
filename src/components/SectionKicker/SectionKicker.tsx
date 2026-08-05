import type { CSSProperties } from "react";
import styles from "./SectionKicker.module.css";

interface SectionKickerProps {
  label: string;
  className?: string;
  style?: CSSProperties;
}

export function SectionKicker({ label, className, style }: SectionKickerProps) {
  return (
    <div className={`${styles.kicker}${className ? ` ${className}` : ""}`} style={style}>
      <span className={styles.line} />
      <span className={styles.label}>{label}</span>
    </div>
  );
}

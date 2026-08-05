import { useId } from "react";
import styles from "./Nav.module.css";

export function UkFlag() {
  const clipId = useId();

  return (
    <svg className={styles.flag} viewBox="0 0 60 40" aria-hidden="true">
      <clipPath id={clipId}>
        <rect width="60" height="40" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect width="60" height="40" fill="#012169" />
        <path d="M0,0 60,40 M60,0 0,40" stroke="#fff" strokeWidth="8" />
        <path d="M0,0 60,40 M60,0 0,40" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
        <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7" />
      </g>
    </svg>
  );
}

export function EsFlag() {
  return (
    <svg className={styles.flag} viewBox="0 0 60 40" aria-hidden="true">
      <rect width="60" height="40" fill="#AA151B" />
      <rect y="10" width="60" height="20" fill="#F1BF00" />
    </svg>
  );
}

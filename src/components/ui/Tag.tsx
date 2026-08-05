import type { CSSProperties, ReactNode } from "react";
import styles from "./Tag.module.css";

type Variant = "accent" | "neutral" | "outline";

interface TagProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Tag({ variant = "neutral", children, className, style }: TagProps) {
  return (
    <span className={`${styles.tag} ${styles[variant]}${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </span>
  );
}

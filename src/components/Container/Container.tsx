import type { ReactNode } from "react";
import styles from "./Container.module.css";

export function Container({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <div id={id} className={styles.container}>
      {children}
    </div>
  );
}

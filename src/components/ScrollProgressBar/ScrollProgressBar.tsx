"use client";

import { useEffect, useRef } from "react";
import styles from "./ScrollProgressBar.module.css";

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const h = document.documentElement;
      const denom = h.scrollHeight - h.clientHeight || 1;
      const fraction = Math.min(1, Math.max(0, h.scrollTop / denom));
      bar.style.transform = `scaleX(${fraction})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.track}>
      <div ref={barRef} className={styles.bar} />
    </div>
  );
}

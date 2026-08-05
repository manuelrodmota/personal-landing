"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Star.module.css";

const BASE_SPEED = 20;
const HOVER_SPEED = 11;

export function Star() {
  const { t } = useLanguage();
  const btnRef = useRef<HTMLAnchorElement>(null);
  const spinRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const el = spinRef.current;
    if (!btn || !el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let angle = 0;
    let speed = BASE_SPEED;
    let target = BASE_SPEED;
    let last = performance.now();
    let frame = 0;

    const onEnter = () => {
      target = HOVER_SPEED;
    };
    const onLeave = () => {
      target = BASE_SPEED;
    };

    btn.addEventListener("pointerenter", onEnter);
    btn.addEventListener("pointerleave", onLeave);

    function tick(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      speed += (target - speed) * Math.min(1, dt * 4);
      angle = (angle + speed * dt) % 360;
      el!.style.transform = `rotate(${angle}deg)`;
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      btn.removeEventListener("pointerenter", onEnter);
      btn.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <a ref={btnRef} href="#contact" className={styles.star} aria-label={t.nav.cta}>
      <span ref={spinRef} className={styles.starSpin} aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <polygon
            points="100,4 122.96,44.57 167.88,32.12 155.43,77.04 196,100 155.43,122.96 167.88,167.88 122.96,155.43 100,196 77.04,155.43 32.12,167.88 44.57,122.96 4,100 44.57,77.04 32.12,32.12 77.04,44.57"
            fill="var(--color-accent)"
          />
        </svg>
      </span>
      <span className={styles.starLabel}>{t.nav.cta}</span>
    </a>
  );
}

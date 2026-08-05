import styles from "./HeroIllustration.module.css";

export function HeroIllustration() {
  return (
    <div aria-hidden="true" className={styles.wrap}>
      <svg viewBox="0 0 440 380" width="100%" className={styles.svg}>
        <defs>
          <radialGradient id="illoGlow" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.28" />
            <stop offset="70%" stopColor="var(--color-accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="220" cy="170" rx="210" ry="150" fill="url(#illoGlow)" />

        {/* laptop base */}
        <path
          d="M46 288 L394 288 L430 330 Q432 340 421 340 L19 340 Q8 340 10 330 Z"
          fill="var(--color-neutral-800)"
          stroke="var(--color-neutral-700)"
          strokeWidth="2"
        />
        <rect x="176" y="322" width="88" height="9" rx="4.5" fill="var(--color-neutral-700)" />

        {/* laptop lid */}
        <rect x="66" y="52" width="308" height="236" rx="18" fill="var(--color-neutral-800)" stroke="var(--color-neutral-700)" strokeWidth="2" />
        <rect x="84" y="70" width="272" height="200" rx="9" fill="var(--color-bg)" />

        {/* window dots */}
        <circle cx="102" cy="88" r="4" fill="var(--color-neutral-600)" />
        <circle cx="116" cy="88" r="4" fill="var(--color-neutral-600)" />
        <circle cx="130" cy="88" r="4" fill="var(--color-neutral-600)" />

        {/* code lines */}
        <g>
          <rect x="102" y="108" width="26" height="7" rx="3.5" fill="var(--color-accent-400)" />
          <rect x="134" y="108" width="70" height="7" rx="3.5" fill="var(--color-neutral-600)" />
          <rect x="114" y="126" width="46" height="7" rx="3.5" fill="var(--color-neutral-600)" />
          <rect x="166" y="126" width="34" height="7" rx="3.5" fill="var(--color-accent-300)" />
          <rect x="114" y="144" width="60" height="7" rx="3.5" fill="var(--color-accent-400)" />
          <rect x="180" y="144" width="90" height="7" rx="3.5" fill="var(--color-neutral-600)" />
          <rect x="126" y="162" width="52" height="7" rx="3.5" fill="var(--color-neutral-600)" />
          <rect x="184" y="162" width="40" height="7" rx="3.5" fill="var(--color-accent-300)" />
          <rect x="114" y="180" width="34" height="7" rx="3.5" fill="var(--color-accent-400)" />
          <rect x="154" y="180" width="78" height="7" rx="3.5" fill="var(--color-neutral-600)" />
          <rect x="102" y="198" width="24" height="7" rx="3.5" fill="var(--color-neutral-600)" />
          <rect x="102" y="234" width="120" height="7" rx="3.5" fill="var(--color-neutral-700)" />
        </g>

        {/* the bug */}
        <g className={styles.bug}>
          <g transform="rotate(-18 300 176)">
            <g stroke="var(--color-neutral-500)" strokeWidth="4" strokeLinecap="round" fill="none">
              <path d="M292 150 L268 132" />
              <path d="M292 176 L262 176" />
              <path d="M292 202 L268 220" />
              <path d="M330 150 L354 132" />
              <path d="M330 176 L360 176" />
              <path d="M330 202 L354 220" />
            </g>
            <circle cx="311" cy="140" r="13" fill="var(--color-neutral-700)" />
            <g stroke="var(--color-neutral-500)" strokeWidth="3.5" strokeLinecap="round" fill="none">
              <path d="M306 130 Q300 118 304 110" />
              <path d="M316 130 Q322 118 318 110" />
            </g>
            <circle cx="304" cy="108" r="3" fill="var(--color-accent)" />
            <circle cx="318" cy="108" r="3" fill="var(--color-accent)" />
            <ellipse cx="311" cy="182" rx="30" ry="38" fill="var(--color-accent)" />
            <path d="M311 146 Q341 156 341 182 Q341 210 311 220 Z" fill="var(--color-accent-600)" />
            <line x1="311" y1="147" x2="311" y2="219" stroke="var(--color-accent-800)" strokeWidth="3" />
            <circle cx="299" cy="170" r="5" fill="var(--color-accent-900)" />
            <circle cx="323" cy="172" r="5" fill="var(--color-accent-800)" />
            <circle cx="300" cy="196" r="4.5" fill="var(--color-accent-900)" />
            <circle cx="322" cy="198" r="4.5" fill="var(--color-accent-800)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

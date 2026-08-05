"use client";

import { useLanguage } from "@/context/LanguageContext";
import { clients } from "@/content";
import styles from "./ClientMarquee.module.css";

function ClientGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className={styles.group} aria-hidden={ariaHidden}>
      {clients.map((client) => (
        <span key={client.name} className={styles.client}>
          {client.name}
        </span>
      ))}
    </div>
  );
}

export function ClientMarquee() {
  const { t } = useLanguage();

  return (
    <section aria-label="Clients" className={styles.section}>
      <div className={styles.label}>{t.clientsLabel}</div>
      <div className={styles.track}>
        <ClientGroup />
        <ClientGroup ariaHidden />
      </div>
    </section>
  );
}

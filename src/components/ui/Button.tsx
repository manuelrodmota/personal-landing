import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export function Button({ variant = "primary", children, className, href, ...rest }: ButtonProps) {
  const isExternal = href?.startsWith("http");

  return (
    <a
      href={href}
      className={`${styles.btn} ${styles[variant]}${className ? ` ${className}` : ""}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}

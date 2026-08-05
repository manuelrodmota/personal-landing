import Image from "next/image";
import styles from "./ImageSlot.module.css";

interface ImageSlotProps {
  src?: string;
  alt: string;
  shape?: "rounded" | "rect";
  placeholder: string;
  priority?: boolean;
  sizes?: string;
  fit?: "cover" | "contain";
}

export function ImageSlot({ src, alt, shape = "rect", placeholder, priority, sizes, fit = "cover" }: ImageSlotProps) {
  const shapeClass = shape === "rounded" ? styles.rounded : styles.rect;

  return (
    <div className={`${styles.slot} ${shapeClass}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "(max-width: 820px) 90vw, 40vw"}
          className={styles.image}
          style={{ objectFit: fit }}
        />
      ) : (
        <span className={styles.placeholder}>{placeholder}</span>
      )}
    </div>
  );
}

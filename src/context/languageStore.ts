import type { Lang } from "@/content";

const STORAGE_KEY = "mrp_lang";

type Listener = () => void;

const listeners = new Set<Listener>();
let cached: Lang | null = null;

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "es";
}

function readInitial(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // localStorage unavailable — fall back to default
  }
  return "en";
}

export function getSnapshot(): Lang {
  if (cached === null) cached = readInitial();
  return cached;
}

export function getServerSnapshot(): Lang {
  return "en";
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setLang(lang: Lang): void {
  cached = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // localStorage unavailable — in-memory state still updates for this session
  }
  listeners.forEach((listener) => listener());
}

"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("calory-theme");
    const preferredTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const nextTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : preferredTheme;

    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("calory-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      className={styles.toggle}
      type="button"
      onClick={toggleTheme}
      aria-label={`Activer le thème ${theme === "light" ? "sombre" : "clair"}`}
      title={`Thème ${theme === "light" ? "sombre" : "clair"}`}
    >
      <span aria-hidden="true">{theme === "light" ? "☾" : "☼"}</span>
    </button>
  );
}

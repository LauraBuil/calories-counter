import type { CSSProperties } from "react";
import styles from "./MacroStat.module.scss";

type MacroStatProps = {
  label: string;
  value: number;
  goal: number;
  unit?: string;
  tone: "protein" | "carbs" | "fat";
};

export function MacroStat({ label, value, goal, unit = "g", tone }: MacroStatProps) {
  const progress = goal > 0 ? Math.min((value / goal) * 100, 100) : 0;

  return (
    <div className={styles.stat}>
      <span
        className={`${styles.ring} ${styles[tone]}`}
        style={{ "--progress": `${progress}%` } as CSSProperties}
        aria-hidden="true"
      />
      <span className={styles.label}>{label}</span>
      <strong className={styles.value}>
        {value} / {goal} {unit}
      </strong>
    </div>
  );
}

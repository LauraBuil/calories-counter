import styles from "./MacroStat.module.scss";

type MacroStatProps = {
  label: string;
  value: number;
  unit?: string;
  tone: "protein" | "carbs" | "fat";
};

export function MacroStat({ label, value, unit = "g", tone }: MacroStatProps) {
  return (
    <div className={styles.stat}>
      <span className={`${styles.dot} ${styles[tone]}`} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
      <strong className={styles.value}>
        {value}
        {unit}
      </strong>
    </div>
  );
}

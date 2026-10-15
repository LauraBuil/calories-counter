import {
  calorieProgress,
  remainingCalories,
  type DailyNutrition,
} from "@calories-counter/domain";
import { MacroStat } from "../../molecules/MacroStat";
import styles from "./DailySummary.module.scss";

type DailySummaryProps = {
  nutrition: DailyNutrition;
};

export function DailySummary({ nutrition }: DailySummaryProps) {
  const progress = calorieProgress(nutrition);
  const remaining = remainingCalories(nutrition);

  return (
    <section className={styles.card} aria-labelledby="daily-summary-title">
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>Aujourd’hui</p>
          <h2 id="daily-summary-title">Ton objectif</h2>
        </div>
        <strong>{progress}%</strong>
      </div>

      <div className={styles.calories}>
        <strong>{nutrition.calories.toLocaleString("fr-FR")}</strong>
        <span>/ {nutrition.calorieGoal.toLocaleString("fr-FR")} kcal</span>
      </div>

      <div
        className={styles.progress}
        role="progressbar"
        aria-label="Progression calorique"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <span style={{ width: `${progress}%` }} />
      </div>

      <p className={styles.remaining}>{remaining} kcal restantes</p>

      <div className={styles.macros}>
        <MacroStat label="Protéines" value={nutrition.protein} tone="protein" />
        <MacroStat label="Glucides" value={nutrition.carbohydrates} tone="carbs" />
        <MacroStat label="Lipides" value={nutrition.fat} tone="fat" />
      </div>
    </section>
  );
}

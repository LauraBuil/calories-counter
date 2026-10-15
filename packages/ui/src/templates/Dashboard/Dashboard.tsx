import type { DailyNutrition } from "@calories-counter/domain";
import { Button } from "../../atoms/Button";
import { DailySummary } from "../../organisms/DailySummary";
import styles from "./Dashboard.module.scss";

const demoNutrition: DailyNutrition = {
  calories: 1_280,
  calorieGoal: 2_100,
  protein: 74,
  carbohydrates: 138,
  fat: 42,
};

export function Dashboard() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.brand}>Calories Counter</p>
          <h1>Bonjour 👋</h1>
          <p>On garde le cap, simplement.</p>
        </div>
        <div className={styles.avatar} aria-label="Profil utilisateur">
          Y
        </div>
      </header>

      <DailySummary nutrition={demoNutrition} />

      <section className={styles.actions} aria-labelledby="quick-actions-title">
        <h2 id="quick-actions-title">Ajouter un aliment</h2>
        <div className={styles.actionGrid}>
          <Button>Rechercher</Button>
          <Button variant="secondary">Scanner un code-barres</Button>
          <Button variant="secondary">Analyser une photo</Button>
        </div>
      </section>
    </main>
  );
}

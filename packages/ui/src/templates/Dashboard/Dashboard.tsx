import type { DailyNutrition } from "@calories-counter/domain";
import { Button } from "../../atoms/Button";
import { ThemeToggle } from "../../atoms/ThemeToggle";
import { BottomNavigation } from "../../organisms/BottomNavigation";
import { DailySummary } from "../../organisms/DailySummary";
import { MealOverview } from "../../organisms/MealOverview";
import styles from "./Dashboard.module.scss";

const demoNutrition: DailyNutrition = {
  calories: 1_250,
  calorieGoal: 2_000,
  protein: 72,
  carbohydrates: 140,
  fat: 42,
};

export function Dashboard() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.brand}>Calory <span aria-hidden="true">♥</span></p>
          <h1>Bonjour Léa !</h1>
          <p>Un petit pas aujourd’hui, un grand résultat demain ♡</p>
        </div>
        <div className={styles.headerActions}>
          <ThemeToggle />
          <div className={styles.avatar} role="img" aria-label="Profil de Léa">🍑</div>
        </div>
      </header>

      <section className={styles.hero} aria-label="Suggestion du jour">
        <div>
          <p>Petits choix, grands équilibres</p>
          <h2>Bien manger,<br />sans se compliquer.</h2>
        </div>
        <span className={styles.foodVisual} aria-hidden="true" />
      </section>

      <div className={styles.dashboardGrid}>
        <DailySummary nutrition={demoNutrition} />
        <div className={styles.sideColumn}>
          <MealOverview />
          <section className={styles.actions} aria-labelledby="quick-actions-title">
            <h2 id="quick-actions-title">Ajouter un aliment</h2>
            <div className={styles.actionGrid}>
              <Button>Rechercher un aliment</Button>
              <Button variant="secondary">Scanner</Button>
              <Button variant="secondary">Analyser une photo</Button>
            </div>
          </section>
        </div>
      </div>

      <BottomNavigation />
    </main>
  );
}

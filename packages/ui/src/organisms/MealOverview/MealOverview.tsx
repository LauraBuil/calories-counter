import styles from "./MealOverview.module.scss";

const meals = [
  { name: "Petit déjeuner", detail: "Porridge banane & fruits rouges", calories: 320 },
  { name: "Déjeuner", detail: "Salade de quinoa & avocat", calories: 450 },
  { name: "Dîner", detail: "À compléter", calories: 0 },
];

export function MealOverview() {
  return (
    <section className={styles.card} aria-labelledby="meal-overview-title">
      <div className={styles.heading}>
        <div>
          <p>Mon journal</p>
          <h2 id="meal-overview-title">Les repas du jour</h2>
        </div>
        <button type="button" aria-label="Ouvrir le calendrier">16</button>
      </div>

      <div className={styles.meals}>
        {meals.map((meal, index) => (
          <article className={styles.meal} key={meal.name}>
            <span className={index === 0 ? styles.foodThumbnail : styles.mealIcon} aria-hidden="true">
              {index === 1 ? "🥗" : index === 2 ? "+" : ""}
            </span>
            <span className={styles.mealCopy}>
              <strong>{meal.name}</strong>
              <small>{meal.detail}</small>
            </span>
            <span className={styles.kcal}>{meal.calories || "—"} kcal</span>
          </article>
        ))}
      </div>
    </section>
  );
}

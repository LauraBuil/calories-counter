export type MacroNutrients = {
  protein: number;
  carbohydrates: number;
  fat: number;
};

export type DailyNutrition = MacroNutrients & {
  calories: number;
  calorieGoal: number;
};

export function remainingCalories({ calories, calorieGoal }: DailyNutrition) {
  return Math.max(calorieGoal - calories, 0);
}

export function calorieProgress({ calories, calorieGoal }: DailyNutrition) {
  if (calorieGoal <= 0) return 0;

  return Math.min(Math.round((calories / calorieGoal) * 100), 100);
}

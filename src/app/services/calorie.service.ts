import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalorieService {
  meals: { meal: string; calories: number }[] = [];
  totalCalories: number = 0;

  addMeal(addMealForm: { meal: string; calories: number }) {
    const parsedCalories = Number(addMealForm.calories); //  To ensure that the calories return numbers not string
    const mealData = { meal: addMealForm.meal, calories: parsedCalories };
    this.meals.push(mealData);
    this.sumCalories();
  }
  sumCalories() {
    this.totalCalories = this.meals.reduce(
      (sum, meal) => sum + meal.calories,
      0
    );
  }
  getTotalMeals() {
    return this.meals.length;
  }
  clearAll() {
    this.meals = [];
    this.totalCalories = 0;
  }
}

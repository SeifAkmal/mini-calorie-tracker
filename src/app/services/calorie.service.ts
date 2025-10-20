import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalorieService {
  meals: { meal: string; calories: number }[] = [];
  totalCalories: number = 0;

  addMeal(meal: { meal: string; calories: number }) {
    const parsedCalories = Number(meal.calories); //  To ensure that the calories return numbers not string
    const mealData = { meal: meal.meal, calories: parsedCalories };
    this.meals.push(mealData);
    this.updateAfterChange();
    return this.meals;
  }
  deleteMeal(mealIndex: number) {
    this.meals.splice(mealIndex, 1);
    this.updateAfterChange();
  }
  getTotalMeals() {
    return this.meals.length;
  }
  calculateTotalCalories() {
    this.totalCalories = this.meals.reduce(
      (sum, meal) => sum + meal.calories,
      0
    );
    this.saveTotalCaloriesToStorage();
  }
  clearAll() {
    this.meals = [];
    this.totalCalories = 0;
    this.updateAfterChange();
  }
  updateAfterChange() {
    this.calculateTotalCalories();
    this.saveMealsToStorage();
  }
  saveMealsToStorage() {
    localStorage.setItem('userMeals', JSON.stringify(this.meals));
    this.calculateTotalCalories();
  }
  getMealsFromStorage() {
    const savedData = localStorage.getItem('userMeals');
    this.meals = savedData ? JSON.parse(savedData) : [];
  }
  saveTotalCaloriesToStorage() {
    const userTotalCalories = JSON.stringify(this.totalCalories);
    localStorage.setItem('userTotalCalories', userTotalCalories);
  }
  getTotalCaloriesFromStorage() {
    const userCaloriesData = localStorage.getItem('userTotalCalories');
    this.totalCalories = userCaloriesData ? JSON.parse(userCaloriesData) : 0;
  }
}

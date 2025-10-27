import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalorieService {
  meals: { meal: string; calories: number }[] = [];
  totalCalories: number = 0;
  avgCalories: number = 0;
  maxCalories: number = 0;

  // add a new meal and update totals
  addMeal(meal: { meal: string; calories: number }) {
    const parsedCalories = Number(meal.calories);
    const mealData = { meal: meal.meal, calories: parsedCalories };
    this.meals.unshift(mealData);
    this.updateAfterChange();
    return this.meals;
  }
  // delete a meal by index and update totals
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
  calculateAvgCalories() {
    const avg = this.totalCalories / this.meals.length;
    this.avgCalories = this.meals.length ? Number(avg.toFixed(2)) : 0;
  }
  calculateMaxCalories() {
    let caloreis: number[] = this.meals.map((m) => m.calories);
    this.maxCalories = caloreis.length ? Math.max(...caloreis) : 0;
  }
  clearAll() {
    this.meals = [];
    this.avgCalories = 0;
    this.totalCalories = 0;
    this.updateAfterChange();
  }
  // update all totals and save everything
  updateAfterChange() {
    this.calculateTotalCalories();
    this.calculateAvgCalories();
    this.calculateMaxCalories();
    this.saveMealsToStorage();
    this.saveAvgCaloriesToStorage();
    this.saveMaxCaloriesToStorage();
  }
  // save/load meals, total, avrage, and max calories from localStorage
  saveMealsToStorage() {
    localStorage.setItem('userMeals', JSON.stringify(this.meals));
  }
  getMealsFromStorage() {
    const savedData = localStorage.getItem('userMeals');
    this.meals = savedData ? JSON.parse(savedData) : [];
  }
  saveTotalCaloriesToStorage() {
    const userTotalCalories = String(this.totalCalories);
    localStorage.setItem('userTotalCalories', userTotalCalories);
  }
  getTotalCaloriesFromStorage() {
    const userCaloriesData = localStorage.getItem('userTotalCalories');
    this.totalCalories = userCaloriesData ? Number(userCaloriesData) : 0;
  }
  saveAvgCaloriesToStorage() {
    const userAverageCalories = String(this.avgCalories);
    localStorage.setItem('userAverageCalories', userAverageCalories);
  }
  getAvgCaloriesFromStorage() {
    const savedData = localStorage.getItem('userAverageCalories');
    this.avgCalories = savedData ? Number(savedData) : 0;
  }
  saveMaxCaloriesToStorage() {
    const saveMaxCalories = String(this.maxCalories);
    localStorage.setItem('maxCalories', saveMaxCalories);
  }
  getMaxCaloriesFromStorage() {
    const savedMaxCalories = localStorage.getItem('maxCalories');
    this.maxCalories = savedMaxCalories ? Number(savedMaxCalories) : 0;
  }
}

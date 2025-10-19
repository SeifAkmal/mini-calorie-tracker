import { Component } from '@angular/core';
import { TotalCaloriesComponent } from '../../components/total-calories/total-calories.component';
import { MealInputComponent } from '../../components/meal-input/meal-input.component';

@Component({
  selector: 'app-calorie-tracker',
  standalone: true,
  imports: [TotalCaloriesComponent,MealInputComponent],
  templateUrl: './calorie-tracker.component.html',
  styleUrl: './calorie-tracker.component.scss',
})
export class CalorieTrackerComponent {}

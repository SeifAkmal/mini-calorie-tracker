import { MealsListComponent } from './../../components/meals-list/meals-list.component';
import { Component } from '@angular/core';
import { TotalCaloriesComponent } from '../../components/total-calories/total-calories.component';
import { MealInputComponent } from '../../components/meal-input/meal-input.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { TipsComponent } from '../../components/tips/tips.component';

@Component({
  selector: 'app-calorie-tracker',
  standalone: true,
  imports: [TotalCaloriesComponent,MealInputComponent, MealsListComponent,StatisticsComponent,TipsComponent],
  templateUrl: './calorie-tracker.component.html',
  styleUrl: './calorie-tracker.component.scss',
})
export class CalorieTrackerComponent {}

import { Component } from '@angular/core';
import { CalorieService } from '../../services/calorie.service';

@Component({
  selector: 'app-total-calories',
  standalone: true,
  templateUrl: './total-calories.component.html',
  styleUrls: ['./total-calories.component.scss'],
})
export class TotalCaloriesComponent {
  constructor(public _calorieService: CalorieService) {}

  clearAllMeals() {
    this._calorieService.clearAll();
  }
}

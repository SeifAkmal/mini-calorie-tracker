import { Component, OnInit } from '@angular/core';
import { CalorieService } from '../../services/calorie.service';

@Component({
  selector: 'app-total-calories',
  standalone: true,
  templateUrl: './total-calories.component.html',
  styleUrls: ['./total-calories.component.scss'],
})
export class TotalCaloriesComponent implements OnInit {
  constructor(public CalorieService:CalorieService) {}

  ngOnInit() {
    this.CalorieService.getTotalCaloriesFromStorage();
  }
  clearAllMeals() {
    this.CalorieService.clearAll();
  }
}

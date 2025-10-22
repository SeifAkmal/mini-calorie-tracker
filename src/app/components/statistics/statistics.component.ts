import { Component, OnInit } from '@angular/core';
import { CalorieService } from '../../services/calorie.service';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent implements OnInit {
  constructor(public calorieService: CalorieService) {}
  clearAllMeals() {
    this.calorieService.clearAll();
  }
  ngOnInit(): void {
    this.calorieService.getAvgCaloriesFromStorage();
    this.calorieService.getMaxCaloriesFromStorage();
  }
}

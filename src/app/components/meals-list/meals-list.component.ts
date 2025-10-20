import { Component, OnInit } from '@angular/core';
import { CalorieService } from '../../services/calorie.service';

@Component({
  selector: 'app-meals-list',
  standalone: true,
  imports: [],
  templateUrl: './meals-list.component.html',
  styleUrl: './meals-list.component.scss',
})
export class MealsListComponent implements OnInit {
  constructor(private calorieService: CalorieService) {}

  get meals() {
    return [...this.calorieService.meals];
  }
  ngOnInit() {
    this.calorieService.getMealsFromStorage();
  }
  deleteMeal(mealIndex: number) {
    this.calorieService.deleteMeal(mealIndex);
  }
}

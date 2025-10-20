import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CalorieService } from '../../services/calorie.service';

@Component({
  selector: 'app-meal-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './meal-input.component.html',
  styleUrl: './meal-input.component.scss',
})
export class MealInputComponent {
  constructor(private _CalorieService: CalorieService) {}
  userMeal: { meal: string; calories: string } = {
    meal: '',
    calories: '',
  };
  onSubmit(addMealForm: NgForm) {
    this._CalorieService.addMeal(addMealForm.value);
    addMealForm.resetForm();
  }
}

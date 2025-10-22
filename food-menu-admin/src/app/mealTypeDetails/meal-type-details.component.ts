import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MealTypeService } from '../services/meal-type.service';
import { MealType } from '../models/meal-type.model';
import { Menu } from '../models/menu.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meal-type-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './meal-type-details.component.html',
  styleUrl: './meal-type-details.component.css'
})
export class MealTypeDetailsComponent implements OnInit {
  mealType: MealType | null = null;
  suggestedMenus: Menu[] = [];
  selectedMealType: MealType | null = null;

    constructor(
      private route: ActivatedRoute,
      private mealTypeService: MealTypeService
    ) {}

    ngOnInit(): void {
        const mealTypeId = this.route.snapshot.paramMap.get('id');
        if (mealTypeId) {
          this.fetchMealTypeDetails(Number(mealTypeId));
        }
      }

      fetchMealTypeDetails(id: number): void {
        this.mealTypeService.getMealTypeById(id).subscribe(
          (data) => {
            this.mealType = data;
            if (this.mealType?.menus?.length) {
              this.suggestedMenus = this.pickRandomMenus(this.mealType.menus, 2);
            }
          },
          (error) => {
            console.error('Error fetching meal type details:', error);
          }
        );
      }

      pickRandomMenus(menus: Menu[], count: number): Menu[] {
        const shuffled = [...menus].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
      }
}

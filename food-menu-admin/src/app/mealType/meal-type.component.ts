import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MealTypeService } from '../services/meal-type.service';
import { MealType } from '../models/meal-type.model';


@Component({
  selector: 'app-meal-type',
  standalone: true,
  imports: [ CommonModule, HttpClientModule],
  providers: [MealTypeService],
  templateUrl: './meal-type.component.html',
  styleUrl: './meal-type.component.css'
})
export class MealTypeComponent implements OnInit {
 mealTypes: MealType[] = [];
 selectedMealType: MealType | null = null;
 selectedMealTypeId: string = '';

 constructor(
             private mealTypeService: MealTypeService,
             private http: HttpClient,
             private router: Router
         ) {}

 ngOnInit(): void {
     this.fetchMealTypes();
   }

//  ngOnInit(): void {
//    const token = localStorage.getItem('jwtToken');
//    console.log(localStorage.getItem('jwtToken'));
//    if (!token) {
//      console.error('No token found. Redirecting to login...');
//      this.router.navigate(['/login']);
//    } else {
//      this.fetchMealTypes();
//    }
//  }

   fetchMealTypes(): void {
     this.mealTypeService.getMealTypes().subscribe(
       (data) => {
         this.mealTypes = data;
//          console.log('Fetched MealType are:', data);
       },
       (error) => {
         console.error('Error fetching meal types:', error);
       }
     );
   }

   onMealTypeSelected(event: Event): void {
     const target = event.target as HTMLSelectElement;
     const selectedValue = target.value;

     this.selectedMealType = this.mealTypes.find(mealType => mealType.id === Number(selectedValue)) || null;
     console.log('These are the selected Meal Types: ', this.selectedMealType)


     if (selectedValue) {
         this.router.navigate(['/meal-types', selectedValue]);
       }
   }

//    onMealTypeSelected(event: Event): void {
//        const selectedId = Number(this.selectedMealTypeId);
//        this.selectedMealType = this.mealTypes.find(
//          (mealType) => mealType.id === selectedId
//        ) || null;
//
// //      Navigate to details (optional)
//     if (this.selectedMealType) {
//         console.log('Selected Meal Type:', this.selectedMealType);
//         console.log('This are fetched Menus :', this.selectedMealType.menus);
//
//         this.router.navigate(['/meal-types', selectedId]);
//     }
//   }
}



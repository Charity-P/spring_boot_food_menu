import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-meal',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css'
})
export class MealComponent {
 constructor(private http: HttpClient) {

    }
}

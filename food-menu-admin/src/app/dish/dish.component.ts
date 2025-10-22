import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DishService } from '../services/dish.service';
import { Dish } from '../models/dish.model';


@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css'
})
export class DishComponent implements OnInit {
dishes: Dish[] = [];

constructor(private dishService: DishService) {}

ngOnInit() {
    this.dishService.getDishes().subscribe((data) => {
      this.dishes = data;
    });
  }

}





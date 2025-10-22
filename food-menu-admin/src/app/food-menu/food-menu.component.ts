import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {

}

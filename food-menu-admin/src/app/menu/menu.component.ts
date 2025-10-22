import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu.model';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
 menus: Menu[] = [];
 mealTypeId!: number;

constructor(private menuService: MenuService, private route: ActivatedRoute) {}

ngOnInit() {
    this.menuService.getMenus().subscribe((data) => {
      this.menus = data;
    });
  }
//   ngOnInit(): void {
//
//       this.mealTypeId = Number(this.route.snapshot.paramMap.get('id'));
//
//
//       this.menuService.getMenusByMealType(this.mealTypeId).subscribe(
//         (data) => {
//           this.menus = data;
//         },
//         (error) => {
//           console.error('Error fetching menus:', error);
//         }
//       );
//     }
}


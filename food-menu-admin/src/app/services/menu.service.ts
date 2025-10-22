import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:8080/api/menus';

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
          return this.http.get<Menu[]>(this.apiUrl);
        }

//   getMenusByMealType(mealTypeId: number): Observable<Menu[]> {
//       return this.http.get<Menu[]>(`${this.apiUrl}?mealTypeId=${mealTypeId}`);
//     }
}




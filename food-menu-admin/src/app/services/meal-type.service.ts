import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MealType } from '../models/meal-type.model';

@Injectable({
  providedIn: 'root',
})
export class MealTypeService {
private apiUrl = 'http://localhost:8080/api/meal-types';

  constructor(private http: HttpClient) { }

  getMealTypes(): Observable<MealType[]> {
        return this.http.get<MealType[]>(this.apiUrl);
      }

  getMealTypeById(id: number): Observable<MealType> {
      return this.http.get<MealType>(`${this.apiUrl}/${id}`);
    }
}

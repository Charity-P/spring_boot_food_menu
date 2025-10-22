import { MealType } from './meal-type.model';
import { Dish } from './dish.model';

export interface Menu {
    id: number;
    name: string;
    dishes: Dish[];
    mealTypes: MealType[];
}

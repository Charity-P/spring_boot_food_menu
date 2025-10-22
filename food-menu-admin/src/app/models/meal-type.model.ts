import { Menu } from './menu.model';
import { Dish } from './dish.model';


export interface MealType {
    id: number;
    name: string;
    dishes: Dish[];
    menus: Menu[];
}

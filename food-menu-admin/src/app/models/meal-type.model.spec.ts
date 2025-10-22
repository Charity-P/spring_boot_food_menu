import { MealType } from './meal-type.model';
import { Dish } from './dish.model';
import { Menu } from './menu.model';

describe('MealType interface', () => {
  it('should create a valid MealType object', () => {
    const mealType: MealType = {
      id: 1,
      name: 'Lunch',
      dishes: [{ id: 1, name: 'Salad' }],
      menus: [],
    };
    expect(mealType).toBeTruthy();
    expect(mealType.dishes.length).toBeGreaterThan(0);
  });
});

import { Menu } from './menu.model';
import { Dish } from './dish.model';
import { MealType } from './meal-type.model';

describe('Menu interface', () => {
  it('should create a valid Menu object', () => {
    const menu: Menu = {
      id: 1,
      name: 'Weekend Menu',
      dishes: [{ id: 1, name: 'Burger' }],
      mealTypes: [],
    };
    expect(menu).toBeTruthy();
    expect(menu.dishes[0].name).toBe('Burger');
  });
});

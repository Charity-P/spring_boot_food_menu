import { Dish } from './dish.model';

describe('Dish interface', () => {
  it('should create a valid Dish object', () => {
    const dish: Dish = { id: 1, name: 'Pizza' };
    expect(dish).toBeTruthy();
    expect(dish.name).toBe('Pizza');
  });
});

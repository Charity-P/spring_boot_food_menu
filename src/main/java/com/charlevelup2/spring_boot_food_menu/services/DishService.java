package com.charlevelup2.spring_boot_food_menu.services;

import com.charlevelup2.spring_boot_food_menu.model.Dish;
import com.charlevelup2.spring_boot_food_menu.model.MealType;
import com.charlevelup2.spring_boot_food_menu.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
public class DishService {
    @Autowired
    private DishRepository dishRepository;

//    public Dish saveDish(Dish dish) {
//        return dishRepository.save(dish);
//    }

    @Transactional
    public Dish save(Dish dish) {
        if (dishRepository.existsByName(dish.getName())) {
            throw new IllegalArgumentException("Meal with name '" + dish.getName() + "' already exists.");
        }
        return dishRepository.save(dish);
    }

//    @Transactional
    public Optional<Dish> findDishById(Long id) {
        return dishRepository.findById(id);
    }

//    @Transactional
    public List<Dish> findAllDishes() {
        return dishRepository.findAll();
    }

    public Dish updateDish(Long id, Dish dish) {
        return dishRepository.save(dish);
    }

    public void deleteDishById(Long id) {
        dishRepository.deleteById(id);
    }

    public boolean existsById(Long id) {
        return dishRepository.existsById(id);
    }

}

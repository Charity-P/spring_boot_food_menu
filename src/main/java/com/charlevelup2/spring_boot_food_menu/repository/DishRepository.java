package com.charlevelup2.spring_boot_food_menu.repository;

import com.charlevelup2.spring_boot_food_menu.model.Dish;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DishRepository extends JpaRepository<Dish, Long> {
    boolean existsByName(String name);
}

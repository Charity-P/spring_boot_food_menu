package com.charlevelup2.spring_boot_food_menu.repository;

import com.charlevelup2.spring_boot_food_menu.model.MealType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealTypeRepository extends JpaRepository<MealType, Long> {
    boolean existsByName(String name);
}

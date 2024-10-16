package com.charlevelup2.spring_boot_food_menu.repository;

import com.charlevelup2.spring_boot_food_menu.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MenuRepository extends JpaRepository<Menu, Long> {
    Optional<Menu> findTopByName(String name);

}

package com.charlevelup2.spring_boot_food_menu.controller;

import com.charlevelup2.spring_boot_food_menu.model.Dish;
import com.charlevelup2.spring_boot_food_menu.model.MealType;
import com.charlevelup2.spring_boot_food_menu.services.DishService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class DishController {
    @Autowired
    private DishService dishService;

    // Create a new Dish
    @PostMapping("/dishes")
    public Dish createDish(@RequestBody Dish dish) {
        return dishService.save(dish);
    }

    // Get a Dish by ID
    @GetMapping("/dishes/{id}")
    public ResponseEntity<Dish> getDishById(@PathVariable Long id) throws BadRequestException {
        System.out.println("Dish " + id);

        Optional<Dish> dishById = dishService.findDishById(id);
        if(dishById.isPresent()){
           return new ResponseEntity<>(dishById.get(), HttpStatus.OK);
        }else{
            throw new BadRequestException("Dish with id " + id + " was not found");
        }

    }

    // Get all Dishes
    @GetMapping("/dishes")
    public List<Dish> getAllDishes() {
        return dishService.findAllDishes();
    }

//    @PutMapping("/{id}")
//    public Dish modifyDish(@PathVariable Long id, @RequestBody Dish dish) {
//        return dishService.updateDish(id, dish);
//    }

    @PutMapping("/dishes")
    public ResponseEntity<Dish> modify(@RequestBody Dish dish) throws BadRequestException {
        if (!ObjectUtils.isEmpty(dish)){
            Dish existingDish = dishService.save(dish);
            return ResponseEntity.ok(existingDish);
        }else{
            throw new BadRequestException("Required request body is missing");
        }
    }

    @DeleteMapping("/dishes/{id}")
    public ResponseEntity<?> deleteDish(@PathVariable Long id) {
        if (!dishService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Dish id " + id + " not found");
        }
        try {
            dishService.deleteDishById(id);
            return ResponseEntity.ok("Dish id " + id + " successfully deteled");
        } catch (HttpClientErrorException.BadRequest e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occured");
        }
    }
}

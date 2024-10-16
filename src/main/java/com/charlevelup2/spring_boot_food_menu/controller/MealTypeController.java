package com.charlevelup2.spring_boot_food_menu.controller;

import com.charlevelup2.spring_boot_food_menu.model.MealType;
import com.charlevelup2.spring_boot_food_menu.model.Menu;
import com.charlevelup2.spring_boot_food_menu.services.MealTypeService;
import jakarta.persistence.EntityNotFoundException;
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
public class MealTypeController {
    @Autowired
    private MealTypeService mealTypeService;


    @PostMapping("/meal-types")
    public MealType createMealType(@RequestBody MealType mealType){

        return mealTypeService.saveMealType(mealType);
    }

    @GetMapping("/meal-types")
    public List<MealType> getAllMealTypes() {
        return mealTypeService.findAllMealType();
    }


    @GetMapping("/meal-types/{id}")
    public ResponseEntity<MealType> getMealTypeById(@PathVariable Long id) throws BadRequestException{
        Optional<MealType> mealTypeById = mealTypeService.findMealTypeById(id);
        if(mealTypeById.isPresent()){
            return new ResponseEntity<>(mealTypeById.get(), HttpStatus.OK);
        }else{
            throw new BadRequestException("MealType with id " + id + " was not found");
        }
    }


//    @GetMapping("/meal-types")
//    public List<String> getAllMealTypeNames(){
//        return mealTypeService.findAllMealTypeNames();
//    }


//    @PutMapping
//    public MealType modifyMealType(@RequestBody MealType mealType){
//        return mealTypeService.updateMealType(mealType);
//    }


    @PutMapping("/meal-types")
    public ResponseEntity<MealType> updateMealType(@RequestBody  MealType mealType) throws BadRequestException {
        if (!ObjectUtils.isEmpty(mealType)){
            MealType mealTypeId = mealTypeService.updateMealType(mealType);
            return ResponseEntity.ok(mealTypeId);
        }else{
            throw new BadRequestException("Required request body is missing");
        }
    }

//    @DeleteMapping("/meal-types/{id}")
//    public ResponseEntity<?> deleteMealType(@PathVariable Long id) {
//        try {
//            mealTypeService.deleteMealTypeById(id);
//            return ResponseEntity.ok("Meal type successfully deleted");
//        } catch (EntityNotFoundException e) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No meal type with id" + id);
//        }
//    }


    @DeleteMapping("/meal-types/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) {
        Optional<MealType> existingMealType = this.mealTypeService.findMealTypeById(id);
        if (existingMealType.isPresent()) {
            this.mealTypeService.deleteMealTypeById(existingMealType.get().getId());
            return ResponseEntity.ok("Meal type successfully deleted");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No meal type with id" + id);
//        return ResponseEntity.notFound().build();
        }

    }


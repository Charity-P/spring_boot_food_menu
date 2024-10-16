package com.charlevelup2.spring_boot_food_menu.services;

import com.charlevelup2.spring_boot_food_menu.model.MealType;
import com.charlevelup2.spring_boot_food_menu.model.Menu;
import com.charlevelup2.spring_boot_food_menu.repository.MealTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MealTypeService {
    @Autowired
    private MealTypeRepository mealTypeRepository;

    @Transactional
    public MealType saveMealType(MealType mealType) {
        if (mealTypeRepository.existsByName(mealType.getName())) {
            throw new IllegalArgumentException("Meal with name '" + mealType.getName() + "' already exists.");
        }
        return mealTypeRepository.save(mealType);
    }
//    public MealType saveMealType(MealType mealType){
//        return mealTypeRepository.save(mealType);
//    }

    @Transactional(readOnly = true)
    public List<MealType> findAllMealType() {
        return mealTypeRepository.findAll();
    }

    public List<String> findAllMealTypeNames() {
        List<MealType> availableMealTypes = mealTypeRepository.findAll();
        return availableMealTypes.stream()
                .map(MealType::getName)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Optional<MealType> findMealTypeById(Long id) {
        return mealTypeRepository.findById(id);
    }


    public MealType updateMealType(MealType mealType) {
        return mealTypeRepository.save(mealType);
    }

    public Optional<MealType> updateMealType(long id, MealType updatedMealType) {
        return mealTypeRepository.findById(id); // Not sure if this method is important, is it different from the one above
    }

    public void deleteMealTypeById( Long id) {
        mealTypeRepository.deleteById(id);
    }
}

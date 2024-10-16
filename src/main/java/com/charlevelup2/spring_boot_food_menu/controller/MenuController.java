package com.charlevelup2.spring_boot_food_menu.controller;

import com.charlevelup2.spring_boot_food_menu.dto.MenuResponseDTO;
import com.charlevelup2.spring_boot_food_menu.model.Dish;
import com.charlevelup2.spring_boot_food_menu.model.MealType;
import com.charlevelup2.spring_boot_food_menu.model.Menu;
import com.charlevelup2.spring_boot_food_menu.services.MenuService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class MenuController {
    @Autowired
    private MenuService menuService;

    @PostMapping("/menus")
    public ResponseEntity<Menu> createMenu(@RequestBody Menu menu) throws Exception{
        Boolean menuExists = menuService.menuExists(menu);
        if (!ObjectUtils.isEmpty(menuExists) && menuExists){
            throw new BadRequestException("Menu with this name already exists");
        }else {
            Menu savedMenu = menuService.saveMenu(menu);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedMenu);
        }
    }

    @GetMapping("/menus")
    public List<Menu> getAllMenu() {
        return menuService.findAllMenu();
    }

//    @GetMapping("/menus")
//    public List<String> getAllMenu(){
//        List<Menu> menuNames = menuService.findAllMenu();
//        return menuNames.stream()
//                .map(Menu::getName)
//                .collect(Collectors.toList());
//    }

//    @GetMapping("/menus")
//    public List<MenuResponseDTO> getAllMenu() { //Data Transfer Object
//        List<Menu> menus = menuService.findAllMenu();
//        return menus.stream()
//                .map(menu -> new MenuResponseDTO(
//                        menu.getName(),
//                        menu.getDishes().stream()  // Assuming Menu has a list of Dish objects
//                                .map(Dish::getName)     // Extract dish names
//                                .collect(Collectors.toList())
//                ))
//                .collect(Collectors.toList());
//    }


    @GetMapping("/menus/{id}")
    public ResponseEntity<Menu> getMenuById(@PathVariable Long id) throws BadRequestException{
        Optional<Menu> menuById = menuService.findMenuById(id);
        if(menuById.isPresent()){
            return new ResponseEntity<>(menuById.get(), HttpStatus.OK);
        }else{
            throw new BadRequestException("Menu with id " + id + " was not found");
        }
    }

//    @PutMapping("/menus")
//    public ResponseEntity<?> updateMenuById(@RequestBody Menu menu) throws BadRequestException {
//            Menu updatedMenu = menuService.saveMenu(menu);
//
//            return ResponseEntity.ok(updatedMenu);
//    }

    @PutMapping("/menus")
    public ResponseEntity<Menu> update(@RequestBody Menu menu) throws BadRequestException {
        Menu existingMenu = menuService.saveMenu(menu);
        if (!ObjectUtils.isEmpty(existingMenu)){
            return ResponseEntity.ok(existingMenu);
        }else{
            throw new BadRequestException("Required request body is missing");
        }
    }

//    @DeleteMapping("/menus/{id}")
//    public ResponseEntity<?> deleteMenu(@PathVariable Long id) {
//        try {
//            menuService.deleteMenuById(id);
//            return ResponseEntity.ok("Menu deleted successfully");
//        }catch (EmptyResultDataAccessException e){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Menu for id" + id + "not found");
//        }
//    }


    @DeleteMapping("/menus/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) {
        Optional<Menu> existingMenu = this.menuService.findMenuById(id);
        if (existingMenu.isPresent()) {
            this.menuService.deleteMenuById(existingMenu.get().getId());
            return ResponseEntity.ok("Menu successfully deleted");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No menu with id" + id);
//        return ResponseEntity.notFound().build();
    }


}

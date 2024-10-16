package com.charlevelup2.spring_boot_food_menu.services;

import com.charlevelup2.spring_boot_food_menu.model.Dish;
import com.charlevelup2.spring_boot_food_menu.model.Menu;
import com.charlevelup2.spring_boot_food_menu.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;

    @Transactional
    public Menu saveMenu(Menu menu) {
       return menuRepository.save(menu);
    }



    public Boolean menuExists(Menu menu){
        return menuRepository.findTopByName(menu.getName()).isPresent();
    }



    @Transactional(readOnly = true)
    public List<Menu> findAllMenu() {
        return menuRepository.findAll();
    }

    public Optional<Menu> findMenuById(Long id) {
        return menuRepository.findById(id);
    }

    public Optional<Menu> updateMenu(Long id, Menu menu) {
        return Optional.of(menuRepository.save(menu));
    }


//    @Transactional(readOnly = true)
//    public Menu findMenuById(Long id) {
//        return menuRepository.findById(id);
//    }

//    public Menu updateMenu(Long id, Menu menu) {
//        return menuRepository.save(menu);
//    }

    public void deleteMenuById(Long id) {
        menuRepository.deleteById(id);
    }


}

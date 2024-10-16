package com.charlevelup2.spring_boot_food_menu.dto;

import java.util.List;

public class MenuResponseDTO {
    private String menuName;
    private List<String> dishNames;

    public MenuResponseDTO(String menuName, List<String> dishNames){
        this.menuName = menuName;
        this.dishNames = dishNames;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public List<String> getDishNames() {
        return dishNames;
    }

    public void setDishNames(List<String> dishNames) {
        this.dishNames = dishNames;
    }

}

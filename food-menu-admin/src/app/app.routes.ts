import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MealTypeComponent } from './mealType/meal-type.component';
import { MenuComponent } from './menu/menu.component';
import { DishComponent } from './dish/dish.component';
import { MealTypeDetailsComponent } from './mealTypeDetails/meal-type-details.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'mealType', component: MealTypeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'menu/:id', component: MenuComponent },
    { path: 'dish', component: DishComponent },
    { path: 'meal-types/:id', component: MealTypeDetailsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'password-reset', component: PasswordResetComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



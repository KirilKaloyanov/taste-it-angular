import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './loginComponent/login.cmpt';
import { RegisterComponent } from './register/register.cmpt';
import { LogoutComponent } from './logoutComponent/logout.cmpt';
import { AuthGuard } from '../shared/guards/authGuard';
import { UserRecipeService } from './userRecipes.service';
import { UserRecipes } from './userRecipes/userRecipesComponent/userRecipes.cmpt';
import { RecipeForm } from './userRecipes/userRecipeFormComponent/recipeForm.cmpt';
import { RecipeService } from '../recipes/recipes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: {shouldBeLogged: false} },
      { path: 'register', component: RegisterComponent, canActivate: [AuthGuard], data: {shouldBeLogged: false} },
      { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard], data: {shouldBeLogged: true} },
      { path: 'user/:userId', component: UserRecipes, canActivate: [AuthGuard], data: {shouldBeLogged: true} },
      { path: 'user/:userId/:recipeId', component: RecipeForm, canActivate: [AuthGuard], data: {shouldBeLogged: true} },
    ]),
  ],
  declarations: [LoginComponent, UserRecipes, RegisterComponent, RecipeForm],
  providers: [UserRecipeService, RecipeService],
  exports: [],
})
export class UsersModule {}

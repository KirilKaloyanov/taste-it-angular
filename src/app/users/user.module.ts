import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './loginComponent/login.cmpt';
import { LogoutComponent } from './logoutComponent/logout.cmpt';
import { AuthGuard } from '../shared/guards/authGuard';
import { UserRecipeService } from './userRecipes.service';
import { UserRecipes } from './userRecipes/userRecipesComponent/userRecipes.cmpt';
import { EditRecipe } from './userRecipes/userEditRecipeComponent/editRecipe.cmpt';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: {shouldBeLogged: false} },
      { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard], data: {shouldBeLogged: true} },
      { path: 'user/:userId', component: UserRecipes, canActivate: [AuthGuard], data: {shouldBeLogged: true} },
      { path: 'user/:userId/:recipeId', component: EditRecipe, canActivate: [AuthGuard], data: {shouldBeLogged: true} },
    ]),
  ],
  declarations: [LoginComponent, UserRecipes],
  providers: [UserRecipeService],
  exports: [],
})
export class UsersModule {}

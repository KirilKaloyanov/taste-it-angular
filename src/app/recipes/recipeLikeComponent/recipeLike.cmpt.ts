import { Component, Input, OnInit } from '@angular/core';
import { TRecipe } from 'src/app/shared/interfaces';
import { UsersService } from 'src/app/users/users.service';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'recipe-like',
  template: `
    <i
      class="bi bi-heart-fill m-1"
      [class]="isLiked ? 'bi-heart-fill' : 'bi-heart'"
      style="font-size: 1rem; color: rgb(211, 7, 7); cursor: pointer"
      (click)="onLike()"
    ></i>
  `,
})
export class RecipeLikeComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private usersService: UsersService
  ) {}

  isLiked!: boolean;

  @Input('recipe') recipe!: TRecipe;
  username!: string | null;
  @Input('renderRecipe') renderRecipe!: any;

  ngOnInit() {
    this.username = this.usersService.getUsername();
    const index = this.recipe.likes.findIndex((rl) => rl.user == this.username);
    this.isLiked = index > 0 && this.recipe.likes[index].like;
  }

  onLike() {
    this.isLiked = !this.isLiked;
    this.recipeService
      .likeRecipe(this.recipe._id)
      .subscribe((res) => this.renderRecipe(res));
  }
}

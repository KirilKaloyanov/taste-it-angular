import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipes.service';
import { TLike, TRecipe } from 'src/app/shared/interfaces';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'recipe',
  templateUrl: './recipeDetails.cmpt.html',
  styles: ['h2 {text-align: center;}'],
})
export class RecipeDetailsComponent {
  
    constructor(
      private recipeService: RecipeService,
      private usersService: UsersService,
      private activatedRoute: ActivatedRoute
    ) {}
  
  recipe!: TRecipe;
  recipeLikes!: TLike[];
  userId!: string | null;

  ngOnInit() {
    this.userId = this.usersService.getUserId();
    const recipeId = this.activatedRoute.snapshot.params['id'];
    this.recipeService.getSingleRecipe(recipeId).subscribe({
      next: (response) => this.renderRecipe(response),
      error: (error) => console.log(error),
    });
  }

  renderRecipe = (recipe: TRecipe) => {
    this.recipe = recipe;
    this.recipeLikes = this.recipe.likes.filter((rl) => rl.like === true);
  }

  datestring(aDate: Date) {
    let d = new Date(aDate);
    return d.toDateString() + ', ' + d.toLocaleTimeString();
  }
}

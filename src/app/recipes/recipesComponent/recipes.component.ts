import { Component } from '@angular/core';

import { RecipeService } from '../recipes.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipes!: any[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    // this.recipeService.getRecipes().then((recipes) => {
    //   this.recipes = recipes;
    //   console.log(this.recipes);
    // });
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}

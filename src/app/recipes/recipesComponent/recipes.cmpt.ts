import { Component } from '@angular/core';
import { TCategory, TRecipe } from 'src/app/shared/interfaces';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.cmpt.html',
})
export class RecipesComponent {
  constructor(private recipeService: RecipeService) {}

  recipes!: TRecipe[];
  categories: TCategory[] = [{ _id: '1', name: 'All Categories' }];
  selectedCategory: string = 'All Categories';

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.recipeService
        .getCategories()
        .subscribe((categories: TCategory[]) => {
          categories
            .filter((c) => this.recipes.some((r) => r.category.name === c.name))
            .map((c) => this.categories.push(c));
        });
      this.getRecipeLikesCount();
    });
  }

  getRecipeLikesCount() {
    this.recipes.map(function (r) {
      r.likes = r.likes.filter((rl) => rl.like === true);
      return r;
    });
  }

  setSelectedCategory(category: any) {
    this.selectedCategory = category;
  }
}

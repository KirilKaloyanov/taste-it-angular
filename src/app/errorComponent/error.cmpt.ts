import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipes.service';

@Component({
    selector: 'error',
    templateUrl: './error.cmpt.html',
    styles: ['h2 {text-align: center;}'] 
})
export class ErrorComponent {

    constructor(private recipeService: RecipeService) {}

    error$$ = this.recipeService.error$$;
    
}
import { Component, Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipes.service';

@Component({
    selector: 'error',
    templateUrl: './error.cmpt.html',
    styles: []
})
export class ErrorComponent {

    constructor(private recipeService: RecipeService) {}

    error$$ = this.recipeService.error$$;
    
    
    ngOnInit() {
        this.error$$.subscribe({
            next: (e) => {console.log('next', e)},
            // error: err => {
            //     console.log(err);
            //     console.log(err);
            // }
        });
        console.log(this.error$$);
    }
}
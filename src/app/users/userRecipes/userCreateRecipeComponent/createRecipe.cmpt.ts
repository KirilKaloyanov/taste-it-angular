import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from 'src/app/recipes/recipes.service';
import { TCategory } from 'src/app/shared/interfaces';

@Component({
  selector: 'create-recipe',
  templateUrl: './createRecipe.cmpt.html',
  styleUrls: ['./createRecipe.cmpt.css'],
})
export class CreateRecipe implements OnInit{
    // methods: FormArray = [
    //     new FormControl(null),
    //     new FormControl(null),
    // ];

    constructor(private recipeService: RecipeService){}

    categories: TCategory[] = [{name: 'Loading ...', _id: '0'}]

    createForm: FormGroup = new FormGroup({
        name: new FormControl(null),
        numberOfServings: new FormControl(null),
        ingredients: new FormArray([
                new FormControl(null)
            ]),
        methods: new FormArray([
            new FormControl(null)
        ]),
        category: new FormControl(null)
    });;

    getItemFormsGroup(items: string) {
        return this.createForm.get(items) as FormArray;
    }

    deleteInput(index: any, items: string){
        this.getItemFormsGroup(items).removeAt(index)
        console.log(index);
    }

    addInput(items: string){
        this.getItemFormsGroup(items).push(new FormControl(null))
    }

    ngOnInit(): void {
        this.recipeService.getCategories().subscribe({
            next: (categories) => this.categories = categories,
            error: (err) => console.log(err)
        });
    }

    onSubmit(){
        console.log(this.createForm);
    }
}

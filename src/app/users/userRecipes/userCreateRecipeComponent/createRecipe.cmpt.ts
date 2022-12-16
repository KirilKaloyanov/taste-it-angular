import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/recipes/recipes.service';
import { TCategory } from 'src/app/shared/interfaces';

@Component({
  selector: 'create-recipe',
  templateUrl: './createRecipe.cmpt.html',
  styleUrls: ['./createRecipe.cmpt.css'],
})
export class CreateRecipe implements OnInit {

  constructor(private recipeService: RecipeService) {}

  categories: TCategory[] = [{ name: 'Loading ...', _id: '0' }];
  errors: string[] = [];

  createForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    numberOfServings: new FormControl(null, [Validators.required, this.isNumberOfServingsPositive]),
    ingredients: new FormArray([new FormControl(null, Validators.required)]),
    methods: new FormArray([new FormControl(null, Validators.required)]),
    category: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
    this.recipeService.getCategories().subscribe({
      next: (categories) => (this.categories = categories),
      error: (err) => console.log(err),
    });
  }

  getItemFormsGroup(items: string) {
    return this.createForm.get(items) as FormArray;
  }

  deleteInput(index: any, items: string) {
    this.getItemFormsGroup(items).removeAt(index);
  }

  addInput(items: string) {
    this.getItemFormsGroup(items).push(new FormControl(null, Validators.required));
  }

  isNumberOfServingsPositive(control: FormControl){
    if (control.value < 1) return {negativeNumberOfServings: true};
    return null;
  }

  onSubmit() {
    console.log(this.createForm);
  }
  
}

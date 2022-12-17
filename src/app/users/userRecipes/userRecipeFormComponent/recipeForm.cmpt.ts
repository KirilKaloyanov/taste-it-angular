import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/recipes/recipes.service';
import { TCategory } from 'src/app/shared/interfaces';
import { UserRecipeService } from '../../userRecipes.service';
import { UsersService } from '../../users.service';

@Component({
  selector: 'create-recipe',
  templateUrl: './recipeForm.cmpt.html',
  styleUrls: ['./recipeForm.cmpt.css'],
})
export class RecipeForm implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private userRecipeService: UserRecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}
  id = this.activatedRoute.snapshot.params['recipeId'];
  user = this.usersService.getUsername();
  userId = this.usersService.getUserId();

  submitBtnText: string = this.id == 'createRecipe' ? 'Create' : 'Update';
  disabledSubmitBtn: boolean = false;
  errors: string | null = null;

  categories: TCategory[] = [{ name: 'Loading ...', _id: '0' }];
  dynamicInputs: any = { ingredients: true, methods: true };

  recipeForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    numberOfServings: new FormControl(null, [
      Validators.required,
      this.isNumberOfServingsPositive,
    ]),
    ingredients: new FormArray([new FormControl(null, Validators.required)]),
    methods: new FormArray([new FormControl(null, Validators.required)]),
    category: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
    this.recipeService.getCategories().subscribe({
      next: (categories) => (this.categories = categories),
      error: (err) => console.log(err),
    });
    
    if (this.id != 'createRecipe') {
      this.recipeService.getSingleRecipe(this.id).subscribe({
        next: (recipe) => {
          if (recipe.userId.username !== this.user) this.router.navigate(['/not-found']);
          this.recipeForm.reset({
            name: recipe.name,
            numberOfServings: recipe.numberOfServings,
            category: recipe.category.name,
            ingredients: [recipe.ingredients[0].ingredient],
            methods: [recipe.methods[0].method],
          });

          recipe.ingredients.forEach((i: any, index: number) => {
            if (index > 0)
              this.getItemFormsGroup('ingredients').push(
                new FormControl(i.ingredient, Validators.required)
              );
          });

          recipe.methods.forEach((i: any, index: number) => {
            if (index > 0)
              this.getItemFormsGroup('methods').push(
                new FormControl(i.method, Validators.required)
              );
          });
        },
        error: (err) => console.log(err),
      });
    }
  }

  getItemFormsGroup(items: string) {
    return this.recipeForm.get(items) as FormArray;
  }

  deleteInput(index: any, items: string) {
    if (index == 0) {
      if (this.dynamicInputs[items] == true) {
        this.dynamicInputs[items] = !this.dynamicInputs[items];
        setTimeout(
          () => (this.dynamicInputs[items] = !this.dynamicInputs[items]),
          3000
        );
      }
      return;
    }
    this.getItemFormsGroup(items).removeAt(index);
  }

  addInput(items: string) {
    this.getItemFormsGroup(items).push(
      new FormControl(null, Validators.required)
    );
  }

  isNumberOfServingsPositive(control: FormControl) {
    if (control.value < 1) return { negativeNumberOfServings: true };
    return null;
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const recipe = mapRecipe(this.recipeForm.value);

      this.submitBtnText =
        this.id == 'createRecipe' ? 'Create ...' : 'Update ...';
      this.disabledSubmitBtn = true;

      if (this.id != 'createRecipe') {
        this.userRecipeService.updateRecipe(recipe, this.id).subscribe({
          next: () => this.router.navigate([`/user/${this.userId}`]),
          error: (err) => console.log(err),
        });
      } else {
        this.userRecipeService.createRecipe(recipe).subscribe({
          next: () => this.router.navigate([`/user/${this.userId}`]),
          error: (err) => console.log(err),
        });
      }
    } else {
      this.errors = 'All Fields are required';
      setTimeout(() => (this.errors = null), 3000);
    }

    function mapRecipe(recipe: any) {
      recipe.ingredients = recipe.ingredients.map((i: any, index: number) => {
        return { id: index, ingredient: i };
      });
      recipe.methods = recipe.methods.map((i: any, index: number) => {
        return { id: index, method: i };
      });
      return recipe;
    }
  }
}

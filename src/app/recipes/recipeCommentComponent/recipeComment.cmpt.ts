import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'recipe-comment',
  template: `<h4 class="mt-4">New Comment</h4>
    <form #form="ngForm" (submit)="submitComment(form)">
      <textarea class="form-control" ngModel name="commentText"></textarea>
      <ng-container>
        <div class="alert alert-danger" *ngIf="errors != null || ''">
          {{ errors }}
        </div>
      </ng-container>
      <button class="btn btn-primary my-3">{{ submitBtnText }}</button>
    </form> `,
})
export class RecipeCommentComponent {
  submitBtnText = 'Comment';
  errors!: string;
  @Input('recipeId') recipeId!: number;
  @Input('renderRecipe') renderRecipe!: any; 

  constructor(private recipeService: RecipeService) {}

  submitComment(form: any) {
    if (form.value.commentText == '') {
      this.errors = 'You cannot submit empty comment';
      return;
    }
    this.recipeService
      .postComment(this.recipeId, form.value.commentText)
      .subscribe((response) => {
        this.renderRecipe(response);
        form.reset();
      });
  }

  
}

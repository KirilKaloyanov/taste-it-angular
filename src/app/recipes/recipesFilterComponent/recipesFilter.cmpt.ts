import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TCategory } from 'src/app/shared/interfaces';

@Component({
  selector: 'recipes-filter',
  template: `
    <ul>
      <li
        *ngFor="let category of categories"
        (click)="selectCategory(category)"
      >
        {{ category.name }}
      </li>
    </ul>
  `,
  styleUrls: ['recipesFilter.cmpt.css'],
})
export class RecipesFilterComponent {
  @Input() categories!: TCategory[];

  @Output() changeCategory: EventEmitter<any> = new EventEmitter();

  selectCategory(category: any) {
    this.changeCategory.emit(category.name);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TCategory } from 'src/app/shared/interfaces';

@Component({
  selector: 'recipes-filter',
  template: `
    <ul>
      <li
        [class.underlined]="selectedCategory == category.name"
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
  @Input() selectedCategory!: string;

  @Output() changeCategory = new EventEmitter();

  selectCategory(category: TCategory) {
    this.changeCategory.emit(category.name);
  }
}

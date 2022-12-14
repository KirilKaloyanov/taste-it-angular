import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { apiEndpoint } from '../shared/apiEndpoint';
@Injectable()
export class RecipeService {
  host = apiEndpoint;
  error$$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  getRecipes() {
    // return fetch('https://taste-it-api-node.herokuapp.com/api/recipes').then(res => res.json());
    return this.http.get<any>(`${this.host}/recipes`);
  }

  getCategories() {
    return this.http.get<any>(`${this.host}/categories`);
  }

  getSingleRecipe(id: number) {
    return this.http.get<any>(this.host + '/recipes/' + id);
  }

  postComment(id: number, data: string) {
    return this.http.put<any>(this.host + '/recipes/' + id + '/new_comment', {comment: data})
  }

  likeRecipe(id: number) {
    return this.http.put<any>(this.host + '/recipes/' + id + '/like', {})
  }

}

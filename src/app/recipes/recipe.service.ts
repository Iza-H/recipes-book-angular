import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy1',
      'Dummy',
      'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg',
      [ new Ingredient('Ingredient1', 1), new Ingredient('Ingredient2', 2)] ),
    new Recipe('Dummy2',
      'Dummy',
      'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg',
      [ new Ingredient('Ingredient1', 1)]),
    new Recipe('Dummy3', 'Dummy', 'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg',
      [ new Ingredient('Ingredient1', 1)]),
    new Recipe('Dummy4', 'Dummy', 'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg',
      [ new Ingredient('Ingredient1', 1)]),
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers( {
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipes-e088f.firebaseio.com/recipes.json', body,{headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipes-e088f.firebaseio.com/recipes.json')
    .map((response: Response) => response.json()
    .subscribe(
        (data: Recipe[])=> {
          this.recipes = data;
        }
      ));
  }

}

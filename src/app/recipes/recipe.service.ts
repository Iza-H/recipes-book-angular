import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';

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

  constructor() { }

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

}

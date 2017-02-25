import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy1', 'Dummy', 'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg',[] ),
    new Recipe('Dummy2', 'Dummy', 'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg',[] ),
    new Recipe('Dummy3', 'Dummy', 'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg',[] ),
    new Recipe('Dummy4', 'Dummy', 'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg', [] ),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}

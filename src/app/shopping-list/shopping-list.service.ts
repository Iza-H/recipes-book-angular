import { Injectable } from '@angular/core';
import { Ingredient } from '../shared';

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]){
    items.forEach( e => this.items.push(e));
  }

}

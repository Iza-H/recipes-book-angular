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

  addItem(item: Ingredient){
    this.items.push(item);
  }

  editItem(oldItem : Ingredient, newItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}

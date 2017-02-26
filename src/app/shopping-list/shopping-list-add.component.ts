import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'iz-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
  isAdd: boolean = true;
  item: Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(ingredient: Ingredient) {
    if(!this.isAdd){

    } else {
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.sls.addItem(this.item);
    }

  }

}

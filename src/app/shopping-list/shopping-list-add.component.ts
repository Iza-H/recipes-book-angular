import { Component, OnChanges, Input } from '@angular/core';
import { Ingredient } from '../shared';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'iz-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  isAdd: boolean = true;
  @Input() item: Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    if (changes.item.currentValue === null ){
      this.isAdd = true;
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    if(!this.isAdd){

    } else {
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.sls.addItem(this.item);
    }

  }

}

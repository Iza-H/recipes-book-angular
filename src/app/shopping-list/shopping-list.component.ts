import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared'

@Component({
  selector: 'iz-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  itmes: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}

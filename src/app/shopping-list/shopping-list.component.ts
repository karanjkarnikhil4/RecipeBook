import { ShoppingService } from './shopping.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[];
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {

    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.newItemInShoppingList.subscribe((ingredients:Ingredient[])=>{
      console.log("inside the subscription")
      this.ingredients= ingredients});
   
  }

}

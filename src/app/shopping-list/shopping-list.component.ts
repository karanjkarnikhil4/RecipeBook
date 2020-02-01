import { ShoppingService } from './shopping.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
 

  ingredients:Ingredient[];
  subscription:Subscription;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {

    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.newItemInShoppingList.subscribe((ingredients:Ingredient[])=>{
      console.log("inside the subscription")
      this.ingredients= ingredients});
   
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

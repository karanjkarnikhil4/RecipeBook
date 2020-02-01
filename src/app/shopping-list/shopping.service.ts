import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingService {
    private ingredients: Ingredient[] = [new Ingredient("apples", 5), new Ingredient("oranges", 10)]


   // newItemInShoppingList:EventEmitter<{name:string,amount:number}[]>= new EventEmitter();

    newItemInShoppingList:Subject<{name:string,amount:number}[]>= new Subject();

    public getIngredients() {
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.newItemInShoppingList.next(this.ingredients);
    }

    public addIngredientsToShoppingList(ingredients:Ingredient[])
    {
           ingredients.forEach(i=> this.ingredients.push(i));
           this.newItemInShoppingList.next(this.ingredients);
    }

}
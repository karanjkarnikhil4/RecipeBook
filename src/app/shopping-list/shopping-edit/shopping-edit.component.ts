import { ShoppingService } from './../shopping.service';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name',{static:true}) itemName:ElementRef;
  @ViewChild('amount',{static:true}) itemAmount:ElementRef;


  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  addIngredient():void
  {
    console.log(this.itemName.nativeElement.value);
    console.log(this.itemAmount.nativeElement.value);
    this.shoppingService.addIngredient(new Ingredient(this.itemName.nativeElement.value,this.itemAmount.nativeElement.value))
   
  }

}

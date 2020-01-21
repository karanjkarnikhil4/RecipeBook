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

  @Output() ingredientAdded:EventEmitter<{name:string,amount:number}>= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addIngredient():void
  {
    this.ingredientAdded.emit(new Ingredient(this.itemName.nativeElement.value,this.itemAmount.nativeElement.value))
  }

}

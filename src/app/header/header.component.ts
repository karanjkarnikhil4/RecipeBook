import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private feature:string = "recipes";

  @Output() selectedFeature:EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit():void {
  }

  featureSelected(feature:string):void
  {
    this.feature = feature;
    this.selectedFeature.emit(this.feature);
  }

}

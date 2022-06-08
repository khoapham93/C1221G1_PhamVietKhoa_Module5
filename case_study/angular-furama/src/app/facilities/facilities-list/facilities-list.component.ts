import {Component, OnInit} from '@angular/core';

declare let threeDotForFacility: any;

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    new threeDotForFacility();
  }

}

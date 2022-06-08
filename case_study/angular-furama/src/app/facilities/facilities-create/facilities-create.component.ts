import {Component, OnInit} from '@angular/core';

declare let showFacilityType: any;

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    new showFacilityType();
  }

  showFacilityType() {
    // tslint:disable-next-line:no-unused-expression
    new showFacilityType();
  }
}

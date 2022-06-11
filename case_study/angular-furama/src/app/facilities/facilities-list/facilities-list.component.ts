import {Component, OnInit} from '@angular/core';
import {facilities} from '../../data/facilities';
import {Facility} from '../../model/Facility';

declare let threeDotForFacility: any;

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  facilities = facilities;
  facilityDelete = {} as Facility;

  constructor() {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    new threeDotForFacility();
  }

  deleteFacility(facility: Facility) {
    this.facilityDelete = facility;
  }
}

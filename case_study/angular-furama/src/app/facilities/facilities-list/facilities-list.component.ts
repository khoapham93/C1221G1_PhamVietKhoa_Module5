import {Component, OnInit} from '@angular/core';
import {facilities} from '../../data/facilities';
import {Facility} from '../Facility';
import {FacilityService} from '../FacilityService';
import {Customer} from '../../customers/Customer';

declare let threeDotForFacility: any;

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  facilities;
  facilityDelete = {} as Facility;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilities = this.facilityService.getAllFacilities();
    // tslint:disable-next-line:no-unused-expression
    new threeDotForFacility();
  }

  getFacility(facility: Facility) {
    this.facilityDelete = facility;
  }
  deleteFacility(facilityDelete: Facility) {
    const check = this.facilityService.findById(facilityDelete.id) === undefined;
    if (check) {
      alert('can not found');
    } else {
      this.facilityService.delete(facilityDelete);
      this.ngOnInit();
    }
  }
}

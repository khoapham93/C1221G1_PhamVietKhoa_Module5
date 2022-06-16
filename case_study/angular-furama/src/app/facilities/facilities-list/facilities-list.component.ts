import {Component, OnInit} from '@angular/core';
import {Facility} from '../Facility';
import {FacilityService} from '../FacilityService';

declare let threeDotForFacility: any;

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  p = 0;
  facilities;
  facilityDelete = {} as Facility;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityService.getAllFacilities().subscribe(facilities => {
      this.facilities = facilities;
    });
    // tslint:disable-next-line:no-unused-expression
    new threeDotForFacility();
  }

  getFacility(facility: Facility) {
    this.facilityDelete = facility;
  }

  deleteFacility(facilityDelete: Facility) {
    return this.facilityService.delete(facilityDelete).subscribe(() => {
      this.ngOnInit();
    });
  }
}


import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/Facility';
import {FacilityType} from '../../model/FacilityType';
import {RentType} from '../../model/RentType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../services/FacilityService';
import {FacilityTypeService} from '../../services/FacilityTypeService';
import {RentTypeService} from '../../services/RentTypeService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-facilities-edit',
  templateUrl: './facilities-edit.component.html',
  styleUrls: ['./facilities-edit.component.css']
})
export class FacilitiesEditComponent implements OnInit {
  submitted = false;
  facility = {} as Facility;
  facilityTypes: FacilityType[] = [];
  rentTypes: RentType[] = [];
  facilityForm: FormGroup;

  POSITIVE_DOUBLE_REGEX = '^[+]?(\\d*\\.)?\\d+$';
  INTEGER_GREATER_THAN_0_REGEX = '^[+]?[0]*[1-9][0-9]*$';
  styleVillaOnly = false;
  styleRoomOnly = false;
  styleVillaAndHouseOnly = false;
  idSelected;
  id: number;

  compareByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }

  constructor(private activeRoute: ActivatedRoute,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private route: Router) {

  }

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.facility = this.facilityService.findById(this.id);
    if (this.facility === undefined) {
      this.route.navigate(['/error']);
    }
    this.showFacilityType(this.facility.facilityType);
    this.facilityTypes = this.facilityTypeService.getAllFacilityType();
    this.rentTypes = this.rentTypeService.getAllRentType();

    this.facilityForm = new FormGroup({
      name: new FormControl(this.facility.name, [Validators.required, Validators.pattern('^\\D+$')]),
      code: new FormControl(this.facility.code, [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
      rentType: new FormControl(this.facility.rentType, [Validators.required]),
      rentalFee: new FormControl(this.facility.rentalFee, [Validators.required]),
      floorSquare: new FormControl(this.facility.floorSquare,
        [Validators.required, Validators.pattern(this.POSITIVE_DOUBLE_REGEX)]),
      maximumPeople: new FormControl(this.facility.maximumPeople,
        [Validators.required, Validators.pattern(this.INTEGER_GREATER_THAN_0_REGEX)]),
      facilityType: new FormControl(this.facility.facilityType, [Validators.required]),
      roomStandard: new FormControl(this.facility.roomStandard),
      description: new FormControl(this.facility.description),
      poolSquare: new FormControl(this.facility.poolSquare),
      numberFloor: new FormControl(this.facility.numberFloor),
      freeServiceInclude: new FormControl(this.facility.freeServiceInclude),
    });
  }

  get name() {
    return this.facilityForm.get('name');
  }

  get code() {
    return this.facilityForm.get('code');
  }

  get rentType() {
    return this.facilityForm.get('rentType');
  }

  get rentalFee() {
    return this.facilityForm.get('rentalFee');
  }

  get floorSquare() {
    return this.facilityForm.get('floorSquare');
  }

  get maximumPeople() {
    return this.facilityForm.get('maximumPeople');
  }

  get roomStandard() {
    return this.facilityForm.get('roomStandard');
  }

  get description() {
    return this.facilityForm.get('description');
  }

  get poolSquare() {
    return this.facilityForm.get('poolSquare');
  }

  get numberFloor() {
    return this.facilityForm.get('numberFloor');
  }

  get facilityType() {
    return this.facilityForm.get('facilityType');
  }

  get freeServiceInclude() {
    return this.facilityForm.get('freeServiceInclude');
  }

  showFacilityType(newValue: FacilityType) {
    this.idSelected = newValue.id;
    console.log(this.idSelected);
    switch (this.idSelected) {
      case 3: {
        this.styleVillaAndHouseOnly = true;
        this.styleVillaOnly = true;
        this.styleRoomOnly = false;
        break;
      }
      case 2: {
        this.styleVillaAndHouseOnly = false;
        this.styleVillaOnly = true;
        this.styleRoomOnly = true;
        break;
      }
      case 1: {
        this.styleVillaAndHouseOnly = false;
        this.styleVillaOnly = false;
        this.styleRoomOnly = true;
        break;
      }
      default: {
        this.styleVillaAndHouseOnly = false;
        this.styleVillaOnly = false;
        this.styleRoomOnly = false;
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.facilityForm.valid) {
      this.facility = this.facilityForm.value;
      this.facility.id = this.id;
      this.facilityService.save(this.facility);
      this.route.navigate(['/service-list']);
    }
  }

}

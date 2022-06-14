import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../FacilityService';
import {FacilityTypeService} from '../FacilityTypeService';
import {RentTypeService} from '../RentTypeService';
import {Facility} from '../Facility';
import {FacilityType} from '../FacilityType';
import {RentType} from '../RentType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {
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



  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) {

  }

  ngOnInit(): void {

    this.facilityTypes = this.facilityTypeService.getAllFacilityType();
    this.rentTypes = this.rentTypeService.getAllRentType();
    this.facilityForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^\\D+$')]),
      code: new FormControl('', [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
      rentType: new FormControl('', [Validators.required]),
      rentalFee: new FormControl('', [Validators.required]),
      floorSquare: new FormControl('', [Validators.required, Validators.pattern(this.POSITIVE_DOUBLE_REGEX)]),
      maximumPeople: new FormControl('', [Validators.required, Validators.pattern(this.INTEGER_GREATER_THAN_0_REGEX)]),
      facilityType: new FormControl('', [Validators.required]),
      roomStandard: new FormControl(''),
      description: new FormControl(''),
      poolSquare: new FormControl(''),
      numberFloor: new FormControl(''),
      freeServiceInclude: new FormControl(''),
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
      this.facilityService.save(this.facility);
      alert('Create Successfully');
      this.facilityForm.reset();
      this.submitted = false;
    }
  }
}

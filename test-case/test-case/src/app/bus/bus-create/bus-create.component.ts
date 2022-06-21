import {Component, OnInit} from '@angular/core';
import {Bus} from '../bus';
import {Location} from '../location';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocationService} from '../location.service';
import {BusService} from '../bus.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomValidate} from '../../custom-validate';

@Component({
  selector: 'app-bus-create',
  templateUrl: './bus-create.component.html',
  styleUrls: ['./bus-create.component.css']
})
export class BusCreateComponent implements OnInit {
  submitted = false;
  bus = {} as Bus;
  locations: Location[] = [];
  busForm: FormGroup;

  constructor(private locationService: LocationService,
              private busService: BusService,
              private customValidate: CustomValidate) {
  }

  ngOnInit(): void {
    this.locationService.getAll().subscribe(locations => {
      this.locations = locations;
    });
    this.busForm = new FormGroup({
      busType: new FormControl('', [Validators.required]),
      owner: new FormControl('', [Validators.required]),
      startLocation: new FormControl('', [Validators.required]),
      arriveLocation: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(091|093|097)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      timeStart: new FormControl('', [Validators.required, this.customValidate.dateValidate()]),
      timeArrive: new FormControl('', [Validators.required, this.customValidate.dateValidate()])
    });
  }

  get busType() {
    return this.busForm.get('busType');
  }

  get owner() {
    return this.busForm.get('owner');
  }

  get startLocation() {
    return this.busForm.get('startLocation');
  }

  get arriveLocation() {
    return this.busForm.get('arriveLocation');
  }

  get phone() {
    return this.busForm.get('phone');
  }

  get email() {
    return this.busForm.get('email');
  }

  get timeStart() {
    return this.busForm.get('timeStart');
  }

  get timeArrive() {
    return this.busForm.get('timeArrive');
  }

  onSubmit() {
    this.submitted = true;
    if (this.busForm.valid) {
      this.bus = this.busForm.value;
      console.log(this.bus);
      this.busService.save(this.bus).subscribe(() => {
        alert('Create Successfully');
        this.busForm.reset();
        this.submitted = false;
      }, () => {
        alert('Update fail');
      });
    }
  }

}

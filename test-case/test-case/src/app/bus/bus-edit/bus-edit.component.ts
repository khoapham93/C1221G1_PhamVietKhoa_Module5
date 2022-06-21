import {Component, OnInit} from '@angular/core';
import {Bus} from '../bus';
import {Location} from '../location';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocationService} from '../location.service';
import {BusService} from '../bus.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomValidate} from '../../custom-validate';

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html',
  styleUrls: ['./bus-edit.component.css']
})
export class BusEditComponent implements OnInit {
  submitted = false;
  bus = {} as Bus;
  locations: Location[] = [];
  busForm: FormGroup;
  id: number;

  compareById(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }

  constructor(private locationService: LocationService,
              private busService: BusService,
              private activeRoute: ActivatedRoute,
              private route: Router,
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
      phone: new FormControl('', [Validators.required, Validators.pattern('^(090|093|097)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      timeStart: new FormControl('', [Validators.required, this.customValidate.dateValidate()]),
      timeArrive: new FormControl('', [Validators.required])
    });

    const routeParams = this.activeRoute.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    console.log(this.id);
    this.getBus(this.id);

  }

  getBus(id: number) {
    return this.busService.findById(this.id).subscribe(bus => {
      this.bus = bus;
      this.busForm.patchValue(this.bus);
    }, e => {
      console.log(e);
      // this.route.navigate(['/error']);
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
      this.bus.id = this.id;
      this.busService.save(this.bus).subscribe(() => {
        this.route.navigate(['/bus-list']);
      }, () => {
        alert('Update fail');
      });
    }
  }
}

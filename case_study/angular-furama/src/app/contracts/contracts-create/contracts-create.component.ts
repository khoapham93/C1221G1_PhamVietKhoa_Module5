import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Contract} from '../Contract';
import {Customer} from '../../customers/Customer';
import {Facility} from '../../facilities/Facility';
import {CustomerService} from '../../customers/CustomerService';
import {FacilityService} from '../../facilities/FacilityService';
import {ContractService} from '../ContractService';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidate} from '../../custom-validate';

@Component({
  selector: 'app-contracts-create',
  templateUrl: './contracts-create.component.html',
  styleUrls: ['./contracts-create.component.css']
})
export class ContractsCreateComponent implements OnInit {
  selectedValue: Facility;
  total = 0;
  submitted = false;
  contract = {} as Contract;
  customers: Customer[] = [];
  facilities: Facility[] = [];
  contractForm: FormGroup;
  POSITIVE_DOUBLE_REGEX = '^[+]?(\\d*\\.)?\\d+$';

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService,
              private customValidate: CustomValidate) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerJson().subscribe(customers => {
      this.customers = customers;
    });
    this.facilityService.getAllFacilities().subscribe(facilities => {
      this.facilities = facilities;
    });

    this.contractForm = new FormGroup({
        customer: new FormControl('', [Validators.required]),
        facility: new FormControl('', [Validators.required]),
        startDate: new FormControl('', [Validators.required, this.customValidate.dateValidate()]),
        endDate: new FormControl('', [Validators.required, this.customValidate.dateValidate()]),
        deposit: new FormControl('', [Validators.required, Validators.pattern(this.POSITIVE_DOUBLE_REGEX)]),
        serviceInclude: new FormControl(''),
      }, this.customValidate.compareDate('startDate', 'endDate')
    );
  }

  get customer() {
    return this.contractForm.get('customer');
  }

  get facility() {
    return this.contractForm.get('facility');
  }

  get startDate() {
    return this.contractForm.get('startDate');
  }

  get endDate() {
    return this.contractForm.get('endDate');
  }

  get deposit() {
    return this.contractForm.get('deposit');
  }

  get serviceInclude() {
    return this.contractForm.get('serviceInclude');
  }

  onSubmit() {
    this.submitted = true;
    if (this.contractForm.valid) {
      this.contract = this.contractForm.value;
      this.contractService.save(this.contract).subscribe(() => {
        alert('Create Successfully');
        this.ngOnInit();
        this.submitted = false;
      });
    }
  }

  getFacilitySelected(selectedValue) {
    this.selectedValue = selectedValue;
    this.total = this.selectedValue.rentalFee;
  }
}

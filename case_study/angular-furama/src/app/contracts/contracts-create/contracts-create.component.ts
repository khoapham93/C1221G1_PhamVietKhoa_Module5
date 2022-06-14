import {Component, OnInit} from '@angular/core';
import {Contract} from '../Contract';
import {Customer} from '../../customers/Customer';
import {Facility} from '../../facilities/Facility';
import {CustomerService} from '../../customers/CustomerService';
import {FacilityService} from '../../facilities/FacilityService';
import {ContractService} from '../ContractService';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contracts-create',
  templateUrl: './contracts-create.component.html',
  styleUrls: ['./contracts-create.component.css']
})
export class ContractsCreateComponent implements OnInit {
  submitted = false;
  contract = {} as Contract;
  customers: Customer[] = [];
  facilities: Facility[] = [];
  contractForm: FormGroup;
  POSITIVE_DOUBLE_REGEX = '^[+]?(\\d*\\.)?\\d+$';

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.getAllCustomer();
    this.facilities = this.facilityService.getAllFacilities();

    this.contractForm = new FormGroup({
      customer: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      endDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      deposit: new FormControl('', [Validators.required, Validators.pattern(this.POSITIVE_DOUBLE_REGEX)]),
    });
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

  onSubmit() {
    this.submitted = true;
    if (this.contractForm.valid) {
      this.contract = this.contractForm.value;
      this.contractService.save(this.contract);
      alert('Create Successfully');
      this.ngOnInit();
      this.submitted = false;
    }
  }
}

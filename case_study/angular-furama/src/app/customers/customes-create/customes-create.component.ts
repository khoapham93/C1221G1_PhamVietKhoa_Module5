import {Component, OnInit} from '@angular/core';
import {Customer} from '../Customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../CustomerType';
import {CustomerService} from '../CustomerService';
import {CustomerTypeService} from '../CustomerTypeService';

@Component({
  selector: 'app-customes-create',
  templateUrl: './customes-create.component.html',
  styleUrls: ['./customes-create.component.css']
})
export class CustomesCreateComponent implements OnInit {
  submitted = false;
  customer = {} as Customer;
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup;


  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAllCustomerType().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });

    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      customer_code: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      birthday: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^(([1-9]\\d{8})|([1-9]\\d{11}))$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(091|090|\\(84\\)90|\\(84\\)91)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required]),
      gender: new FormControl(-1, [Validators.required])
    });

  }

  get email() {
    return this.customerForm.get('email');
  }

  get birthday() {
    return this.customerForm.get('birthday');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get phone() {
    return this.customerForm.get('phone');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get name() {
    return this.customerForm.get('name');
  }

  get customer_code() {
    return this.customerForm.get('customer_code');
  }

  // get f() {
  //   return this.customerForm.value;
  // }

  onSubmit() {
    this.submitted = true;
    if (this.customerForm.valid) {
      this.customer = this.customerForm.value;
      console.log(this.customer);
      this.customerService.save(this.customer).subscribe(() => {
        alert('Create Successfully');
        this.customerForm.reset();
        this.submitted = false;
      }, () => {
        alert('create fail');
      });
    }
  }
}

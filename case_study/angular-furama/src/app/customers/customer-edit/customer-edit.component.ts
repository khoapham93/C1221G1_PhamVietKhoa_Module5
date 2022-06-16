import {Component, OnInit} from '@angular/core';
import {Customer} from '../Customer';
import {CustomerType} from '../CustomerType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {CustomerService} from '../CustomerService';
import {CustomerTypeService} from '../CustomerTypeService';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  submitted = false;
  customer = {} as Customer;
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup;
  id: number;

  compareByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }

  constructor(private activeRoute: ActivatedRoute,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      customer_code: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      birthday: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^(([1-9]\\d{8})|([1-9]\\d{11}))$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(091|090|\\(84\\)90|\\(84\\)91)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required])
    });
    const routeParams = this.activeRoute.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    console.log(this.id);
    this.getCustomer(this.id);
    this.customerTypeService.getAllCustomerType().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  getCustomer(id: number) {
    return this.customerService.findById(this.id).subscribe(customer => {
      this.customer = customer;
      this.customerForm.patchValue(this.customer);
    }, () => {
      this.route.navigate(['/error']);
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

  onSubmit() {
    this.submitted = true;
    if (this.customerForm.valid) {
      this.customer = this.customerForm.value;
      this.customer.id = this.id;
      console.log(this.customer);
      this.customerService.save(this.customer).subscribe(() => {
        this.route.navigate(['/customer/list']);
      }, () => {
        alert('Update fail');
      });
    }
  }
}

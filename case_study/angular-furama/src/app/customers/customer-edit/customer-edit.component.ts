import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {CustomerType} from '../../model/CustomerType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {CustomerService} from '../../services/CustomerService';
import {CustomerTypeService} from '../../services/CustomerTypeService';

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
    const routeParams = this.activeRoute.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.customer = this.customerService.findById(this.id);
    if (this.customer === undefined) {
      this.route.navigate(['/error']);
    }
    this.customerTypes = this.customerTypeService.getAllCustomerType();
    this.customerForm = new FormGroup({
      name: new FormControl(this.customer.name, [Validators.required]),
      code: new FormControl(this.customer.code, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      birthday: new FormControl(this.customer.birthday, [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      idCard: new FormControl(this.customer.idCard, [Validators.required, Validators.pattern('^(([1-9]\\d{8})|([1-9]\\d{11}))$')]),
      phone: new FormControl(this.customer.phone, [Validators.required, Validators.pattern('^(091|090|\\(84\\)90|\\(84\\)91)\\d{7}$')]),
      email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
      address: new FormControl(this.customer.address, [Validators.required]),
      customerType: new FormControl(this.customer.customerType, [Validators.required]),
      gender: new FormControl(this.customer.gender, [Validators.required])
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

  get code() {
    return this.customerForm.get('code');
  }

  onSubmit() {
    this.submitted = true;
    if (this.customerForm.valid) {
      this.customer = this.customerForm.value;
      this.customer.id = this.id;
      console.log(this.customer);
      this.customerService.save(this.customer);
      this.route.navigate(['/customer-list']);
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {customers} from '../../data/customers';
import {Customer} from '../../model/Customer';

declare let threeDotForCustomer: any;

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers = customers;
  customerDelete = {} as Customer;

  constructor() {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    new threeDotForCustomer();

  }

  deleteCustomer(customer: Customer) {
    this.customerDelete = customer;
  }
}

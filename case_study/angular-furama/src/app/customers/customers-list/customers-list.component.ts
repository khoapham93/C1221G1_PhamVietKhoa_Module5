import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {CustomerService} from '../../services/CustomerService';

declare let threeDotForCustomer: any;

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[] = [];
  customerDelete = {} as Customer;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.getAllCustomer();
    // tslint:disable-next-line:no-unused-expression
    new threeDotForCustomer();

  }

  deleteCustomer(customer: Customer) {
    this.customerDelete = customer;
  }
}

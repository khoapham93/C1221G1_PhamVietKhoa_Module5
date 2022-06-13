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

  getCustomer(customer: Customer) {
    this.customerDelete = customer;
  }

  deleteCustomer(customerDelete: Customer) {
    const check = this.customerService.findById(customerDelete.id) === undefined;
    if (check) {
      alert('can not found');
    } else {
      this.customerService.delete(customerDelete);
      this.ngOnInit();
    }

  }
}

import {Component, OnInit} from '@angular/core';
import {Customer} from '../Customer';
import {CustomerService} from '../CustomerService';

declare let threeDotForCustomer: any;

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  p = 0;
  customers: Customer[] = [];
  customerDelete = {} as Customer;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(customers => {
      this.customers = customers;
    });
    // tslint:disable-next-line:no-unused-expression
    new threeDotForCustomer();
  }

  getCustomer(customer: Customer) {
    this.customerDelete = customer;
  }

  deleteCustomer(customerDelete: Customer) {
    // const check = this.customerService.findById(customerDelete.id) === undefined;
    // if (check) {
    //   alert('can not found');
    // } else {
    //   this.customerService.delete(customerDelete);
    //   this.ngOnInit();
    // }
    this.customerService.delete(customerDelete).subscribe(() => {
      this.ngOnInit();
    });
  }
}

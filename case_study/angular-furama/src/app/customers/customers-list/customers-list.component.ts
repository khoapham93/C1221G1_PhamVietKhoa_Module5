import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../Customer';
import {CustomerService} from '../CustomerService';

declare let threeDotForCustomer: any;

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  // @ViewChild('name') nameSearch: ElementRef;
  // @ViewChild('phone') phoneSearch: ElementRef;
  // @ViewChild('customerType') customerTypeSearch: ElementRef;

  p = 0;
  customers: Customer[] = [];
  customerDelete = {} as Customer;
  totalPages: number;
  currentPage: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    // this.getCustomers({page: 0, size: 5});
    this.customerService.getAllCustomerJson().subscribe(customers => {
      console.log(customers);
      this.customers = customers;
    });
    // tslint:disable-next-line:no-unused-expression
    new threeDotForCustomer();
  }

  // private getCustomers(request) {
  //   this.customerService.getAllCustomer(request)
  //     .subscribe(data => {
  //         console.log(data);
  //         this.customers = data['content'];
  //         this.currentPage = data['number'];
  //         this.totalPages = data['totalPages'];
  //       }
  //       , error => {
  //         console.log(error.error.message);
  //       }
  //     );
  // }
  //
  // previousPage() {
  //   const request = {};
  //   if ((this.currentPage) > 0) {
  //     request['page'] = this.currentPage - 1;
  //     request['size'] = 5;
  //     this.getCustomers(request);
  //   }
  // }
  //
  // nextPage() {
  //   const request = {};
  //   if ((this.currentPage + 1) < this.totalPages) {
  //     request['page'] = this.currentPage + 1;
  //     request['size'] = 5;
  //     this.getCustomers(request);
  //   }
  // }

  getCustomer(customer: Customer) {
    this.customerDelete = customer;
  }

  deleteCustomer(customerDelete: Customer) {
    console.log(customerDelete);
    this.customerService.delete(customerDelete).subscribe(() => {
      this.ngOnInit();
    });
  }

  searchCustomer(name: HTMLInputElement, phone: HTMLInputElement, customerType: HTMLSelectElement) {
    console.log(name.value);
    console.log(phone.value);
    console.log(customerType.value);
    this.customerService.search(name.value, phone.value, customerType.value).subscribe(data => {
      this.customers = data;
    });
  }
}

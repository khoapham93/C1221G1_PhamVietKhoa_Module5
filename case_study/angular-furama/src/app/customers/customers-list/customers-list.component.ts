import { Component, OnInit } from '@angular/core';
declare let threeDotForCustomer: any;

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    new threeDotForCustomer();

  }

}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CustomesCreateComponent} from './customes-create/customes-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    CustomersListComponent,
    CustomesCreateComponent,
    CustomerEditComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ]
})
export class CustomerModule {
}

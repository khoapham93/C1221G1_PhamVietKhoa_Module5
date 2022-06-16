import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContractRoutingModule} from './contract-routing.module';
import {ContractsListComponent} from './contracts-list/contracts-list.component';
import {ContractsCreateComponent} from './contracts-create/contracts-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    ContractsListComponent,
    ContractsCreateComponent
  ],
    imports: [
        CommonModule,
        ContractRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class ContractModule { }

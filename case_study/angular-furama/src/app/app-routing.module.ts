import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FacilitiesListComponent} from './facilities/facilities-list/facilities-list.component';
import {FacilitiesCreateComponent} from './facilities/facilities-create/facilities-create.component';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {CustomesCreateComponent} from './customers/customes-create/customes-create.component';
import {ContractsListComponent} from './contracts/contracts-list/contracts-list.component';
import {ContractsCreateComponent} from './contracts/contracts-create/contracts-create.component';
import {CustomerEditComponent} from './customers/customer-edit/customer-edit.component';
import {HomeComponent} from './home/home.component';
import { FacilitiesEditComponent } from './facilities/facilities-edit/facilities-edit.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'customer-list', component: CustomersListComponent},
  {path: 'customer-create', component: CustomesCreateComponent},
  {path: 'customer-update/:id', component: CustomerEditComponent},
  {path: 'service-list', component: FacilitiesListComponent},
  {path: 'service-create', component: FacilitiesCreateComponent},
  {path: 'service-edit/:id', component: FacilitiesEditComponent},
  {path: 'contract-list', component: ContractsListComponent},
  {path: 'contract-create', component: ContractsCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

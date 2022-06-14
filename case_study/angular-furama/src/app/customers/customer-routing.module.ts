import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CustomesCreateComponent} from './customes-create/customes-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: CustomersListComponent},
  {path: 'create', component: CustomesCreateComponent},
  {path: 'update/:id', component: CustomerEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}

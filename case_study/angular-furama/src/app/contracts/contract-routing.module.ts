import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContractsListComponent} from './contracts-list/contracts-list.component';
import {ContractsCreateComponent} from './contracts-create/contracts-create.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: ContractsListComponent},
  {path: 'create', component: ContractsCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }

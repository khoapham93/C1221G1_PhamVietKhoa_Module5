import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';
import {FacilitiesEditComponent} from './facilities-edit/facilities-edit.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: FacilitiesListComponent},
  {path: 'create', component: FacilitiesCreateComponent},
  {path: 'update/:id', component: FacilitiesEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule {
}

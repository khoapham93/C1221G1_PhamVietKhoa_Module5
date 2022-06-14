import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FacilityRoutingModule} from './facility-routing.module';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';
import {FacilitiesEditComponent} from './facilities-edit/facilities-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FacilitiesListComponent,
    FacilitiesCreateComponent,
    FacilitiesEditComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule {
}

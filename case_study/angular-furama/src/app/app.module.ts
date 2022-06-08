import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FacilitiesListComponent } from './facilities/facilities-list/facilities-list.component';
import { FacilitiesCreateComponent } from './facilities/facilities-create/facilities-create.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomesCreateComponent } from './customers/customes-create/customes-create.component';
import { ContractsListComponent } from './contracts/contracts-list/contracts-list.component';
import { ContractsCreateComponent } from './contracts/contracts-create/contracts-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FacilitiesListComponent,
    FacilitiesCreateComponent,
    CustomersListComponent,
    CustomesCreateComponent,
    ContractsListComponent,
    ContractsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

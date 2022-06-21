import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import {HttpClientModule} from '@angular/common/http';
import { BusListComponent } from './bus/bus-list/bus-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BusEditComponent } from './bus/bus-edit/bus-edit.component';
import { BusCreateComponent } from './bus/bus-create/bus-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ErrorComponent,
    BusListComponent,
    BusEditComponent,
    BusCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { DictionaryPageComponent } from './dictionary/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

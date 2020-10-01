import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { ProductsService } from './products.service';
import { Assignment6Component } from './assignment6/assignment6.component';
import { ProductprofileComponent } from './productprofile/productprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    Assignment5Component,
    Assignment6Component,
    ProductprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

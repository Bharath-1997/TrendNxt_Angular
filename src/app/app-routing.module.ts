import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { ProductprofileComponent } from './productprofile/productprofile.component';


const routes: Routes = [
  { path: '', redirectTo:'/',pathMatch:'full'},
  { path: 'Assignment1', component:Assignment1Component},
  { path: 'Assignment2', component:Assignment2Component},
  { path: 'Assignment3', component:Assignment3Component},
  { path: 'Assignment4', component:Assignment4Component},
  { path: 'Assignment5', component:Assignment5Component},
  { path: 'Assignment6', component:Assignment6Component},
  {path:'productprofile/:name',component:ProductprofileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

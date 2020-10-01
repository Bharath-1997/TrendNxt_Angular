import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  employees = [{name :"Bharath", location : "Hyderabad" },{name :"Sharath", location : "Vizag" },{name :"Ravi", location : "Delhi" },{name :"Raju", location : "Medak" },{name :"Yash", location : "kolkata" },{name :"Anil", location : "Kadapa" }];
}

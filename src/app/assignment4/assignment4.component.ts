import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
name:string;
quantity:string;
  constructor() { }

  ngOnInit() {
  }
  products = [{name :"Nokia", quantity : "1" },{name :"MI", quantity : "3" },{name :"Samsung", quantity : "6" }];
  save(form:NgForm)
  {
    if(this.name&&this.quantity)
    {
      this.products.push({name:this.name,quantity:this.quantity});
      this.name=this.quantity='';
    }
  }
}

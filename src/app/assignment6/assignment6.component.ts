import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.css']
})
export class Assignment6Component implements OnInit {
  name:string;
  quantity:string;
    constructor(private service:ProductsService) { }
  
    ngOnInit() {
    }
    
    save(form:NgForm)
    {
      if(this.name&&this.quantity)
      {
        this.service.products.push({name:this.name,quantity:this.quantity});
        this.name=this.quantity='';
      }
      
    }
  }
  
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
declare var $: any;
@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
 
  static first: number = 1;
  submit=false;
  constructor() {
  
   }

  ngOnInit() {
    
    // setInterval(this.fun,5000);
  }
 
  fun()
  {
    document.getElementById('container').innerHTML+="<h3>Element "+Assignment3Component.first+"</h3>";
    Assignment3Component.first++;
    
  }
  onstart()
  {
    this.submit=true;
    $("#div1").fadeIn(3000);
    $("#div2").fadeIn(6000);
    $("#div3").fadeIn(8000);
    $("#div3").fadeOut(1000);
    $("#div2").fadeOut(8000);
    $("#div1").fadeOut(16000);
   }
  }

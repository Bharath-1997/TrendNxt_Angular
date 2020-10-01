import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productprofile',
  templateUrl: './productprofile.component.html',
  styleUrls: ['./productprofile.component.css']
})
export class ProductprofileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:ProductsService) { }
  name:string;
  quantity:string;
  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.quantity=this.service.products['name'];

  }

}

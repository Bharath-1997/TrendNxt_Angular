import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  name:string;
  quantity:string;

  
  constructor() {
    
   }
   products = [{name :"Nokia", quantity : "1" },{name :"MI", quantity : "3" },{name :"Samsung", quantity : "6" }];
}

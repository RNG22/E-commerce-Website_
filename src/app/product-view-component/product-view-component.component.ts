import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from './productmodal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-view-component',
  templateUrl: './product-view-component.component.html',
  styleUrls: ['./product-view-component.component.scss'],
})
export class ProductViewComponentComponent  implements OnInit {
data:any | product[]
  constructor(private api:ApiService) { }

  ngOnInit():void {
    this.displayProducts();
  }
displayProducts(){
  this.api.getProducts().subscribe(res=>{
    this.data=res;
    console.log(res);
  })
}
addtocart(item:product){
this.api.addtoCart(item);
}
removeItem(item:product){
this.api.removecartItem(item);
}
}

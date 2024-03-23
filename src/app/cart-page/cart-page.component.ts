import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from '../product-view-component/productmodal';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent  implements OnInit {
showproduct:any=[];
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.products().subscribe(res=>{
      this.showproduct=res;
    })
  }
  deleteitem(item:product){
this.api.removecartItem(item);
  }

}

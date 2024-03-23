import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product-view-component/productmodal';

@Component({
  selector: 'app-product-detail-component',
  templateUrl: './product-detail-component.component.html',
  styleUrls: ['./product-detail-component.component.scss'],
})
export class ProductDetailComponentComponent  implements OnInit {
productdata:any|product[];
showadd:boolean=true;
showremove:boolean=false;
  constructor(private api:ApiService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
let productid=this.activatedroute.snapshot.paramMap.get('productid');
//console.log("id is",productid)
productid && this.api.getProductById(productid).subscribe((res)=>{
  this.productdata=res;
  console.log(res);
  
})

  }
  addToCart(productdata:product){
this.showadd=false;
this.showremove=true;
this.api.addtoCart(productdata)
  }
  removeItem(productdata:product){
    this.showadd=true;
    this.showremove=false;
    this.api.removecartItem(productdata);
  }
}

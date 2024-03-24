import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from '../product-view-component/productmodal';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent  implements OnInit {
showproduct:any=[];
myForm:FormGroup |any;
public totalAmount:number=0;
public addressform=false;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.products().subscribe(res=>{
      this.showproduct=res;
      this.totalAmount=this.api.calculatePrice();
    })
    this.myForm=new FormGroup({
      email:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      mobileNumber:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
    })
  }
  deleteitem(item:product){
this.api.removecartItem(item);
  }
  Empty(){
    this.api.removeAllItems();
  }
  cancel(){
    this.addressform=false;
    this.myForm.reset();
  }
  order(){
    this.myForm.value;
    console.log(this.myForm.value)
    this.myForm.reset();
  }
}

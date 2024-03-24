import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent  implements OnInit {
public totalAmount:number=0;
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
setTimeout(() => {
  this.router.navigate(["/"]);
  this.api.removeAllItems();
}, 4000);

//totalamount coming from api
this.totalAmount=this.api.calculatePrice();
  }

}

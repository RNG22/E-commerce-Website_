import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
public cartitems:number=0;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.products().subscribe((res)=>{
      this.cartitems=res.length;
    })
  }

}

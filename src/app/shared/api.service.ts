import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../product-view-component/productmodal';
import { BehaviorSubject, Observable } from 'rxjs';
//import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
public cartItemList:any=[];
public productList=new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }
  // getproduct(){
  //   return this.http.get<product[]>("https://dummyjson.com/products")
  // }
  // getproductbyid(id:string){
  //   return this.http.get("https://dummyjson.com/products/"+id)
  // }


getProducts(): Observable<product[]> {
  return this.http.get<product[]>("https://dummyjson.com/products")
    // .pipe(
    //   catchError(this.handleError)
    // );
}

getProductById(id: string): Observable<product> {
  return this.http.get<product>("https://dummyjson.com/products/" + id)
    // .pipe(
    //   catchError(this.handleError)
    // );
}
// private handleError(error: any) {
//   console.error('An error occurred:', error);
//   throw error; // You can also return a user-facing error message
// }
addtoCart(data:product){
  this.cartItemList.push(data);
  this.productList.next(this.cartItemList);
  console.log(this.cartItemList);
  
}
products(){
  return this.productList.asObservable();
}
removecartItem(data:product){
  this.cartItemList.map((a:product,index:product)=>{
    if(data.id==a.id){
      this.cartItemList.splice(index,1)
    }
  })
  this.productList.next(this.cartItemList);
}
//total Calculation
calculatePrice(){
  let total=0;
  this.cartItemList.map((a:any)=>{
    total+=a.price;
  })
  return total;
}
//remove All Items
removeAllItems(){
  this.cartItemList=[];
  this.productList.next(this.cartItemList);
  console.log(this.cartItemList)
}
}

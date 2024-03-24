import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductViewComponentComponent } from './product-view-component/product-view-component.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderPageComponent } from './order-page/order-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },


  
  {
    path:'productview',
    component:ProductViewComponentComponent
  },
  {
    path:'productdetail/:productid',
    component:ProductDetailComponentComponent
  },
  {
    path:'cart-page',
    component:CartPageComponent
  },
  {
    path:'order-page',
    component:OrderPageComponent
  },
  {
    path: '',
    redirectTo: 'productview',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

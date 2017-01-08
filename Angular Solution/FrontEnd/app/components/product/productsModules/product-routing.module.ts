import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductListComponent }    from '../productComponents/productList.component';
import { ProductDetailsComponent }  from '../productComponents/product-details.component';

const ProductesRoutes: Routes = [
  { path: 'products',  component: ProductListComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [  CommonModule,RouterModule.forChild(ProductesRoutes)  ],
  exports: [    RouterModule  ]
})
export class ProductRoutingModule { }
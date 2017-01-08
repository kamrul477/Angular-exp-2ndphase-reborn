import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductDetailsComponent } from '../productComponents/product-details.component';
import { ProductListComponent } from '../productComponents/productList.component';
import { ProductService } from '../productService/product.service';
import { ProductRoutingModule } from '../productsModules/product-routing.module'



@NgModule({
    imports: [ProductRoutingModule, CommonModule, FormsModule],
    exports: [ProductListComponent, ProductDetailsComponent],
    declarations:[ProductListComponent,ProductDetailsComponent],
    providers: [ProductService],
})
export class ProductModule { }

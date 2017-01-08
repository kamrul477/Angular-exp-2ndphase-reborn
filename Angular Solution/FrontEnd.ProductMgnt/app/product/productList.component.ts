import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product/product-list.component.html'
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    errorMessage :string;
    products: IProduct[]; 
    pageName:string = "kamrul";
    private _productService: ProductService;

    constractor(productService: ProductService) {
       this._productService = productService;
    }
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);
    }


    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}

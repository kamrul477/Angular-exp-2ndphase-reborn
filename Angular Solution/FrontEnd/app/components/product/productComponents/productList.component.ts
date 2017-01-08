
import { Component, OnInit } from '@angular/core';
import { IProduct } from './../../../models/product.model';
import { ProductService } from '../../product/productService/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    //selector: 'pm-products',
    templateUrl: 'app/components/product/productsView/productList.component.html'
})

export class ProductListComponent implements OnInit {


    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    errorMessage: string;
    products: IProduct[];
    pageName: string = "kamrul";

    constructor(private _productService: ProductService,
                private router: Router,
                private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
            error => this.errorMessage = <any>error);
    }

    onSelect(product :IProduct) {
        this.router.navigate(['/product', product.id]);
    }


    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}


import { Component, OnInit } from "@angular/core";
import { IProduct } from "../../../models/product.model";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProductService } from './../productService/product.service'


@Component({
    templateUrl: "app/components/product/productsView/product-details.component.html"
})



export class ProductDetailsComponent implements OnInit {
    pageTitle: string = "Product Details";
    product: IProduct;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _service: ProductService) { }

    ngOnInit(): void {

        //(+) converts string 'id' to a number
        let id = +this._route.snapshot.params['id'];
        this._route.params.subscribe(params => {
            let id = +params['id'];
            this._service.getProduct(id)
                .map(p => this.product = p);
        })
        //this.pageTitle += `: ${id}`;
        //this._route.params
        // (+) converts string 'id' to a number
        //  .switchMap((params: Params) => this._service.getProduct(+params['id']))
        //.subscribe((product: IProduct) => this.product = product);
    }
    onBack(): void {
        this._router.navigate(['/products']);
    }
}
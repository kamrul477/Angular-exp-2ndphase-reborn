
import { Http, Response, Jsonp, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../../../models/product.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
// Add the RxJS Observable operators.
//import './rxjs-operators';
@Injectable()

export class ProductService {

    private _productBaseUrl = 'http://localhost:52086/api';
    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {       
        return this._http.get(`${this._productBaseUrl}/Product`,{headers:this.getHeaders()})
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        //let productSingleUrl = 'http://localhost:52086/api/Product/ffde74e6-1d58-4a1f-9d1a-451f232bcc74';
        //`${this._productBaseUrl}/Product/${id}`
        return this._http.get(`${this._productBaseUrl}/Product/${id}`,{headers:this.getHeaders()})
                   .map((response: Response) => <IProduct>response.json())
                   .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
        //return this.getProducts().toPromise().then(products =>products.find(product=>product.id==id))

    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }


}
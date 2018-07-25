import { Component } from '@angular/core';
import { ProductService } from './../service/product.service';
import { Observable } from 'rxjs';
import { Product } from "./../model/product.model";

@Component({
    selector : 'app-products',
    templateUrl: './products.component.html',
    styleUrls:['./products.component.css']
})

export class ProductsComponent {

    products : Observable<Product[]>;

    constructor(private productService : ProductService){ }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
       this.products = this.productService.get();
    }

}
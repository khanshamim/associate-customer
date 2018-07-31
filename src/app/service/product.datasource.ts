import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import { Product } from './../model/product.model';
import {ProductService} from "./product.service";
import {catchError, finalize, tap} from "rxjs/operators";

export class ProductDataSource implements DataSource<Product> {

    private productsSubject = new BehaviorSubject<Product[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private productService: ProductService) {

    }

    loadProducts(productId:number,
                filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        this.productService.getProduct(productId, filter, sortDirection,
            pageIndex, pageSize).pipe(
                tap(lessons => console.log(`product: ${lessons}`)),
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
                )
            .subscribe(lessons => this.productsSubject.next(lessons));

    }

    connect(collectionViewer: CollectionViewer): Observable<Product[]> {
        console.log("Connecting data source");
        return this.productsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.productsSubject.complete();
        this.loadingSubject.complete();
    }

}
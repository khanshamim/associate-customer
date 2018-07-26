import { Component, OnInit, ViewChild, AfterViewInit, ElementRef  } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductService } from './../service/product.service';
import { ProductDataSource } from "./../service/product.datasource";
import { Observable, fromEvent, merge } from 'rxjs';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Product } from "./../model/product.model";
import { MatPaginator, MatSort } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector : 'app-products',
    templateUrl: './products.component.html',
    styleUrls:['./products.component.css']
})

export class ProductsComponent implements OnInit, AfterViewInit {

   // products : Observable<Product[]>;
   product: Product;
  
   dataSource : ProductDataSource;

   displayedColumns =  ["price","instock","photo","created_date"];
  //displayedColumns =  ["price","photo"];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('input') input: ElementRef;  

   constructor(private productService : ProductService,private route: ActivatedRoute, private spinnerService: Ng4LoadingSpinnerService){ }

    ngOnInit() {
      //  this.getProducts(); 
      this.product = this.route.snapshot.data["product"];

      this.dataSource = new ProductDataSource(this.productService);     

      this.dataSource.loadLessons(1,'','asc',0,3);
    }

    ngAfterViewInit() {

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;

                    this.loadLessonsPage();
                })
            )
            .subscribe();

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.loadLessonsPage())
        )
        .subscribe();

    }


    loadLessonsPage() {
        this.dataSource.loadLessons(
            //this.product.id,
            1,
            this.input.nativeElement.value,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }

    applyFilter(filterValue: string) {
       // this.dataSource.filter = filterValue.trim().toLowerCase();
    }

      onRowClicked(row) {
        console.log('Row clicked: ', row);
      }
    

}

/*export class ProductDataSource extends DataSource<Product> {

    constructor(private productService : ProductService) {
      super();
    }

    connect(collectionViewer: CollectionViewer): Observable<Product[]> {
      return this.productService.get();
    }

    disconnect(collectionViewer: CollectionViewer) : void {}

    loadProducts(productId: number, filter: string,
        sortDirection: string, pageIndex: number, pageSize: number) {
        //...
    }  
}*/
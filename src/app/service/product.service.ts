import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http'; 
import { Product } from './../model/product.model';
import { MatSnackBar } from '@angular/material';
import { Observable, throwError } from "rxjs";
import { catchError, retry, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class ProductService {

    ACCESS_KEY: 'http://localhost:3000/api/';

    constructor(private http: HttpClient,private sb: MatSnackBar, private auth: AuthService){ }

    get() : Observable<Product[]>{
        return this.http.get<Product[]>('http://localhost:3000/api/product').pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError)
        );   
    }

    getById(productId: number) : Observable<Product>{
        return this.http.get<Product>(`http://localhost:3000/api/product/${productId}`);
    }

    getProduct(productId: number, filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3) : Observable<Product[]>{
        return this.http.get<Product[]>('http://localhost:3000/api/product',{
            params: new HttpParams()
                .set('productId', productId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
            }).pipe(
                map(res =>  res["payload"]),
                retry(3),
                catchError(this.handleError)
            );   
    }

    post(productList: Product) : Observable<Product>{
        
        return this.http.post<Product>(this.ACCESS_KEY + 'customer',productList).pipe(
            catchError(this.handleError)
          );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            this.sb.open(error.error.message, 'close', { duration: 2000 });
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
              this.sb.open(error.error.message, 'close', { duration: 2000 }); 
          }
          // return an observable with a user-facing error message
          return throwError(
            'Something bad happened; please try again later.');
       // this.sb.open(error, 'close', { duration: 2000 });
    }
}
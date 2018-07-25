import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Customer } from './../model/customer.model';
import { MatSnackBar } from '@angular/material';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class CustomerService {

    ACCESS_KEY: 'http://localhost:3000/api/';

    constructor(private http: HttpClient,private sb: MatSnackBar, private auth: AuthService){ }

    get() : Observable<Customer[]>{
        return this.http.get<Customer[]>('http://localhost:3000/api/product').pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError)
        );   
    }

    post(customerData: Customer) : Observable<Customer>{
        
        return this.http.post<Customer>(this.ACCESS_KEY + 'customer',customerData,this.auth.tokenHeader).pipe(
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
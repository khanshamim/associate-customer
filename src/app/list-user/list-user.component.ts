import { Component } from '@angular/core';
import { CustomerService } from './../service/customer.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Observable } from 'rxjs';
import { Customer } from "./../model/customer.model";

@Component({
    selector : 'app-customer-list',
    templateUrl: './list-user.component.html',
    styleUrls:['./list-user.component.css']
})

export class ListUserComponent {

    customers : Observable<Customer[]>;

    constructor(private customerService : CustomerService, private spinnerService: Ng4LoadingSpinnerService){ }

    ngOnInit() {
        this.getCustomer();
    }

    getCustomer() {
        this.spinnerService.show();
            this.customers = this.customerService.get();
            //this.spinnerService.hide();
    }

}
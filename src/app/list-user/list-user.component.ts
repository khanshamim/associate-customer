import { Component } from '@angular/core';
import { CustomerService } from './../service/customer.service';
import { Observable } from 'rxjs';
import { Customer } from "./../model/customer.model";

@Component({
    selector : 'app-customer-list',
    templateUrl: './list-user.component.html',
    styleUrls:['./list-user.component.css']
})

export class ListUserComponent {

    customers : Observable<Customer[]>;

    constructor(private customerService : CustomerService){ }

    ngOnInit() {
        this.getCustomer();
    }

    getCustomer() {
        this.customers = this.customerService.get();
    }

}
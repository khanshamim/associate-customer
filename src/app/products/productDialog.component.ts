import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from './../model/product.model';
import * as moment from 'moment';



@Component({
    selector: 'product-dialog',
    templateUrl : './productDialog.component.html'
})

export class ProductDialogComponent implements OnInit {

    form: FormGroup; 
    productName: string;  
    
    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ProductDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {
            this.productName = this.data.name.firstName;
    }

    ngOnInit() {
        this.form = this.fb.group({
            description: [this.data.description, []],
            name:[this.productName,Validators.required],
            created_date:[moment(),Validators.required],
            price:[this.data.price, Validators.required],
            instock:[this.data.instock],
            photo:[this.data.photo, Validators.required]

        });
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

}
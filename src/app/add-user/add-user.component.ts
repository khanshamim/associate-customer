import { Component } from '@angular/core';
import { FormBuilder, FormControl , FormGroup, Validators ,FormsModule,NgForm, ReactiveFormsModule } from '@angular/forms';  

@Component({
    selector: 'app-add-user',
    templateUrl : './add-user.component.html',
    styleUrls : ['./add-user.component.css']
})

export class AddUserComponent {
    regiForm: FormGroup;  
    FirstName:string='';  
    LastName:string='';  
    Address:string='';  
    DOB:Date=null;  
    Gender:string='';  
    Blog:string='';  
    Email:string='';  
    IsAccepted:number=0;

    constructor(private fb: FormBuilder) {  
        this.createForm(); 
        }
    
      createForm(){
         // To initialize FormGroup  
         this.regiForm = this.fb.group({  
            FirstName : [null, Validators.required],  
            LastName : [null, Validators.required],  
            Address : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],  
            DOB : [null, Validators.required],  
            Gender :[null, Validators.required],  
            Blog :[null, Validators.required],  
            Email :[null, Validators.compose([Validators.required,Validators.email])],  
            IsAccepted :[null]  
          });    
      }  
        // On Change event of Toggle Button  
  onChange(event:any)  {  
    if (event.checked == true) {  
      this.IsAccepted = 1;  
    } else {  
      this.IsAccepted = 0;  
    }  
  }  
  
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  {  
    console.log(form);  
  }  
  
}   
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  
  username : string
  password : string

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["dashboard"]);
    }else {
      alert("Invalid credentials");
    }
  }

}

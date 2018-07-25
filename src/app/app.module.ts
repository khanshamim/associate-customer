import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { CustomMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';

import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AssociateNavComponent } from './associate-nav/associate-nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';

import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';

import { CustomerService } from './service/customer.service';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDashboardComponent,
    AssociateNavComponent,
    CustomerDetailsComponent,
    CustomerLoginComponent,
    AddUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })  
  ],
  providers: [CustomerService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

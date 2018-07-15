import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    CustomerDashboardComponent,
    AssociateNavComponent,
    CustomerDetailsComponent,
    CustomerLoginComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

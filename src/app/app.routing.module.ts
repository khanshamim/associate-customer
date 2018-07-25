import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from "src/app/customer-login/customer-login.component";
import { CustomerDashboardComponent } from "src/app/customer-dashboard/customer-dashboard.component";
import { AddUserComponent } from "src/app/add-user/add-user.component";
import { ListUserComponent } from "src/app/list-user/list-user.component";


const routes: Routes = [
    {path: 'login', component: CustomerLoginComponent},
    {path: 'dashboard', component: CustomerDashboardComponent},
    {path: 'add', component: AddUserComponent},
    {path: 'edit', component: CustomerDashboardComponent},
    {path: 'list', component: ListUserComponent},
    {path: '', component: CustomerLoginComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }
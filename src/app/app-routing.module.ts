import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [{path:"login",component:LoginComponent, pathMatch:"full"},
{path:"register",component:RegisterComponent, pathMatch:"full"},
{path:"",component:DashboardComponent, pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

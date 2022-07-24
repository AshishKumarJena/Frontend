import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductmanagementComponent } from './components/productmanagement/productmanagement.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicebookComponent } from './components/servicebook/servicebook.component';
import { UsermanagementComponent } from './components/usermanagement/usermanagement.component';
import { AuthGuard } from './services/auth.guard';
import { ServiceBookingComponent } from './components/service-booking/service-booking.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'productmanagement',
    component:ProductmanagementComponent,
    pathMatch:'full'
  },
  {
    path:'servicebook',
    component:ServicebookComponent,
    pathMatch:'full'
  },
  {
    path:'usermanagement',
    component:UsermanagementComponent,
    pathMatch:'full'
  },
  {
    path:'product-list',
    component:ProductListComponent,
    pathMatch:'full'
  },
  {
    path:'service-booking',
    component:ServiceBookingComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

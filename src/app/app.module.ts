import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule, } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductmanagementComponent } from './components/productmanagement/productmanagement.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServicebookComponent } from './components/servicebook/servicebook.component';
import { UsermanagementComponent } from './components/usermanagement/usermanagement.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ServiceBookingComponent } from './components/service-booking/service-booking.component';
import { ServiceBookingDialogComponent } from './components/service-booking-dialog/service-booking-dialog.component';
import { ServiceReportComponent } from './components/service-report/service-report.component';
import { ServiceReportDialogComponent } from './components/service-report-dialog/service-report-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './components/register/register.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ProductmanagementComponent,
    ProfileComponent,
    ServicebookComponent,
    UsermanagementComponent,
    UserDialogComponent,
    ServiceBookingComponent,
    ServiceBookingDialogComponent,
    ServiceReportComponent,
    ServiceReportDialogComponent,
    RegisterComponent,
    ProductDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    MatSelectModule,
    MatCardModule
    
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

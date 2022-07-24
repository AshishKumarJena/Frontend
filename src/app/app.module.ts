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
import { RegisterComponent } from './components/register/register.component';
import { AppUserListComponent } from './components/app-user-list/app-user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthGuard } from 'src/app/services/auth.guard';
import { ProductmanagementComponent } from './components/productmanagement/productmanagement.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServicebookComponent } from './components/servicebook/servicebook.component';
import { UsermanagementComponent } from './components/usermanagement/usermanagement.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AddUserComponent } from './components/add-user/add-user.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ServiceRequestComponent } from './components/service-request/service-request.component';
import { ServiceRequestDialogComponent } from './components/service-request-dialog/service-request-dialog.component';
import { ServiceRequestReportComponent } from './components/service-request-report/service-request-report.component';
import { ServiceRequestReportDialogComponent } from './components/service-request-report-dialog/service-request-report-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    AppUserListComponent,
    ProductmanagementComponent,
    ProfileComponent,
    ServicebookComponent,
    UsermanagementComponent,
    ProductListComponent,
    DialogComponent,
    AddUserComponent,
    ServiceRequestComponent,
    ServiceRequestDialogComponent,
    ServiceRequestReportComponent,
    ServiceRequestReportDialogComponent,
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
    
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

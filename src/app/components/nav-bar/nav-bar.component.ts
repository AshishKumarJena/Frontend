import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ServiceBookingDialogComponent } from '../service-booking-dialog/service-booking-dialog.component';
import { ServiceReportDialogComponent } from '../service-report-dialog/service-report-dialog.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor(private authService:AuthService, 
    private router:Router, private dialog:MatDialog, 
    private tokenStorageService: TokenStorageService, 
    private route: Router) { }

  addUser() {
    this.router.navigate(['usermanagement']);
    this.dialog.open(UserDialogComponent, {
      width: '30%',
    });
  }


  listUser() {
    this.router.navigate(['usermanagement'])
    .then(() => {
          window.location.reload();
    });
  }

   addProduct() {
    this.router.navigate(['productmanagement']);
    this.dialog.open(ProductDialogComponent, {
      width: '30%',
    });
  }

  listProduct() {
    this.router.navigate(['productmanagement'])
    .then(() => {
          window.location.reload();
    });
  }

  addServiceBooking() {
    this.router.navigate(['service-booking']);
    this.dialog.open(ServiceBookingDialogComponent, {
      width: '30%',
    });
  }

  listBooking() {
    this.router.navigate(['service-booking'])
    .then(() => {
          window.location.reload();
    });
  }

  addServiceReport() {
    this.router.navigate(['service-report']);
    this.dialog.open(ServiceReportDialogComponent, {
      width: '30%',
    });
  }

  listReport() {
    this.router.navigate(['service-report'])
    .then(() => {
          window.location.reload();
    });
  }
  
  private roles: string[] = [];
  loggedIn = false;
  username?: string;

    ngOnInit(): void {
    this.loggedIn = !!this.tokenStorageService.getToken();
    if (this.loggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.route.navigate(['login'])
    .then(() => {
          window.location.reload();
    });
  }
}

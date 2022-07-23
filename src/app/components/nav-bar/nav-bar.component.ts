import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsermanagementService } from 'src/app/services/usermanagement.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  public loggedIn = false;

  constructor(private authenticationService:AuthenticationService, private router:Router, private dialog:MatDialog, private api : UsermanagementService ) { }

  addUser() {
    this.dialog.open(AddUserComponent, {
      width: '30%',
    });
  }


  listUser() {
    this.router.navigate(['usermanagement']);
  }

   addProduct() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  listProduct() {
    this.router.navigate(['productmanagement']);
  }

    ngOnInit(): void {
    this.loggedIn=this.authenticationService.isUserLoggedIn()
  }

  logoutUser(){
    this.authenticationService.logOut()
    location.reload()
  } 
}

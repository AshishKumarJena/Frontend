import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn = false;
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    this.loggedIn=this.authenticationService.isUserLoggedIn()
  }

  logoutUser(){
    this.authenticationService.logOut()
    location.reload()
  } 

}

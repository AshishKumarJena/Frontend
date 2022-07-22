import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string=''
  password:string=''
  AuthError:boolean=false
  errorMsg:String=''
  
  constructor(private authenticationService:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.authenticationService.authenticate(this.userName,this.password).subscribe(userData =>this.handleResponce(userData,this.userName)
    ,error=>this.handleError(error))
    window.location.href='/dashboard'
  }

  handleError(error:any){
    this.errorMsg=error.error.message
    this.AuthError=true
    this.userName=''
    this.password='' 
  } 
  handleResponce(responce:any,name:any){
    localStorage.setItem('username',responce.userid)
    let tokenStr= 'Bearer '+responce.authToken
    localStorage.setItem('token', tokenStr)
    this.route.navigate(['/login'])
    this.AuthError=false
  }
  closeErrorBox(){
    this.AuthError=false
  }

}

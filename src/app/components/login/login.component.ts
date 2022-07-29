// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   userName:string=''
//   password:string=''
//   AuthError:boolean=false
//   errorMsg:String=''
  
//   constructor(private authService:AuthService,private route:Router) { }

//   ngOnInit(): void {
//   }
//   login(){
//     this.authService.authenticate(this.userName,this.password).subscribe(userData =>this.handleResponce(userData,this.userName)
//     ,error=>this.handleError(error))
//     window.location.href='/dashboard'
//   }

//   handleError(error:any){
//     this.errorMsg=error.error.message
//     this.AuthError=true
//     this.userName=''
//     this.password='' 
//   } 
  // handleResponce(responce:any,name:any){
  //   localStorage.setItem('username',responce.userid)
  //   let tokenStr= 'Bearer '+responce.authToken
  //   localStorage.setItem('token', tokenStr)
  //   this.route.navigate(['login'])
  //   this.AuthError=false
  // }
  // closeErrorBox(){
  //   this.AuthError=false
  // }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    // id: null,
    userid: null,
    password: null,
  };
  loggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  responseText = '';
  roles: string[] = [];
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router:Router
  ) {}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.loggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  login(): void {
    const { userid, password } = this.form;
    this.authService.login(userid, password).subscribe(
      (data) => {
        console.log(data);
        console.log(sessionStorage)
        this.tokenStorage.saveToken(data.authToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.loggedIn = true;
        this.responseText = 'Auth Token: ' + data.authToken;
        this.roles = this.tokenStorage.getUser().roles;
        // this.router.navigate(['dashboard']);
        this.router.navigate(['dashboard'])
        .then(() => {
          window.location.reload();
        });
        
        // this.reloadPage();
        // window.location.href='/dashboard'
      },
      (err: { error: { message: string } }) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}



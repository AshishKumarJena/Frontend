// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { URLs } from '../_shared/urls';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {

//   token:String=''
//   constructor(private http:HttpClient,private route:Router) { }
//   authenticate(name:String,pass:String){
//     return this.http.post(URLs.AUTH_API,{userid:name,password:pass})
//   }
// isUserLoggedIn() {
//   let user = localStorage.getItem('username')
//   let token=localStorage.getItem('token')
//   console.log(token);
//   if(token!==null && token.length>6){
//     return true;
//   }
//   return !(token === null)
// }
 
// logOut() {
//   localStorage.removeItem('username')
//   localStorage.removeItem('token')
//   this.route.navigate(['login'])
// }
// sessionExpired(){
//   localStorage.removeItem('username')
//   localStorage.removeItem('token')
// }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLs } from 'src/app/_shared/urls';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(name:String,pass:String): Observable<any> {
    return this.http.post(
      URLs.AUTH_API,
      {
        userid:name,password:pass
      },
      httpOptions
    );
  }
  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      URLs.AUTH_API + 'signup',
      {
        name,
        email,
        password,
      },
      httpOptions
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  token:String=''
  constructor(private http:HttpClient,private route:Router) { }
  authenticate(name:String,pass:String){
    return this.http.post("http://localhost:8084/api/auth/login",{userid:name,password:pass})
  }
isUserLoggedIn() {
  let user = localStorage.getItem('username')
  let token=localStorage.getItem('token')
  console.log(token);
  if(token!==null && token.length>6){
    return true;
  }
  return !(token === null)
}
 
logOut() {
  localStorage.removeItem('username')
  localStorage.removeItem('token')
  this.route.navigate(['login'])
}
sessionExpired(){
  localStorage.removeItem('username')
  localStorage.removeItem('token')
}
}

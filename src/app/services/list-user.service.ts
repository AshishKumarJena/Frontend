import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';

export class AppUser {
  constructor( id : number ,
    name: string ,
    password: string ,
    mobile: number ,
    mailId:string ,
    regDate : Date ){
   
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class ListUserService {
  
  baseURL: string = "http://localhost:9095/";

  constructor(private http:HttpClient ,private router :Router) { }
  getUser(){return this.http.get<AppUser[]>(this.baseURL + 'user',{headers:this.createHeader()})}
  createHeader(){
    let token= localStorage.getItem('token')
    if(token!==null){
      var header=new HttpHeaders({Authorization:token})
      return header
    }
    this.router.navigate(['login'])
    return 
  }

registerUser (user : AppUser): Observable<Object>{
  const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(body)
   return this.http.post(this.baseURL + 'user', body,{'headers':headers})

  }
}


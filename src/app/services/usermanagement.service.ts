import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAppUser } from './appuser';

export class AppUser implements IAppUser {
    id : number;
    name: string;
    password: string;
    mobile: number;
    mailId:string;
    regDate : Date;
    constructor(id: number, name: string, password: string, mobile: number, mailId:string, regDate: Date) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.mobile = mobile;
        this.mailId = mailId;
        this.regDate = regDate;
    }
}
@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  constructor(private http:HttpClient,private route:Router) { }

postUser (data : AppUser): Observable<AppUser[]>{
 return this.http.post<AppUser[]>("http://localhost:9095/user/",data);
}

getAllUsers(){
  return this.http.get<AppUser[]>('http://localhost:9095/user/',{headers:this.createHeader()})}
  

 createHeader(){
    let token= sessionStorage.getItem('token')
    if(token!==null){
      var header=new HttpHeaders({Authorization:token})
      return header
    }
    //this.router.navigate(['login'])
    return 
  }

}

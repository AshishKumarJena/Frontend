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
 return this.http.post<AppUser[]>("http://localhost:9095/user/",data)
}

getUser(){
  return this.http.get<AppUser[]>('http://localhost:9095/user/')
}

putUser(data : AppUser, id : number): Observable<AppUser[]>{
  return this.http.put<AppUser[]>("http://localhost:9095/user/"+id,data)
}

deleteUser(id : number){
  return this.http.delete<AppUser[]>("http://localhost:9095/user/"+id)
}

}


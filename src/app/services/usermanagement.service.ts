import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { URLs } from '../_shared/urls';
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
 return this.http.post<AppUser[]>(URLs.USER_API_BASE_URL,data)
}

getUser(){
  return this.http.get<AppUser[]>(URLs.USER_API_BASE_URL)
}

putUser(data : AppUser, id : number): Observable<AppUser[]>{
  return this.http.put<AppUser[]>(URLs.USER_API_BASE_URL+id,data)
}

deleteUser(id : number){
  return this.http.delete<AppUser[]>(URLs.USER_API_BASE_URL+id)
}

}


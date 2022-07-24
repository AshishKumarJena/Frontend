import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IServiceBooking } from './servicebooking';

export class ServiceBooking implements IServiceBooking {
    id: number;
    productId: number;
    userId: number;
    reqDate: Date;
    problem: string;
    description: string;
    status: string;
    constructor(id: number, productId: number, userId: number, reqDate: Date, problem: string, description: string, status: string) {
        this.id = id;
        this.productId = productId;
        this.userId = userId;
        this.reqDate = reqDate;
        this.problem = problem;
        this.description = description;
        this.status = status;
    }
}



@Injectable({
  providedIn: 'root'
})
export class ServicemanagementService {

  constructor(private http:HttpClient, private router :Router) { }

  postServiceBooking(data : ServiceBooking): Observable<ServiceBooking[]>{
    return this.http.post<ServiceBooking[]>("http://localhost:9090/servicereq/",data);
  }

  getServiceBooking(){
    return this.http.get<ServiceBooking[]>("http://localhost:9090/servicereq/")
  }

  putServiceBooking(data : ServiceBooking, id : number): Observable<ServiceBooking[]>{
    return this.http.put<ServiceBooking[]>("http://localhost:9090/servicereq/"+id,data)
  }

  deleteServiceBooking(id : number){
  return this.http.delete<ServiceBooking[]>("http://localhost:9090/servicereq/"+id)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IServiceBooking } from './servicebooking';
import { IServiceReport } from './servicereport';
import { URLs } from '../_shared/urls';

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

export class ServiceReport implements IServiceReport {
    id: number;
    reportId: number;
    serReqId: number;
    reportDate: Date;
    serviceType: string;
    actionTaken: string;
    diagnosisDetails: string;
    isPaid: string;
    visitFees: number;
    repairDetails: string;
    constructor(id: number, reportId: number,serReqId: number, reportDate: Date, serviceType: string, actionTaken: string, diagnosisDetails: string, isPaid: string, visitFees: number, repairDetails: string) {
        this.id = id;
        this.reportId = reportId;
        this.serReqId = serReqId;
        this.reportDate = reportDate;
        this.serviceType = serviceType;
        this.actionTaken = actionTaken;
        this.diagnosisDetails = diagnosisDetails;
        this.isPaid = isPaid;
        this.visitFees = visitFees;
        this.repairDetails = repairDetails;
    }
}


@Injectable({
  providedIn: 'root'
})
export class ServicemanagementService {



  constructor(private http:HttpClient, private router :Router) { }

  postServiceBooking(data : ServiceBooking): Observable<ServiceBooking[]>{
    return this.http.post<ServiceBooking[]>(URLs.SERVICE_BOOKING_API_BASE_URL,data);
  }

  getServiceBooking(){
    return this.http.get<ServiceBooking[]>(URLs.SERVICE_BOOKING_API_BASE_URL)
  }

  putServiceBooking(data : ServiceBooking, id : number): Observable<ServiceBooking[]>{
    return this.http.put<ServiceBooking[]>(URLs.SERVICE_BOOKING_API_BASE_URL+id,data)
  }

  deleteServiceBooking(id : number){
  return this.http.delete<ServiceBooking[]>(URLs.SERVICE_BOOKING_API_BASE_URL+id)
  }

  postServiceReport(data : ServiceReport): Observable<ServiceReport[]>{
    return this.http.post<ServiceReport[]>(URLs.SERVICE_REPORT_API_BASE_URL,data);
  }

  getServiceReport(){
    return this.http.get<ServiceReport[]>(URLs.SERVICE_REPORT_API_BASE_URL)
  }

  putServiceReport(data : ServiceReport, id : number): Observable<ServiceReport[]>{
    return this.http.put<ServiceReport[]>(URLs.SERVICE_REPORT_API_BASE_URL+id,data)
  }

  deleteServiceReport(id : number){
  return this.http.delete<ServiceReport[]>(URLs.SERVICE_REPORT_API_BASE_URL+id)
  }
}

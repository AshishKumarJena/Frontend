import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IProduct } from './product';

export class Product implements IProduct {
    id: number;
    name: string;
    make: string;
    model: string;
    cost: DoubleRange;
    createdDate: Date;
    constructor(id: number, name: string, make: string, model: string, cost: DoubleRange, createdDate: Date) {
        this.id = id;
        this.name = name;
        this.make = make;
        this.model = model;
        this.cost = cost;
        this.createdDate = createdDate;
    }
}

@Injectable({
  providedIn: 'root'
})
export class ProductmanagementService {

  constructor(private http:HttpClient, private router :Router) { }

  postProduct(data : Product): Observable<Product[]>{
    return this.http.post<Product[]>("http://localhost:9000/product/",data);
  }

  getProduct(){
    return this.http.get<Product[]>("http://localhost:9000/product/")
  }

  putProduct(data : Product, id : number): Observable<Product[]>{
    return this.http.put<Product[]>("http://localhost:9000/product/"+id,data)
  }
  
  deleteProduct(id : number){
  return this.http.delete<Product[]>("http://localhost:9000/product/"+id)
}

}

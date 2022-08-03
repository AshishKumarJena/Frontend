import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IProduct } from './product';
import { URLs } from '../_shared/urls';
import { TokenStorageService } from 'src/app/services/token-storage.service';


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

  constructor(private http:HttpClient, 
    private router :Router,
    private tokenStorage :TokenStorageService) { }

  postProduct(data : Product): Observable<Product[]>{
    return this.http.post<Product[]>(URLs.PRODUCT_API_BASE_URL,data);
  }

  getProduct(){
    return this.http.get<Product[]>(URLs.PRODUCT_API_BASE_URL)
  }

  putProduct(data : Product, id : number): Observable<Product[]>{
    return this.http.put<Product[]>(URLs.PRODUCT_API_BASE_URL+id,data,{headers:this.createHeader()})
  }
  
  deleteProduct(id : number){
  return this.http.delete<Product[]>(URLs.PRODUCT_API_BASE_URL+id)
}

createHeader(){
    let token = this.tokenStorage.getToken();
    if(token!==null){
      var header=new HttpHeaders({Authorization:token})
      return header
    }
    // this.router.navigate(['productmanagement'])
    return 
  }
}


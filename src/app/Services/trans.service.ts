import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransService {

  constructor(private http: HttpClient) { }
  cartData:any =[]

  getApi(){
     return this.http.get('https://fakestoreapi.com/products')
  }

  
}

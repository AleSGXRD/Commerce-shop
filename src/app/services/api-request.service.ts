import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from '../interface/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private http:HttpClient;
  private URL:string = 'assets/json/DatosScraping.json';

  constructor(private injector:Injector) {
    this.http = injector.get(HttpClient);
  }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.URL);
  }
}

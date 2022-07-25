import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainAPIService<T> {

  constructor(private http:HttpClient,@Inject(String)  public config) { 
    
  }
  get() :Observable<T>{
    return this.http.get<T>(this.config);
  }
  getbyId(id):Observable<T>{
    return this.http.get<T>(this.config+`/${id}`)
  }
  post(object:T):Observable<T>{
    return this.http.post<T>(this.config,object) 
  }
  put(id,object:T):Observable<T>{
    return this.http.put<T>(this.config+`/${id}`, object)

  }
  delete(id):Observable<T>{
    return this.http.delete<T>(this.config+`/${id}`)

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../models/customer';
import { MainAPIService } from './main-api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService extends MainAPIService<customer> {

  constructor( http:HttpClient) {
    super(http," http://localhost:3000/customer");
  }
}

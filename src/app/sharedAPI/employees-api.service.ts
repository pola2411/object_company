import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainAPIService } from './main-api.service';
import { em } from "../models/em";

@Injectable({
  providedIn: 'root'
})
export class EmployeesAPIService extends MainAPIService<em>{

  constructor( http:HttpClient) {
    super(http,"http://localhost:3000/employee");
  }

}

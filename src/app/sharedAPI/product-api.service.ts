import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pro } from '../models/pro';
import { MainAPIService } from './main-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends MainAPIService<pro> {

  constructor(http:HttpClient) {
    super(http,"http://localhost:3000/products");
  }
}

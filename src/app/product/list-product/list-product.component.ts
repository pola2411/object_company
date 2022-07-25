import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pro } from 'src/app/models/pro';
import { ProductApiService } from 'src/app/sharedAPI/product-api.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
alldata=new pro;
  constructor(private ser:ProductApiService,private r:Router) { 
    ser.get().subscribe((data:any)=>{
      this.alldata=data
      console.log(data);
      
    })
  }

 

}

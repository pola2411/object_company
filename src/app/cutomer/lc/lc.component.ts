import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/models/customer';
import { CustomerApiService } from 'src/app/sharedAPI/customer-api.service';

@Component({
  selector: 'app-lc',
  templateUrl: './lc.component.html',
  styleUrls: ['./lc.component.css']
})
export class LcComponent implements OnInit {

  alldata=new customer
  constructor(private ser:CustomerApiService) { 
    ser.get().subscribe((data:any)=>{
    this.alldata=data      
    })
  }

  ngOnInit(): void {
  }

}

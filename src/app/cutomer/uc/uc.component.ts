import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from 'src/app/models/customer';
import { CustomerApiService } from 'src/app/sharedAPI/customer-api.service';

@Component({
  selector: 'app-uc',
  templateUrl: './uc.component.html',
  styleUrls: ['./uc.component.css']
})
export class UcComponent  {

  object=new customer
  id;
    constructor(private ser:CustomerApiService,private router:Router,private active:ActivatedRoute) {
      this.id=active.snapshot.paramMap.get('id');
      this.ser.getbyId(this.id).subscribe((data:any)=>{
        this.object=data;
      
        
        
      })
     
    }
    update(fn,ln,phone){
      if(fn.valid&&ln.valid&&phone.valid&&fn.errors==null&&ln.errors==null&&phone.errors==null){
        this.ser.put(this.id,this.object).subscribe((data:any)=>{
        alert("successful")
        this.router.navigateByUrl("list_customer")
      })}
    
    else{
      alert("please enter all data")
    }
  
    }

}

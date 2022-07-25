import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from 'src/app/models/customer';
import { CustomerApiService } from 'src/app/sharedAPI/customer-api.service';

@Component({
  selector: 'app-cc',
  templateUrl: './cc.component.html',
  styleUrls: ['./cc.component.css']
})
export class CcComponent  {

  object=new customer
  constructor(private ser:CustomerApiService,private router:Router) { }


  save(fn,ln,phone){
    if(fn.valid&&ln.valid&&phone.valid&&fn.errors==null&&ln.errors==null&&phone.errors==null){
    this.ser.post(this.object).subscribe((data:any)=>{
    
      alert("successful")
      this.router.navigateByUrl("list_customer")
    })
  }
else{
  alert("please enter all data")
}
}


}

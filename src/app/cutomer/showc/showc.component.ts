import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from 'src/app/models/customer';
import { CustomerApiService } from 'src/app/sharedAPI/customer-api.service';

@Component({
  selector: 'app-showc',
  templateUrl: './showc.component.html',
  styleUrls: ['./showc.component.css']
})
export class ShowcComponent  {

  ob=new customer
  id;
    constructor(private ser:CustomerApiService,private r:Router,private router:ActivatedRoute) {
      this.id=router.snapshot.paramMap.get('id')
      console.log(this.id);
     
        this.ser.getbyId(this.id).subscribe((data:any)=>{
          this.ob=data;
          console.log(data);
          
        })
       
     }
     back(){
      this.r.navigateByUrl("list_customer")
      
     }
     delete(){
      this.ser.delete(this.id).subscribe((data:any)=>{
        this.r.navigateByUrl("list_customer")
      })
     }


}

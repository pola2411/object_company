import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pro } from 'src/app/models/pro';
import { ProductApiService } from 'src/app/sharedAPI/product-api.service';

@Component({
  selector: 'app-create-pr',
  templateUrl: './create-pr.component.html',
  styleUrls: ['./create-pr.component.css']
})
export class CreatePrComponent  {
object=new pro
  constructor(private ser:ProductApiService,private r:Router) { }

 save(title,img,des){
  if(title.valid&&img.valid&&des.valid&&title.errors==null&&img.errors==null&&des.errors==null){
    this.ser.post(this.object).subscribe((data:any)=>{
    
      alert("successful")
      this.r.navigateByUrl("list_product")
    })
  }
else{
  alert("please enter all data")
}  


}
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { em } from 'src/app/models/em';
import { EmployeesAPIService } from 'src/app/sharedAPI/employees-api.service';

@Component({
  selector: 'app-showmore',
  templateUrl: './showmore.component.html',
  styleUrls: ['./showmore.component.css']
})
export class ShowmoreComponent  {

  ob=new em
  id;
    constructor(private ser:EmployeesAPIService,private r:Router,private router:ActivatedRoute) {
      this.id=router.snapshot.paramMap.get('id')
      console.log(this.id);
     
        this.ser.getbyId(this.id).subscribe((data:any)=>{
          this.ob=data;
          console.log(data);
          
        })
       
     }
     back(){
      this.r.navigateByUrl("list_employees")
      
     }
     delete(){
      this.ser.delete(this.id).subscribe((data:any)=>{
        this.r.navigateByUrl("list_employees")
      })
     }

   

}

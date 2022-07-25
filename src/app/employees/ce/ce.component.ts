import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { em } from 'src/app/models/em';
import { EmployeesAPIService } from 'src/app/sharedAPI/employees-api.service';

@Component({
  selector: 'app-ce',
  templateUrl: './ce.component.html',
  styleUrls: ['./ce.component.css']
})
export class CEComponent  {
object=new em
  constructor(private ser:EmployeesAPIService,private router:Router) { }


  save(fn,ln,age,salary,phone){
    if(fn.valid&&ln.valid&&age.valid&&salary.valid&&phone.valid&&fn.errors==null&&ln.errors==null&&age.errors==null&&salary.errors==null&&phone.errors==null){
    this.ser.post(this.object).subscribe((data:any)=>{
    
      alert("successful")
      this.router.navigateByUrl("list_employees")
    })
  }
else{
  alert("please enter all data")
}
}

}

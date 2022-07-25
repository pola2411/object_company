import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { em } from 'src/app/models/em';
import { EmployeesAPIService } from 'src/app/sharedAPI/employees-api.service';

@Component({
  selector: 'app-ue',
  templateUrl: './ue.component.html',
  styleUrls: ['./ue.component.css']
})
export class UEComponent {
object=new em
id;
  constructor(private ser:EmployeesAPIService,private router:Router,private active:ActivatedRoute) {
    this.id=active.snapshot.paramMap.get('id');
    this.ser.getbyId(this.id).subscribe((data:any)=>{
      this.object=data;
      console.log(data);
      console.log(this.id);
      
      
    })
   
  }
  update(fn,ln,age,salary,phone){
    if(fn.valid&&ln.valid&&age.valid&&salary.valid&&phone.valid&&fn.errors==null&&ln.errors==null&&age.errors==null&&salary.errors==null&&phone.errors==null){
      this.ser.put(this.id,this.object).subscribe((data:any)=>{
      alert("successful")
      this.router.navigateByUrl("list_employees")
    })}
  
  else{
    alert("please enter all data")
  }

  }

}

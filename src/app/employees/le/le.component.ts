import { Component, OnInit } from '@angular/core';
import { em } from 'src/app/models/em';
import { EmployeesAPIService } from 'src/app/sharedAPI/employees-api.service';

@Component({
  selector: 'app-le',
  templateUrl: './le.component.html',
  styleUrls: ['./le.component.css']
})
export class LEComponent implements OnInit {
alldata=new em
  constructor(private ser:EmployeesAPIService) { 
    ser.get().subscribe((data:any)=>{
    this.alldata=data      
    })
  }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {AttendancedetailService, attendace } from '../_services/attendance.service';
import { LeavedetailService ,leavedetail } from '../_services/leavedetail.service';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-leaveapprove',
  templateUrl: './leaveapprove.component.html',
  styleUrls: ['./leaveapprove.component.css']
})
export class LeaveapproveComponent implements OnInit {

  public aleave:any
  public empleave:any
  message:any;
  empid:any;
  fromdate='';
  todate='';
  starting:any;
  ending:any;
  length:any;
  dateee:any;
  attendance:any
  constructor(private router: Router,private route:ActivatedRoute,private atten:AttendancedetailService,private employeeservice: EmployeeService,private leave:LeavedetailService) {

    
    this.employeeservice.currentMessage.subscribe(message => this.message = message)
    this.leave.getDept(this.message)
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      
      this.empleave = data as leavedetail[]
    }
    );
   }

  ngOnInit() {
  }
  acc(get:leavedetail){

    this.employeeservice.currentMessage.subscribe(message => this.message = message)
    this.leave.updatedept(get.employeeId,get.fromdate,"ACCEPTED")
    .subscribe( (data) => {
      console.log("VENAMM  MACHAAAA"+JSON.stringify(data))
     // this.empleave = data as leavedetail[]
     this.ngOnInit();
    }
    );
this.starting = get.fromdate.split("-");
this.ending = get.todate.split("-");
this.length = Number(this.ending[2])-Number(this.starting[2]);
for(let i =0;i<=this.length;i++){
this.dateee = this.starting[0]+"-"+this.starting[1]+"-"+(Number(this.starting[2])+i).toString();
console.log("EPA SAMY VANDURU PLZ "+this.dateee);
this.attendance = new attendace(get.employeeId,this.starting[1],this.dateee,get.deptId,false,"-","-","1");
this.atten.addatten(this.attendance)
.subscribe((data)=>{
  console.log("SHH>>>>>>"+JSON.stringify(data))
})
}

this.router.navigate(['approve'])
  }
  rej(get:leavedetail){

    this.employeeservice.currentMessage.subscribe(message => this.message = message)
    this.leave.updatedept(get.employeeId,get.fromdate,"REJECTED")
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      this.ngOnInit();
     // this.empleave = data as leavedetail[]
    }
    );

    this.router.navigate(['approve'])
  }

}

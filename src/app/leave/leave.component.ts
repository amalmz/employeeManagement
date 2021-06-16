import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { LeavedetailService, leavedetail } from '../_services/leavedetail.service';
import { Employee } from '../../app/modules/employee';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  public aleave:any
  public empleave:any
  reason=''
  fromdate:any;
  todate:any;
  type=''
  message:any;
  dept:any
  constructor(private userService: EmployeeService,private leave:LeavedetailService) { }

  ngOnInit() {
  }
  submit(){

    this.userService.currentMessage.subscribe(message => this.message = message)
    console.log("QWERTY");
    this.userService.getEmployee(1)
    .subscribe( (data) => {
      console.log("SOLLU"+JSON.stringify(data))
      
      this.dept = data as Employee;
    }
    );
    console.log("ASD"+this.type+"DEIIIIII"+this.dept.department);
    console.log("ANSWER"+this.message);
    this.aleave = new leavedetail(this.message,this.reason,this.dept.department,"",this.fromdate,this.todate,"pen",this.type);

    this.leave.createEmployee(this.aleave)
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      
      this.empleave = data
    }
    );
    alert("Leave has been requested.Please wait for the approval");
  this.reason=''
  this.fromdate=''
  this.todate=''
  this.type=''
  }
}

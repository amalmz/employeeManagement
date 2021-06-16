import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {AttendancedetailService, attendace } from '../_services/attendance.service';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

    public atten:any
    public at:any
    public month='';
    public year='';
    showActions: boolean = false;  
    message="";
    constructor(private userService: UserService,private attendance:AttendancedetailService) { }
  
    ngOnInit() {
    }
    submit(){
      this.userService.currentMessage.subscribe(message => this.message = message)
      //console.log("visnu"+this.message);
      this.attendance.getattendance(this.message.toString())
      .subscribe( (data) => {
        console.log(JSON.stringify(data))
        
        this.at = data as attendace[];
        this.showActions=true;
      }
      );
    this.month=''
    this.year=''
    }
}

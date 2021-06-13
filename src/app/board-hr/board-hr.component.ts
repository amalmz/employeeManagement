import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-hr',
  templateUrl: './board-hr.component.html',
  styleUrls: ['./board-hr.component.css']
})
export class BoardHrComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getHrBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}

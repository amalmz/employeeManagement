import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import{BoardManagerComponent} from './board-manager/board-manager.component';
import {BoardHrComponent} from './board-hr/board-hr.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { LeaveComponent } from './leave/leave.component';

import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveapproveComponent } from './leaveapprove/leaveapprove.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent ,children:[ {path:'apply',component:LeaveComponent}]},
  { path: 'manager', component: BoardManagerComponent,
children:[ {path:'leaverequests',component:LeaveapproveComponent}]},
  { path: 'hr', component: BoardHrComponent ,
children:[{path:'list',component:ListEmployeesComponent},{path:'attend', component:AttendanceComponent}]},
 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
 

  //{path: '**', component: PageNotfoundComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

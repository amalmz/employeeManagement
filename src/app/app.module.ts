import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { EmployeeService } from './employee.service';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BoardHrComponent } from './board-hr/board-hr.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardManagerComponent,
    BoardUserComponent,
    ListEmployeesComponent,
    PageNotfoundComponent,
    BoardHrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
   
  
  ],
  providers: [authInterceptorProviders,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

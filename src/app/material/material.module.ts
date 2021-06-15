import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

const MaterialComponents=[
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatListModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }

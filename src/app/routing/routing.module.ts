import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../user/add-user/add-user.component';



const routes: Routes = [
  {path  : "users" , component : UserComponent}, 
  {path  : "add" , component : AddUserComponent}, 
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }

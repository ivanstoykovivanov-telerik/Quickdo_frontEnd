import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../user/add-user/add-user.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  {path  : "tasks" , component : UserComponent}, 
  {path  : "register", component : AddUserComponent}, 
  {path  : "profile" , component : ProfileComponent}
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

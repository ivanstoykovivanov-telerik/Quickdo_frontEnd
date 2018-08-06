import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../user/add-user/add-user.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { TasksComponent } from '../tasks/tasks.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path  : "register", component : AddUserComponent}, 
  {path  : "login" , component : LoginComponent},
  {path  : "users" , component : UserComponent},
  {path  : "tasks" , component : TasksComponent}, 
  {path  : "profile" , component : ProfileComponent},
  {path  : "home" , component : HomeComponent}
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

import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  
  constructor(
    private router: Router, 
    private userService: UserService 
  ) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe( data => {
        this.users = data; 
      }); 
  }

  deleteUser(user: User): void{
    console.log("Delete user"); 
    this.userService.deleteUser(user)
      .subscribe(data => {
        console.log(data);
        this.users = this.users.filter(u => u !== user); 
      });
  }

  editUser(user:User){
    //TODO
    console.log("Edit user");
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = new User(); 
  
  constructor(
    private router: Router, 
    private userService: UserService 
  ) { }

  ngOnInit() {
  }

  createUser(): void{
    this.userService.createUser(this.user)
      .subscribe(data => {
        console.log(`User ${this.user.firstName} ${this.user.lastName} created successfully `);
      }); 
  }
}

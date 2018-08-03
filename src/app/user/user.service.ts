import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   //private userUrl = "http://localhost:8080/user-portal/users"; 
    //http://localhost:8080/user-portal == /api
   private userUrl = '/api/users';

  constructor(
    private http: HttpClient
  ) { }
 

  public getAllUsers(){
    return this.http.get<User[]>(this.userUrl); 
  }

  public createUser(user: User ){
    return this.http.post<User>(this.userUrl, user); 
  }

  public deleteUser(user){
    return this.http.delete(this.userUrl + "/" + user.id); 
  }

  public updateUser(user){
    //TODO 
  }



}

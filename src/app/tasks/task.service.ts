import { Injectable, EventEmitter } from '@angular/core';
import { Http} from '@angular/http'; 

import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
   private tasksURL = "http://localhost:8080/user-portal/tasks"; 
  //private tasksURL = "/api/tasks"; 
  onTaskAdded = new EventEmitter<Task>();   

  constructor(private http: HttpClient) { }

  public getAllTasks(){
    return this.http.get<Task[]>(this.tasksURL); 
  }

  public saveTask(task: Task , checked: boolean){
    task.completed = checked; 
    return this.http.post<Task>(`${this.tasksURL}/save`, task); 
  }

  public addTask(task : Task){
    return this.http.post<Task>(`${this.tasksURL}/save`, task); 
  }

}

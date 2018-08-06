import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model'; 
import { TaskService } from '../task.service';
// import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  
  tasks: Task[] = []; 
  //Dragula : 
  title= "Testing ng comps"; 
  options: any = {
    removeOnSpill: true
  };


  constructor(
    private taskService: TaskService, 
    // private dragulaService: DragulaService
  ) { }

  ngOnInit() {
    this.taskService.getAllTasks()
      .subscribe(data =>  {
        this.tasks = data;
        
      })
      
    this.taskService.onTaskAdded
      .subscribe( 
        (task: Task) => this.tasks.push(task) 
      ); 
  }

  onTaskChange(event, task){
    this.taskService.saveTask(task, event.target.checked).subscribe(); 
  }

  getDueDateLabel(task: Task){
    return  task.completed ? 'badge-success' : 'badge-danger';  
  }

}

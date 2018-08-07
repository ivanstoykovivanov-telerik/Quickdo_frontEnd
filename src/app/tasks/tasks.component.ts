import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasksForToday = [
    {name: "Feed the cat", completed: "false"},
    {name: "Walk the horse", completed: "false"},
    {name: "Water the grass", completed: "false"}];
    
    tasksInProgress= [
      {name: "A Task In Progress", completed: "false"}
    ]; 
    tasksDone = [
      {name: "A Task Done", completed: "false"}
    ]; 
  

  onTaskDroppedToInProgress(e: any) {
    // Get the dropped data here
    // TODO:  HERE connect to a service and make the changes in the db. 
    //delete the dragged task 
    this.tasksForToday =  this.tasksForToday.filter( i => i.name !== e.dragData.name );
    this.tasksInProgress.push(e.dragData);
    console.log("From In progress:");
    console.log(this.tasksInProgress);
  }

  onTaskDroppedToDone(e: any) {
    //delete task from Tasks in progress
    console.log("From Dropped To Done: ");
    console.log(this.tasksInProgress);
    console.log("dragged Data: ");
    console.log(e.dragData);
    this.tasksInProgress =  this.tasksInProgress.filter( i => i.name !== e.dragData.name );
    this.tasksDone.push(e.dragData);
    console.log(this.tasksDone);
  }

  
  constructor() { }

  ngOnInit() {
  }

}

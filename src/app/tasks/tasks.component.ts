import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  items = [
    {name: "Feed the cat", type: "fruit"},
    {name: "Walk the horse", type: "vegetable"},
    {name: "Water the grass", type: "fruit"}];
    
    itemsInProgress= [
      {name: "Walk the itemsInProgress", type: "fruit"}
    ]; 
    itemsDone = [
      {name: "Walk the itemsInProgress", type: "fruit"}
    ]; 
    droppedItems = []; 
  

  onItemDroppedToInProgress(e: any) {
    // Get the dropped data here
    
    // TODO:  HERE connect to a service and make the changes in the db. 

    //delete the dragged item 
    this.items =  this.items.filter( i => i.name !== e.dragData.name );
    this.itemsInProgress.push(e.dragData);
    console.log("From In progress:");
    console.log(this.itemsInProgress);
  }

  onItemDroppedToDone(e: any) {
    
    //delete item from in progress
    console.log("From Dropped To Done: ");
    console.log(this.itemsInProgress);
    console.log("dragged Data: ");
    console.log(e.dragData);
    
    this.itemsInProgress =  this.itemsInProgress.filter( i => i.name !== e.dragData.name );
    this.itemsDone.push(e.dragData);
    console.log(this.itemsDone);
  }

  
  constructor() { }

  ngOnInit() {
  }

}

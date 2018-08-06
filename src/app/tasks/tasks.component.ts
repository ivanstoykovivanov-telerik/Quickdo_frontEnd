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
    
  droppedItems = [] ; 

  onItemDrop(e: any) {
    // Get the dropped data here
    
    // TODO:  HERE connect to a service and make the changes in the db. 

    //delete the dragged item 
    this.items =  this.items.filter( i => i.name !== e.dragData.name );

    this.droppedItems.push(e.dragData);
  }
  
  constructor() { }

  ngOnInit() {
  }

}

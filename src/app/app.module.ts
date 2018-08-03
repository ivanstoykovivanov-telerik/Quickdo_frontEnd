import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserService } from './user/user.service';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskService } from './tasks/task.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    TasksComponent,
    TasksAddComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule, 
    RoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    UserService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

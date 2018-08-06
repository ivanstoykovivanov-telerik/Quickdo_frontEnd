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
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
// import { DragulaModule } from 'ng2-dragula';
// import { DragAndDropModule } from 'angular-draggable-droppable';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    TasksComponent,
    TasksAddComponent,
    TasksListComponent, 
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent, 
    
  ],
  imports: [
    BrowserModule, 
    RoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule, 
    // DragAndDropModule.forRoot()
    // DragulaModule 
    NgDragDropModule.forRoot()
  ],
  providers: [
    UserService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

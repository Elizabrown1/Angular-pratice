import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoGuardGuard } from './guards/todo-guard.guard';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';
import { UserstodoComponent } from './userstodo/userstodo.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'todo', component:TodoComponent , canActivate:[TodoGuardGuard]},
  {path: 'sign-in', component:SignInComponent},
  {path: 'sign-up', component:SignUpComponent},
  
  {path: '', component: SidenavComponent, children: [
    {path: 'reactiveform', component:ReactiveformComponent},
    {path: 'parent', component:ParentComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'angular-material', component: AngularMaterialComponent},
    {path: 'users',  children : [
      {path: '', component: UsersComponent},
      {path: 'todo/:id', component: UserstodoComponent},
    ]},

  ]},
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

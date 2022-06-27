import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public router: Router) { }

  public todo :any;
  public todoList :any;
  public todoObj:any={};
  public todoArray:any = [];
  public class = "text-center"

  ngOnInit(): void {
    this.todoArray = JSON.parse(localStorage.getItem('todos')!);
    if (this.todoArray == null) {
      this.todoArray = [];
    }
    console.log(this.todoArray);
  }
  addTodo(){

    this.todoObj = {todo:this.todo}
    this.todoArray.push(this.todoObj);
    console.log(this.todoArray);
    localStorage.setItem("todos", JSON.stringify(this.todoArray));
  }
  editTodo(index:any){
    // console.log(index);
    this.router.navigate(["/users"]);
  }
  deleteTask(index:any){
      this.todoArray.splice(index, 1);
      localStorage.removeItem(`todos[${index}]`);

  }
 
 
}



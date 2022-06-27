import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-userstodo',
  templateUrl: './userstodo.component.html',
  styleUrls: ['./userstodo.component.css']
})
export class UserstodoComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public todoService: TodoService) { }
  
  public userTodos:any = [];

  ngOnInit(): void {
    let user_id = this.actRoute.snapshot.params['id'];
    this.todoService.getTodos().subscribe(data => {
      let todosArray:any = data;
      this.userTodos = todosArray.filter((todo:any)=>todo.userId == user_id);

    })
  }

}

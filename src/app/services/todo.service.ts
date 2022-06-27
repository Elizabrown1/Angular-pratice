import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public HttpClient : HttpClient) { }

  getUsers(){
    return this.HttpClient.get("https://jsonplaceholder.typicode.com/users")
  }

  getTodos(){
    return this.HttpClient.get("https://jsonplaceholder.typicode.com/todos")
  }

  saveUsers(obj){
    return this.HttpClient.post<any>("http://localhost/connection/backend/signup.php", obj)
  }


}

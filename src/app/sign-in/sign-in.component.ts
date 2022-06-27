import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public router: Router) { }
  public email="";
  public password="";

  ngOnInit(): void {
  }

  signIn(){
    console.log(this.email, this.password);
    localStorage.setItem("current_email",JSON.stringify(this.email));
    this.router.navigate(["/todo"])
  }

}

import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  public userForm = this.fb.group({
    name:['', Validators.required],
    phone_no: ['', [Validators.minLength(4), this.validatePhone]],
    email:[''],
    address:[''],
    password:[''],

  })
  public error = false;
  public name = "";
  public phone_no = "";
  public email = "";

  ngOnInit(): void {
    // this.userForm.controls['name'].setValue("Eliza")
  }

  validatePhone(control: AbstractControl): {[key: string]: any} | null {
    if (control.value){
      if(control.value.length > 15){
        return {"maxLenght": true}
      }else{
        return null;
      }
    }
    return null;
  }

  submitForm(){
    console.log(this.userForm.value);
    console.log(this.userForm.controls['name'].value);
    // console.log(this.userForm.get('name').value);
  }

}

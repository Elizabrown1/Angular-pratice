import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  public name = "lizzy";
  public getChild = "";

  ngOnInit(): void {
  }

  getFromChild (item: any){
     this.getChild = item
  }

}

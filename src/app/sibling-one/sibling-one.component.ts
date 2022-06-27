import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.css']
})
export class SiblingOneComponent implements OnInit {

  constructor(public behaviourService : BehaviourService) { }
  public name = "";

  ngOnInit(): void {
  }
 updateData(){
   this.behaviourService.data.next(this.name)
 }
  

}

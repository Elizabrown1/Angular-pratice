import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.css']
})
export class SiblingTwoComponent implements OnInit {

  constructor( public behaviourService: BehaviourService) { }
  public get = "";
  ngOnInit(): void {
    this.behaviourService.data.subscribe(response =>{
      console.log(response);
      this.get = response;
    })
  }

}

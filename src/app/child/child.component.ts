
import { Component, Input,EventEmitter , OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   @Input() nameOfStudent= "";
   @Output() emitToParent = new EventEmitter<string>();

   public itemToParent =""
  
  constructor() { }

  ngOnInit(): void {
  }

  emitItem (){
    this.emitToParent.emit(this.itemToParent);
  }

}

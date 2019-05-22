import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `<hr style="background-color:orange">
   <p> <strong>--- Input()&Output() decorators demo ---</strong></p>
  <br>
  <p> ---> parent to child using Input() </p><br>
  <h4> name from parent is : <strong>{{parentData}}</strong></h4>
<br>
<p>---->Events (EventEmitter) are used to send data from child to parent using Output decorator</p>
<br>
<button (click) = "fireEvent()"> child to parent </button>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
@Input() public parentData;

@Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent()
  {
    this.childEvent.emit('hey!!! msg from child to parent component');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference-variable',
  template: `<hr style="background-color:orange">
  <br>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)"> click</button>
  <h3> welcome {{msg}}  </h3>


 <br> <p><strong> ---two way data binding--- </strong></p>
<input [(ngModel)]="name" type="text"><br>
{{name}}<br>
  `,
  styleUrls: ['./reference-variable.component.css']
})
export class ReferenceVariableComponent implements OnInit {
  public msg ="";

  public name ="";
  constructor() { }

  ngOnInit() {
  }
  logMessage(value)
  {
    console.log(value);
    this.msg=value;
  }

}

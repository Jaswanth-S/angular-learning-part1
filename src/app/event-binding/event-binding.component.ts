import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
  <p> <strong>---event binding ( template to class ) --- </strong></p>
  <button (click)="onClick()"> Greeting </button>
  <button (click)="msg = 'welcome jaswanth'"> Greeting for user</button><br>
  <br>
  {{msg| uppercase}}
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public msg ="";
  constructor() { }

  ngOnInit() {
  }
  onClick()
  {
    console.log("welcome to stackroute");

    this.msg='welcome to stackroute';
  }
}

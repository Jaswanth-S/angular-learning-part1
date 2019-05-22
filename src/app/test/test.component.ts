import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: 
  `<h2 [style.color]=" isError?'green':'orange' "> Style bynding 1</h2>
  <h2 [style.color]="color1">Style Bindining2 </h2>
  <h2 [ngStyle]="styleTitle">Style Binding 3</h2>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public  isError=true;
public color1="yellow"
public styleTitle={
  color:"blue",
  fontStyle: "italic"
}

  constructor() { }

  ngOnInit() {
  }

}

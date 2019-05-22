import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template:`
  <hr style="background-color:orange">
  <br>
  <p> <strong>--- Directives demo --- </strong></p>

  <h2 *ngIf="display; else elseBlock">
  if block printed
  </h2>

  <ng-template #elseBlock>
  <h2>
        else block printed
  </h2>
  </ng-template>
  <br>
  <button (click)=onClicking()> click to change </button>
  <br>
  <p><strong><br>--> switch directive</strong></p>
  <div [ngSwitch]="color" [style.color]="color">
      <div *ngSwitchCase = "'red'" > You picked red color</div>
      <div *ngSwitchCase = "'blue'"> You picked red color</div>
      <div *ngSwitchCase = "'green'" > You picked red color</div>
  </div>
  <br>
<p><strong> -->ngfor directive demo</strong></p><br>
<div *ngFor="let eachColor of colors;index as i;even as e">
<p>
  <strong>{{i}}</strong>      
  {{e}}
  This is 
  <strong [style.color]="eachColor"> {{eachColor}} </strong>
  color
</p>
</div><br>
  `,
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
public display = false;

public color="blue";

public colors =["green","yellow","orange","blue"];
  constructor() { }

  ngOnInit() {
  }
  onClicking()
  {
    this.display= true;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  template: `
  <hr style="background-color:orange">
  <p>  <br><strong> <h3> ---- Pipes demo ----- </h3> </strong></p>
  <p> Sample text for demo </p>
  <p>-->{{"Sample text for demo"| uppercase}} (uppercase)</p>
  <p>-->{{"Sample text for demo"| lowercase}} (lowercase)</p>
  <p>-->{{"Sample text for demo"| titlecase}} (titlecase)</p>
  <p>-->{{"Sample text for demo"| slice:2}} (slice:2)</p>
  <p>-->{{"Sample text for demo"| slice:2:9}} (slice:2:9)</p>
  <p>-->{{person| json}}     (json)</p>
  <p>------ number pipe demo ------</p>
  <p> ---> sample number : 4.8762</p>
  <p> ---> {{number| number:'1.2-3'}}  (number: '1.2-3'  1-number of digits before decimal point 1-2 - digits after decimal point)</p>
  <p> ---> {{number| number:'3.1-2'}}  (number: '3.1-2')</p>
  <p> ---> {{number| number:'2.5-6'}}  (number: '2.5-6')</p>
  <p> ---> {{".25"|percent}}  ( ".25"   |  percent)</p>
  <p> ---> {{".25"|currency}}  ( ".25"   |  currency)</p>
  <p> ---> {{".25"|currency:'GBP'}}  ( ".25"   |  currency:'GBP')</p>
  <p> ---> {{".25"|currency:'INR'}}  ( ".25"   |  currency:'INR')</p>
  <p> ---> {{".25"|currency:'abc':'code'}}  ( ".25"   |  currency:'abc':'code')</p>
 <p> <strong>*** pipes only change value in view but not in class ***</strong></p>
 <hr style="background-color:orange">
  `,
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {
  public number = 4.8762;
  public person={
    "firstName" : "Jaswanth",
    "lastName"  : "Sunkara",
    "company"   : "Stackroute"
  }
  constructor() { }

  ngOnInit() {
  }

}

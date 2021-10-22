import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      Welcome to {{name}}
    </p>
    <p>
    {{"Welcome to : " + name}}
    </p>
    <p>
    {{name.length  + "   " + name .toUpperCase()}}
    </p>
    <p>
    {{getdojo()}}
    </p>
    <p>{{myUrl}}</p>
  `,
  styles: [
    `
    p{
      text-align : center;
      color :slateblue;
      font-size : 20px;
    }
    `
  ]
})
export class TestComponent implements OnInit {

  public name  = "Saitama House";
  public dojo = "Water Stream Crushing Rock Fist";
  public myUrl  = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  getdojo(){
    return "Welcome to : " +  this.dojo
  }

}

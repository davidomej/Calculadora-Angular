import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  public op1:number=0;
  public op2:number=0;
  public verde:string = "color: green";
  public rojo:string = "color: red";

  public result:number=0;

  constructor() { }


  calculate():number{
    this.result=this.op1+this.op2
    return this.result
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

   
 num1=0;

 num2=0;

 result=0;

 type="";
 num1change(event:any){
     this.num1=Number(event.target.value);
 }


 num2change(event:any){
  this.num2=Number(event.target.value);
}




Calculate(type:string)
{
  if(type=="addition")
  {
    this.result=this.num1+this.num2;
    this.type=type;
  }


  if(type==="substraction")
 {
  this.result=this.num1-this.num2;
  this.type=type;
 }

 
 if(type==="multiplication")
 {
  this.result=this.num1*this.num2;
  this.type=type;
 }

 if(type==="division")
 {
  this.result=this.num1/this.num2;
  this.type=type; 
}



}

}


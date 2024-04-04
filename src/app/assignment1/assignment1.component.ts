import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  num1:number = 0;
  num2:number = 0;
  Totalvalue:number = 0;
  Addition(action:string){
     if(action == "increament"){
      console.log(++this.Totalvalue);
     }
  }

  Substraction(action:string){
     if(action == "decreament"){
         console.log(--this.Totalvalue)
     }
  }

  Multi(action:string){
      if(action == "multiplication"){
        console.log(this.num1*this.num2)
      }     
   }

   Division(action:string){
      if(action == "division"){
        console.log(this.num1/this.num2)
      }
   }
  }


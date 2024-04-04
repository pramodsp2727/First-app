import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
 
  counter:number = 0;

  performaction(action:string){
   if(action == "increament"){
    ++this.counter;
   }else{
    --this.counter;
   };

  }

  ProductPrice:number = 0;
  Quantity:number = 0;
  TotalPrice:number =0;

  Firstname:string = "Pramod Patil ";

    PriceChange(event:any){
      console.log("Product Price Change" , event.target.value)                                                                                                                                                                                                                                                        
      if(event != null && event.target.value != null){
        this.ProductPrice = event.target.value
        this.TotalPrice = this.ProductPrice * this.Quantity;
      }
      }
     
    QuantityChange(event:any){
      console.log("Quantity Change" , event.target.value)
      if(event != null && event.target.value != null){
        this.Quantity = event.target.value
        this.TotalPrice = this.ProductPrice * this.Quantity;
    }


    }

    DisplayFisrtname(event:any){
      console.log(event.target.value)
      this.Firstname = event.target.value;
    }
  
  }
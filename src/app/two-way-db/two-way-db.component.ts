import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-db',
  templateUrl: './two-way-db.component.html',
  styleUrls: ['./two-way-db.component.css']
})
export class TwoWayDbComponent {
 City:string = "Pune";
 cityname:string = "Kolhapur";

citychange(event:any){
  if(event && event.target.value)
  this.City = event.target.value;
}

print(){
  console.log("City Name is " + this.cityname)
}


Price:number = 0;
Quantity:number = 0;
TotalPrice:number = 0;

CalculatePrice(){
  this.TotalPrice = this.Price * this.Quantity;
}
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  FirstName:string = "Pramod";
  LastName:string = "Patil";
  employeeObj:any={
    EmployeeName:"Pramod Patil",
    Designation:"Angular Developer",
    CompanyName:"Facebook"
  }
  skills : string [] = ["Angular","HTML","CSS", "Javascript", "Bootstrap"];

  fblink:string = "https://www.facebook.com/";

  Instalink:string = "https://www.instagram.com/?hl=en";

  Message:string = "Welcome"

  isbtnDisable:boolean = false;
}

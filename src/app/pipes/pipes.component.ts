import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
message:string = "Angular FW is developed by Google";
employeeObj:any={
  EmployeeName:"Pramod Patil",
  Designation:"Angular Developer",
  CompanyName:"facebook",
  sallary:40000,
  prevouscompany:"Goggle"
}
currency:number = 10000;
Instaprofile:string = "https://www.instagram.com/icon_0302/"
Joindate = new Date ();
Joindate1 = new Date ('2023/02/03');

Income:number = 23400.4567;
counter:number = 0
myfun(){
  console.log("click event");
}

Increament (){
  ++this.counter;
}

Decreament(){
  --this.counter;
}
}

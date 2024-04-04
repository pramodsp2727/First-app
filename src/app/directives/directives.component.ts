import { Component, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
 
isshow:boolean = true;
courseslist:string[]=["Angular","JAVA","React","Python"];

status:string = "Pending";
statuslist:string[]=["Placed","Pending","Delivered"]
employeedetails:any = [
   {EName:"Pramod" , Designation:"Angular dveloper",sallary:50000},
   {EName:"Prashant", Designation:"Mech Draughtsman",sallary:40000},
   {EName:"Satyajit", Designation:"Civil Engineer",sallary:35000},
   {EName:"Akshay", Designation:"Mech Engineer",sallary:38000}

]

toggle(){
  this.isshow = !this.isshow
}

}
 
import { Component } from '@angular/core';

@Component({
  selector: 'app-state-district-assign',
  templateUrl: './state-district-assign.component.html',
  styleUrls: ['./state-district-assign.component.css']
})
export class StateDistrictAssignComponent {
   statelist:string [] = [];
   Districtlist:string[] = [];

   selectedstate:string = "";

   ngOnInit(){
    this.statelist = Object.keys(this.states)
   }

  states:any = {
    "Maharashtra" : ["Mumbai","Pune","Kolhapur","Sangali","Raygad"],
    "Gujarat" : ["Jayapur","Jodhapur"],
    "Bihar" : ["Patna","Bhagalpur"]
  }

  getdistrict(){
    console.log(this.selectedstate);
    this.Districtlist = this.states[this.selectedstate]

  }
}

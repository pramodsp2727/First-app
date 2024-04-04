import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { DirectivesComponent } from './directives/directives.component';
import { TwoWayDbComponent } from './two-way-db/two-way-db.component';
import { FormsModule } from '@angular/forms';
import { StateDistrictAssignComponent } from './state-district-assign/state-district-assign.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { HowerEffectDirective } from './CustomDirectives/hower-effect.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataBindingComponent,
    PipesComponent,
    EventBindingComponent,
    Assignment1Component,
    DirectivesComponent,
    TwoWayDbComponent,
    StateDistrictAssignComponent,
    CalculatorComponent,
    HighlightDirective,
    HowerEffectDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

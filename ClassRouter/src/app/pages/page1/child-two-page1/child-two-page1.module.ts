import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildTwoPage1Component } from './child-two-page1.component';
import { Page1RoutingModule } from './page1-routing.module';



@NgModule({
  declarations: [
    ChildTwoPage1Component
  ],
  imports: [
    CommonModule,
    Page1RoutingModule
  ]
})
export class ChildTwoPage1Module { }

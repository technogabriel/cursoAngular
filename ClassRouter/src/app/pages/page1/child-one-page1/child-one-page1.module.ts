import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOnePage1Component } from './child-one-page1.component';
import { Page1RoutingModule } from './page1-routing.module';



@NgModule({
  declarations: [
    ChildOnePage1Component
  ],
  imports: [
    CommonModule,
    Page1RoutingModule
  ]
})
export class ChildOnePage1Module { }

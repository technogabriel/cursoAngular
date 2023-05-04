import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit, OnChanges, OnDestroy {

  isShowDiv: boolean=false;

  constructor(private activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    console.log('OnInit ')
    this.activeRoute.paramMap.subscribe((data)=>{
      console.log("route",data['params']['id'])

    });

    this.activeRoute.queryParams.subscribe((data)=>{
      console.log("query",data)
    })

    this.activeRoute.data.subscribe((data)=>{
      console.log('data', data);
    })

  }

  ngOnChanges(): void {
    console.log('Onchanges ')
  }

  ngOnDestroy(): void {
    console.log('OnDestroy ')
  }

  showDiv(){
    this.isShowDiv = !this.isShowDiv;

  }

}

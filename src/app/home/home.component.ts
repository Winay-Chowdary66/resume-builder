import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ifMobile } from '../app.component';

if( ifMobile ){
  $("header").css("display", 'none');
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  getTemplates(){
    this.scroller.scrollToPosition([1000, 1100]);
  }

  getContacts(){
    this.scroller.scrollToPosition([1000, 1700]);
  }

}

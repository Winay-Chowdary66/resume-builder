import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { AppComponent, ifMobile } from '../app.component';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoadingBarService } from '@ngx-loading-bar/core';

if (ifMobile) {
  // $('header').css('display', 'none');
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private scroller: ViewportScroller,
    private router: Router,
    private title: Title,
    private appCom: AppComponent
  ) {
    $(window).scroll(function (event) {
      var scrollPosition: any = $(window).scrollTop();
      // console.log(scrollPosition);
      if (scrollPosition >= 1000 && scrollPosition <= 1500) {
        title.setTitle('Templates');
      } else if (scrollPosition > 1500 && scrollPosition <= 1600) {
        title.setTitle('Contact Us');
      } else {
        title.setTitle('Resume Builder');
      }
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Resume Builder');
  }

  goToHomePage() {
    this.appCom.goToHomePage();
  }

  getTemplates() {
    this.appCom.loadMe();
    this.scroller.scrollToPosition([990, 1090]);
  }

  getContacts() {
    this.appCom.loadMe();
    this.scroller.scrollToPosition([1000, 1700]);
  }
}

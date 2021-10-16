import { Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import * as $ from 'jquery/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private loadingBarService: LoadingBarService){
    $(document).ready(()=>{
      this.loadMe();
    })
  }

  loadMe() {
    this.loadingBarService.useRef().start(30);
    setTimeout(() => {
      this.loadingBarService.useRef().complete();
    }, 1500);
  }
}
let isMobile: any = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};

if (
  isMobile.Android() ||
  isMobile.Opera() ||
  isMobile.iOS() ||
  isMobile.BlackBerry()
    ? true
    : false
) {
  $('body').css("background-color" , "#fff");
}

export const ifMobile: boolean =
  isMobile.Android() ||
  isMobile.Opera() ||
  isMobile.iOS() ||
  isMobile.BlackBerry()
    ? true
    : false;

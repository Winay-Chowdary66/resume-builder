import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-pagenotfound404',
  templateUrl: './pagenotfound404.component.html',
  styleUrls: ['./pagenotfound404.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagenotfound404Component implements OnInit {
  constructor(
    private router: Router,
    private title: Title,
    private appComp: AppComponent
  ) {
    $(document).ready(()=>{
      this.appComp.loadMe();
    })
  }

  ngOnInit(): void {
    this.title.setTitle('404 Page Not Found');
  }

  goToHomePage() {
    this.router.navigate(['']);
    this.appComp.loadMe();
  }
}

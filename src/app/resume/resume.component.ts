import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  templateId: any;
  public text = '';
  templateModel = { edit: 'edit' , view: 'view' };
  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private appComp: AppComponent,
    private router: Router
  ) {
    this.appComp.loadMe();
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.title.setTitle('Template ' + id);
    this.templateId = id;
  }

  selectMoreTemp() {
    this.appComp.loadMe();
    this.router.navigate(['']);
  }
}

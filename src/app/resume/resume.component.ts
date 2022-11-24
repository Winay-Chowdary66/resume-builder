import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TemplateService } from '../template/template.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit, OnDestroy {
  templateId: any;
  public text = '';
  public templateModel = { edit: 'edit' , view: 'view' };
  public resetFormSubject:Subject<Boolean> = new Subject<Boolean>();
  public firstName: string = 'Resume';
  public firstNameSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private appComp: AppComponent,
    private router: Router,
    private _tempService: TemplateService
  ) {
    this.appComp.loadMe();
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.title.setTitle('Template ' + id);
    this.templateId = id;

    this.firstNameSubscription = this._tempService.getFirstName().subscribe((name: string) => {
      this.firstName = `${name} + Resume`;
    });
  }

  selectMoreTemp() {
    this.appComp.loadMe();
    this.router.navigate(['']);
  }

  resetFormData() {
    this.resetFormSubject.next(true);
    this.appComp.loadMe();
  }

  ngOnDestroy() {
    this.firstNameSubscription.unsubscribe();
  }
}

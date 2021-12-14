import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { TemplateService } from '../template/template.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit, AfterViewInit, DoCheck {
  templateId: any;
  public editBtnProperty = '';
  @ViewChild('editContainer')
  editContainer!: ElementRef;
  public text!: HTMLElement;

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
    this._tempService.getBtnProperty().subscribe((property) => {
      this.editBtnProperty = property;
    });
  }

  ngAfterViewInit(): void {
    this.text = this.editContainer.nativeElement;
    this.changeBorder();
  }

  ngDoCheck(): void {
    // this.changeBorder();
    // console.log(this.editBtnProperty);
    
  }

  changeBorder() {
    if (this.editBtnProperty) {
      this.text.style.border = 'none';
    } else {
      this.text.style.border = '2px dashed #ffffff6b';
    }
  }

  selectMoreTemp() {
    this.appComp.loadMe();
    this.router.navigate(['']);
  }
}

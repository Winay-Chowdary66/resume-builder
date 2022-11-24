import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ContactForm, SkillForm } from 'src/app/models/template';
import { TemplateService } from 'src/app/template/template.service';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css'],
})
export class TemplateOneComponent
  implements OnInit, DoCheck, AfterViewInit, OnChanges, AfterViewChecked
{
  public firstName$: Observable<string>;
  public jobRole$: Observable<string>;
  public experienceForm$: Observable<ExperienceForm>;
  public projectsForm$: Observable<ExperienceForm>;
  public educationForm$: Observable<ExperienceForm>;
  public contactForm$: Observable<ContactForm>;
  public skillsForm$: Observable<SkillForm>;
  public editBtnProperty = {
    profile: 'profile',
    experience: 'experience',
    projects: 'projects',
    education: 'education',
    contact: 'contact',
    skills: 'skills',
  };

  public skill1Value: string = '';
  public skill2Value: string = '';
  public skill3Value: string = '';
  public skill4Value: string = '';
  public skill5Value: string = '';
  public skill6Value: string = '';

  @ViewChildren('skillOpct1') skillOpct1!: QueryList<ElementRef>;
  @ViewChildren('skillOpct2') skillOpct2!: QueryList<ElementRef>;
  @ViewChildren('skillOpct3') skillOpct3!: QueryList<ElementRef>;
  @ViewChildren('skillOpct4') skillOpct4!: QueryList<ElementRef>;
  @ViewChildren('skillOpct5') skillOpct5!: QueryList<ElementRef>;
  @ViewChildren('skillOpct6') skillOpct6!: QueryList<ElementRef>;


  hasTemp1ProfPic = false;
  profPicSrc: any;

  @ViewChild('profPicInp', {static: true})
  profPicInp!: ElementRef;

  constructor(private _tempService: TemplateService) {
    this.firstName$ = this._tempService.getFirstName();
    this.jobRole$ = this._tempService.getJobRole();
    this.experienceForm$ = this._tempService.getExperienceForm();
    this.projectsForm$ = this._tempService.getProjectsForm();
    this.educationForm$ = this._tempService.getEducationForm();
    this.contactForm$ = this._tempService.getContactForm();
    this.skillsForm$ = this._tempService.getSkillsForm();
  }

  ngOnInit(): void {

    //set has profile pic to true if already present
    if (localStorage.getItem('profileTemp1')) {
      this.hasTemp1ProfPic = true;
      //Load Profile Pic from Localstorage
      this.profPicSrc = JSON.parse(
        localStorage.getItem('profileTemp1') || '{}'
      ).profilePic;
    }

    this._tempService.getSkill1Value().subscribe((msg) => {
      if (msg == null) return;
      this.skill1Value = msg;
    });
    this._tempService.getSkill2Value().subscribe((msg) => {
      if (msg == null) return;
      this.skill2Value = msg;
    });
    this._tempService.getSkill3Value().subscribe((msg) => {
      if (msg == null) return;
      this.skill3Value = msg;
    });
    this._tempService.getSkill4Value().subscribe((msg) => {
      if (msg == null) return;
      this.skill4Value = msg;
    });
    this._tempService.getSkill5Value().subscribe((msg) => {
      if (msg == null) return;
      this.skill5Value = msg;
    });
    this._tempService.getSkill6Value().subscribe((msg) => {
      if (msg == null) return;
      this.skill6Value = msg;
    });
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterViewInit(): void {
  }
  ngAfterViewChecked(): void {
    this.skillOpct1.forEach((element, index) => {
      if (this.skill1Value >= String(index + 1)) {
        element.nativeElement.setAttribute('data-active', 'true');
      }else{
        element.nativeElement.removeAttribute('data-active');
      }
    });
    this.skillOpct2.forEach((element, index) => {
      if (this.skill2Value >= String(index + 1)) {
        element.nativeElement.setAttribute('data-active', 'true');
      } else {
        element.nativeElement.removeAttribute('data-active');
      }
    });
    this.skillOpct3.forEach((element, index) => {
      if (this.skill3Value >= String(index + 1)) {
        element.nativeElement.setAttribute('data-active', 'true');
      }else {
        element.nativeElement.removeAttribute('data-active');
      }
    });
    this.skillOpct4.forEach((element, index) => {
      if (this.skill4Value >= String(index + 1)) {
        element.nativeElement.setAttribute('data-active', 'true');
      }else {
        element.nativeElement.removeAttribute('data-active');
      }
    });
    this.skillOpct5.forEach((element, index) => {
      if (this.skill5Value >= String(index + 1)) {
        element.nativeElement.setAttribute('data-active', 'true');
      }else {
        element.nativeElement.removeAttribute('data-active');
      }
    });
    this.skillOpct6.forEach((element, index) => {
      if (this.skill6Value >= String(index + 1)) {
        element.nativeElement.setAttribute('data-active', 'true');
      }else {
        element.nativeElement.removeAttribute('data-active');
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.skill2Value);
  }

  sendBtnProperty(property: string) {
    this._tempService.sendBtnProperty(property);
  }

  callFileUpload() {
    this.profPicInp.nativeElement.click();
  }

  updateProfPic(profPicInput: any) {
    this.hasTemp1ProfPic = true;
    let file : File = profPicInput.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      localStorage.setItem('profileTemp1', JSON.stringify({"profilePic": fileReader.result}));
      this.profPicSrc = String(fileReader.result);
    }
    fileReader.readAsDataURL(file);
  }
}

export interface ExperienceForm {
  title: string;
  organization: string;
  roleInProj: string;
  startingYear: string;
  endingYear: string;
  point1: string;
  point2: string;
}

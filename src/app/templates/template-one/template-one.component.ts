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
  ViewChildren,
} from '@angular/core';
import { TemplateService } from 'src/app/template/template.service';
import { CommonForm } from '../edit-template/edit-template.component';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css'],
})
export class TemplateOneComponent
  implements OnInit, DoCheck, AfterViewInit, OnChanges, AfterViewChecked
{
  public firstName = '';
  public jobRole = '';
  public experienceForm: ExperienceForm = new CommonForm();
  public projectsForm: ExperienceForm = new CommonForm();
  public educationForm: ExperienceForm = new CommonForm();
  public contactForm: any = {
    address: 'AP, India- 522124',
    email: '',
    phone: '9492117926',
    site: 'github.com/winay-chowdary66',
  };
  public skillsForm: any = {
    skill1: 'Python',
    skill2: 'Java',
    skill3: 'C++',
    skill4: 'C',
    skill5: 'HTML',
    skill6: 'CSS',
  };
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

  constructor(private _tempService: TemplateService) {}

  ngOnInit(): void {
    this._tempService.getFirstName().subscribe((msg) => {
      if (msg == '') return;
      this.firstName = msg;
    });

    this._tempService.getJobRole().subscribe((msg) => {
      if (msg == '') return;
      this.jobRole = msg;
    });

    this._tempService.getExperienceForm().subscribe((msg) => {
      if (msg == null) return;
      this.experienceForm = msg;
    });
    this._tempService.getProjectsForm().subscribe((msg) => {
      if (msg == null) return;
      this.projectsForm = msg;
    });
    this._tempService.getEducationForm().subscribe((msg) => {
      if (msg == null) return;
      this.educationForm = msg;
    });

    this._tempService.getContactForm().subscribe((msg) => {
      if (msg == null) return;
      this.contactForm = msg;
    });
    this._tempService.getSkillsForm().subscribe((msg) => {
      if (msg == null) return;
      this.skillsForm = msg;
    });
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

  ngDoCheck(): void {}

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

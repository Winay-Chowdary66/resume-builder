import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/template/template.service';
import { CommonForm } from '../edit-template/edit-template.component';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css'],
})
export class TemplateOneComponent implements OnInit, DoCheck {
  public firstName = '';
  public jobRole = '';
  public experienceForm: ExperienceForm = new CommonForm();
  public projectsForm: ExperienceForm = new CommonForm();
  public educationForm: ExperienceForm = new CommonForm();
  public contactForm:any = {
    address: 'AP, India- 522124',
    email: '',
    phone: '9492117926',
    site: 'github.com/winay-chowdary66',
  };
  public skillsForm:any = {
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
  }

  ngDoCheck(): void {
    // console.log(this.projectsForm);
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

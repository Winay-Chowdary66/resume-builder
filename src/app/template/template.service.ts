import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Templates } from '../models/templates';
import { ExperienceForm } from '../templates/template-one/template-one.component';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private firstNameSubMsg = new Subject<string>();
  private jobRoleSubMsg = new Subject<string>();
  private _experienceForm = new Subject<ExperienceForm>();
  private _projectsForm = new Subject<ExperienceForm>();
  private _educationForm = new Subject<ExperienceForm>();
  private _contactForm = new Subject<Object>();
  private _skillsForm = new Subject<Object>();
  private _btnProperty = new Subject<string>();
  private _skill1Value = new Subject<string>();
  private _skill2Value = new Subject<string>();
  private _skill3Value = new Subject<string>();
  private _skill4Value = new Subject<string>();
  private _skill5Value = new Subject<string>();
  private _skill6Value = new Subject<string>();


  url = 'assets/payloads/templates.json';
  constructor(private httpClient: HttpClient) {}

  getTemplates(): Observable<Templates> {
    return this.httpClient.get<Templates>(this.url);
  }

  sendFirstName(firstName: string) {
    this.firstNameSubMsg.next(firstName);
  }

  getFirstName(): Observable<string> {
    return this.firstNameSubMsg.asObservable();
  }

  sendJobRole(jobRole: string) {
    this.jobRoleSubMsg.next(jobRole);
  }

  getJobRole(): Observable<string> {
    return this.jobRoleSubMsg.asObservable();
  }

  sendExperienceForm(experienceForm: ExperienceForm) {
    this._experienceForm.next(experienceForm);
  }

  getExperienceForm(): Observable<ExperienceForm> {
    return this._experienceForm.asObservable();
  }
  sendProjectsForm(projectsForm: ExperienceForm) {
    this._projectsForm.next(projectsForm);
  }

  getProjectsForm(): Observable<ExperienceForm> {
    return this._projectsForm.asObservable();
  }
  sendEducationForm(educationForm: ExperienceForm) {
    this._educationForm.next(educationForm);
  }

  getEducationForm(): Observable<ExperienceForm> {
    return this._educationForm.asObservable();
  }

  sendContactForm(contactForm: Object) {
    this._contactForm.next(contactForm);
  }

  getContactForm(): Observable<Object> {
    return this._contactForm.asObservable();
  }

  sendSkillsForm(skillsForm: Object) {
    this._skillsForm.next(skillsForm);
  }

  getSkillsForm(): Observable<Object> {
    return this._skillsForm.asObservable();
  }

  sendBtnProperty(property: string) {
    this._btnProperty.next(property);
  }

  getBtnProperty(): Observable<string> {
    return this._btnProperty.asObservable();
  }

  getSkill1Value(): Observable<string> {
    return this._skill1Value.asObservable();
  }

  sendSkill1Value(value: string) {
    this._skill1Value.next(value);
  }

  getSkill2Value(): Observable<string> {
    return this._skill2Value.asObservable();
  }

  sendSkill2Value(value: string) {
    this._skill2Value.next(value);
  }

  getSkill3Value(): Observable<string> {
    return this._skill3Value.asObservable();
  }

  sendSkill3Value(value: string) {
    this._skill3Value.next(value);
  }

  getSkill4Value(): Observable<string> {
    return this._skill4Value.asObservable();
  }

  sendSkill4Value(value: string) {
    this._skill4Value.next(value);
  }

  getSkill5Value(): Observable<string> {
    return this._skill5Value.asObservable();
  }

  sendSkill5Value(value: string) {
    this._skill5Value.next(value);
  }

  getSkill6Value(): Observable<string> {
    return this._skill6Value.asObservable();
  }

  sendSkill6Value(value: string) {
    this._skill6Value.next(value);
  }
}

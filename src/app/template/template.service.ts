import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject , Observable, of, BehaviorSubject } from 'rxjs';
import { ContactForm, SkillForm, Template, _tempFormData } from '../models/template';
import { Templates } from '../models/templates';
import { ExperienceForm } from '../templates/template-one/template-one.component';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {

  private _firstNameSubMsg = new BehaviorSubject<string>(_tempFormData.firstName);
  private _jobRoleSubMsg = new BehaviorSubject<string>(_tempFormData.jobRole);
  private _experienceForm = new BehaviorSubject<ExperienceForm>(
    _tempFormData.experience
  );
  private _projectsForm = new BehaviorSubject<ExperienceForm>(_tempFormData.project);
  private _educationForm = new BehaviorSubject<ExperienceForm>(_tempFormData.education);
  private _contactForm = new BehaviorSubject<ContactForm>(_tempFormData.contact);
  private _skillsForm = new BehaviorSubject<SkillForm>(_tempFormData.skills);
  private _btnProperty = new BehaviorSubject<string>('');
  private _skill1Value = new BehaviorSubject<string>('3');
  private _skill2Value = new BehaviorSubject<string>('3');
  private _skill3Value = new BehaviorSubject<string>('2');
  private _skill4Value = new BehaviorSubject<string>('3');
  private _skill5Value = new BehaviorSubject<string>('3');
  private _skill6Value = new BehaviorSubject<string>('2');

  private _setLocalStorage = () => {
    const template1: Template = {
      firstName: this._firstNameSubMsg.getValue(),
      jobRole: this._jobRoleSubMsg.getValue(),
      experience: this._experienceForm.getValue(),
      project: this._projectsForm.getValue(),
      education: this._educationForm.getValue(),
      contact: this._contactForm.getValue(),
      skills: this._skillsForm.getValue(),
    };
    // store all the template inputs
    localStorage.setItem('Template-1', JSON.stringify(template1));
  };

  url = 'assets/payloads/templates.json';
  constructor(private httpClient: HttpClient) {}

  getTemplates(): Observable<Templates> {
    return this.httpClient.get<Templates>(this.url);
  }

  sendFirstName(firstName: string) {
    this._firstNameSubMsg.next(firstName);
    this._setLocalStorage();
  }

  getFirstName(): Observable<string> {
    return this._firstNameSubMsg.asObservable();
  }

  sendJobRole(jobRole: string) {
    this._jobRoleSubMsg.next(jobRole);
    this._setLocalStorage();
  }

  getJobRole(): Observable<string> {
    return this._jobRoleSubMsg.asObservable();
  }

  sendExperienceForm(experienceForm: ExperienceForm) {
    this._experienceForm.next(experienceForm);
    this._setLocalStorage();
  }

  getExperienceForm(): Observable<ExperienceForm> {
    return this._experienceForm.asObservable();
  }
  sendProjectsForm(projectsForm: ExperienceForm) {
    this._projectsForm.next(projectsForm);
    this._setLocalStorage();
  }

  getProjectsForm(): Observable<ExperienceForm> {
    return this._projectsForm.asObservable();
  }
  sendEducationForm(educationForm: ExperienceForm) {
    this._educationForm.next(educationForm);
    this._setLocalStorage();
  }

  getEducationForm(): Observable<ExperienceForm> {
    return this._educationForm.asObservable();
  }

  sendContactForm(contactForm: ContactForm) {
    this._contactForm.next(contactForm);
    this._setLocalStorage();
  }

  getContactForm(): Observable<ContactForm> {
    return this._contactForm.asObservable();
  }

  sendSkillsForm(skillsForm: SkillForm) {
    this._skillsForm.next(skillsForm);
    this._setLocalStorage();
  }

  getSkillsForm(): Observable<SkillForm> {
    return this._skillsForm.asObservable();
  }

  // Send which tab edit is clicked
  sendBtnProperty(property: string) {
    this._btnProperty.next(property);
  }

  // get the clicked edit tab
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

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
  private _btnProperty = new Subject<string>();

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

  sendBtnProperty(property: string) {
    this._btnProperty.next(property);
  }

  getBtnProperty(): Observable<string> {
    return this._btnProperty.asObservable();
  }
}

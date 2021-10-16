import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Templates } from '../models/templates';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  url = "assets/payloads/templates.json";
  constructor(private httpClient : HttpClient) { }

  getTemplates(): Observable<Templates> {
    return this.httpClient.get<Templates>(this.url);
  }
}

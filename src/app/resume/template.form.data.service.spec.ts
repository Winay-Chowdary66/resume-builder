import { TestBed } from '@angular/core/testing';

import { Template.Form.DataService } from './template.form.data.service';

describe('Template.Form.DataService', () => {
  let service: Template.Form.DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Template.Form.DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import {
  Component,
  OnInit,
  DoCheck,
  ViewChild,
  QueryList,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TemplateService } from 'src/app/template/template.service';
import { ExperienceForm } from '../template-one/template-one.component';
import { Subject } from 'rxjs';
import { Template, _tempFormData } from 'src/app/models/template';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTemplateComponent implements OnInit, DoCheck, AfterViewInit {
  resumeForm = new FormGroup({
    firstName: new FormControl('Vinay Chowdary', []),
    jobRole: new FormControl('Engineer', []),
    experience: new FormGroup({
      title: new FormControl('Experience', []),
      organization: new FormControl('Tata Consultancy Services', []),
      roleInProj: new FormControl('Backend Developer', []),
      startingYear: new FormControl('2019', []),
      endingYear: new FormControl('Present', []),
      point1: new FormControl(
        'Utilized PySpark to distribute data processing on large streaming datasets to improve ingestion and processing speed',
        []
      ),
      point2: new FormControl(
        'Build basic ETL that ingested transactional and event data from a web app',
        []
      ),
    }),
    project: new FormGroup({
      title: new FormControl('Projects', []),
      organization: new FormControl('Campus Events', []),
      roleInProj: new FormControl('Team Member', []),
      startingYear: new FormControl('', []),
      endingYear: new FormControl('', []),
      point1: new FormControl(
        'Led the data ingestion efforts for our three person team which developed a real time tracker of campus events',
        []
      ),
      point2: new FormControl(
        'Built web scraper in Python that got data from websites of campus groups then built an ETL',
        []
      ),
    }),
    education: new FormGroup({
      title: new FormControl('Education', []),
      organization: new FormControl('R.M.D Engineering College', []),
      roleInProj: new FormControl('B.E in Electronics and Communication', []),
      startingYear: new FormControl('2017', []),
      endingYear: new FormControl('2021', []),
      point1: new FormControl('Cummilative GPA: 8.02 out of 10', []),
      point2: new FormControl(
        'Relevant courses: Data Structures, Algorithm Design, Database Management Systems, Computer Vision, Software Design Methodology',
        []
      ),
    }),
    contact: new FormGroup({
      address: new FormControl('AP, India- 522124', []),
      email: new FormControl('vinayannangi.123@gmail.com'),
      phone: new FormControl('+91 9492117926'),
      site: new FormControl('github.com/winay-chowdary66'),
    }),
    skills: new FormGroup({
      skill1: new FormControl('Python', []),
      skill2: new FormControl('Angular', []),
      skill3: new FormControl('Java', []),
      skill4: new FormControl('Javascript', []),
      skill5: new FormControl('MySQL', []),
      skill6: new FormControl('PHP', []),
    }),
  });

  public firstName = '';
  public jobRole = '';
  public experienceForm: ExperienceForm = new CommonForm();
  public projectsForm: ExperienceForm = new CommonForm();

  public educationForm: ExperienceForm = new CommonForm();
  public contactForm = {
    address: 'AP, India- 522124',
    email: '',
    phone: '+91 9492117926',
    site: 'github.com/winay-chowdary66',
  };
  public skillsForm = {
    skill1: 'Python',
    skill2: 'Java',
    skill3: 'C++',
    skill4: 'C',
    skill5: 'HTML',
    skill6: 'CSS',
  };

  public editBtnProperty = '';

  public isExpOrProjOrEdu = false;

  getFormControl(name: string) {
    return this.resumeForm?.get(name);
  }

  get experience() {
    return this.resumeForm.get('experience') as FormGroup;
  }

  get projects() {
    return this.resumeForm.get('project') as FormGroup;
  }

  get education() {
    return this.resumeForm.get('education') as FormGroup;
  }

  get contact() {
    return this.resumeForm.get('contact') as FormGroup;
  }

  get skills() {
    return this.resumeForm.get('skills') as FormGroup;
  }

  getExpControl(name: string) {
    return this.experience?.get(name) as FormControl;
  }

  @ViewChildren('skillBtn1')
  skillButton1!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('skillBtn2')
  skillButton2!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('skillBtn3')
  skillButton3!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('skillBtn4')
  skillButton4!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('skillBtn5')
  skillButton5!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('skillBtn6')
  skillButton6!: QueryList<ElementRef<HTMLElement>>;

  public skill1Value: string = '3';
  public skill2Value: string = '3';
  public skill3Value: string = '2';
  public skill4Value: string = '3';
  public skill5Value: string = '3';
  public skill6Value: string = '2';

  @Input('resetFormSubject')
  resetFormSubject!: Subject<Boolean>;

  constructor(
    private _tempService: TemplateService,
    private _changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.firstName = this.getLocalStorage(
      0,
      'firstName',
      this.resumeForm.get('firstName')?.value
    );
    this.jobRole = this.getLocalStorage(
      0,
      'jobRole',
      this.resumeForm.get('jobRole')?.value
    );
    this.experienceForm.title = this.getLocalStorage(
      1,
      'title',
      this.experience.get('title')?.value
    );
    this.experienceForm.organization = this.getLocalStorage(
      1,
      'organization',
      this.experience.get('organization')?.value
    );
    this.experienceForm.roleInProj = this.getLocalStorage(
      1,
      'roleInProj',
      this.experience.get('roleInProj')?.value
    );
    this.experienceForm.startingYear = this.getLocalStorage(
      1,
      'startingYear',
      this.experience.get('startingYear')?.value
    );
    this.experienceForm.endingYear = this.getLocalStorage(
      1,
      'endingYear',
      this.experience.get('endingYear')?.value
    );
    this.experienceForm.point1 = this.getLocalStorage(
      1,
      'point1',
      this.experience.get('point1')?.value
    );
    this.experienceForm.point2 = this.getLocalStorage(
      1,
      'point2',
      this.experience.get('point2')?.value
    );

    this.projectsForm.title = this.getLocalStorage(
      2,
      'title',
      this.projects.get('title')?.value
    );
    this.projectsForm.organization = this.getLocalStorage(
      2,
      'organization',
      this.projects.get('organization')?.value
    );
    this.projectsForm.roleInProj = this.getLocalStorage(
      2,
      'roleInProj',
      this.projects.get('roleInProj')?.value
    );
    this.projectsForm.startingYear = this.getLocalStorage(
      2,
      'startingYear',
      this.projects.get('startingYear')?.value
    );
    this.projectsForm.endingYear = this.getLocalStorage(
      2,
      'endingYear',
      this.projects.get('endingYear')?.value
    );
    this.projectsForm.point1 = this.getLocalStorage(
      2,
      'point1',
      this.projects.get('point1')?.value
    );
    this.projectsForm.point2 = this.getLocalStorage(
      2,
      'point2',
      this.projects.get('point2')?.value
    );

    this.educationForm.title = this.getLocalStorage(
      3,
      'title',
      this.resumeForm.get('education')?.get('title')?.value
    );
    this.educationForm.organization = this.getLocalStorage(
      3,
      'organization',
      this.resumeForm.get('education')?.get('organization')?.value
    );
    this.educationForm.roleInProj = this.getLocalStorage(
      3,
      'roleInProj',
      this.resumeForm.get('education')?.get('roleInProj')?.value
    );
    this.educationForm.startingYear = this.getLocalStorage(
      3,
      'startingYear',
      this.resumeForm.get('education')?.get('startingYear')?.value
    );
    this.educationForm.endingYear = this.getLocalStorage(
      3,
      'endingYear',
      this.resumeForm.get('education')?.get('endingYear')?.value
    );
    this.educationForm.point1 = this.getLocalStorage(
      3,
      'point1',
      this.resumeForm.get('education')?.get('point1')?.value
    );
    this.educationForm.point2 = this.getLocalStorage(
      3,
      'point2',
      this.resumeForm.get('education')?.get('point2')?.value
    );

    this.contactForm.address = this.getLocalStorage(
      4,
      'address',
      this.resumeForm.get('contact')?.get('address')?.value
    );
    this.contactForm.email = this.getLocalStorage(
      4,
      'email',
      this.resumeForm.get('contact')?.get('email')?.value
    );
    this.contactForm.phone = this.getLocalStorage(
      4,
      'phone',
      this.resumeForm.get('contact')?.get('phone')?.value
    );
    this.contactForm.site = this.getLocalStorage(
      4,
      'site',
      this.resumeForm.get('contact')?.get('site')?.value
    );

    this.skillsForm.skill1 = this.getLocalStorage(
      5,
      'skill1',
      this.resumeForm.get('skills')?.get('skill1')?.value
    );
    this.skillsForm.skill2 = this.getLocalStorage(
      5,
      'skill2',
      this.resumeForm.get('skills')?.get('skill2')?.value
    );
    this.skillsForm.skill3 = this.getLocalStorage(
      5,
      'skill3',
      this.resumeForm.get('skills')?.get('skill3')?.value
    );
    this.skillsForm.skill4 = this.getLocalStorage(
      5,
      'skill4',
      this.resumeForm.get('skills')?.get('skill4')?.value
    );
    this.skillsForm.skill5 = this.getLocalStorage(
      5,
      'skill5',
      this.resumeForm.get('skills')?.get('skill5')?.value
    );
    this.skillsForm.skill6 = this.getLocalStorage(
      5,
      'skill6',
      this.resumeForm.get('skills')?.get('skill6')?.value
    );

    this._tempService.getBtnProperty().subscribe((property) => {
      this.editBtnProperty = property;
    });

    // const skillBtn = document.querySelectorAll('.inputrange-btn');
    // skillBtn.forEach((btn) => {
    //   btn.addEventListener('click', () => {
    //     alert('Clicked');
    //   });
    // });
  }

  ngDoCheck(): void {
    if (this.editBtnProperty == 'skills') {
      this.skillButton1?.find((e: ElementRef) => e.nativeElement.value === this.skill1Value)
        ?.nativeElement.click();
      this.skillButton2?.find((e: ElementRef) => e.nativeElement.value === this.skill2Value)
        ?.nativeElement.click();
      this.skillButton3?.find((e: ElementRef) => e.nativeElement.value === this.skill3Value)
        ?.nativeElement.click();
      this.skillButton4?.find((e: ElementRef) => e.nativeElement.value === this.skill4Value)
        ?.nativeElement.click();
      this.skillButton5?.find((e: ElementRef) => e.nativeElement.value === this.skill5Value)
        ?.nativeElement.click();
      this.skillButton6?.find((e: ElementRef) => e.nativeElement.value === this.skill6Value)
        ?.nativeElement.click();
    }
      this._tempService.sendFirstName(this.firstName);
    this._tempService.sendJobRole(this.jobRole);
    this._tempService.sendExperienceForm(this.experienceForm);
    // console.log(this.editBtnProperty);
    if (this.editBtnProperty) {
      if (
        this.editBtnProperty === 'experience' ||
        this.editBtnProperty === 'projects' ||
        this.editBtnProperty === 'education'
      ) {
        this.isExpOrProjOrEdu = !this.isExpOrProjOrEdu;
      }
      return;
    }
    this._tempService.sendProjectsForm(this.projectsForm);
    this._tempService.sendEducationForm(this.educationForm);
    this._tempService.sendContactForm(this.contactForm);
    this._tempService.sendSkillsForm(this.skillsForm);
    this.discardForm();

    this.resetFormSubject.subscribe((response) => {
      if (response) {
        localStorage.clear();
        this.resumeForm.reset(_tempFormData);
        this.resumeForm.updateValueAndValidity();

      }
    }, err => {console.log(err)});
  }

  ngAfterViewInit() {
    this.skillButton1.forEach((element: ElementRef) => {
      element.nativeElement.addEventListener('click', () => {
        element.nativeElement.setAttribute('data-active', 'true');
        this.skill1Value = element.nativeElement.value;
        this._tempService.sendSkill1Value(this.skill1Value);
        this.skillButton1.forEach((ele: ElementRef) => {
          if (this.skill1Value != ele.nativeElement.value) {
            ele.nativeElement.removeAttribute('data-active');
          }
        });
      });
    });
    this.skillButton2.forEach((element: ElementRef) => {
      element.nativeElement.addEventListener('click', () => {
        element.nativeElement.setAttribute('data-active', 'true');
        this.skill2Value = element.nativeElement.value;
        this._tempService.sendSkill2Value(this.skill2Value);
        this.skillButton2.forEach((ele: ElementRef) => {
          if (this.skill2Value != ele.nativeElement.value) {
            ele.nativeElement.removeAttribute('data-active');
          }
        });
      });
    });
    this.skillButton3.forEach((element: ElementRef) => {
      element.nativeElement.addEventListener('click', () => {
        element.nativeElement.setAttribute('data-active', 'true');
        this.skill3Value = element.nativeElement.value;
        this._tempService.sendSkill3Value(this.skill3Value);
        this.skillButton3.forEach((ele: ElementRef) => {
          if (this.skill3Value != ele.nativeElement.value) {
            ele.nativeElement.removeAttribute('data-active');
          }
        });
      });
    });
    this.skillButton4.forEach((element: ElementRef) => {
      element.nativeElement.addEventListener('click', () => {
        element.nativeElement.setAttribute('data-active', 'true');
        this.skill4Value = element.nativeElement.value;
        this._tempService.sendSkill4Value(this.skill4Value);
        this.skillButton4.forEach((ele: ElementRef) => {
          if (this.skill4Value != ele.nativeElement.value) {
            ele.nativeElement.removeAttribute('data-active');
          }
        });
      });
    });
    this.skillButton5.forEach((element: ElementRef) => {
      element.nativeElement.addEventListener('click', () => {
        element.nativeElement.setAttribute('data-active', 'true');
        this.skill5Value = element.nativeElement.value;
        this._tempService.sendSkill5Value(this.skill5Value);
        this.skillButton5.forEach((ele: ElementRef) => {
          if (this.skill5Value != ele.nativeElement.value) {
            ele.nativeElement.removeAttribute('data-active');
          }
        });
      });
    });
    this.skillButton6.forEach((element: ElementRef) => {
      element.nativeElement.addEventListener('click', () => {
        element.nativeElement.setAttribute('data-active', 'true');
        this.skill6Value = element.nativeElement.value;
        this._tempService.sendSkill6Value(this.skill6Value);
        this.skillButton6.forEach((ele: ElementRef) => {
          if (this.skill6Value != ele.nativeElement.value) {
            ele.nativeElement.removeAttribute('data-active');
          }
        });
      });
    });
    this._changeDetector.detectChanges();
  }

  discardForm() {
    this.editBtnProperty = '';
  }

  getLocalStorage(tab: number, attribute: string, value: any) {
    const template1 = JSON.parse(localStorage.getItem('Template-1') || '{}');
    const RESUME_TABS = [
      '',
      'experience',
      'projects',
      'education',
      'contact',
      'skills',
    ];
    if (Object.entries(template1).length > 0) {
      if (tab === 0) return template1[attribute] || value;
      const attr = template1[RESUME_TABS[tab]];
      return (attr && Object.entries(attr).length) ? attr[attribute] : value;
    }
    return value;
  }
}

export class CommonForm {
  'title': '';
  'organization': '';
  'roleInProj': '';
  'startingYear': '';
  'endingYear': '';
  'point1': '';
  'point2': '';
}

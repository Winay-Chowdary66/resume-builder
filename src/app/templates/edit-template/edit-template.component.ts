import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TemplateService } from 'src/app/template/template.service';
import { ExperienceForm } from '../template-one/template-one.component';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css'],
})
export class EditTemplateComponent implements OnInit, DoCheck {
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
      site: new FormControl('github.com/winay-chowdary66')
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
  public experienceForm: ExperienceForm = new CommonForm()
  public projectsForm: ExperienceForm = new CommonForm()

  public educationForm: ExperienceForm = new CommonForm()
  public contactForm = {
    address: 'AP, India- 522124',
    email: '',
    phone: '+91 9492117926',
    site: 'github.com/winay-chowdary66',
  }
  public skillsForm = {
    skill1: 'Python',
    skill2: 'Java',
    skill3: 'C++',
    skill4: 'C',
    skill5: 'HTML',
    skill6: 'CSS',
  }

  public editBtnProperty = '';

  public isExpOrProjOrEdu = false

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

  constructor(private _tempService: TemplateService) {}

  ngOnInit(): void {
    this.firstName = this.resumeForm.get('firstName')?.value;
    this.jobRole = this.resumeForm.get('jobRole')?.value;
    this.experienceForm.title = this.experience.get('title')?.value;
    this.experienceForm.organization =
      this.experience.get('organization')?.value;
    this.experienceForm.roleInProj = this.experience.get('roleInProj')?.value;
    this.experienceForm.startingYear =
      this.experience.get('startingYear')?.value;
    this.experienceForm.endingYear = this.experience.get('endingYear')?.value;
    this.experienceForm.point1 = this.experience.get('point1')?.value;
    this.experienceForm.point2 = this.experience.get('point2')?.value;

    this.projectsForm.title = this.projects.get('title')?.value;
    this.projectsForm.organization = this.projects.get('organization')?.value;
    this.projectsForm.roleInProj = this.projects.get('roleInProj')?.value;
    this.projectsForm.startingYear = this.projects.get('startingYear')?.value;
    this.projectsForm.endingYear = this.projects.get('endingYear')?.value;
    this.projectsForm.point1 = this.projects.get('point1')?.value;
    this.projectsForm.point2 = this.projects.get('point2')?.value;
    
    this.educationForm.title = this.resumeForm.get('education')?.get('title')?.value;
    this.educationForm.organization = this.resumeForm.get('education')?.get('organization')?.value;
    this.educationForm.roleInProj = this.resumeForm.get('education')?.get('roleInProj')?.value;
    this.educationForm.startingYear = this.resumeForm.get('education')?.get('startingYear')?.value;
    this.educationForm.endingYear = this.resumeForm.get('education')?.get('endingYear')?.value;
    this.educationForm.point1 = this.resumeForm.get('education')?.get('point1')?.value;
    this.educationForm.point2 = this.resumeForm.get('education')?.get('point2')?.value;
    
    this.contactForm.address = this.resumeForm.get('contact')?.get('address')?.value;
    this.contactForm.email = this.resumeForm.get('contact')?.get('email')?.value;
    this.contactForm.phone = this.resumeForm.get('contact')?.get('phone')?.value;
    this.contactForm.site = this.resumeForm.get('contact')?.get('site')?.value;

    this.skillsForm.skill1 = this.resumeForm.get('skills')?.get('skill1')?.value;
    this.skillsForm.skill2 = this.resumeForm.get('skills')?.get('skill2')?.value;
    this.skillsForm.skill3 = this.resumeForm.get('skills')?.get('skill3')?.value;
    this.skillsForm.skill4 = this.resumeForm.get('skills')?.get('skill4')?.value;
    this.skillsForm.skill5 = this.resumeForm.get('skills')?.get('skill5')?.value;
    this.skillsForm.skill6 = this.resumeForm.get('skills')?.get('skill6')?.value;

    this._tempService.getBtnProperty().subscribe((property) => {
      this.editBtnProperty = property;
    });


  }

  ngDoCheck(): void {
    this._tempService.sendFirstName(this.firstName);
    this._tempService.sendJobRole(this.jobRole);
    this._tempService.sendExperienceForm(this.experienceForm);
    // console.log(this.editBtnProperty);
    if(this.editBtnProperty){
      if(this.editBtnProperty === 'experience' || this.editBtnProperty === 'projects' || this.editBtnProperty === 'education'){
        this.isExpOrProjOrEdu = !this.isExpOrProjOrEdu;
      }
      return;
    }
    this._tempService.sendProjectsForm(this.projectsForm);
    this._tempService.sendEducationForm(this.educationForm);
    this._tempService.sendContactForm(this.contactForm);
    this._tempService.sendSkillsForm(this.skillsForm);
    this.discardForm();
  }

  resetForm() {
    this.resumeForm.reset();
  }

  discardForm(){
    this.editBtnProperty = '';
  }

}

export class CommonForm {
    "title": '';
    "organization": '';
    "roleInProj": '';
    "startingYear": '';
    "endingYear": '';
    "point1": '';
    "point2": '';
}
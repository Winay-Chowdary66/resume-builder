import { ExperienceForm } from '../templates/template-one/template-one.component';

export interface Template {
  firstName: string;
  jobRole: string;
  experience: ExperienceForm;
  project: ExperienceForm;
  education: ExperienceForm;
  contact: ContactForm;
  skills: SkillForm;
}

export interface ContactForm {
  address: string;
  email: string;
  phone: string;
  site: string;
}

export interface SkillForm {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
  skill6: string;
}

export const _tempFormData: Template = {
  firstName: 'Vinay Chowdary',
  jobRole: 'Engineer',
  experience: {
    title: 'Experience',
    organization: 'Tata Consultancy Services',
    roleInProj: 'Backend Developer',
    startingYear: '2019',
    endingYear: 'Present',
    point1:
      'Utilized PySpark to distribute data processing on large streaming datasets to improve ingestion and processing speed',
    point2:
      'Build basic ETL that ingested transactional and event data from a web app',
  },
  project: {
    title: 'Projects',
    organization: 'Campus Events',
    roleInProj: 'Team Member',
    startingYear: '',
    endingYear: '',
    point1:
      'Led the data ingestion efforts for our three person team which developed a real time tracker of campus events',
    point2:
      'Built web scraper in Python that got data from websites of campus groups then built an ETL',
  },
  education: {
    title: 'Education',
    organization: 'R.M.D Engineering College',
    roleInProj: 'B.E in Electronics and Communication',
    startingYear: '2017',
    endingYear: '2021',
    point1: 'Cummilative GPA: 8.02 out of 10',
    point2:
      'Relevant courses: Data Structures, Algorithm Design, Database Management Systems, Computer Vision, Software Design Methodology',
  },
  contact: {
    address: 'AP, India- 522124',
    email: 'vinayannangi.123@gmail.com',
    phone: '+91 9492117926',
    site: 'github.com/winay-chowdary66',
  },
  skills: {
    skill1: 'Python',
    skill2: 'Angular',
    skill3: 'Java',
    skill4: 'Javascript',
    skill5: 'MySQL',
    skill6: 'PHP',
  },
};

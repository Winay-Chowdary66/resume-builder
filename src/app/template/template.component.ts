import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Template, Templates } from '../models/templates';
import { TemplateService } from './template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {  
 
  templates:Template[] = [];
  constructor(private router: Router, private templateService : TemplateService) {}

  ngOnInit(): void {
    this.templateService.getTemplates().subscribe( (res:Templates) =>{
      this.templates = res.templatesList;
    });
    
  }

  getTemplate(templateId:Number):void{
    this.router.navigate(['edit/template', templateId])
  }
}

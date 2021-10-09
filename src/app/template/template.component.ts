import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  constructor(private router: Router) {}

  template1() {
    this.router.navigateByUrl('/template-1');
  };
  ngOnInit(): void {}
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/template/:id', component: ResumeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: Pagenotfound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoadingBarRouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  TemplateComponent,
  ContactComponent,
  ResumeComponent,
  Pagenotfound404Component,
];

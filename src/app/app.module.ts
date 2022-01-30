import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TemplateService } from './template/template.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LOADING_BAR_CONFIG } from '@ngx-loading-bar/core';
import { TemplateOneComponent } from './templates/template-one/template-one.component';
import { TemplateTwoComponent } from './templates/template-two/template-two.component';
import { TemplateThreeComponent } from './templates/template-three/template-three.component';
import { TemplateFourComponent } from './templates/template-four/template-four.component';
import { TemplateFiveComponent } from './templates/template-five/template-five.component';
import { TemplateSixComponent } from './templates/template-six/template-six.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTemplateComponent } from './templates/edit-template/edit-template.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TemplateOneComponent,
    TemplateTwoComponent,
    TemplateThreeComponent,
    TemplateFourComponent,
    TemplateFiveComponent,
    TemplateSixComponent,
    EditTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    LoadingBarRouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
  ],
  providers: [
    TemplateService,
    Title,
    { provide: LOADING_BAR_CONFIG, useValue: { latencyThreshold: 100 } },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

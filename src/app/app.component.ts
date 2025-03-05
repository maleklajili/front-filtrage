import { Component } from '@angular/core';
import { CvFormComponent } from './cv-form/cv-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CvFormComponent], 
  template: `
    <h1>soumission de CV</h1>
    <app-cv-form></app-cv-form>
  `
})
export class AppComponent { }
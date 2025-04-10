import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { CvFormComponent } from './cv-form/cv-form.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

export const routes: Routes = [
  { path: 'jobs', component: JobListComponent },
  { path: 'apply/:id/:title', component: CvFormComponent },
  { path: 'job/:id', component: JobDetailComponent },
  { path: '', redirectTo: 'jobs', pathMatch: 'full' }
];

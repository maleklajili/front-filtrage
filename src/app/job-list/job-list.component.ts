import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { JobDetailComponent } from '../job-detail/job-detail.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterModule, JobDetailComponent],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  jobs = [
    {
      id: 1,
      title: 'Développeur web Java/Développeuse web Java (H/F)',
      company: 'SOFTEAM',
      location: 'Valbonne, PACA',
      date: 'Il y a 2 jours',
      experience: '3 ans',
      description: 'Softteam est la marque du Conseil...',
      profil: 'Bonne communication, rigueur...',
      competences: 'Java, Spring Boot, Git',
      niveau: 'Bac+3 minimum'
    },
    {
      id: 2,
      title: 'Développeur web/Développeuse web (H/F)',
      company: 'Groupe all',
      location: 'Mons-en-Barœul',
      date: 'Il y a 5 jours',
      experience: '2 ans',
      description: 'Entreprise digitale en plein essor...',
      profil: 'Autonome, curieux...',
      competences: 'Angular, HTML, CSS',
      niveau: 'Bac+2'
    }
  ];

  selectedJob: any = null;

  constructor(private route: ActivatedRoute) {}

  selectJob(job: any) {
    this.selectedJob = job;
  }
}

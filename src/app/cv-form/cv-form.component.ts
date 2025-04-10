import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cv-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent {
  jobId!: number;
  jobTitle!: string;
  cv = {
    name: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    file: null as File | null
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.jobId = Number(params.get('id'));
      this.jobTitle = decodeURIComponent(params.get('title') || '');
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file?.type === 'application/pdf') {
      this.cv.file = file;
    } else {
      alert('Veuillez sélectionner un fichier PDF.');
    }
  }

  onSubmit() {
    if (
      this.cv.name &&
      this.cv.email &&
      this.cv.phone &&
      this.cv.experience &&
      this.cv.education &&
      this.cv.file
    ) {
      const formData = new FormData();
      formData.append('name', this.cv.name);
      formData.append('email', this.cv.email);
      formData.append('phone', this.cv.phone);
      formData.append('experience', this.cv.experience);
      formData.append('education', this.cv.education);
      formData.append('cvFile', this.cv.file);
      formData.append('jobId', this.jobId.toString());

      this.http.post('http://localhost:8000/apply', formData).subscribe({
        next: () => alert('CV soumis !'),
        error: () => alert('Erreur de soumission')
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
}

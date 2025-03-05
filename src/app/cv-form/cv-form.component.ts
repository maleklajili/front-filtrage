import { Component } from '@angular/core';
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
  
  cv = {
    name: '',
    email: '',
    file: null as File | null
  };

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') { 
      this.cv.file = file;
    } else {
      alert('Veuillez sélectionner un fichier PDF valide.');
      this.cv.file = null;
    }
  }

 
  onSubmit() {
    if (this.cv.file) {
      
      const formData = new FormData();
      formData.append('name', this.cv.name);
      formData.append('email', this.cv.email);
      formData.append('cvFile', this.cv.file);

      this.http.post('http://localhost:8000/', formData).subscribe(
        (response) => {
          console.log('CV soumis avec succès !', response);
          alert('CV soumis avec succès !');
          this.resetForm(); 
        },
        (error) => {
          console.error('Erreur lors de la soumission du CV', error);
          alert('Une erreur est survenue lors de la soumission du CV.');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs et sélectionner un fichier PDF.');
    }
  }

  resetForm() {
    this.cv = {
      name: '',
      email: '',
      file: null
    };
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
  private apiUrl = 'http://localhost:8000/'; 

  constructor(private http: HttpClient) {}

  uploadCv(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }
}
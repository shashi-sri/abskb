import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  
  constructor(private http: HttpClient) {}

  getfiles() {
    return this.http.get('http://localhost:8093/file/server/api/get/file/6418223588372b5533f4d811');
  }

}

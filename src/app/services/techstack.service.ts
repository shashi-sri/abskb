import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TechstackService {
  constructor(private http: HttpClient) {}
  gettechstack() {
    return this.http.get('http://localhost:8092/api/tech-stack/Catalog');
  }
}

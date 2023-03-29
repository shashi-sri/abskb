import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}
  getPeoples() {
    return this.http.get('http://localhost:8091/api/employee/employees');
  }
}

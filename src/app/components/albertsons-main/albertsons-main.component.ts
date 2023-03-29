import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-albertsons-main',
  templateUrl: './albertsons-main.component.html',
  styleUrls: ['./albertsons-main.component.css'],
})
export class AlbertsonsMainComponent {
  constructor(private http: HttpClient) {}
 
}

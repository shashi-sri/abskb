import { Component } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

// const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  displayedColumns: string[] = ['name', 'role', 'emailId'];
  dataSource: any;
  constructor(private peopleService: PeopleService) {
    peopleService.getPeoples().subscribe((data) => {
      this.dataSource = data;
    });
  }
}

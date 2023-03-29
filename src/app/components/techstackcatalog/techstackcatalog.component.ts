import { Component } from '@angular/core';
import { TechstackService } from 'src/app/services/techstack.service';

@Component({
  selector: 'app-techstack',
  templateUrl: './techstackcatalog.component.html',
  styleUrls: ['./techstackcatalog.component.css'],
})
export class TechstackComponent {
  techstack: any;
  constructor(private techstackservice: TechstackService) {
    techstackservice.gettechstack().subscribe((data: any) => {
      console.log(data);

      this.techstack = data;
    });
  }
}

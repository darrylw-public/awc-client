import { Component, OnInit } from '@angular/core';
import { AwcApiService } from '../awc-api.service';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {

  attendees: any = [];

  constructor(private svc: AwcApiService) { }

  ngOnInit() {
    this.attendees = this.svc.getAttendees();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input() user: User;
  registered: User;
  activities: any;
  
  constructor() {
    this.activities = [
      { name: "Baseball" },
      { name: "Basketball" },
      { name: "Ultimate Frisbee" }
    ];
  }

  ngOnInit() {
    this.registered = this.user;
  }

  onSubmit(event) {
    console.log(event);
  }
}

import { Component } from '@angular/core';
import { User } from './user.model';
import { NgForm } from '@angular/forms';
import { AwcApiService } from './awc-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  title = 'Acme Widget Company - Employee Activity Squad';
  activities: any;
  registered: boolean = false;

  constructor(private svc: AwcApiService) {
    this.user = new User();

    this.activities = this.svc.getActivities();
  }

  onSubmit(form: NgForm) {
    this.registered = true;

    this.user.firstName = form.value.user.firstName;
    this.user.lastName = form.value.user.lastName;
    this.user.email = form.value.user.email;
    this.user.activity = form.value.user.activity;
    this.user.comments = form.value.user.comments;

    this.svc.registerUser(this.user);
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
}

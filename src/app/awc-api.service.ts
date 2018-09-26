import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AwcApiService {
  host: string = 'http://localhost:5000/api/values';

  constructor(private http: HttpClient) { }

  getActivities() {
    return [
      { name: 'Baseball' },
      { name: 'Basketball' },
      { name: 'Football'},
      { name: 'Ultimate Frisbee' }
    ];
  }

  registerUser(user: User) {
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Accept', 'application/json');
    // this.http.post(this.host, user, { headers });
    alert('REGISTERED!');
    console.log(user);
  }

  getAttendees() {
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Accept', 'application/json');
    // return this.http.get(this.host, { headers }).subscribe(response => [ response ]);
    return [
      {
        firstName: "Dave",
        lastName: "Thomas",
        email: "dt@wendys.com",
        activity: "Baseball",
        comments: "none, but thank you."
      },
      {
        firstName: "Wendy",
        lastName: "Thomas",
        email: "wt@wendys.com",
        activity: "Football",
        comments: ""
      }
    ];
  }
}

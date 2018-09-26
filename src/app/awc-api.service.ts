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
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    this.http.post(this.host, user, { headers });
  }

  getAttendees() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(this.host, { headers }).subscribe(response => [ response ]);
  }
}

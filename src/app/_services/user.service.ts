import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all');
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user');
  }

  getManagerBoard(): Observable<any> {
    return this.http.get(API_URL + 'manager');
  }

  getHrBoard(): Observable<any> {
    return this.http.get(API_URL + 'hr');
  }
}

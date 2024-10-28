import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }
  getUserbyEmail(email:string):Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);


  }
}

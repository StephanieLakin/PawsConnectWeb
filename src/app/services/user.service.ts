import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   // "http://localhost:44373/api/users"
  private apiUrl = environment.apiUrl + '/users'; 

  constructor(private http: HttpClient) { }

  getUsers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<UserModel[]>(this.apiUrl, { headers: headers, observe: 'response' });
  }
  


  getUserById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.apiUrl}/${id}`);
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.apiUrl, user);
  }

  updateUser(id: string, user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/login`, credentials);
  }

  verify(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/verify`, { token });
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/forgot-password`, { email });
  }

  resetPassword(request: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/password-reset`, request);
  }
}

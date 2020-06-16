
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../classes/Users';

import { TokenParams } from '../classes/TokenParams';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  AccessToken: string = "";
  UserName: string = "";
  constructor(private http: HttpClient) { }
  private TokenAPI = 'http://localhost:5000/login';

  login(user:TokenParams): Observable<TokenParams> {
    // var headerForTokenAPI = new HttpHeaders
    let httpheaders = new HttpHeaders()
      .set('content-type', 'application/json');
    let options = {
      headers: httpheaders
    };
     
    return this.http.post<TokenParams>(this.TokenAPI, user, options);
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:5000/user');

  }

  getUsers_v(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:5000/user_v');

  }

  getUser(user_id: string): Observable<Users> {
    return this.http.get<Users>('http://localhost:5000/getuser/' + user_id);
  }

  createUser(user: Users): Observable<Users> {
    
    let httpheaders = new HttpHeaders().append('Authorization','Bearer '+this.AccessToken)
    
      .set('content-type', 'application/json',);
    let options = {
      headers: httpheaders
    };
    return this.http.post<Users>('http://localhost:5000/user', user, options);
  }

  
  updateUser(user: Users): Observable<number> {
    let httpheaders = new HttpHeaders().append('Authorization','Bearer '+this.AccessToken)

      .set('content-type', 'application/json');
    let options = {
      headers: httpheaders
    };
    return this.http.put<number>('http://localhost:5000/update/' + user.id, user, options);
  }

  
  deleteUser(user_id: string): Observable<number> {
    let httpheaders = new HttpHeaders().append('Authorization','Bearer '+ this.AccessToken)

      .set('content-type', 'application/json');
      let options = {
        headers: httpheaders
      };
    return this.http.delete<number>('http://localhost:5000/deleteuser/' + user_id , options);
  }

}

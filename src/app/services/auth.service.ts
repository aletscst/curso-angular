import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, RespLogin } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: RespLogin;

  constructor(private http: HttpClient, private router: Router) {

    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') || '');
    } else {
      this.user = {
        token: '',
        user: { id: 0, name: '', type: '' }
      }
    }
  }

  login(log: Login): Observable<RespLogin> {
    return this.http.post<RespLogin>(`${environment.apiUrl}/login`, log);
  }

  logout() {
    localStorage.removeItem('user');
    this.user = {
      token: '',
      user: { id: 0, name: '', type: '' }
    }
    this.router.navigate(['login']);
  }

  isLogged():boolean{
    return localStorage.getItem('user') ? true : false;
  }
}

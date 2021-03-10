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

  constructor(private http:HttpClient, private router:Router) { }

  login(log:Login):Observable<RespLogin>{
    return this.http.post<RespLogin>(`${environment.apiUrl}/login`, log);
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}

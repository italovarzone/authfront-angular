import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '../extensions/http';
import { Usuario } from '../models/usuario';
import { LoginPostDto } from '../models/postDto/login.post.dto';
@Injectable({
  providedIn: 'root',
})
export class AuthService extends Http {
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    super(httpClient);
  }

  login(dto: LoginPostDto) {
    debugger;
    return this.post<any>(`usuarios/login`, dto);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }
}

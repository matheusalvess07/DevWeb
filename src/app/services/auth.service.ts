import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor() { }

  login(email: string, password: string): Observable<any> {
    // Simula login localmente
    if (email === 'admin@vidaplus.com' && password === 'senha123') {
      const fakeToken = 'token-de-teste-123';
      localStorage.setItem(this.tokenKey, fakeToken);
      return of({ token: fakeToken });
    } else {
      return throwError(() => new Error('Usuário ou senha inválidos'));
    }
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}

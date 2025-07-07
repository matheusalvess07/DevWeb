import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/cadastro-paciente" routerLinkActive="active">Cadastro Paciente</a>
      <a routerLink="/agenda" routerLinkActive="active">Agenda</a>
      <a routerLink="/prontuario" routerLinkActive="active">Prontuário</a>
      <a routerLink="/prescricao" routerLinkActive="active">Prescrição</a>
      <a routerLink="/telemedicina" routerLinkActive="active">Telemedicina</a>
    </nav>
    <main class="content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      display: flex;
      gap: 1rem;
      background-color: #2196f3;
      padding: 1rem;
    }
    .navbar a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
    .navbar a.active,
    .navbar a:hover {
      background-color: #1976d2;
    }
    .content {
      padding: 1rem;
    }
  `]
})
export class App {
  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
}
}

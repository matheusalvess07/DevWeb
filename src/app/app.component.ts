import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">

      <mat-sidenav mode="side" opened class="sidenav">
        <mat-toolbar color="primary">SGHSS Menu</mat-toolbar>
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard" routerLinkActive="active-link" exact>Dashboard</a>
          <a mat-list-item routerLink="/cadastro-paciente" routerLinkActive="active-link">Cadastro Paciente</a>
          <a mat-list-item routerLink="/agenda" routerLinkActive="active-link">Agenda</a>
          <a mat-list-item routerLink="/prontuario" routerLinkActive="active-link">Prontuário</a>
          <a mat-list-item routerLink="/prescricao" routerLinkActive="active-link">Prescrição</a>
          <a mat-list-item routerLink="/telemedicina" routerLinkActive="active-link">Telemedicina</a>
        </mat-nav-list>
        <div class="logout-button">
          <button mat-button color="warn" (click)="logout()">
            <mat-icon>logout</mat-icon> Sair
          </button>
        </div>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <span>SGHSS - Sistema de Gestão Hospitalar</span>
        </mat-toolbar>

        <main class="main-content">
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>

    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container {
      height: 100vh;
    }
    .sidenav {
      width: 220px;
    }
    .active-link {
      font-weight: bold;
      background-color: rgba(33, 150, 243, 0.2);
    }
    .main-content {
      padding: 16px;
      min-height: calc(100vh - 64px); /* Ajusta altura descontando toolbar */
      background: #f5f5f5;
    }
    .logout-button {
      position: absolute;
      bottom: 20px;
      width: 100%;
      text-align: center;
    }
  `]
})
export class App {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/']);
  }
}



import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router'; // RouterModule para routerLink
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; // MatSnackBarModule para o MatSnackBar

// *** IMPORTAÇÕES DOS MÓDULOS DO ANGULAR MATERIAL ***
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true; // Para controlar a visibilidade da senha

  constructor(
    private fb: FormBuilder, // Injeção do FormBuilder
    private authService: AuthService, // Injeção do AuthService
    private router: Router, // Injeção do Router
    private snackBar: MatSnackBar // Injeção do MatSnackBar
  ) { }

  ngOnInit(): void {
    // Inicializa o formulário com os controles e validações
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Campo email: obrigatório e formato de email
      password: ['', Validators.required] // Campo password: obrigatório
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe(
        () => {
          this.snackBar.open('Bem-vindo ao SGHSS!', 'Fechar', { duration: 3000 });
          this.router.navigate(['/dashboard']);
        },
        error => {
          let errorMessage = 'Credenciais inválidas. Por favor, tente novamente.';
          if (error.status === 401) {
            errorMessage = 'Usuário ou senha incorretos.';
          }
          this.snackBar.open(errorMessage, 'Fechar', { duration: 5000 });
        }
      );

    } else {
      this.loginForm.markAllAsTouched();
      this.snackBar.open('Por favor, preencha todos os campos obrigatórios corretamente.', 'Fechar', { duration: 5000 });
    }
  }

}
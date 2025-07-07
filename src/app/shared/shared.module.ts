// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { MatCardModule } from '@angular/material/card'; // <-- ADICIONE
import { MatButtonModule } from '@angular/material/button'; // <-- ADICIONE
import { MatIconModule } from '@angular/material/icon'; // <-- ADICIONE (para os ícones do botão add)

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ // EXPORTE OS COMPONENTES E OS MÓDULOS MATERIAL USADOS
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
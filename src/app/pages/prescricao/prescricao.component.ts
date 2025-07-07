import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-prescricao',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './prescricao.component.html',
  styleUrls: ['./prescricao.component.css']
})
export class PrescricaoComponent {
  prescricoes = [
    { medicamento: 'Paracetamol', dosagem: '500mg - 8/8 horas', instrucoes: 'Tomar após as refeições', data: new Date('2024-10-10'), ativa: true },
    { medicamento: 'Amoxicilina', dosagem: '250mg - 12/12 horas', instrucoes: 'Completar o tratamento', data: new Date('2024-12-10'), ativa: false },
    { medicamento: 'Losartana', dosagem: '50mg - 1 vez ao dia', instrucoes: 'Pressão arterial', data: new Date('2024-11-12'), ativa: true },
  ];

  get prescricoesAtivas() {
    return this.prescricoes.filter(p => p.ativa).length;
  }

  get prescricoesHistoricas() {
    return this.prescricoes.filter(p => !p.ativa).length;
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark');
  }
}

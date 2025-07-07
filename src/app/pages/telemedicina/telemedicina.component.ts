import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-telemedicina',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './telemedicina.component.html',
  styleUrls: ['./telemedicina.component.css']
})
export class TelemedicinaComponent {
  consultas = [
    { paciente: 'João Silva', data: new Date('2025-07-01T10:00:00'), especialidade: 'Clínica Geral', confirmada: true },
    { paciente: 'Maria Oliveira', data: new Date('2025-07-01T14:30:00'), especialidade: 'Cardiologia', confirmada: false },
    { paciente: 'Carlos Santos', data: new Date('2025-07-02T09:00:00'), especialidade: 'Dermatologia', confirmada: true },
  ];

  toggleTheme(): void {
    document.body.classList.toggle('dark');
  }

  iniciarConsulta(consulta: any): void {
    alert(`Iniciando consulta com ${consulta.paciente} (${consulta.especialidade})`);
  }
}

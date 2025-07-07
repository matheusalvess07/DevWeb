import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-prontuario',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.css']
})
export class ProntuarioComponent implements AfterViewInit {
  registros = [
    { tipo: 'Consulta', data: new Date('2024-1-09'), descricao: 'Primeira consulta realizada.' },
    { tipo: 'Exame', data: new Date('2024-07-10'), descricao: 'Exame de sangue solicitado.' },
    { tipo: 'Prescrição', data: new Date('2024-10-10'), descricao: 'Receita médica para antibióticos.' },
    { tipo: 'Consulta', data: new Date('2024-03-12'), descricao: 'Consulta de retorno.' },
    { tipo: 'Exame', data: new Date('2024-04-12'), descricao: 'Raio-X do tórax.' },
    { tipo: 'Prescrição', data: new Date('2024-11-12'), descricao: 'Receita para medicação contínua.' },
  ];

  counters = {
    consultas: 0,
    exames: 0,
    prescricoes: 0
  };

  ngAfterViewInit(): void {
    this.countTipos();
    this.animateCounters();
    this.renderChart();
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark');
  }

  private countTipos(): void {
    this.counters.consultas = this.registros.filter(r => r.tipo === 'Consulta').length;
    this.counters.exames = this.registros.filter(r => r.tipo === 'Exame').length;
    this.counters.prescricoes = this.registros.filter(r => r.tipo === 'Prescrição').length;
  }

  private animateCounters(): void {
    Object.keys(this.counters).forEach(key => {
      const endValue = this.counters[key as keyof typeof this.counters];
      let start = 0;
      const duration = 1000;
      const stepTime = Math.max(Math.floor(duration / (endValue || 1)), 10);

      const interval = setInterval(() => {
        if (start >= endValue) clearInterval(interval);
        else this.counters[key as keyof typeof this.counters] = ++start;
      }, stepTime);
    });
  }

  private renderChart(): void {
    const ctx = (document.getElementById('prontuarioChart') as HTMLCanvasElement).getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Consultas', 'Exames', 'Prescrições'],
        datasets: [{
          data: [
            this.counters.consultas,
            this.counters.exames,
            this.counters.prescricoes
          ],
          backgroundColor: ['#2196f3', '#4caf50', '#ff9800'],
          hoverOffset: 30,
          borderColor: '#fff',
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }
}

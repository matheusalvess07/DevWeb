import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements AfterViewInit {
  counters = {
    disponiveis: 0,
    agendadas: 0
  };

  horarios = [
    { hora: '08:00', ocupado: false },
    { hora: '09:00', ocupado: true },
    { hora: '10:00', ocupado: false },
    { hora: '11:00', ocupado: true },
    { hora: '13:00', ocupado: false },
    { hora: '14:00', ocupado: false },
    { hora: '15:00', ocupado: true },
    { hora: '16:00', ocupado: false }
  ];

  ngAfterViewInit(): void {
    this.countHorarios();
    this.animateCounters();
    this.renderChart();
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark');
  }

  private countHorarios(): void {
    this.counters.disponiveis = this.horarios.filter(h => !h.ocupado).length;
    this.counters.agendadas = this.horarios.filter(h => h.ocupado).length;
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
    const ctx = (document.getElementById('agendaChart') as HTMLCanvasElement).getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Consultas por dia',
          data: [3, 4, 2, 5, 3, 1, 0],
          borderColor: '#4caf50',
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          fill: true,
          tension: 0.3,
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true } },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return Number(value).toFixed(0);
              }
            }
          }
        }
      }
    });
  }
}

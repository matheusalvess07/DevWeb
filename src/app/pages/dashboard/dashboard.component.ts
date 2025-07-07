import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';  // Importa AuthService
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  counters = {
    pacientes: 0,
    consultas: 0,
    prescricoes: 0,
    alertas: 0
  };

  targetCounters = {
    pacientes: 235,
    consultas: 58,
    prescricoes: 123,
    alertas: 5
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngAfterViewInit(): void {
    this.animateCounters();
    this.renderChart();
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark');
    console.log('Classe dark no body?', document.body.classList.contains('dark'));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  private animateCounters(): void {
    Object.keys(this.targetCounters).forEach((key) => {
      const endValue = this.targetCounters[key as keyof typeof this.targetCounters];
      let start = 0;
      const duration = 1000;
      const stepTime = Math.max(Math.floor(duration / endValue), 10);

      const interval = setInterval(() => {
        if (start >= endValue) {
          clearInterval(interval);
        } else {
          start++;
          this.counters[key as keyof typeof this.counters] = start;
        }
      }, stepTime);
    });
  }

  private renderChart(): void {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas.getContext('2d')!, {
      type: 'bar',
      data: {
        labels: ['Consultas', 'Exames', 'Internações', 'Urgências'],
        datasets: [{
          label: 'Atendimentos Semanais',
          data: [50, 30, 10, 5],
          backgroundColor: ['#2196f3', '#4caf50', '#ff9800', '#f44336']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
}

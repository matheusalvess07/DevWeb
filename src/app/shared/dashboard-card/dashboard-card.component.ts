
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// *** IMPORTAÇÕES DOS MÓDULOS DO ANGULAR MATERIAL ***
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DashboardCardComponent {
  @Input() title: string = '';
  @Input() showAddButton: boolean = false;
  @Input() showViewAllButton: boolean = false;
  @Input() hasContent: boolean = true;
  @Input() noContentMessage: string = 'Nenhum item encontrado.';

  @Output() addClick = new EventEmitter<void>();
  @Output() viewAllClick = new EventEmitter<void>();

  constructor() { }

  onAddClick(): void {
    this.addClick.emit();
  }

  onViewAllClick(): void {
    this.viewAllClick.emit();
  }
}
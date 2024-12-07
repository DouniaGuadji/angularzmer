import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professionals',
  standalone: true,
  imports: [CommonModule], // Ajoutez CommonModule ici
  template: `
    <h2>Liste des Professionnels</h2>
    <ul>
      <li *ngFor="let professional of professionals">
        {{ professional.name }} - {{ professional.specialty }}
      </li>
    </ul>
  `,
})
export class ProfessionalsComponent {
  professionals = [
    { name: 'Dr. Dupont', specialty: 'Dentiste' },
    { name: 'Dr. Martin', specialty: 'Cardiologue' },
  ];
}

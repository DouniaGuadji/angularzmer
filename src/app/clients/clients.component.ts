import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule], // Ajoutez CommonModule ici
  template: `
    <h2>Liste des Clients</h2>
    <ul>
      <li *ngFor="let client of clients">
        {{ client.name }} - {{ client.email }}
      </li>
    </ul>
  `,
})
export class ClientsComponent {
  clients = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ];
}

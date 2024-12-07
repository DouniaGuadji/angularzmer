import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Prendre un Rendez-vous</h2>
    <form (ngSubmit)="submitForm()">
      <label>Nom du client:</label>
      <input type="text" [(ngModel)]="appointment.clientName" name="clientName" required />

      <label>Email du client:</label>
      <input type="email" [(ngModel)]="clientEmail" name="clientEmail" required />

      <label>Professionnel:</label>
      <select [(ngModel)]="appointment.professional" name="professional" required>
        <option *ngFor="let professional of professionals" [value]="professional.name">
          {{ professional.name }} ({{ professional.specialty }})
        </option>
      </select>

      <label>Date:</label>
      <input type="date" [(ngModel)]="appointment.date" name="date" required />

      <label>Heure:</label>
      <input type="time" [(ngModel)]="appointment.time" name="time" required />

      <button type="submit">Prendre rendez-vous</button>
    </form>
    <p *ngIf="confirmationMessage">{{ confirmationMessage }}</p>
  `,
  styles: [`form { margin: 20px; }`],
})
export class AppointmentFormComponent implements OnInit {
  appointment = { clientName: '', professional: '', date: '', time: '' };
  clientEmail = '';
  confirmationMessage = '';
  professionals: any[] = [];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.professionals = this.dataService.getProfessionals();
  }

  submitForm() {
    const clientExists = this.dataService.getClients().find(
      client => client.name === this.appointment.clientName
    );

    if (!clientExists) {
      this.dataService.addClient({
        name: this.appointment.clientName,
        email: this.clientEmail,
      });
    }

    this.dataService.addAppointment(this.appointment);
    this.confirmationMessage = `Rendez-vous pris avec ${this.appointment.professional} le ${this.appointment.date} à ${this.appointment.time}.`;
    this.appointment = { clientName: '', professional: '', date: '', time: '' };
    this.clientEmail = '';
  }
}

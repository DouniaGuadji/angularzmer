import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Liste des Rendez-vous</h2>
    <ul>
      <li *ngFor="let appointment of appointments">
        {{ appointment.clientName }} a un rendez-vous avec {{ appointment.professional }}
        le {{ appointment.date }} à {{ appointment.time }}.
      </li>
    </ul>
  `,
  styles: [`ul { margin: 20px; list-style: none; }`],
})
export class AppointmentListComponent implements OnInit {
  appointments: any[] = [];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.appointments = this.dataService.getAppointments();
  }
}

import { Injectable } from '@angular/core';

export interface Client {
  name: string;
  email: string;
}

export interface Professional {
  name: string;
  specialty: string;
}

export interface Appointment {
  clientName: string;
  professional: string;
  date: string;
  time: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private clients: Client[] = [];
  private professionals: Professional[] = [
    { name: 'Dr. Dupont', specialty: 'Dentiste' },
    { name: 'Dr. Martin', specialty: 'Cardiologue' },
  ];
  private appointments: Appointment[] = [];

  getClients(): Client[] {
    return this.clients;
  }

  addClient(client: Client): void {
    this.clients.push(client);
  }

  getProfessionals(): Professional[] {
    return this.professionals;
  }

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  addAppointment(appointment: Appointment): void {
    this.appointments.push(appointment);
  }
}

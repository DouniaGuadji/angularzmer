import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'appointment-form', component: AppointmentFormComponent },
];

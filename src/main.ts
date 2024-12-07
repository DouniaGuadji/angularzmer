import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { ProfessionalsComponent } from './app/professionals/professionals.component';
import { ClientsComponent } from './app/clients/clients.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'professionals', component: ProfessionalsComponent },
      { path: 'clients', component: ClientsComponent },
    ]),
  ],
}).catch(err => console.error(err));

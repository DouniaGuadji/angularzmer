import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <h1>Bienvenue sur l'application Angular</h1>
      <nav>
        <a routerLink="/" routerLinkActive="active">Accueil</a>
        <a routerLink="/professionals" routerLinkActive="active">Professionnels</a>
        <a routerLink="/clients" routerLinkActive="active">Clients</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <p>&copy; 2024 Mon Application Angular</p>
    </footer>
  `,
  styles: [
    `
      header {
        background-color: #007bff;
        color: white;
        padding: 1rem;
        text-align: center;
      }
      nav a {
        margin: 0 15px;
        text-decoration: none;
        color: white;
      }
      nav a.active {
        font-weight: bold;
        text-decoration: underline;
      }
      main {
        padding: 1rem;
      }
      footer {
        margin-top: 2rem;
        text-align: center;
        color: gray;
      }
    `,
  ],
})
export class AppComponent {}

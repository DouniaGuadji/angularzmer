import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Bienvenue sur la page d'accueil</h2>
    <p>Ceci est un test de base pour vérifier que le composant fonctionne.</p>
  `,
})
export class HomeComponent {}

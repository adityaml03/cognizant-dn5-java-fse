import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Actions } from '@ngrx/effects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="p-3 bg-light border-bottom mb-4">
      <a routerLink="/" class="me-3">Home</a>
      <a routerLink="/courses" class="me-3">Courses</a>
      <a routerLink="/enroll" class="me-3">Reactive Enroll</a>
      <a routerLink="/profile" class="me-3">Profile</a>
    </nav>
    
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  private actions$ = inject(Actions);

  constructor() {
    // Prints every dispatched NgRx action straight to F12 Console
    this.actions$.subscribe(action => {
      console.log('⚡ [NgRx Action Dispatched]:', action);
    });
  }
}
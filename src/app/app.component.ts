import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav>
      <ul>
        
        <li><a routerLink="/jobs">Annonces de Jobs</a></li>
        
      </ul>
    </nav>
  `,
  styles: [
    `
      nav {
        background-color: #333;
        padding: 1rem;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
      }

      li {
        display: inline;
      }

      a {
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
        transition: color 0.3s ease;
      }

      a:hover {
        color: rgb(71, 92, 255);
      }

      @media (max-width: 768px) {
        ul {
          flex-direction: column;
       
        }

        li {
          margin: 0.5rem 0;
        }
      }
    `
  ]
})
export class NavbarComponent {}
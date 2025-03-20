import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DivisionsComponent } from './divisions/divisions.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { TeamsComponent } from './teams/teams.component';

@Component({
  selector: 'app-root',
  imports: [DivisionsComponent, LeaguesComponent, TeamsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    console.log("The Baseball App Component is running!")
  }
}

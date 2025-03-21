import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DivisionsComponent } from './divisions/divisions.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { TeamsComponent } from './teams/teams.component';
import { HeaderComponent } from './home/home.component';
import { BaseballApiService } from './baseball-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DivisionsComponent, LeaguesComponent, TeamsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  }


  // baseballApi: BaseballApiService;
  // constructor(baseballApi: BaseballApiService) {
  //   console.log("The Baseball App Component is running!")
  //   this.baseballApi = baseballApi;

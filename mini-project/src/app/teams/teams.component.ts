import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  imports: [],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  client: HttpClient;
  teamsList: any [] = [];

  constructor(client: HttpClient) {
    this.client = client;
    console.log("TeamsComponent has been called!")
   }
   id: number = 6;

  getTeams(){
    console.log("GetTeams method is called!")
    return this.client.get("https://api-baseball.p.rapidapi.com/teams?league=1&season=2020").subscribe((res: any) => {
      this.teamsList = res;

    })
   }

}


// https://api.balldontlie.io//mlb/v1/teams
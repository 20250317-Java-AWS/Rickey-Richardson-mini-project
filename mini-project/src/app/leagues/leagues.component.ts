import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leagues',
  imports: [],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.css'
})
export class LeaguesComponent {
  client: HttpClient;
  leagueList: any [] = [];

  constructor(client: HttpClient) {
    this.client = client;
    console.log("LeaguesComponent has been called!")
   }

  getLeagues(){
    console.log("GetLeagues method is called!")
    return this.client.get("https://api-baseball.p.rapidapi.com/leagues?name=mlb").subscribe((res: any) => {
      this.leagueList = res;

    })
   }

}



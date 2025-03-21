import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseballApiService {

  teamsList: any [] = [];
  playersList: any [] = [];
  client: HttpClient;


  constructor(client: HttpClient) {
    this.client = client;
    console.log("BaseballAPI Service has been called!")
   }
   getPlayers(name: string){
    return this.client.get("https://api.balldontlie.io/mlb/v1/players").subscribe((res: any) => {
      this.playersList = res; 

    })
   }

   getTeams(name: string){
    return this.client.get("https://api.balldontlie.io//mlb/v1/teams").subscribe((res: any) => {
      this.teamsList = res;

    })
   }
}



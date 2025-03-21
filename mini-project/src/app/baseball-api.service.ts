import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseballApiService {
  client: HttpClient;
  constructor(client: HttpClient) {
    this.client = client;
    console.log("BaseballAPI Service has been called!")
   }
   getPlayer(name: string){
    return this.client.get("https://api.balldontlie.io/mlb/v1/players")
   }

   getTeams(name: string){
    return this.client.get("https://api.balldontlie.io//mlb/v1/teams")
   }
}

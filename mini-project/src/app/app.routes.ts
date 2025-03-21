import { Routes } from '@angular/router';
import { DivisionsComponent } from './divisions/divisions.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { TeamsComponent } from './teams/teams.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path: "divisions", component: DivisionsComponent},
    {path: "leagues", component: LeaguesComponent},
    {path: "teams", component: TeamsComponent},
    {path:"", component: HeaderComponent}
];

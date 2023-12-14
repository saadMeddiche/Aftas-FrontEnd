import { Routes } from '@angular/router';
import {CompetitionListComponent} from "./competition/componets/competition-list/competition-list.component";
import {CompetitionAddComponent} from "./competition/componets/competition-add/competition-add.component";

export const routes: Routes = [

  {path: "competitions/add" , component: CompetitionAddComponent},
  {path: "competitions" , component: CompetitionListComponent}

];

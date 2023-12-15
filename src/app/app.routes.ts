import { Routes } from '@angular/router';
import {CompetitionListComponent} from "./competition/componets/competition-list/competition-list.component";
import {CompetitionAddComponent} from "./competition/componets/competition-add/competition-add.component";
import {MemberListComponent} from "./member/components/member-list/member-list.component";
import {MemberAddComponent} from "./member/components/member-add/member-add.component";
import {MemberRegisterComponent} from "./member/components/member-register/member-register.component";
import {
  CompetitionParticipantsListComponent
} from "./competition/componets/competition-participants-list/competition-participants-list.component";

export const routes: Routes = [

  {path: "competitions/add" , component: CompetitionAddComponent},
  {path: "competitions" , component: CompetitionListComponent},
  {path: "competitions/:id/participants" , component: CompetitionParticipantsListComponent},
  {path: "" , component: CompetitionListComponent},
  {path: "members" ,component:MemberListComponent},
  {path: "members/add" ,component:MemberAddComponent},
  {path: "register/:id" , component:MemberRegisterComponent}

];

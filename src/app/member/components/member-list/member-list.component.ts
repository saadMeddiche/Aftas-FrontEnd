import { Component } from '@angular/core';
import {Competition} from "../../../competition/models/competition";
import {CompetitionService} from "../../../competition/services/competition.service";
import {Member} from "../../models/member";
import {MemberService} from "../../services/member.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.scss'
})
export class MemberListComponent {

  public members: Member[] = [];

  public membersIsEmpty: boolean = true;

  constructor(private competitionService: MemberService) {}

  ngOnInit(){

    this.getMembers()
  }

  private getMembers(){
    this.competitionService.getMembers().subscribe(
      (members : Member[]) =>
      {

        this.members = members
      }
      ,
      (HttpErrorResponse) => {

        if(HttpErrorResponse.status == 204){
          this.membersIsEmpty = true
        }
      }
    )
  }
}

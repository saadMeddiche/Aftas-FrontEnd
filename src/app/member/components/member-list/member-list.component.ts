import { Component } from '@angular/core';
import {Member} from "../../models/member";
import {MemberService} from "../../services/member.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.scss'
})
export class MemberListComponent {

  public members: Member[] = [];

  public membersIsEmpty: boolean = true;

  public lookingFor: string = '';

  public totalPages: number = 0;

  public page: number = 0;

  public size: number = 3;

  constructor(private competitionService: MemberService) {}

  ngOnInit(){
    this.getMembers()
  }

  public onSearch(){
    this.getMembers()
  }

  private getMembers(){
    this.competitionService.searchMembers(this.lookingFor , this.page , this.size).subscribe(
      (PaginatedMembersResponse ) =>
      {
        this.members = PaginatedMembersResponse.content
        this.totalPages = PaginatedMembersResponse.totalPages
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

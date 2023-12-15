import { Component } from '@angular/core';
import {Member} from "../../models/member";
import {MemberService} from "../../services/member.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NotificationsService} from "../../../notifications/services/notifications.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.scss'
})
export class MemberListComponent {

  public members: Member[] = [];

  public lookingFor: string = '';

  public totalPages: number = 0;

  public page: number = 0;

  public size: number = 3;

  constructor(private competitionService: MemberService , private notificationService: NotificationsService) {}

  ngOnInit(){
    this.getMembers()
  }

  public onSearch(){
    this.getMembers()
  }

  public onPageChange(n: number) {
    this.page += n;
    this.getMembers();
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
        this.notificationService.show(HttpErrorResponse.error , "warning")
        console.log("Development Purpose Error :"+ HttpErrorResponse.error)
      }
    )
  }
}

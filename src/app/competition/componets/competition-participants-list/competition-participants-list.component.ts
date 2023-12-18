import { Component } from '@angular/core';
import {MemberListComponent} from "../../../member/components/member-list/member-list.component";
import {MemberService} from "../../../member/services/member.service";
import {NotificationsService} from "../../../notifications/services/notifications.service";
import {CompetitionService} from "../../services/competition.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-competition-participants-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './competition-participants-list.component.html',
  styleUrl: './competition-participants-list.component.scss'
})
export class CompetitionParticipantsListComponent extends MemberListComponent{

  public competitionId: number  = 0;

  constructor(protected override memberService: MemberService ,
              protected override notificationService: NotificationsService ,
              protected competitionService: CompetitionService,
              protected activatedRoute: ActivatedRoute) {
    super(memberService , notificationService);
  }

  override ngOnInit() {
     this.competitionId = this.activatedRoute.snapshot.params['id'];
    this.getParticipants(this.competitionId);
  }


  public override onSearch(){
    this.getParticipants(this.competitionId);
  }

  public override onPageChange(n: number) {
    this.page += n;
    this.getParticipants(this.competitionId);
  }


  protected  getParticipants(competitionId : number) {
    this.competitionService.searchParticipantsOfCompetition(competitionId ,this.lookingFor ,this.page , this.size).subscribe(
      (PaginatedMembersResponse ) =>{
        this.members = PaginatedMembersResponse.content
        this.totalPages = PaginatedMembersResponse.totalPages
      },
      (HttpErrorResponse) => {
        this.notificationService.show(HttpErrorResponse.error , "warning")
        console.log("Development Purpose Error :"+ HttpErrorResponse.error)
      }
    )
  }


}

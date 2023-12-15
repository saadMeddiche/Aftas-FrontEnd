import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CompetitionService} from "../../../competition/services/competition.service";
import {NotificationsService} from "../../../notifications/services/notifications.service";
import {CompetitionListComponent} from "../../../competition/componets/competition-list/competition-list.component";
import {MemberService} from "../../services/member.service";
import {RankingService} from "../../../ranking/services/ranking.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RankingAddRequest} from "../../../ranking/models/rankingAddRequest";

@Component({
  selector: 'app-member-register',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './member-register.component.html',
  styleUrl: './member-register.component.scss'
})
export class MemberRegisterComponent extends CompetitionListComponent{

  public rankingAddRequest : RankingAddRequest = {
    memberId: undefined,
    competitionId: undefined
  }

  constructor(public memberService: MemberService,
              public override competitionService: CompetitionService,
              public override notificationService: NotificationsService , private rankingService: RankingService , private router: Router ,private activatedRoute: ActivatedRoute) {
    super(competitionService, notificationService);
  }

  override ngOnInit() {

    super.ngOnInit();

    this.getMemberId();
  }

  public getMemberId(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.rankingAddRequest.memberId = params['id'];
        console.log("Params :"+params['id']);
      }
    )
  }

  public inscription(competitionId : number) {

    this.rankingAddRequest.competitionId = competitionId;

    console.log("rankingAddRequest :" + JSON.stringify(this.rankingAddRequest));

    this.rankingService.addRanking(this.rankingAddRequest).subscribe(
      () => {
        this.notificationService.show(["Member Has Been Inscribed"], "success")
        this.router.navigate(['/members']);
      }
      ,
      (HttpErrorResponse) => this.notificationService.show(HttpErrorResponse.error, "error")

    );

  }


}

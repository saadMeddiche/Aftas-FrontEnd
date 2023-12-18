import { Component } from '@angular/core';
import {NotificationsService} from "../../../notifications/services/notifications.service";
import {CompetitionService} from "../../services/competition.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Rank} from "../../models/rank";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-competition-results',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './competition-results.component.html',
  styleUrl: './competition-results.component.scss'
})
export class CompetitionResultsComponent {

  public competitionId: number = 0;

  public ranks: Rank[] = [];

  constructor(private notificationService: NotificationsService ,
              private competitionService: CompetitionService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.competitionId = this.activatedRoute.snapshot.params['competitionId'];
    this.calculateResults();
    this.getTopThree();
  }


  calculateResults(){
    this.competitionService.calculateResults(this.competitionId).subscribe(
      (result) => {
        console.log("Results : " + result)
      }
    )
  }

  getKey(group: Rank): string {
    return Object.keys(group)[0];
  }

  getTopThree(){
    this.competitionService.getTopThree(this.competitionId).subscribe(
      (data) => {

        this.ranks = Object.entries(data).map(([key, value]) => ({ [key]: value }));
        console.log("Ranks : " + JSON.stringify(this.ranks))
      },
      (HttpErrorResponse)=> {
        this.notificationService.show(HttpErrorResponse.error , "warning")
        console.log(HttpErrorResponse.error)
      }
    )
  }
}
